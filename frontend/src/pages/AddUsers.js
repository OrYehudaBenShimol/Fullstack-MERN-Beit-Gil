import { useEffect} from "react"
import UserDetails from '../components/UserDetails'
import PatientDetails from '../components/PatientDetails'
import UserForm from '../components/UserForm'
import {useUsersContext} from '../hooks/useUsersContext'
const AddUsers = () => {

    const {users,dispatch} = useUsersContext()

    useEffect(()=>{
        // const fetchPatients= async() =>{
           
        // }

        

        const fetchUsers= async() =>{
            const response = await fetch('/api/users')
            const json = await response.json()
            if(response.ok){
                dispatch({type: 'SET_USERS', payload: json},)
            }
        }
        fetchUsers()
        // fetchPatients()
        
    },[dispatch])


    return(
        <div className="AddUsers">
            <div className="users">
                {users && users.map((user)=>(
                    <UserDetails key={user._id} user={user}/>
                ))}
            </div>
            {/* <div className="users">
            {patients && patients.map((patient)=>(
                    <PatientDetails key={patient._id} patient={patient}/>
                ))}
            </div> */
            }
            <div></div>
            <UserForm/>
        </div>
    )
}



export default AddUsers