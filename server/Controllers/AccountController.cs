using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Abstractions;
using Microsoft.IdentityModel.Tokens;
using server.Migrations;
using server.Models;
using server.Services;
using server.ViewModels;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private IConfiguration _config;
        private readonly CulinaryConnectDbContext _context;
        public AccountController(IConfiguration config, CulinaryConnectDbContext context)
        {
            _config = config;
            _context = context;
        }

        [HttpPost]
        [Route("SignUp")]
        public async Task<ActionResult> SignUp(AccountVM model)
        {
            if(!ModelState.IsValid)
            {
                throw new Exception("Model is invalid");
            }

            try
            {
                var newUser = new User
                {
                    Id = Guid.NewGuid(),
                    Email = model.Email,
                    Password = PasswordHasher.HashPassword(model.Password),
                    Role = model.Role
                };
                _context.Users.Add(newUser);
                await _context.SaveChangesAsync();
                return Ok("User created successfully");
            } catch(Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult> Login(AccountVM model)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var password = PasswordHasher.HashPassword(model.Password);

                var query = from u in _context.Users
                            where u.Email == model.Email && u.Password == password
                            select u;

                var user = await query.FirstOrDefaultAsync();

                if (user != null)
                {
                    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
                    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                    var Sectoken = new JwtSecurityToken(_config["Jwt:Issuer"],
                        _config["Jwt:Issuer"],
                        null,
                        expires: DateTime.Now.AddMinutes(120),
                        signingCredentials: credentials);

                    var token = new JwtSecurityTokenHandler().WriteToken(Sectoken);

                    if(token != null)
                    {
                        var userDetails = new LoginResponseVM
                        {
                            Email = user.Email,
                            Role = user.Role,
                            AccessToken = token
                        };
                        return Ok(userDetails);
                    } else
                    {
                        throw new Exception("Token not generated");
                    }

                } else
                {
                    return NotFound();
                }
            } catch(Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

    }
}
