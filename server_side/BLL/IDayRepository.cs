using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL
{
    public interface IDayRepository
    {
        List<DayDTO> GetAll();
        DayDTO FindDayById(int id);
        void DeleteDay(DayDTO day);
        void UpdateDay(DayDTO day);
        void AddDay(DayDTO day);
    }
}
