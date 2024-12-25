using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL
{
    public interface IOrderRepository
    {
        List<OrderDTO> GetAll();
        OrderDTO FindOrderById(int id);
        void DeleteOrder(OrderDTO order);
        void UpdateOrder(OrderDTO order);
        void AddOrder(OrderDTO order);
    }
}
