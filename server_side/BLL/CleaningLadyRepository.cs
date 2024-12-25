using AutoMapper;
using DAL;
using DTO;
namespace BLL
{
    public class CleaningLadyRepository : ICleaningladyRepository
    {
        private CleaningLadiesService cleaningLadiesService;
        private IMapper mapper;

        public CleaningLadyRepository(CleaningLadiesService cleaningLadiesService,IMapper mapper)
        {
            this.cleaningLadiesService = cleaningLadiesService;
            this.mapper = mapper;
        }
        public List<CleaningLadyDTO> GetAll()
        {
            return mapper.Map< List < CleaningLadyDTO >>(cleaningLadiesService.CleaningLadies.ToList());
        }

        public CleaningLadyDTO FindCleaningLadyById(int id)
        {
            return mapper.Map <CleaningLadyDTO >(cleaningLadiesService.CleaningLadies.Find(id));

        }
        public void UpdateCleaningLady(CleaningLadyDTO cleaningLady)
        {
            CleaningLady cleaningLady1= mapper.Map < CleaningLady>(cleaningLady);
            cleaningLadiesService.CleaningLadies.Update(cleaningLady1);
            //cleaningLadiesService.Entry(cleaningLady).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            cleaningLadiesService.SaveChanges();
        }

        public void AddCleaningLady(CleaningLadyDTO cleaningLady)
        {
            CleaningLady cleaningLady1 = mapper.Map<CleaningLady>(cleaningLady);
            cleaningLadiesService.Add(cleaningLady1);
            cleaningLadiesService.SaveChanges();
        }

        public void DeleteCleaningLady(CleaningLadyDTO cleaningLady)
        {
            CleaningLady cleaningLady1 = mapper.Map<CleaningLady>(cleaningLady);
            cleaningLadiesService.CleaningLadies.Remove(cleaningLady1);
            cleaningLadiesService.SaveChanges();
        }
    }
    }