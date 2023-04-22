import { useEffect, useState} from "react"
import PatientAttendenceDetails from '../components/PatientAttendenceDetails'
import {usePatientsContext} from '../hooks/usePatientsContext'
import {useAuthContext} from '../hooks/useAuthContext'
const AttendenceCheck = () => {

    const {patients,dispatch} = usePatientsContext()
    const {user} = useAuthContext()

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
        
    },[dispatch,user])


    return(
        <div className="Patients-Attendence">
            <div className="patients">
                {patients && patients.map((patient)=>(
                    <div className="patient-container" key={patient._id}>
                        <PatientAttendenceDetails handleChange={handleChange} key={patient._id} patientDet={patient}/>
                    </div>
                ))}
            </div>

        </div>
    )
}



export default AttendenceCheck