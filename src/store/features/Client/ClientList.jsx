import React from "react";
import Client from "./Client";
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import './ClientStyle.scss'
const ClientList = ({ allClients }) => {
    //const allClients=useSelector(store.)


    return (
        <>
        <div className="all">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {allClients.map(
                    client => <div key={client.Id} className="card"><Client client={client}></Client></div>
                )}
            </List>
            </div>
            <div className="inputAdd" >
                <Avatar sx={{ bgcolor: blue[500], fontFamily: 'Century', height:'80px',width:'80px' , boxShadow:'gray 3px 4px 8px 1px' }}title="add client" aria-label="recipe">
                    <AddIcon sx={{ fontSize:'xxx-large'}}/>
                </Avatar>
            </div>
          
        </>
    )
}
export default ClientList