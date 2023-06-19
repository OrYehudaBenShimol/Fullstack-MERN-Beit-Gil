import {useState} from 'react'
import { useScheduleContext } from '../hooks/useScheduleContext';
import { useAuthContext } from '../hooks/useAuthContext';


//This component is used to add a new schedule to the database for a specific class and day.
const ScheduleForm = ({className,dayOfTheWeek,classNameHebrew,dayHebrew}) => {
    const {dispatch} = useScheduleContext();
    const {user} = useAuthContext();
    const [title,setTitle] = useState('')
    const [start,setStart] = useState('')
    const [end,setEnd] = useState('')
    const [emptyFields,setEmptyFields] = useState([])
    const [typeOfActivity,setTypeOfActivity] = useState('')
    const [englishTitle, setEnglishTitle] = useState('')
    const [error,setError] = useState(null);
    const [success,setSuccess] = useState(null)
    const [successMessage,setSuccessMessage] = useState('התווסף בהצלחה')
    const [successAdding,setSuccessAdding] = useState(false)



    // This function is called when the form is submitted.
    // The function sends a post request to the server with the new schedule details.
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!user){
            setError('נדרש חיבור למערכת')
            return
        }
        const newSchedule = {title:typeOfActivity, startTime:start, endTime:end, classRoom:className, day:dayOfTheWeek, englishTitle: englishTitle }
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
                    setTypeOfActivity('')
                    setEnglishTitle('')
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


    // This function is called when the activity is changed.
    // The function sets the type of activity in the state depending on the activity chosen.
    const handleActivityChange = (event) => {
        setEnglishTitle(event.target.value)
        switch (event.target.value) {
            case "morning-sport":
                setTypeOfActivity("ספורט בוקר")
                break;
            case "morning-meeting":
                setTypeOfActivity("מפגש בוקר")
                break;
            case "washing-hands":
                setTypeOfActivity("שטיפת ידיים")
                break;
            case "breakfast":
                setTypeOfActivity("ארוחת בוקר")
                break;
            case "art":
                setTypeOfActivity("אומנות")
                break;
            case "feeling-activity":
                setTypeOfActivity("פעילות תחושתית")
                break;
            case "music-activity":
                setTypeOfActivity("חוג מוסיקה")
                break;
            case "launch":
                setTypeOfActivity("ארוחת צהריים")
                break;
            case "motor-skills":
                setTypeOfActivity("מוטוריקה עדינה")
                break;
            case "garden":
                setTypeOfActivity("גינון")
                break;
            case "sport-zidane":
                setTypeOfActivity("ספורט זידאן")
                break;
            case "clay-activity":
                setTypeOfActivity("עבודה עם חימר ")
                break;
            case "bake":
                setTypeOfActivity("אפייה")
                break;
            case "paper-mache-activity":
                setTypeOfActivity("עיסת נייר")
                break;
            case "mind-games":
                setTypeOfActivity("משחקי חשיבה")
                break;
            case "outside-activity":
                setTypeOfActivity("משחקי כדור - יציאה לחצר")
                break;
            case "dance-music-activity":
                setTypeOfActivity("תנועה ומוזיקה")
                break;
            case "movie-activity":
                setTypeOfActivity("סרט")
                break;
            default:
                setTypeOfActivity('')
                break;
        }
    }
    
    return(
        <form className='create' onSubmit={handleSubmit}>
                <div className="option-form">
                <label className='add-new-schedule-label'>הוספת פעילות חדשה</label>

                {/* <label>כותרת</label>
                <input className={emptyFields.includes('title') ? 'error' :''} type="text" value={title} onChange={(e)=> setTitle(e.target.value)} /> */}

                <label className="choosing-type-of-activity">סוג הפעילות</label>
                <select id="schedule-type" className="chooseType" value={englishTitle} onChange={handleActivityChange}>
                    <option value="empty"></option>
                    <option value="morning-sport">ספורט בוקר</option>
                    <option value="morning-meeting">מפגש בוקר</option>
                    <option value="washing-hands">שטיפת ידיים</option>
                    <option value="breakfast">ארוחת בוקר</option>
                    <option value="art">אומנות</option>
                    <option value="feeling-activity">פעילות תחושתית</option>
                    <option value="music-activity">חוג מוסיקה</option>
                    <option value="launch">ארוחת צהריים</option>
                    <option value="motor-skills">מוטוריקה עדינה</option>
                    <option value="garden">גינון</option>
                    <option value="sport-zidane">ספורט זידאן</option>
                    <option value="clay-activity">עבודה עם חימר</option>
                    <option value="bake">אפייה</option>
                    <option value="paper-mache-activity">עיסת נייר</option>
                    <option value="mind-games">משחקי חשיבה </option>
                    <option value="outside-activity">משחקי כדור-יציאה חצר</option>
                    <option value="dance-music-activity">תנועה ומוזיקה</option>
                    <option value="movie-activity">סרט</option>
                </select>



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
