using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Comment
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; } 
        public string? Content { get; set; }
        public int? Rating { get; set; } //דירוג
        public DateTime? SendTime { get; set; }


        public int? ClientId {get; set; }
        public virtual Client? Client { get; set; }

        public int? CleaningLadyId { get; set; }
        public virtual CleaningLady? CleaningLady { get; set; }


    
    }
}
