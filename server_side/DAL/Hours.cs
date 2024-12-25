using System.ComponentModel.DataAnnotations.Schema;

namespace DAL
{
    public class Hours
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int From { get; set; }
        public int To { get; set; }
        public int? DayId { get; set; }
        public virtual Day? Day { get; set; }

    }
}