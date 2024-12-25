using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DTO;

namespace BLL
{
    public class ClientRepository : IClientRepository
    {
        private CleaningLadiesService cleaningLadiesService;
        private IMapper mapper;


        public ClientRepository(CleaningLadiesService cleaningLadiesService, IMapper mapper)
        {
            this.cleaningLadiesService = cleaningLadiesService;
            this.mapper = mapper;
        }

        public List<ClientDTO> GetAll()
        {
            return mapper.Map < List < ClientDTO > >(cleaningLadiesService.Clients.ToList());
        }

        public ClientDTO FindClientById(int id)
        {
            return mapper.Map< ClientDTO>(cleaningLadiesService.Clients.Find(id));

        }
        public void UpdateClient(ClientDTO client)
        {
            Client client1 = mapper.Map<Client>(client);
            cleaningLadiesService.Clients.Update(client1);
          //  cleaningLadiesService.Entry(client).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            cleaningLadiesService.SaveChanges();
        }

        public void AddClient(ClientDTO client)
        {
            Client client1 = mapper.Map<Client>(client);
            cleaningLadiesService.Add(client1);
            cleaningLadiesService.SaveChanges();
        }

        public void DeleteClient(ClientDTO client)
        {
            Client client1 = mapper.Map<Client>(client);
            cleaningLadiesService.Clients.Remove(client1);
            cleaningLadiesService.SaveChanges();
        }

        public ClientDTO FindClientByName(string Name)
        {
           
            ClientDTO client = mapper.Map<ClientDTO>(cleaningLadiesService.Clients.FirstOrDefault(c => c.UserName.Equals(Name)));
            return client;
           
        }
    }
}
