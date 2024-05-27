
// import React from "react";
// import CleaningLady from "./CleaningLady";
// import './CleaningLadyStyle.scss'


// const CleaningLadyList=()=>{
// //const allClients=useSelector(store.)
// const allCleaningLadies=[{Id:22,FirstName:'Alona',LastName:'Yev',Phone:'0534122757',OriginCountry:'Tailand',City:'Ramat Gan',Address:'yona',HouseNumber:20,Status:'married',HourlyPrice:120},
// {Id:22,FirstName:'Tyshf',LastName:'Fggev',Phone:'050514542',OriginCountry:'Tailand',City:'Ramat Gan',Address:'yona',HouseNumber:20,Status:'married',HourlyPrice:120},
// {Id:22,FirstName:'Ghhgh',LastName:'Lopkj',Phone:'055523269',OriginCountry:'Tailand',City:'Ramat Gan',Address:'yona',HouseNumber:20,Status:'married',HourlyPrice:120},
// {Id:22,FirstName:'Klvkjfvj',LastName:'Xggwevh',Phone:'052246397',OriginCountry:'Tailand',City:'Ramat Gan',Address:'yona',HouseNumber:20,Status:'married',HourlyPrice:120},
// {Id:22,FirstName:'Jone',LastName:'Der',Phone:'052246397',OriginCountry:'Tailand',City:'Ramat Gan',Address:'yona',HouseNumber:20,Status:'married',HourlyPrice:120},
// {Id:22,FirstName:'Klvkjfvj',LastName:'Lpo',Phone:'052246397',OriginCountry:'Tailand',City:'Ramat Gan',Address:'yona',HouseNumber:20,Status:'married',HourlyPrice:120}]

// return(
//     <>
//     <div className="all">
//     {allCleaningLadies.map(
//         cleaningLady=><div key={cleaningLady.Id} className="card"><CleaningLady cleaningLady={cleaningLady}></CleaningLady></div>
//         )}</div>
//     </>
// )
// }
// export default CleaningLadyList
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './CleaningLadyStyle.scss'
import CleaningLady from "./CleaningLady";

const CleaningLadyList = ({ allCleaningLadies }) => {

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {allCleaningLadies.map(
                cleaningLady => <div key={cleaningLady.Id} className="card"><CleaningLady cleaningLady={cleaningLady}></CleaningLady></div>
            )}
        </List>
    );
}
export default CleaningLadyList