
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
import './CleaningLadyStyle.scss'
import CleaningLady from "./CleaningLady";

import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCleningLadysFromServer } from './cleaningLadySlice';


function GradientCircularProgress() {
    return (
        <React.Fragment>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e01cd5" />
                        <stop offset="100%" stopColor="#1CB5E0" />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
        </React.Fragment>
    );
}


const CleaningLadyList = () => {

    let dispatch = useDispatch()

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        dispatch(fetchAllCleningLadysFromServer())
    }

    let allCleaningLadies = useSelector(s => s.cleaningLady.allCleaningLadies.ladies)
    const status = useSelector(s => s.cleaningLady.status)


    return (<>
        {status === 'success' &&
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {allCleaningLadies.map(
                    cleaningLady => <div key={cleaningLady.Id} className="card"><CleaningLady cleaningLady={cleaningLady}></CleaningLady></div>
                )}
            </List>}
        {status === 'pending' && <div>
            <br />
            <GradientCircularProgress />
        </div>}
    </>);
}
export default CleaningLadyList