import { useEffect} from "react"
import PatientAttendenceDetails from '../components/PatientAttendenceDetails'
import {usePatientsContext} from '../hooks/usePatientsContext'
import {useAuthContext} from '../hooks/useAuthContext'
import Loading from '../components/loading';

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
                // console.log(json)
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

        if(user){
             fetchPatients()
        }
    
        // fetchPatients()
        
    },[dispatch,user]);


    return(
        <div className="Patients-Attendence">
            <div>
                {!patients && <Loading />}
            <label className="morning-attendence-label">  נוכחות בוקר לתאריך {formattedDate} </label>
            <div className="patients">
                {patients && patients.sort((a, b) => a.hebrewName.localeCompare(b.hebrewName)).map((patient)=>(
                    <div className="patient-container" key={patient._id}>
                        <PatientAttendenceDetails handleChange={handleChange} key={patient._id} patientDet={patient}/>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}




export default AttendenceCheck