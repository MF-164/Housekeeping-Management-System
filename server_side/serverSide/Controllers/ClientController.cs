using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BLL;
using DTO;
using DAL;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace serverSide.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class ClientController : ControllerBase
    {
        private IClientRepository clientRepository;
        public ClientController(IClientRepository clientRepository)
        {
            this.clientRepository = clientRepository;
        }

        [HttpPost("signup")]
        public IActionResult Register(ClientDTO client)
        {
            if (client == null)
                return BadRequest();

            ClientDTO client2 = clientRepository.FindClientByName(client.UserName);

            if (client2 != null)
                return Conflict();

            client.Password = BCrypt.Net.BCrypt.HashPassword(client.Password);
            client.Role = "client";

            clientRepository.AddClient(client);

            return Ok(client);
        }

        [HttpPost("login")]
        public IActionResult Login(ClientDTO client)
        { 
            ClientDTO client2 = clientRepository.FindClientByName(client.UserName);

            if(client2 == null)
                return NotFound();
            
            if (!BCrypt.Net.BCrypt.Verify(client.Password, client2.Password))
                return BadRequest();

            string Token = JwtUtils.CreateJWT(client);

            return Ok(new {Token, client2});
        }

        [HttpGet("getAll")]
        public IActionResult GetClients()
        {
            List<ClientDTO> list = clientRepository.GetAll();
            return Ok(list);
        }

        [HttpGet("getById/{id}")]
        public IActionResult GetOne(int id)
        {
            ClientDTO client = clientRepository.FindClientById(id);
            if (client == null)
                return NotFound();
            return Ok(client);

        }

        [HttpGet("getByUserName/{UserName}")]
        public IActionResult GetOneByUserName(string UserName)
        {
            ClientDTO client = clientRepository.FindClientByName(UserName);
            return Ok(client);
        }

        //[Authorize(Roles = "manager")]
        [HttpPost("insert")]
        public IActionResult Add(ClientDTO client)
        {
            if (client == null)
                return BadRequest(ModelState);
            ClientDTO client1 = clientRepository.FindClientById(client.Id);
            if (client1 != null)
                return Conflict();
            clientRepository.AddClient(client);
            return CreatedAtAction(nameof(GetOne), new { id = client.Id }, client);
        }

        [HttpPut("update/{id}")]
        public IActionResult Update(int id, ClientDTO client)
        {
            if (client == null)
                return BadRequest(ModelState);
            if (id != client.Id)
                return Conflict();
            clientRepository.UpdateClient(client);
            return NoContent();
        }

        //[Authorize(Roles = "manager")]
        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            ClientDTO client = clientRepository.FindClientById(id);
            if (client == null)
                return NotFound();
            clientRepository.DeleteClient(client);
            return NoContent();
        }
    }
}
