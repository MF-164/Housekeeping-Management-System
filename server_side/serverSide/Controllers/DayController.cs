
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
    public class DayController : ControllerBase
    {
        private IDayRepository dayRepository;
        public DayController(IDayRepository dayRepository)
        {
            this.dayRepository = dayRepository;
        }

        [HttpGet("getAll")]
        public IActionResult GetDays()
        {
            List<DayDTO> list = dayRepository.GetAll();
            return Ok(list);
        }


        [HttpGet("getById/{id}")]
        public IActionResult GetOne(int id)
        {
            DayDTO day = dayRepository.FindDayById(id);
            if (day == null)
                return NotFound();
            return Ok(day);

        }

        [HttpPost("insert")]
        public IActionResult Add(DayDTO day)
        {
            if (day == null)
                return BadRequest(ModelState);
            DayDTO day1 = dayRepository.FindDayById(day.Id);
            if (day1 != null)
                return Conflict();
            dayRepository.AddDay(day);
            return CreatedAtAction(nameof(GetOne), new { id = day.Id }, day);
        }

        [HttpPut("update/{id}")]
        public IActionResult Update(int id, DayDTO day)
        {
            if (day == null)
                return BadRequest(ModelState);
            if (id != day.Id)
                return Conflict();
            dayRepository.UpdateDay(day);
            return NoContent();
        }

        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            DayDTO day = dayRepository.FindDayById(id);
            if (day == null)
                return NotFound();
            dayRepository.DeleteDay(day);
            return NoContent();
        }

    }
}
