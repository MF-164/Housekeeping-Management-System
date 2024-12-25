using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public enum Status { SINGLE, MARRIED, DIVORCED, WIDOWED }
    public class CleaningLadyDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? Phone { get; set; }
        public string? OriginCountry { get; set; }
        public string? City { get; set; }
        public string? Address { get; set; }
        public string? HouseNumber { get; set; }
        public Status? Status { get; set; }
        public double HourlyPrice { get; set; }

    }
}
