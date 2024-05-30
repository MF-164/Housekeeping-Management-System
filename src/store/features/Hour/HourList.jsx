import { useSelector } from "react-redux";
import Hour from "./Hour"
import List from '@mui/material/List';
let hours =
[
  { from: 12, to: 15, dayId: 1 },
  { from: 12, to: 15, dayId: 2 },
  { from: 17, to: 20, dayId: 1 },
  { from: 21, to: 22, dayId: 1 },
  { from: 12, to: 15, dayId: 3 },
]
// let hours = useSelector(s=>s.hour.allHours.hours)
const HourList = ({ dayId }) => {
    let filterHours = hours.filter(hour=>hour.dayId === dayId)
    let ladyHours = []
    filterHours.forEach(hour=>{
        let from = hour.from
        let to = hour.to
        while(from < to - 1){
           ladyHours.push({ from, to:++from, dayId })
        }
        ladyHours.push({from,to,dayId})
    })
    return (
        <>
        <div className="all">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {ladyHours?.map(
                    (hour,index) => <div key={index} className="card"><Hour hour={hour}/></div>
                )}
            </List>
        </div>
    </>
    )

}
export default HourList