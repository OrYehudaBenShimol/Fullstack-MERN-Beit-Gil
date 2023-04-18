import {useState} from 'react'
import { useUsersContext } from '../hooks/useUsersContext';

const UserForm = () => {
    const {dispatch} = useUsersContext();
    // const date = new Date();
    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();
    // const today = `${year}-${month}-${day}`;


    // For Managers and Employees
    const [name,setName] = useState('')
    const [id,setID] = useState('')
    const [email,setEmail] = useState('')
    const [cellphone,setCellphone] = useState('')
    const [dateOfBirth,setDateOfBirth] = useState('')
    const [role, setRole] = useState('Manager')
    const [hebrewName,SetHebrewName] = useState('')
    const [password,setPassword] = useState('')
    const [userType, setUserType] = useState('');
    const [error,setError] = useState(null);
    const [success,setSuccess] = useState(null)
    const [emptyFields,setEmptyFields] = useState([])
    // for patients
    const [classRoom, setUserClassroom] = useState('oren')
    const [patientName,setPatientName] = useState('');
    const [patientID, setPatientID] = useState('');
    const [patientPhone,setPatientPhone] = useState('');
    const [patientBirthday,setPatientBirtday] =useState('');
    const [patientHebrewName, setPatientHebrewName] = useState('');


    const handleSubmit = async (e) =>{
        e.preventDefault();

        const typeOfUser = {userType};
        
        if(typeOfUser.userType === 'option-1' ){
            const manager = {name, id, email, cellphone, dateOfBirth, role:"Manager" , hebrewName, password}
            try {
                const response = await fetch('/api/users', {
                    method: 'POST',
                    body: JSON.stringify(manager),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                const json = await response.json();
                if(!response.ok){
                    setError(json.error);
                    setEmptyFields(json.emptyFields)
                }
                if(response.ok){
                    setSuccess('')
                    setName('')
                    setCellphone('')
                    setDateOfBirth('')
                    setEmail('')
                    setID('')
                    setPassword('')
                    SetHebrewName('')
                    setUserType('')
                    setEmptyFields([])
                    console.log('new manager/therapist has been added.',json);
                    dispatch({type:'CREATE_USERS',payload:json})
                }
            } catch (error) {
                console.log(error)
            }
            
            
            
        }
        if(typeOfUser.userType === 'option-2' ){
            const employee = {name, id, email, cellphone, dateOfBirth, role:"Employee" , hebrewName, password}
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify(employee),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const json = await response.json();
            if(!response.ok){
                setError(json.error);
            }
            if(response.ok){
                setName('')
                setCellphone('')
                setDateOfBirth('')
                setEmail('')
                setID('')
                setPassword('')
                SetHebrewName('')
                setUserType('')
                console.log('new employee has been added.',json);
            }
        }

        if(typeOfUser.userType === 'option-3' ){
            const patient = {name:patientName, id:patientID, cellphone:patientPhone, dateOfBirth:patientBirthday, role:"Patient" ,classRoom:classRoom, hebrewName:patientHebrewName}
            const response = await fetch('/api/patient', {
                method: 'POST',
                body: JSON.stringify(patient),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const json = await response.json();
            if(!response.ok){
                setError(json.error);
            }
            if(response.ok){
                setPatientName('')
                setPatientID('')
                setPatientBirtday('')
                setPatientID('')
                setUserClassroom('oren')
                setPatientHebrewName('')
                console.log('new patient has been added.',json);
            }
        }
    }


    function handleUserTypeChange(event) {

        setUserType(event.target.value);
        const typeOfUser = {userType}
        setTimeout(() => {
            if(typeOfUser.userType === 'empty'){
                setRole('')
            }
            if(typeOfUser.userType === 'option-1'){
                setRole('Manager')
            }
            if(typeOfUser.userType === 'option-2'){
                setRole('Employee')
            }
            if(typeOfUser.userType === 'option-3'){
                setRole('Patient')
            }

          }, "1000");
        
    }
    function handleUserClassroomChange(event){
        setUserClassroom(event.target.value);
    }

    return(
        
        <form className='create' onSubmit={handleSubmit}>
            <label htmlFor="user-type">בחר את סוג המשתמש אותו תרצה להוסיף</label>
            <select id="user-type" className="chooseType" value={userType} onChange={handleUserTypeChange}>
                <option value="empty"></option>
                <option value="option-1">מטפל/מנהל</option>
                <option value="option-2">עובד</option>
                <option value="option-3">מקבל שירות</option>
            </select>

            {userType === 'option-1' && (
                <div className="option-form">
                <h2>הוספת מטפל/מנהל</h2>
                <label htmlFor="name">:שם באנגלית</label>
                <input className={emptyFields.includes('name') ? 'error' :''} type="text" id="name" name="name" onChange={(e)=> setName(e.target.value)} />

                <label htmlFor="email">:אימייל</label>
                <input  className={emptyFields.includes('email') ? 'error' :''} type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} />

                <label htmlFor="password">:סיסמא</label>
                <input className={emptyFields.includes('password') ? 'error' :''} type="password" id="password" name="password" minLength="8" onChange={(e)=> setPassword(e.target.value)}/>

                <label htmlFor="id">:תעודת זהות</label>
                <input className={emptyFields.includes('id') ? 'error' :''} type="text" id="id" name="id"  onChange={(e)=> setID(e.target.value)} />

                <label htmlFor="phone">:טלפון</label>
                <input className={emptyFields.includes('cellphone') ? 'error' :''} type="tel" id="phone" name="phone"  onChange={(e)=> setCellphone(e.target.value)} />

                <label htmlFor="birthdate">:תאריך לידה</label>
                <input className={emptyFields.includes('dateOfBirth') ? 'error' :''} type="text" id="birthdate" name="birthdate"
                     onChange={(e)=> setDateOfBirth(e.target.value)}/>

                <label htmlFor="hebrewName">:שם בעברית</label>
                <input className={emptyFields.includes('hebrewName') ? 'error' :''} type="text" id="hebrewName" name="hebrewName" onChange={(e)=> SetHebrewName(e.target.value)} />                <br />

                <button type="submit">הוסף משתמש</button>
                </div>
            )}

            {userType === 'option-2' && (
                <div className="option-form">
                    <h2>הוספת עובד כללי</h2>

                    <label htmlFor="name">:שם באנגלית</label>
                    <input className={emptyFields.includes('name') ? 'error' :''} type="text" id="name" name="name" onChange={(e)=> setName(e.target.value)} /> 

                    <label htmlFor="email">:אימייל</label>
                    <input className={emptyFields.includes('email') ? 'error' :''} type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} />

                    <label htmlFor="password">:סיסמא</label>
                    <input className={emptyFields.includes('password') ? 'error' :''} type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)}/>

                    <label htmlFor="id">:תעודת זהות</label>
                    <input  className={emptyFields.includes('id') ? 'error' :''} type="number" id="id" name="id" onChange={(e)=> setID(e.target.value)}/>

                    <label htmlFor="phone">:טלפון</label>
                    <input className={emptyFields.includes('cellphone') ? 'error' :''} type="tel" id="phone" name="phone" onChange={(e)=> setCellphone(e.target.value)} />

                    <label htmlFor="birthdate">:תאריך לידה</label>
                    <input className={emptyFields.includes('dateOfBirth') ? 'error' :''} type="text" id="birthdate" name="birthdate" 
                          onChange={(e)=> setDateOfBirth(e.target.value)}/>

                    <label htmlFor="hebrewName">:שם בעברית</label>
                    <input  className={emptyFields.includes('hebrewName') ? 'error' :''} type="text" id="hebrewName" name="hebrewName" onChange={(e)=> SetHebrewName(e.target.value)} />                <br />

                    <button type="submit">הוסף משתמש</button>
                </div>
            )}

            {userType === 'option-3' && (
                <div className="option-form">
                                        <h2>הוספת מקבל שירות</h2>
                    <label htmlFor="name">:שם באנגלית</label>
                    <input className={emptyFields.includes('name') ? 'error' :''} type="text" id="name" name="name" onChange={(e)=> setPatientName(e.target.value)} />

                    <label htmlFor="id">:תעודת זהות</label>
                    <input className={emptyFields.includes('id') ? 'error' :''} type="text" id="id" name="id" onChange={(e)=> setPatientID(e.target.value)}/>

                    <label htmlFor="Class">:שיוך לקבוצה</label>
                    <select id="patient-class" value={classRoom} onChange={handleUserClassroomChange}>
                        <option value="oren">אורן</option>
                        <option value="gefen">גפן</option>
                        <option value="dekel">דקל</option>
                        <option value="sahlav">סחלב</option>
                        <option value="tzivoni">צבעוני</option>
                        <option value="rakefet">רקפת</option>
                    </select>

                    <label htmlFor="phone">:טלפון איש קשר</label>
                    <input className={emptyFields.includes('cellphone') ? 'error' :''} type="tel" id="phone" name="phone"  onChange={(e)=> setPatientPhone(e.target.value)}/>

                    <label htmlFor="birthdate">:תאריך לידה</label>
                    <input className={emptyFields.includes('dateOfBirth') ? 'error' :''} type="text" id="birthdate" name="birthdate"
                         onChange={(e)=> setPatientBirtday(e.target.value)}/>

                    <label htmlFor="hebrewName">:שם בעברית</label>
                    <input className={emptyFields.includes('hebrewName') ? 'error' :''} type="text" id="hebrewName" name="hebrewName" onChange={(e)=> setPatientHebrewName(e.target.value)} />                <br />

                    <button type="submit">הוסף משתמש</button>
                </div>
            )}
                        {error && <div className="error">{error}</div>}

        </form>
    )
}


export default UserForm;
