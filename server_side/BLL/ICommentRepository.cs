using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL
{
    public interface ICommentRepository
    {
        List<CommentDTO> GetAll();
        CommentDTO FindCommentById(int id);
        void DeleteComment(CommentDTO comment);
        void UpdateComment(CommentDTO comment);
        void AddComment(CommentDTO comment);
    }
}
