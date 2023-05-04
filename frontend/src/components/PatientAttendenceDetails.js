import { usePatientsContext } from "../hooks/usePatientsContext"
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";


const PatientAttendenceDetails = ({patientDet, handleChange}) => {
    const {dispatch} = usePatientsContext();
    const {user} = useAuthContext();
    const [isArrived,setIsArrived] = useState(patientDet.arrived)
    let classroom = '';

    switch (patientDet.classRoom) {
        case 'oren':
            classroom = 'אורן';
            break;
        case 'gefen':
            classroom = 'גפן';
            break;
        case 'dekel':
            classroom = 'דקל';
            break;
        case 'sahlav':
            classroom = 'סחלב';
            break;
        case 'tzivoni':
            classroom = 'צבעוני';
            break;
        case 'rakefet':
            classroom = 'רקפת';
            break;
        default:
            break;
    }

    const handleState = (event) => {
        setIsArrived(!isArrived);
        handleChange(event,patientDet)
    }

    return(
        <div className="patient-attendence-details">
            <h4>{patientDet.hebrewName}</h4>
            <p>כיתה: <strong>{classroom}</strong></p>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={(event) => handleState(event)} type="checkbox" checked={isArrived} role="switch" id="flexSwitchCheckDefault"/>
            </div>
            {/* <br/> */}
            {/* <img className="attendence-image" src={`images/${patientDet.id}.png`} width="70" height="70"/> */}
            <img className="attendence-image" src={`images/patients/${patientDet.id}.png`} width="100" height="100"/>
        </div>
    )
}



export default  PatientAttendenceDetails

