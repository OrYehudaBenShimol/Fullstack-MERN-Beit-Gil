const UserDetails = ({user}) => {
    return(
        <div className="user-details">
            <h4>{user.hebrewName}</h4>
            <p>{user.name}<strong> :שם באנגלית </strong></p>
            <p><strong>תעודת זהות: </strong>{user.id}</p>
            <p>{user.email}<strong> :אימייל</strong></p>
            <p><strong>טלפון: </strong>{user.cellphone}</p>
            <p>{user.role}<strong> :תפקיד</strong></p>
        </div>
    )
}



export default  UserDetails