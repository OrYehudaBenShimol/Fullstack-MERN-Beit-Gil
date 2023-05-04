import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { usePatientsContext } from "../hooks/usePatientsContext"


const PatientDetails = ({patient}) => {
    const {dispatch} = usePatientsContext();
    const {user} = useAuthContext();
    const [hebrewClassName,setHebrewClassName] = useState('')
    const handleClick = async () => {
        setShowPopup(true)

    }   

    const [showPopup, setShowPopup] = useState(false);

   const handleDeleteUser = async() => {

        if(!user){
            return
        }
        const response = await fetch('/api/patient/' + patient._id, {
            method:'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type:'DELETE_PATIENT', payload:json})
        }    
        setShowPopup(false); 
  }

    return(
        <div className="patient-details">
            <h4>{patient.hebrewName}</h4>
            <p>{patient.name}<strong> :שם באנגלית </strong></p>
            <p><strong>תעודת זהות: </strong>{patient.id}</p>
            <p><strong>טלפון: </strong>{patient.cellphone}</p>
            <p>{patient.classRoom} :כיתה</p>
            <div className="tooltip-container">
            <span id="delete" text="Delete" className="material-symbols-outlined" onClick={handleClick}>delete</span>
            </div>
            {showPopup && (
            <div className="confirmation-popup">
                <div className="message">
                האם אתה בטוח שהנך מעוניין למחוק את 
                    <br/>? מקבל השירות     <br/>כל המידע ייאבד ולא ניתן לשחזרו 
                </div>
                <button className="confirm-btn" onClick={handleDeleteUser}>אישור</button>
                <button onClick={() => setShowPopup(false)}>ביטול</button>
            </div>
      )}    <div>
                    <img className="manage-patient-image" src={`images/patients/${patient.id}.png`}/>
            </div>
        </div>
    )
}


export default  PatientDetails