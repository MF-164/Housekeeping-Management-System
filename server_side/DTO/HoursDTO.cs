using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class HoursDTO
    {
        public int Id { get; set; }
        public int From { get; set; }
        public int To { get; set; }
        public int? DayId { get; set; }
    }
}
