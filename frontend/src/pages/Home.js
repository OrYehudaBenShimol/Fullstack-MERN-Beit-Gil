import {useAuthContext} from '../hooks/useAuthContext'
import { useEffect} from "react"

import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick



const Home = () => {

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

    const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
    }

    return(
        <div className='Calender'>

        <div className="home">

        </div>
        </div>
    )


}

export default Home