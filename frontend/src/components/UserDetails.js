import { useState } from "react";
import { useUsersContext } from "../hooks/useUsersContext"

const UserDetails = ({user}) => {
    const {dispatch} = useUsersContext();
    const handleClick = async () => {
        setShowPopup(true)

    }   

    const [showPopup, setShowPopup] = useState(false);

    async function handleDeleteUser() {

        const response = await fetch('/api/users/' + user._id, {
            method:'DELETE'
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type:'DELETE_USER', payload:json})
        }    
        setShowPopup(false); // hide the popup
  }
    return(
        <div className="user-details">
            <h4>{user.hebrewName}</h4>
            <p>{user.name}<strong> :שם באנגלית </strong></p>
            <p><strong>תעודת זהות: </strong>{user.id}</p>
            <p>{user.email}<strong> :אימייל</strong></p>
            <p><strong>טלפון: </strong>{user.cellphone}</p>
            <p>{user.role}<strong> :תפקיד</strong></p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            {showPopup && (
            <div className="confirmation-popup">
                <div className="message">
                    האם אתה בטוח שאתה מעוניין למחוק את המשתמש ? כל המידע ייאבד
                </div>
                <button className="confirm-btn" onClick={handleDeleteUser}>Confirm</button>
                <button onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
      )}
        </div>
    )
}



export default  UserDetails