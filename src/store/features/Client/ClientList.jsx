import Client from "./Client";
import List from '@mui/material/List';
import './ClientStyle.scss'
import AddClient from './AddClient'
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllClientFromServer } from "./clientSlice";

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';


const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

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

            {/* <div className="all">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {allClients?.map(
                        client => <div key={client.Id} className="card"><Client client={client}></Client></div>
                    )}
                </List>
            </div>
          <AddClient/> */}
            <React.Fragment>
                <CssBaseline />
                <Paper square sx={{ pb: '50px' }}>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {allClients?.map(
                            client => <div key={client.Id} className="card"><Client client={client}></Client></div>
                        )}
                    </List>
                </Paper>
                <AppBar position="fixed" sx={{ top: 'auto', bottom: 0}}>
                    <Toolbar>
                        <StyledFab >
                            <AddClient/>
                        </StyledFab>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </>
    )
}
export default ClientList