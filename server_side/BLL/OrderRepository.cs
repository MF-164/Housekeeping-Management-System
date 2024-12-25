using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
namespace BLL
{
    public class OrderRepository : IOrderRepository
    {
        private CleaningLadiesService cleaningLadiesService;
        private IMapper mapper;

        public OrderRepository(CleaningLadiesService cleaningLadiesService, IMapper mapper)
        {
            this.cleaningLadiesService = cleaningLadiesService; 
            this.mapper = mapper;

        }

        public List<OrderDTO> GetAll()
        {
            return mapper.Map< List < OrderDTO >> (cleaningLadiesService.Orders.ToList());
        }

        public void  AddOrder(OrderDTO order)
        {
            Order order1 =mapper.Map<Order>(order);
            cleaningLadiesService.Add(order1);
            cleaningLadiesService.SaveChanges();
        }

        public void DeleteOrder(OrderDTO order)
        {
            Order order1 = mapper.Map<Order>(order);
            cleaningLadiesService.Orders.Remove(order1);
            cleaningLadiesService.SaveChanges();
        }

        public OrderDTO FindOrderById(int id)
        {
            return mapper.Map < OrderDTO > (cleaningLadiesService.Orders.Find(id));
        }

        public void UpdateOrder(OrderDTO order)
        {
            Order order1 = mapper.Map<Order>(order);
            cleaningLadiesService.Orders.Update(order1);
            //  cleaningLadiesService.Entry(diary).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            cleaningLadiesService.SaveChanges();
        }
    }
}
