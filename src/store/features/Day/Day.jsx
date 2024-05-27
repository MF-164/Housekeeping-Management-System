const Day = ({day}) => {

    return (<>
    <p>
        <label>Id:{day.Id}</label><br/>
        <label>Date:{day?.Date}</label><br/>
        <label>Status:{day?.Status}</label><br/>
    </p>
    </>)
}

export default Day