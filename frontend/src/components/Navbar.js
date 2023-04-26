import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect, useState } from 'react'


const Navbar = () => {

    const {logout} = useLogout()
    const {user} = useAuthContext()
    const [userName,setUserName] = useState('');

    const handleClick =() =>{
        logout()
    }

    useEffect(()=>{
        const userDetails= async() =>{
            const response = await fetch('/api/getDataOnUser/' + user.email ,{
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
    
            const json = await response.json()
            if(response.ok){
                setUserName(json.hebrewName)
            }
        }
        if(user){
            userDetails()
        }
    },[user])
    

    return(
        <header>
            <div className="container">
                <Link to='/'><h1>RCM</h1></Link>
                {user && (
                    <span className='user-email'> שלום {userName}</span>
                )}
                <nav className='navigation-bar'>
                    {user && (<div>
                        <Link className='morning-meeting-btn' to="/MorningMeeting">מפגש בוקר</Link>
                        <Link className='attendence-btn' to="/MorningAttendence">נוכחות בוקר</Link>
                        <Link className='manage-users-nav' to="/ManageUsers">ניהול משתמשים</Link>
                        {/* <span>{user.email}</span> */}
                        <button onClick={handleClick}>התנתקות</button>
                    </div>
                    )}
                    {!user && (<div>
                        <Link className='login-navbar' to="/login">התחברות</Link>
                    </div>
                    )}

                </nav>
            </div>
        </header>
    )
}


export default Navbar