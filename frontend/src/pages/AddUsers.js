import { useEffect} from "react"
import UserDetails from '../components/UserDetails'
import PatientDetails from "../components/PatientDetails"
import UserForm from '../components/UserForm'
import {useUsersContext} from '../hooks/useUsersContext'
import {usePatientsContext} from '../hooks/usePatientsContext'
import {useAuthContext} from '../hooks/useAuthContext'
import Loading from '../components/loading';

const AddUsers = () => {

    const {users,dispatch} = useUsersContext()
    const {patients,dispatch: dispatch2} = usePatientsContext()
    const {user} = useAuthContext()


    const handlePatientClassRoom = (patient) => {
        let classroom =''
        switch (patient.classRoom) {
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
        return classroom
    }
    const refreshPatients = async () => {
        const response = await fetch('/api/patient',{
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()
        if(response.ok){
            dispatch2({type: 'SET_PATIENTS', payload: json},)
        }
    }

    useEffect(()=>{
        const FetchUsers= async() =>{
            let response = await fetch('/api/users',{
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })

            let json = await response.json()
            if(response.ok){
                dispatch({type: 'SET_USERS', payload: json},)
            }
            response = await fetch('/api/patient',{
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })

            json = await response.json()
            if(response.ok){
                dispatch2({type: 'SET_PATIENTS', payload: json},)
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
            
            FetchUsers()
            //setToRun(false)
        }        
    },[user,dispatch,dispatch2])


    return(
        <div className="AddUsers">
            {!users && !patients && <Loading />}
            <div className="users">
                <label> עובדים</label>
                {users && users.map((user)=>(
                    <UserDetails key={user._id} userDet={user}/>
                ))}
            </div>
            {<div className="users">
                <label> מקבלי שירות</label>
                {patients && patients.sort((a, b) => a.classRoom.localeCompare(b.classRoom)).map((patient)=>(
                        <PatientDetails key={patient._id} patient={patient} patientClassRoom={handlePatientClassRoom(patient)} />
                    ))}
            </div> 
            }
            <UserForm refreshPatients={refreshPatients}/>
        </div>
    )
}



export default AddUsers