import React from "react";
import Client from "./Client";

const ClientList=()=>{
//const allClients=useSelector(store.)
const allClienst=[{Id:0,Name:'Brayndy',Password:1234,Phone:'0534122757',City:'Elad',Address:'Ben zakay',HouseNumber:9},
{Id:1,Name:'Maly',Password:36633,Phone:'052763998',City:'Bnei Brak',Address:'Amiel',HouseNumber:12},
{Id:2,Name:'Shoshi',Password:5333,Phone:'0545454542',City:'Raanana',Address:'Hasade',HouseNumber:52},
{Id:3,Name:'Jon',Password:825852,Phone:'0522156664',City:'Ramat Gan',Address:'Jabotinsky',HouseNumber:69}]

return(
    <>
    {allClienst.map(client=><Client client={client}></Client>)}
    </>
)
}
export default ClientList