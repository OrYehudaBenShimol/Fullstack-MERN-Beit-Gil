import { useEffect, useState } from "react";
import { useStatisticsContext } from "../hooks/useStatisticsContext"
import { useAuthContext } from "../hooks/useAuthContext";

const StatisticsDetails = ({stat}) => {
    const {statistics,dispatch} = useStatisticsContext();
    const {user} = useAuthContext();
    const [date,setDate] = useState('')
    const [feeling,setFeeling] = useState('')

    useEffect(()=>{
        const { createdAt } = stat;
        const date = new Date(createdAt);
        const formattedDate = date.toLocaleDateString('he-IL');
        setDate(formattedDate)   
        if(stat.feeling === 'home'){
            setFeeling('')
        }
        if(stat.feeling === 'happy'){
            setFeeling('שמח')
        }
        if(stat.feeling === 'sad'){
            setFeeling('עצוב')
        }
        if(stat.feeling === 'confused'){
            setFeeling('מבולבל')
        }
    },[])
  
    return(
        <div className="statistics-details">
           <p><strong>נוכחות:</strong>  {stat.arrived ? "נוכח" : "נעדר"}  </p>
           <p>{date}<strong> :תאריך</strong></p>
           <p>{feeling}</p>
        </div>
    )
}



export default  StatisticsDetails