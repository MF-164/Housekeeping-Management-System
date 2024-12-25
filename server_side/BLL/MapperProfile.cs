using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DTO;
namespace BLL;

public class MapperProfile:Profile
{
    public MapperProfile()
    {
        CreateMap<CleaningLady, CleaningLadyDTO>().ReverseMap();
        CreateMap<Client, ClientDTO>().ReverseMap();
        CreateMap<Comment, CommentDTO>().ReverseMap();
        CreateMap<Day, DayDTO>().ReverseMap();
        CreateMap<Hours, HoursDTO>().ReverseMap();
        CreateMap<Order, OrderDTO>().ReverseMap();
    }
}
