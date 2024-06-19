import * as React from 'react';
import {displayDate} from '../Day/Day'
import './Order.scss'
const Order = ({ order }) => {
console.log({order});
    return (
    <div className='order'>
        <h3>order Date: { order?.dateOrder}</h3><br />
        <h3>Date: {displayDate(order?.date)}</h3><br />
        <h3>time: {order?.from} - {order?.to}</h3><br />
        <h3>Payment: {order?.payment}</h3><br />
        <h3>ClientId: {order?.clientId}</h3><br />
        <h3>CleaningLadyId: {order?.cleaningLadyId}</h3><br />
        
    </div>)
}

export default Order