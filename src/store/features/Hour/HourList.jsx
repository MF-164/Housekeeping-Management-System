import { useDispatch, useSelector } from "react-redux";
import Hour from "./Hour"
import List from '@mui/material/List';
import { useState } from "react";
import { store } from "../../app/store";
import { useNavigate, useParams } from "react-router-dom";
import { insertOrderForServer, updateCurrentOrder } from "../Order/orderSlice";
import ButtomBack from "../../../components/ButtonBack/ButtonBack";
import { deleteHourForServer, insertHourForServer } from "./hourSlice";
import { deleteDayForServer } from "../Day/daySlice";

const HourList = () => {
    let { dayId } = useParams()
    dayId = parseInt(dayId)
    let ladyHours = []
    let navigate = useNavigate()

    let hours = store.getState().hour.allHours.hours
    let filterHours = hours.filter(hour => hour.dayId === dayId).sort((a, b) => a.from - b.from)
    filterHours.forEach(hour => {
        let from = hour.from
        let to = hour.to
        while (from < to - 1) {
            ladyHours.push({ from, to: ++from, dayId: dayId })
        }
        ladyHours.push({ from, to, dayId: dayId })
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
            setChoises(choises.filter((__, index) => index != 0))
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

    let dispatch = useDispatch()

    const insertOrder = () => {
        let currentOrder = store.getState().order.currentOrder
        let currentClient = store.getState().client.currentClient
        let currentCleaningLady = store.getState().cleaningLady.currentLady
        let currentDay = store.getState().day.currentDay
        let order = {
            ...currentOrder,
            clientId: currentClient.client.id,
        }
        order.id = 0
        order.from = choises[0].from
        order.to = choises[choises.length - 1].to
        order.payment = (order.to - order.from) * currentCleaningLady.hourlyPrice
        order.date = currentDay.date
        order.dateOrder = new Date()

        dispatch(insertOrderForServer(order))
        order.dateOrder = order.dateOrder.toLocaleDateString()
        dispatch(updateCurrentOrder(order))
    }

    const sliceHourInDatabase = () => {
        let currentOrder = store.getState().order.currentOrder
        let fromSelected = currentOrder.from
        let toSelected = currentOrder.to
        let periodTo
        for (let i = 0; i < filterHours.length; i++) {
            if (filterHours[i].to < fromSelected) {
                filterHours.splice(i, 1, { ...filterHours[i], id: 0 })
                continue
            }
            if (filterHours[i].from < fromSelected) {
                if (filterHours[i].to > toSelected) {
                    periodTo = filterHours[i].to
                    filterHours.splice(i, 1, { ...filterHours[i], to: fromSelected, id: 0 })
                    filterHours.push({ id: 0, from: toSelected, to: periodTo, dayId})
                    break
                } if (filterHours[i].to === toSelected) {
                    filterHours.splice(i, 1, { ...filterHours[i], to: fromSelected, id: 0 })
                    break
                }
            }
            if (filterHours[i].from === fromSelected) {
                if (filterHours[i].to === toSelected) {
                    filterHours.splice(i, 1)
                    break
                } else {
                    filterHours.splice(i, 1, { ...filterHours[i], from: toSelected, id: 0 })
                    break
                }

            }
        }
        filterHours.map(h => { return { ...h, id: 0 } })
        console.log({ filterHours })
        hours.forEach(h => {
            if (h.dayId === dayId){
                console.log("i delete it ;(",{h});
                dispatch(deleteHourForServer(h.id))}
        })
        console.log({ filterHours })
        if (filterHours.length === 0){
            console.log("i deleted the day by id",dayId);
            dispatch(deleteDayForServer(dayId))
        }
        filterHours.forEach(h => {
            console.log("insert  ;) ", {h});
            dispatch(insertHourForServer(h))
        })
    }

    const saveOrder = () => {

        if(choises.length!==0)
        {
            insertOrder()
            sliceHourInDatabase()
            navigate("/Final")
        }
        else{
            alert('you must choose any hour or come back!')
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
                <input type="button" defaultValue="save order" onClick={saveOrder}></input>
                <ButtomBack navigate={"/home/day"}></ButtomBack>
            </div>
        </>
    )
}


export default HourList