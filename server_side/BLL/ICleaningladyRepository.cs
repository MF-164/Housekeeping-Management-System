using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
namespace BLL
{
    public interface ICleaningladyRepository
    {
        List<CleaningLadyDTO> GetAll();
        CleaningLadyDTO FindCleaningLadyById(int id);
        void DeleteCleaningLady(CleaningLadyDTO cleaningLady);
        void UpdateCleaningLady(CleaningLadyDTO cleaningLady);
        void AddCleaningLady(CleaningLadyDTO cleaningLady);
    }
}
