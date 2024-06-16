import { useSelector } from "react-redux";
import Hour from "./Hour"
import List from '@mui/material/List';
import { useState } from "react";

let hours = [
    {from:10,to:14,dayId:1}
]
const HourList = ({ dayId }) => {

    // let hours = useSelector(s=>s.hour.allHours.hours)

    let filterHours = hours.filter(hour => hour.dayId === dayId)
    let ladyHours = []
    filterHours.forEach(hour => {
        let from = hour.from
        let to = hour.to
        while (from < to - 1) {
            ladyHours.push({ from, to: ++from, dayId })
        }
        ladyHours.push({ from, to, dayId })
    })

    const [doneChoises, setDoneChoises] = useState(new Array(ladyHours.length).fill(false))
    const [errorChoises, setErrorChoises] = useState(new Array(ladyHours.length).fill(false))
    const [choises, setChoises] = useState([])


    

    const handleClick = (hour, key) => {
        if (choises.length === 0 || choises[choises.length - 1].to === hour.from) {
            setChoises([...choises, hour])
            let copy = doneChoises.map((choose, index) => {
                if (index === key)
                    return true
                else
                    return choose
            })
            setDoneChoises(copy)
        } 
        
        
        else if (choises[0].from === hour.to) {
            setChoises([hour, ...choises])
            let copy = doneChoises.map((choose, index) => {
                if (index === key)
                    return true
                else
                    return choose
            })
            setDoneChoises(copy)
        }
        
        
        else if (choises[0].to === hour.to && choises[0].from === hour.from) {
            let copy = doneChoises.map((choose, index) => {
                if (index === key)
                    return false
                else
                    return choose
            })
            setDoneChoises(copy)
            setChoises(choises.filter((__,index) => index != 0))
        } 
        
        
        
        else if (choises[choises.length - 1].to === hour.to && choises[choises.length - 1].from === hour.from) {
            let copy = doneChoises.map((choose, index) => {
                if (index === key)
                    return false
                else
                    return choose
            })
            setDoneChoises(copy)
            setChoises(choises.filter((__,index) => index != choises.length - 1))
        }



        else {
            let copy = errorChoises.map((choose, index) => {
                if (index === key) {
                    return true
                }
                else
                    return choose
            })
            setErrorChoises(copy)
        }
    }

    return (
        <>
            <div className="all">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {ladyHours?.map(
                        (hour, index) => <div key={index} className="card" onClick={() => handleClick(hour, index)}>
                            <Hour hour={hour}
                            errorChoose={{ errorChoises, index, setErrorChoises }}
                            choose={doneChoises[index]} /></div>
                    )}
                </List>
            </div>
        </>
    )

}
export default HourList