import { useEffect, useState } from "react"
import UserDetails from '../components/UserDetails'
import PatientDetails from '../components/PatientDetails'
import UserForm from '../components/UserForm'

const AddUsers = () => {

    const [users,setUsers] = useState(null)
    const [patients,setPatients] = useState(null)

    useEffect(()=>{
        const fetchUsers= async() =>{
            const response = await fetch('/api/users')
            const json = await response.json()
            if(response.ok){
                setUsers(json)
            }
        }


        fetchUsers()

        const fetchPatients= async() =>{
            const response = await fetch('/api/patient')
            const json = await response.json()
            if(response.ok){
                setPatients(json)
            }
        }

        fetchPatients()
    },[])

    return(
        <div className="AddUsers">
            <UserForm/>
            <div className="users">
                {users && users.map((user)=>(
                    <UserDetails key={user._id} user={user}/>
                ))}
            </div>
            <div className="patients">
                {patients && patients.map((patient)=>(
                    <PatientDetails key={patient._id} patient={patient}/>
                ))}
            </div>
        </div>
    )
}



export default AddUsers