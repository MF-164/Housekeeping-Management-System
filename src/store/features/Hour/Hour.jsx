import { useState } from "react"

const Hour = () =>{
    const [choose,setChoose] = useState(false)
    const [choises,setChoises] = useState([{from:12,to:13}])
    const click = () =>{
        setChoises([...choises,{from:choises[0].from+1,to:choises[0].to+1}])
        setChoose(!choose)
        console.log(choose)
    }
    return(<>
    {choises?.map(item=><div>{item?.from} - {item?.to}</div>)}
    <input type="button" defaultValue="click" onClick={click}/>
    </>)
}
export default Hour