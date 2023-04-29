import { useEffect} from "react"
import UserDetails from '../components/UserDetails'
import UserForm from '../components/UserForm'
import {useUsersContext} from '../hooks/useUsersContext'
import {useAuthContext} from '../hooks/useAuthContext'
const AddUsers = () => {

    const {users,dispatch} = useUsersContext()
    const {user} = useAuthContext()

    useEffect(()=>{
        const fetchUsers= async() =>{
            const response = await fetch('/api/users',{
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json()
            if(response.ok){
                dispatch({type: 'SET_USERS', payload: json},)
            }

        }

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
        if(user){
            fetchUsers()
        }
        // fetchPatients()
        
    },[dispatch,user])


    return(
        <div className="AddUsers">
            <div className="users">
                {users && users.map((user)=>(
                    <UserDetails key={user._id} userDet={user}/>
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