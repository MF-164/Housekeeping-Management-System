using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ClientDTO
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string UserName { get; set; }
        public string? Phone { get; set; }
        public string Password { get; set; }
        public string? City { get; set; }
        public string? Address { get; set; }
        public string? HouseNumber { get; set; }
        public string Role { get; set; }
    }
}
