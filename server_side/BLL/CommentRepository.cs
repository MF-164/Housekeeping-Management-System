using AutoMapper;
using DAL;
using DTO;

namespace BLL
{
    public class CommentRepository : ICommentRepository
    {
        private CleaningLadiesService cleaningLadiesService;
        private IMapper mapper;

        public CommentRepository(CleaningLadiesService cleaningLadiesService, IMapper mapper)
        {
            this.cleaningLadiesService = cleaningLadiesService;
            this.mapper = mapper;
        }
        public CommentDTO FindCommentById(int id)
        {
            return mapper.Map < CommentDTO>(cleaningLadiesService.Comments.Find(id));
        }
        public List<CommentDTO> GetAll()
        {
            return mapper.Map < List < CommentDTO >>( cleaningLadiesService.Comments.ToList());
        }
        public void AddComment(CommentDTO comment)
        {
            Comment comment1 =mapper.Map<Comment>(comment);
            cleaningLadiesService.Add(comment1);
            cleaningLadiesService.SaveChanges();
        }

        public void DeleteComment(CommentDTO comment)
        {
            Comment comment1 = mapper.Map<Comment>(comment);
            cleaningLadiesService.Comments.Remove(comment1);
            cleaningLadiesService.SaveChanges();
        }
        public void UpdateComment(CommentDTO comment)
        {
            Comment comment1 = mapper.Map<Comment>(comment);
            cleaningLadiesService.Comments.Update(comment1);
            //  cleaningLadiesService.Entry(comment).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            cleaningLadiesService.SaveChanges();
        }
    }
}
