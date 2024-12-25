using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class Client
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        //[Index("ProjectNumber_Index", IsUnique = true)]
        public string UserName { get; set; }
        public string Password { get; set; }
        public string? Phone { get; set; }
        public string? City { get; set; }
        public string? Address { get; set; }
        public string? HouseNumber { get; set; }
        public string? Role { get; set; }
        public virtual List<Comment>? Comments { get; set; }
        public virtual List<Order>? Orders { get; set; }
    }
}
