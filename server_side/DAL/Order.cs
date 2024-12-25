using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL
{
    public class Order
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime? Date { get; set; }
        public DateTime? DateOrder { get; set; }
        public double? Payment { get; set; }
        public int? From { get; set; }
        public int? To { get; set; }
        public int? ClientId { get; set; }
        public virtual Client? Client { get; set; }
        public int? CleaningLadyId { get; set; }
        public virtual CleaningLady? CleaningLady { get; set; }

    }
}
