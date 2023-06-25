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

    //the useEffect is used to get the user name from the server
    //the useEffect is called when the user is changed
    //the useEffect is called when the user is changed because the user is a dependency of the useEffect
    useEffect(()=>{

        // the userDetails function is an async function that gets the user name from the server
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
                        <Link className='disconnect' onClick={handleClick}>התנתקות</Link>
                        <Link className='manage-users-nav' to="/ManageUsers">ניהול משתמשים</Link>
                        <Link className='attendenc'  to="/MorningAttendence">נוכחות בוקר</Link>
                        <Link className='meeting'  to="/MorningMeeting" >מפגש בוקר</Link>
                        {/* <Link className='therapy'>טיפולים פרטניים</Link>
                        <Link className='Patient follow-up'>מעקב מטופלים</Link>
                        <Link className='nothes'>פתקים</Link>
                        <Link className='settings'>הגדרות</Link> */}

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