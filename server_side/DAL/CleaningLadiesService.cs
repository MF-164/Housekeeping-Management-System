using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class CleaningLadiesService : DbContext
    {
        public CleaningLadiesService(DbContextOptions<CleaningLadiesService> options)
            : base(options) { }


        public DbSet<CleaningLady> CleaningLadies { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Day> Days { get; set; }
        public DbSet<Hours> Hours { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}
