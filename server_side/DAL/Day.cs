using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL
{
    public class Day
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime? Date { get; set; }
        public int? CleaningLadyId { get; set; }
        public virtual CleaningLady? CleaningLady { get; set; }
        public virtual List<Hours>? FreeHours { get; set; }

    }
}
