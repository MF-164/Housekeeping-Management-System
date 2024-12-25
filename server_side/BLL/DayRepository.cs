using AutoMapper;
using DAL;
using DTO;

namespace BLL
{
    public class DayRepository : IDayRepository
    {
        private CleaningLadiesService cleaningLadiesService;
        private IMapper mapper;

        public DayRepository(CleaningLadiesService cleaningLadiesService,IMapper mapper)
        {
            this.cleaningLadiesService = cleaningLadiesService;
            this.mapper = mapper;

        }

        public void AddDay(DayDTO day)
        {
            Day day1 = mapper.Map<Day>(day);
            cleaningLadiesService.Add(day1);
            cleaningLadiesService.SaveChanges();
        }

        public void DeleteDay(DayDTO day)
        {
            Day day1 =mapper.Map<Day>(day);
            cleaningLadiesService.Days.Remove(day1);
            cleaningLadiesService.SaveChanges();
        }
        public DayDTO FindDayById(int id)
        {
            return mapper.Map < DayDTO> (cleaningLadiesService.Days.Find(id));
        }

        public List<DayDTO> GetAll()
        {
            return mapper.Map < List < DayDTO > >(cleaningLadiesService.Days.ToList());
        }

        public void UpdateDay(DayDTO day)
        {
            Day day1 = mapper.Map<Day>(day);
            cleaningLadiesService.Days.Update(day1);
            //  cleaningLadiesService.Entry(day).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            cleaningLadiesService.SaveChanges();
        }
    }
}
