import { useEffect, useState} from "react"
import ScheduleForm from '../components/ScheduleForm'
import ScheduleDetails from "../components/ScheduleDetails"
import {useAuthContext} from '../hooks/useAuthContext'
import { useScheduleContext } from "../hooks/useScheduleContext"
const AddSchedules = () => {

    const {schedules,dispatch} = useScheduleContext()
    const {user} = useAuthContext()
    const [toRun,setToRun] = useState(true)
    const [day,setDay]=useState('');
    const [className,setClassName] = useState('')
    const [classNameHebrew,setClassNameHebrew] = useState('')
    const [dayHebrew,setDayHebrew] = useState('')
    useEffect(()=>{
        const FetchSchedules= async() =>{
            let response = await fetch('/api/schedules',{
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            let json = await response.json()
            if(response.ok){
                dispatch({type: 'SET_SCHEDULES', payload: json},)
            }
        }

        if(user){
            const token = user.token;
            // Decode the token
            const decodedToken = JSON.parse(window.atob(token.split('.')[1]));
            // Check if the token has not expired
            const tokenExpiration = decodedToken.exp;
            const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
            const isTokenValid = tokenExpiration > currentTime;

            if (isTokenValid) {
                // console.log('Valid token!');
            } else {
                console.log('Token has expired.');
                window.localStorage.removeItem('user');
                window.location.href = '/login';
            }
        }
        if(user && toRun){
            FetchSchedules()
            setToRun(false)
        }        
    },[user,dispatch,schedules])

    function handleClassChange(event){
        setClassName(event.target.value);
        switch (event.target.value) {
            case "oren":
                setClassNameHebrew("אורן")
                break;
            case "gefen":
                setClassNameHebrew("גפן")
                break;
            case "dekel":
                setClassNameHebrew("דקל")
                break;
            case "sahlav":
                setClassNameHebrew("סחלב")
                break;
            case "tzivoni":
                setClassNameHebrew("צבעוני")
                break;
            case "rakefet":
                setClassNameHebrew("רקפת")
                break;
            default:
                setClassNameHebrew('')
                break;
        }
        console.log(schedules)
    }

    function handleDayChange(event){
        setDay(event.target.value);

        switch (event.target.value) {
            case "Sunday":
                setDayHebrew("ראשון")
                break;
            case "Monday":
                setDayHebrew("שני")
                break;
            case "Tuesday":
                setDayHebrew("שלישי")
                break;
            case "Wednesday":
                setDayHebrew("רביעי")
                break;
            case "Thursday":
                setDayHebrew("חמישי")
                break;
            default:
                setClassNameHebrew('')
                break;
        }
    }

    return(
        <div className="AddSchedules">


            <div className="Add-Schedules">
                {dayHebrew !== '' && classNameHebrew !== '' && (
                    <label className="daily-schedule-label">לו"ז יום {dayHebrew}   בכיתת {classNameHebrew} </label>
                )}
                <div className="schedules">
                    {schedules && schedules.filter(s => s.classRoom === className && s.day === day).sort((a, b) => {
                        const timeA = new Date(`1970-01-01T${a.startTime}`);
                        const timeB = new Date(`1970-01-01T${b.startTime}`);
                        return timeA - timeB;
                    }).map((schedule)=>(
                        <ScheduleDetails key={schedule._id} scheduleDetails={schedule} classNameHebrew={classNameHebrew}/>
                    ))}
                </div>
            </div>

            <ScheduleForm className={className} dayOfTheWeek={day} dayHebrew={dayHebrew} classNameHebrew={classNameHebrew}/>

            <div>
                <label className="choosing-class-day">בחר את הכיתה</label>
                <select id="schedule-class" className="chooseType" value={className} onChange={handleClassChange}>
                    <option value="empty"></option>
                    <option value="oren">אורן</option>
                    <option value="dekel">דקל</option>
                    <option value="sahlav">סחלב</option>
                    <option value="rakefet">רקפת</option>
                    <option value="tzivoni">צבעוני</option>
                    <option value="gefen">גפן</option>
                </select>
                <label className="choosing-class-day">בחר את היום</label>
                <select id="schedule-day" className="chooseType" value={day} onChange={handleDayChange}>
                    <option value="empty"></option>
                    <option value="Sunday">ראשון</option>
                    <option value="Monday">שני</option>
                    <option value="Tuesday">שלישי</option>
                    <option value="Wednesday">רביעי</option>
                    <option value="Thursday">חמישי</option>
                </select>
            </div>

        </div>

    )
}



export default AddSchedules