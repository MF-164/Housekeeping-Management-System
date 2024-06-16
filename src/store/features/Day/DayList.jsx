import { useDispatch, useSelector } from "react-redux";
import List from '@mui/material/List';
import Day from "./Day";
import { updateCurrentOrder } from "../Order/orderSlice";
import { store } from "../../app/store";
import { useEffect } from "react";
import { fetchAllDayFromServer, updateCurrentDay } from "./daySlice";
import { fetchAllHoursFromServer } from "../Hour/hourSlice";


const DayList = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        dispatch(fetchAllDayFromServer())
        dispatch(fetchAllHoursFromServer())
    }

    let currentOrder = store.getState().order.currentOrder
    let days = useSelector(s => s.day.allDays.days)




    let filterDays = days.filter(day => day.cleaningLadyId === currentOrder.cleaningLadyId)

  

    return (
        <>
            <div className="all">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {filterDays?.map(
                        (day, index) => <div key={index} className="card" ><Day day={day} /></div>
                    )}
                </List>
            </div>
        </>
    )

}
export default DayList