import Client from "./Client";
import List from '@mui/material/List';
import './ClientStyle.scss'
import AddClient from './AddClient'
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllClientFromServer } from "./clientSlice";


const ClientList = () => {
   
    let dispatch = useDispatch()

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        dispatch(fetchAllClientFromServer())
    }

    let allClients = useSelector(s => s.client.allClients.clients)
    const status = useSelector(s => s.client.allClients.status)

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