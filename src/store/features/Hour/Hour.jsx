const Hour = ({hour}) => {

    return (<>
    <p>
        <label>Id:{hour.Id}</label><br/>
        <label>From:{hour?.From}</label><br/>
        <label>To:{hour?.To}</label><br/>
        <label>DayId:{hour?.DayId}</label><br/>
        
    </p>
    </>)
}

export default Hour