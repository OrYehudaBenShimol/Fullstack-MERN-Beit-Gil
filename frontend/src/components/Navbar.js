import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar = () => {

    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick =() =>{
        logout()
    }

    return(
        <header>
            <div className="container">
                <Link to='/'><h1>RCM</h1></Link>
                {user && (
                    <span className='user-email'>{user.email}</span>
                )}
                <nav className='navigation-bar'>
                    {user && (<div>
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