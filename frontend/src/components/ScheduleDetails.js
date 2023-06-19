import { useState } from "react";
import { useScheduleContext } from "../hooks/useScheduleContext";
import { useAuthContext } from "../hooks/useAuthContext";

const ScheduleDetails = ({key,scheduleDetails, scheduleEnglish, classNameHebrew}) => {
    const {dispatch} = useScheduleContext();
    const {user} = useAuthContext();
    const [showPopup, setShowPopup] = useState(false);


    const handleClick = async () => {
        setShowPopup(true)
    }   

    // The handleDeleteSchedule function is an async function which deletes the specific schedule from the server.
    const handleDeleteSchedule = async() => {
        if(!user){
            return
        }
        const response = await fetch('/api/schedules/' + scheduleDetails._id, {
            method:'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type:'DELETE_SCHEDULE', payload:json})
        }    
        setShowPopup(false); // hide the popup
  }
  
    return(
        <div className="schedule-details">
            <h4> {scheduleDetails.title} </h4>
            <p>  {scheduleDetails.startTime}<strong> :שעת התחלה</strong></p>
            <p>  {scheduleDetails.endTime}<strong> :שעת סיום</strong></p>
            <p>  <strong> כיתה:</strong> {classNameHebrew}</p>
            <div className="tooltip-container">
            <span id="delete" text="Delete" className="material-symbols-outlined" onClick={handleClick}>delete</span>
            </div>
            {showPopup && (
            <div className="confirmation-popup">
                <div className="message">
                האם אתה בטוח שהנך מעוניין למחוק את 
                    <br/> הפעילות ? כל המידע ייאבד 
                </div>
                <button className="confirm-btn" onClick={handleDeleteSchedule}>אישור</button>
                <button  onClick={() => setShowPopup(false)}>ביטול</button>
            </div>
      )}
            <div>
                <img className="manage-schedule-image" src={"images/schedulePictures/" + scheduleDetails.englishTitle + ".png" }/> 
            </div>
        </div>
    )
}



export default  ScheduleDetails