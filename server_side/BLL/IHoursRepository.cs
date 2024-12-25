using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL
{
    public interface IHoursRepository
    {
        List<HoursDTO> GetAll();
        HoursDTO FindHoursById(int id);
        void DeleteHours(HoursDTO hours);
        void UpdateHours(HoursDTO hours);
        void AddHours(HoursDTO hours);
    }
}
