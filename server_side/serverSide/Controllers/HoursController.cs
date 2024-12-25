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
    public class HoursController : ControllerBase
    {
        private IHoursRepository hoursRepository;
        public HoursController(IHoursRepository hoursRepository)
        {
            this.hoursRepository = hoursRepository;
        }
        [HttpGet("getAll")]
        public IActionResult GetHours()
        {
            List<HoursDTO> list = hoursRepository.GetAll();
            return Ok(list);
        }

        [HttpGet("getById/{id}")]
        public IActionResult GetOne(int id)
        {
            HoursDTO hour = hoursRepository.FindHoursById(id);
            if (hour == null)
                return NotFound();
            return Ok(hour);

        }

        [HttpPost("insert")]
        public IActionResult Add(HoursDTO hour)
        {
            if (hour == null)
                return BadRequest(ModelState);
            HoursDTO hour1 = hoursRepository.FindHoursById(hour.Id);
            if (hour1 != null)
                return Conflict();
            hoursRepository.AddHours(hour);
            return CreatedAtAction(nameof(GetOne), new { id = hour.Id }, hour);
        }

        [HttpPut("update/{id}")]
        public IActionResult Update(int id, HoursDTO hour)
        {
            if (hour == null)
                return BadRequest(ModelState);
            if (id != hour.Id)
                return Conflict();
            hoursRepository.UpdateHours(hour);
            return NoContent();
        }

        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            HoursDTO hour = hoursRepository.FindHoursById(id);
            if (hour == null)
                return NotFound();
            hoursRepository.DeleteHours(hour);
            return NoContent();
        }
    }
}
