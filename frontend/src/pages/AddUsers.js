import { useEffect, useState} from "react"
import UserDetails from '../components/UserDetails'
import PatientDetails from "../components/PatientDetails"
import UserForm from '../components/UserForm'
import {useUsersContext} from '../hooks/useUsersContext'
import {usePatientsContext} from '../hooks/usePatientsContext'
import {useAuthContext} from '../hooks/useAuthContext'
const AddUsers = () => {

    const {users,dispatch} = useUsersContext()
    const {patients,dispatch: dispatch2} = usePatientsContext()
    const {user} = useAuthContext()
    const [toRun,setToRun] = useState(true)

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
        if(user && toRun){
            FetchUsers()
            setToRun(false)
        }        
    },[user,users,patients])


    return(
        <div className="AddUsers">
            <div className="users">
                <label> עובדים</label>
                {users && users.map((user)=>(
                    <UserDetails key={user._id} userDet={user}/>
                ))}
            </div>
            {<div className="users">
            <label> מקבלי שירות</label>
            {patients && patients.map((patient)=>(
                    <PatientDetails key={patient._id} patient={patient}/>
                ))}
            </div> 
            }
            <UserForm/>
        </div>
    )
}



export default AddUsers