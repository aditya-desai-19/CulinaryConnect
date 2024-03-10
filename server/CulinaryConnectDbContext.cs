using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server
{
    public class CulinaryConnectDbContext : DbContext
    {
        public CulinaryConnectDbContext(DbContextOptions<CulinaryConnectDbContext> options)
            : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
    }
}
