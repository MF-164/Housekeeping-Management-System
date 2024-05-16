const CleaningLady = ({cleaningLady}) => {

    return (<>
    <p>
        <label>Id:{cleaningLady.Id}</label><br/>
        <label>FirstName:{cleaningLady?.FirstName}</label><br/>
        <label>LastName:{cleaningLady?.LastName}</label><br/>
        <label>Phone:{cleaningLady?.Phone}</label><br/>
        <label>OriginCountry:{cleaningLady?.OriginCountry}</label><br/>
        <label>City:{cleaningLady.City}</label><br/>
        <label>Address:{cleaningLady?.Address}</label><br/>
        <label>HouseNumber:{cleaningLady?.HouseNumber}</label><br/>
        <label>Status:{cleaningLady?.Status}</label><br/>
        <label>HourlyPrice:{cleaningLady?.HourlyPrice}</label><br/>
    </p>
    </>)
}

export default CleaningLady