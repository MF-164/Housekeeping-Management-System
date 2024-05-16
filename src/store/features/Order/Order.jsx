const Order = ({order}) => {

    return (<>
    <p>
        <label>Id:{order.Id}</label><br/>
        <label>Date:{order?.Date}</label><br/>
       {/* hours object */}
        <label>Payment:{order?.Payment}</label><br/>
        <label>ClientId:{order?.ClientId}</label><br/>
       
    </p>
    </>)
}

export default Order