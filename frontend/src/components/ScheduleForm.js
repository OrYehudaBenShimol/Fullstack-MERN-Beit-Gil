import {useState} from 'react'
import { useScheduleContext } from '../hooks/useScheduleContext';
import { useAuthContext } from '../hooks/useAuthContext';

const ScheduleForm = ({className,dayOfTheWeek,classNameHebrew,dayHebrew}) => {
    const {dispatch} = useScheduleContext();
    const {user} = useAuthContext();
   
    const [title,setTitle] = useState('')
    const [start,setStart] = useState('')
    const [end,setEnd] = useState('')
    const [emptyFields,setEmptyFields] = useState([])
    const [error,setError] = useState(null);
    const [success,setSuccess] = useState(null)
    const [successMessage,setSuccessMessage] = useState('התווסף בהצלחה')
        const [successAdding,setSuccessAdding] = useState(false)




    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!user){
            setError('נדרש חיבור למערכת')
            return
        }
        const newSchedule = {title, startTime:start, endTime:end, classRoom:className, day:dayOfTheWeek}
            try {
                const response = await fetch('/api/schedules', {
                    method: 'POST',
                    body: JSON.stringify(newSchedule),
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': `Bearer ${user.token}`

                    }
                })
                const json = await response.json();
                if(!response.ok){
                    setError(json.error);
                    setEmptyFields(json.emptyFields)
                }
                if(response.ok){
                    setTitle('')
                    setStart('')
                    setEnd('')
                    setEmptyFields([])
                    setSuccessAdding(true)
                    setTimeout(()=>{
                        setSuccessAdding(false)
                    },"5000")
                    console.log('new schedule has been added.',json);
                    dispatch({type:'CREATE_SCHEDULE',payload:json})
                }
            } catch (error) {
                console.log(error)
            }   
        }

    return(
        
        <form className='create' onSubmit={handleSubmit}>
                <div className="option-form">
                <label className='add-new-schedule-label'>הוספת פעילות חדשה</label>

                <label>כותרת</label>
                <input className={emptyFields.includes('title') ? 'error' :''} type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />

                <label>:כיתה</label>
                <input  type="text" value={classNameHebrew} disabled />

                <label>:יום בשבוע</label>
                <input type="text" value={dayHebrew} disabled/>

                <label>: שעת התחלה</label>
                <input className={emptyFields.includes('startTime') ? 'error' :''} type="text" value={start}  onChange={(e)=> setStart(e.target.value)} />

                <label>:שעת סיום</label>
                <input className={emptyFields.includes('endTime') ? 'error' :''} type="text" value={end}  onChange={(e)=> setEnd(e.target.value)} />

                <button type="submit" disabled={!title && !start && !end}>הוסף ללו"ז</button>
                </div>
                {successAdding && <div className='successAdding'>{successMessage}</div>}
                {error && <div className="error">{error}</div>}

        </form>
    )
}


export default ScheduleForm;
