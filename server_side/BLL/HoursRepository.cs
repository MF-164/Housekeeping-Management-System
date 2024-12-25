using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using AutoMapper;

namespace BLL
{
    public class HoursRepository : IHoursRepository
    {
        private CleaningLadiesService cleaningLadiesService;
        private IMapper mapper;

        public HoursRepository(CleaningLadiesService cleaningLadiesService, IMapper mapper)
        {
            this.cleaningLadiesService = cleaningLadiesService;
            this.mapper = mapper;

        }

        public void AddHours(HoursDTO hours)
        {

            Hours hours1 = mapper.Map<Hours>(hours);
            cleaningLadiesService.Add(hours1);
            cleaningLadiesService.SaveChanges();
        }

        public void DeleteHours(HoursDTO hours)
        {
            Hours hours1 = mapper.Map<Hours>(hours);
            cleaningLadiesService.Hours.Remove(hours1);
            cleaningLadiesService.SaveChanges();
        }

        public HoursDTO FindHoursById(int id)
        {
            return mapper.Map< HoursDTO > (cleaningLadiesService.Hours.Find(id));
        }

        public List<HoursDTO> GetAll()
        {
            return mapper.Map < List < HoursDTO >>( cleaningLadiesService.Hours.ToList());
        }
        public void UpdateHours(HoursDTO hours)
        {
            Hours hours1 = mapper.Map<Hours>(hours);
            cleaningLadiesService.Hours.Update(hours1);
            //  cleaningLadiesService.Entry(diary).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            cleaningLadiesService.SaveChanges();
        }
    }
}
