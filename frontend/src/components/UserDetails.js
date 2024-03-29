import { useState } from "react";
import { useUsersContext } from "../hooks/useUsersContext"
import { useAuthContext } from "../hooks/useAuthContext";


// This component is used to show the user details in the manage users page.
const UserDetails = ({userDet}) => {
    const {dispatch} = useUsersContext();
    const {user} = useAuthContext();
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = async () => {
        setShowPopup(true)

    }   

   // The handleDeleteUser function is an async function which deletes the user from the server with the user id.
   const handleDeleteUser = async() => {
        if(!user){
            return
        }
        const response = await fetch('/api/users/' + userDet._id, {
            method:'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type:'DELETE_USER', payload:json})
        }    
        setShowPopup(false); // hide the popup
    }
    
    return(
        <div className="user-details">
            <h4>{userDet.hebrewName}</h4>
            <p>{userDet.name}<strong> :שם באנגלית </strong></p>
            <p><strong>תעודת זהות: </strong>{userDet.id}</p>
            <p>{userDet.email}<strong> :אימייל</strong></p>
            <p><strong>טלפון: </strong>{userDet.cellphone}</p>
            <p>{userDet.role}<strong> :תפקיד</strong></p>
            <div className="tooltip-container">
            <span id="delete" text="Delete" className="material-symbols-outlined" onClick={handleClick}>delete</span>
            </div>
            {showPopup && (
            <div className="confirmation-popup">
                <div className="message">
                האם אתה בטוח שהנך מעוניין למחוק את 
                    <br/> המשתמש ? כל המידע ייאבד 
                </div>
                <button className="confirm-btn" onClick={handleDeleteUser}>אישור</button>
                <button  onClick={() => setShowPopup(false)}>ביטול</button>
            </div>
      )}
        </div>
    )
}



export default  UserDetails