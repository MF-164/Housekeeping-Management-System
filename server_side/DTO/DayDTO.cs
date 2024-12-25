using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public enum STATUS { FREE, CATCH }

    public class DayDTO
    {
        public int Id { get; set; }
        public DateTime? Date { get; set; }
        public int? CleaningLadyId { get; set; }
    }
}
