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
    public class CleaningLadyController : ControllerBase
    {
        private ICleaningladyRepository cleaningLadyRepository;

        public CleaningLadyController(ICleaningladyRepository cleaningLadyRepository)
        {
            this.cleaningLadyRepository = cleaningLadyRepository;
        }

        [HttpGet("getAll")]
        public IActionResult GetCleaningLadies()
        {
            List<CleaningLadyDTO> list= cleaningLadyRepository.GetAll();
            return Ok(list);
        }


        [HttpGet("getById/{id}")]
        public IActionResult GetOne(int id)
        {
            CleaningLadyDTO cleanigLady = cleaningLadyRepository.FindCleaningLadyById(id);
            if(cleanigLady==null)
                return NotFound();  
           return Ok(cleanigLady);  

        }

        [HttpPost("insert")]
        public IActionResult Add(CleaningLadyDTO cleaningLady)
        {
            if (cleaningLady == null)
                return BadRequest(ModelState);
            CleaningLadyDTO cleaningLady1 =cleaningLadyRepository.FindCleaningLadyById(cleaningLady.Id);
            if (cleaningLady1 != null)
                return Conflict();
            cleaningLadyRepository.AddCleaningLady(cleaningLady);
            return CreatedAtAction(nameof(GetOne),new {id=cleaningLady.Id},cleaningLady);
        }

       [HttpPut("update/{id}")]
        public IActionResult Update(int id, CleaningLadyDTO cleaningLady)
        {
            if (cleaningLady == null)
                return BadRequest(ModelState);
            if (id != cleaningLady.Id)
                return Conflict();
            cleaningLadyRepository.UpdateCleaningLady(cleaningLady);
            return NoContent(); 
        }

        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            CleaningLadyDTO cleaningLady =cleaningLadyRepository.FindCleaningLadyById(id);
            if (cleaningLady == null)
                return NotFound();
            cleaningLadyRepository.DeleteCleaningLady(cleaningLady);
            return NoContent();
        }
    }
}
