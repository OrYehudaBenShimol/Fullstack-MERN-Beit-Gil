import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { usePatientsContext } from "../hooks/usePatientsContext"

// This component is used to show the patient details in the manage patients page.

const PatientDetails = ({patient,imageURL,patientClassRoom}) => {
    const {dispatch} = usePatientsContext();
    const {user} = useAuthContext();
    const [hebrewClassName,setHebrewClassName] = useState('')
    const [showPopup, setShowPopup] = useState(false);
    const [imageSrc, setImageSrc] = useState(null)


    const handleClick = async () => {
        setShowPopup(true)
    }   

    // When delete is clicked, the handleDeleteUser function is called.
    // The handleDeleteUser function is an async function which deletes the patient from the server with the user id.
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

  // Get the use picture from the server and set it in the imageSrc state.
  useEffect(() => {
    if (patient.image && patient.image.data) {
      const blob = new Blob([new Uint8Array(patient.image.data)], { type: "image/png" })
      setImageSrc(URL.createObjectURL(blob))
    }
  }, [patient.image])

  
    return(
        <div className="patient-details">
            <h4>{patient.hebrewName}</h4>
            <p>{patient.name}<strong> :שם באנגלית </strong></p>
            <p><strong>תעודת זהות: </strong>{patient.id}</p>
            <p><strong>טלפון: </strong>{patient.cellphone}</p>
            <p><strong> כיתה:</strong> {patientClassRoom}</p>
            <p><strong> תאריך לידה:</strong> {patient.dateOfBirth}</p>
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
                    {imageSrc && <img className="manage-patient-image" src={imageSrc}/> }
            </div>
        </div>
    )
}


export default  PatientDetails