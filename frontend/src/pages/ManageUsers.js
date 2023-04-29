import {Link} from 'react-router-dom'
import {useAuthContext} from '../hooks/useAuthContext'
import { useEffect} from "react"

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


const ManageUsers = () => {

    const {user} = useAuthContext()

    useEffect(()=>{ 
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
    },[user])

    return(
        <div className='manager-homepage'>
            {user && (
                <Link className='AddUser-Btn' to="/AddUser">Add Users</Link>
            )}
        </div>
        
    )
}


export default ManageUsers