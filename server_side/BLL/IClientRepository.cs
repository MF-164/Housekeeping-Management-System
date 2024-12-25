using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL
{
    public interface IClientRepository
    {
        List<ClientDTO> GetAll();
        ClientDTO FindClientById(int id);
        void DeleteClient(ClientDTO client);
        void UpdateClient(ClientDTO Client);
        void AddClient(ClientDTO Client);
        ClientDTO FindClientByName(string Name);
    }
}
