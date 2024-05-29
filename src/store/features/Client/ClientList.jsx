import Client from "./Client";
import List from '@mui/material/List';
import './ClientStyle.scss'
import AddClient from './AddClient'
import React from 'react';


const ClientList = ({ allClients }) => {
   


    return (
        <>
            <div className="all">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {allClients?.map(
                        client => <div key={client.Id} className="card"><Client client={client}></Client></div>
                    )}
                </List>
            </div>
          <AddClient/>

        </>
    )
}
export default ClientList