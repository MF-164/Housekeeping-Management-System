import { useDispatch, useSelector } from "react-redux";
import List from '@mui/material/List';
import Day from "./Day";
import { useNavigate } from "react-router-dom";
import { updateCurrentOrder } from "../Order/orderSlice";

let filterDays = [
    {date:new Date('2/3/2020')},
    {date:new Date('3/3/2020')},
    {date:new Date('4/3/2020')},
    {date:new Date('5/3/2020')},
]
const DayList = () => {

    let currentOrder = useSelector(s => s.order.currentOrder)
    let days = useSelector(s => s.day.allDays.days)

    let navigate = useNavigate()
    let dispatch = useDispatch()

    // let filterDays = days.filter(day => day.cleaningLadyId === currentOrder.cleaningLadyId)

    const handleClick = (dayId) => {
        let nn = { ...currentOrder, dayId }
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