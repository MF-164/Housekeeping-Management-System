import { useSelect } from 'react'
const Diary = ({ diary }) => {
    let days = useSelect(x => x.days)
    const matchDays = () => {
        return days.filter(day => day.DiaryId === diary.id)
    }
    return (<>
        <p>
            <label>Id:{diary.Id}</label><br />
            <label>CleaningLadyId:{diary?.CleaningLadyId}</label><br />
            <ul>{matchDays().map((day, index) => <li key={index}><Day day={day}></Day></li>)}</ul>

        </p>
    </>)
}

export default Diary