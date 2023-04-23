import { useEffect, useState} from "react"
import PatientAttendenceDetails from '../components/PatientAttendenceDetails'
import {usePatientsContext} from '../hooks/usePatientsContext'
import {useAuthContext} from '../hooks/useAuthContext'
import jwt_decode from 'jwt-decode';

const AttendenceCheck = () => {

    const {patients,dispatch} = usePatientsContext()
    const {user} = useAuthContext()
    

    const currentDate = new Date();

    // Extract day, month, and year from current date
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();

    // Format date as "dd.mm.yyyy"
    const formattedDate = `${day}.${month}.${year}`;

    const handleChange = async (event,patientDetails) => {
            const updated = {_id:patientDetails._id ,id: patientDetails.id, classRoom: patientDetails.classRoom, hebrewName: patientDetails.hebrewName, arrived: !patientDetails.arrived}
            const response = await fetch('/api/attendence', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(updated)
            })
            const json = await response.json()
            if(response.ok){
                console.log(json)
                // dispatch({type:'CREATE_PATIENTS', payload:json})
            }
    }

 

    useEffect(()=>{
        
    //     const token = localStorage.getItem('user'); // Get the token from local storage
    //         if (token.token) {
    //           const decodedToken = jwt_decode(token.token); // Decode the JWT token
    //           const currentTime = Date.now() / 1000; // Get the current time in seconds
    //           if (decodedToken.exp && decodedToken.exp < currentTime) {
    //           localStorage.removeItem('user')
    //     }     
    // }      

        const fetchPatients= async() =>{
            const response = await fetch('/api/attendence',{
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json()
            if(response.ok){
                dispatch({type: 'SET_PATIENTS', payload: json},)
            }
        }

        if(user){
            
             fetchPatients()
        }
    
        // fetchPatients()
        
    },[dispatch,user]);


    return(
        <div className="Patients-Attendence">
            <label className="morning-attendence-label">  נוכחות בוקר לתאריך {formattedDate} </label>
            <div className="patients">
                {patients && patients.sort((a, b) => a.hebrewName.localeCompare(b.hebrewName)).map((patient)=>(
                    <div className="patient-container" key={patient._id}>
                        <PatientAttendenceDetails handleChange={handleChange} key={patient._id} patientDet={patient}/>
                    </div>
                ))}
            </div>
        </div>
    )
}




export default AttendenceCheck