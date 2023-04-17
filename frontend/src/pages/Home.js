import { useEffect, useState } from "react"
import UserDetails from '../components/UserDetails'
import PatientDetails from '../components/PatientDetails'

import UserForm from '../components/UserForm'

const Home = () => {

    // const [users,setUsers] = useState(null)
    // const [patients,setPatients] = useState(null)

    // useEffect(()=>{
    //     const fetchUsers= async() =>{
    //         const response = await fetch('/api/users')
    //         const json = await response.json()
    //         if(response.ok){
    //             setUsers(json)
    //         }
    //     }


    //     fetchUsers()

    //     const fetchPatients= async() =>{
    //         const response = await fetch('/api/patient')
    //         const json = await response.json()
    //         if(response.ok){
    //             setPatients(json)
    //         }
    //     }

    //     fetchPatients()
    // },[])

    return(
        <div className="home">
            <a href="/AddUser">Add User</a>
        </div>
    )
}



export default Home