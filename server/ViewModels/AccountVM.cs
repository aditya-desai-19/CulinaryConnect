using server.Models;

namespace server.ViewModels
{
    public class AccountVM
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public Roles Role { get; set; } 
    }
}
