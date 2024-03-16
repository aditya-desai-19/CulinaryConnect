using server.Models;

namespace server.ViewModels
{
    public class LoginResponseVM
    {
        public string Email { get; set; }
        public Roles Role { get; set; }
        public string AccessToken { get; set; }
    }
}
