namespace server.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Roles Role { get; set; }

    }

    public enum Roles
    {
        User = 1,
        Admin = 2
    }
}
