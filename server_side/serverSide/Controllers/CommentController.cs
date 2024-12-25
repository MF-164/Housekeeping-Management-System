using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BLL;
using DTO;
using Microsoft.AspNetCore.Cors;
namespace serverSide.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class CommentController : ControllerBase
    {
        private ICommentRepository commentRepository;
        public CommentController(ICommentRepository commentRepository)
        {
            this.commentRepository = commentRepository;
        }
        [HttpGet("getAll")]
        public IActionResult GetComments()
        {
            List<CommentDTO> list = commentRepository.GetAll();
            return Ok(list);
        }

        [HttpGet("getById/{id}")]
        public IActionResult GetOne(int id)
        {
            CommentDTO comment = commentRepository.FindCommentById(id);
            if (comment == null)
                return NotFound();
            return Ok(comment);

        }

        [HttpPost("insert")]
        public IActionResult Add(CommentDTO comment)
        {
            if (comment == null)
                return BadRequest(ModelState);
            CommentDTO comment1 = commentRepository.FindCommentById(comment.Id);
            if (comment1 != null)
                return Conflict();
            commentRepository.AddComment(comment);
            return CreatedAtAction(nameof(GetOne), new { id = comment.Id }, comment);
        }

        [HttpPut("update/{id}")]
        public IActionResult Update(int id, CommentDTO comment)
        {
            if (comment == null)
                return BadRequest(ModelState);
            if (id != comment.Id)
                return Conflict();
            commentRepository.UpdateComment(comment);
            return NoContent();
        }

        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            CommentDTO comment = commentRepository.FindCommentById(id);
            if (comment == null)
                return NotFound();
            commentRepository.DeleteComment(comment);
            return NoContent();
        }
    }
}
