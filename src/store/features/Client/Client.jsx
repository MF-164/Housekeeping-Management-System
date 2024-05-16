//import { useSelector } from 'react-redux'//TODO:להתקין ולבדוק גירסה...
const Client = ({client}) => {

    return (<>
    <p>
        <label>Id:{client.Id}</label><br/>
        <label>Name:{client?.Name}</label><br/>
        <label>Password:{client?.Password}</label><br/>
        <label>Phone:{client?.Phone}</label><br/>
        <label>City:{client?.City}</label><br/>
        <label>Address:{client?.Address}</label><br/>
        <label>house number:{client?.HouseNumber}</label><br/>
    </p>
    </>)
}

export default Client