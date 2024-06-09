import { useDispatch, useSelector } from "react-redux";
import Hour from "./Hour"
import List from '@mui/material/List';
import { useEffect, useState } from "react";
import { fetchAllHoursFromServer } from "./hourSlice";
import { store } from "../../app/store";


const HourList = ({ dayId }) => {
    let dispatch = useDispatch()
    const [ladyHours, setLadyHours] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        dispatch(fetchAllHoursFromServer())
            .then(() => {
                let hours = store.getState().hour.allHours.hours
                let currentOrder = store.getState().order.currentOrder
                let filterHours = hours.filter(hour => hour.dayId === currentOrder.dayId)
                filterHours.forEach(hour => {
                    let from = hour.from
                    let to = hour.to
                    let copy = [...ladyHours]
                    while (from < to - 1) {
                        copy.push({ from, to: ++from, dayId: currentOrder.dayId })
                    }
                    copy.push({ from, to, dayId:currentOrder.dayId })
                    console.log({ copy });
                    setLadyHours(copy)
                })
                console.log({ ladyHours });
            })
    }

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
            console.log('insert of end', { choises });
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
            console.log('insert of start', { choises });
        }


        else if (choises[0].to === hour.to && choises[0].from === hour.from) {
            let copy = doneChoises.map((choose, index) => {
                if (index === key)
                    return false
                else
                    return choose
            })
            setDoneChoises(copy)
            setChoises(choises.filter((__, index) => index != 0))
            console.log('slice of start', { choises });
        }



        else if (choises[choises.length - 1].to === hour.to && choises[choises.length - 1].from === hour.from) {
            let copy = doneChoises.map((choose, index) => {
                if (index === key)
                    return false
                else
                    return choose
            })
            setDoneChoises(copy)
            setChoises(choises.filter((__, index) => index != choises.length - 1))
            console.log('slice of end', { choises });
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
                        (hour, index) => <div key={index} className="card" onClick={() => handleClick(hour, index)}><Hour hour={hour}
                            errorChoose={{ errorChoises, index, setErrorChoises }}
                            choose={doneChoises[index]} /></div>
                    )}
                </List>
            </div>
        </>
    )

}
export default HourList