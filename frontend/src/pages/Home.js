import {Link} from 'react-router-dom'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import UserForm from '../components/UserForm'
import AddUsers from '../pages/AddUsers';

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
        <div>
        <div className="home">
            <Link to="/AddUser">Add Users</Link>
        
        </div>
        </div>
    )
}



export default Home