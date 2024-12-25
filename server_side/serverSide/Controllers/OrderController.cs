using Microsoft.AspNetCore.Mvc;
using BLL;
using DTO;
using Microsoft.AspNetCore.Cors;
namespace serverSide.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class OrderController : ControllerBase
    {
        private IOrderRepository orderRepository;
        public OrderController(IOrderRepository orderRepository)
        {
            this.orderRepository = orderRepository;
        }

        [HttpGet("getAll")]
        public IActionResult GetOrders()
        {
            List<OrderDTO> list = orderRepository.GetAll();
            return Ok(list);
        }


        [HttpGet("getById/{id}")]
        public IActionResult GetOne(int id)
        {
            OrderDTO order = orderRepository.FindOrderById(id);
            if (order == null)
                return NotFound();
            return Ok(order);

        }

        [HttpPost("insert")]
        public IActionResult Add(OrderDTO order)
        {
            if (order == null)
                return BadRequest(ModelState);
            OrderDTO order1 = orderRepository.FindOrderById(order.Id);
            if (order1 != null)
                return Conflict();
            orderRepository.AddOrder(order);
            return CreatedAtAction(nameof(GetOne), new { id = order.Id }, order);
        }

        [HttpPut("update/{id}")]
        public IActionResult Update(int id, OrderDTO order)
        {
            if (order == null)
                return BadRequest(ModelState);
            if (id != order.Id)
                return Conflict();
            orderRepository.UpdateOrder(order);
            return NoContent();
        }

        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            OrderDTO order = orderRepository.FindOrderById(id);
            if (order == null)
                return NotFound();
            orderRepository.DeleteOrder(order);
            return NoContent();
        }
    }
}
