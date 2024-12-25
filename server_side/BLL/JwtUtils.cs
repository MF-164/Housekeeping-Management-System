using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DTO;
using Microsoft.IdentityModel.Tokens;

namespace BLL
{
    public class JwtUtils
    {
        public static string CreateJWT(ClientDTO user)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes("======================very very secret user====================");
            var identity = new ClaimsIdentity(new Claim[]
            {
               new Claim(ClaimTypes.Role,user.Role),
               new Claim(ClaimTypes.Name,user.UserName)
            });
            var cerdinatls = new SigningCredentials(
                new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = identity,
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = cerdinatls
            };
            var token = jwtTokenHandler.CreateToken(tokenDescriptor);
            return jwtTokenHandler.WriteToken(token);

        }
    }
}
