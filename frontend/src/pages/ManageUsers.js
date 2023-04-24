import {Link} from 'react-router-dom'
import {useAuthContext} from '../hooks/useAuthContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
 
const ManageUsers = () => {

    const {user} = useAuthContext()

    return(
        <div className='manager-homepage'>
            {user && (
                <Link className='AddUser-Btn' to="/AddUser">Add Users</Link>
            )}
        </div>
        
    )
}


export default ManageUsers