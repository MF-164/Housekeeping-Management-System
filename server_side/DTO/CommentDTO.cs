using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class CommentDTO
    {
        public int Id { get; set; }
        public string? Content { get; set; }
        public int? Rating { get; set; } 
        public DateTime? SendTime { get; set; }
        public int ClientId { get; set; }
        public int CleaningLadyId { get; set; }
    }
}
