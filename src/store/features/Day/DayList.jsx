import { useDispatch, useSelector } from "react-redux";
import List from '@mui/material/List';
import Day from "./Day";
import { useNavigate } from "react-router-dom";
import { updateCurrentOrder } from "../Order/orderSlice";
import { store } from "../../app/store";
import { useEffect } from "react";
import { fetchAllDayFromServer } from "./daySlice";


const DayList = () => {

    let navigate = useNavigate()
    let dispatch = useDispatch()

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        dispatch(fetchAllDayFromServer())
    }

    let currentOrder = store.getState().order.currentOrder
    let days = useSelector(s => s.day.allDays.days)




    let filterDays = days.filter(day => day.cleaningLadyId === currentOrder.cleaningLadyId)

    const handleClick = (dayId) => {
        let currentOrder = store.getState().order.currentOrder
        dispatch(updateCurrentOrder({ ...currentOrder, dayId }))
        navigate('hour')
    }

    return (
        <>
            <div className="all">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {filterDays?.map(
                        (day, index) => <div key={index} className="card" onClick={() => handleClick(day.id)}><Day day={day} /></div>
                    )}
                </List>
            </div>
        </>
    )

}
export default DayList