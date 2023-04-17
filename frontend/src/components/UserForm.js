import {useState} from 'react'

const UserForm = () => {

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const today = `${year}-${month}-${day}`;


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
                setError(null);
                console.log('new manager/therapist has been added.',json);
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
                setError(null);
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
                setError(null);
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
            <select id="user-type" value={userType} onChange={handleUserTypeChange}>
                <option value="empty"></option>
                <option value="option-1">מטפל/מנהל</option>
                <option value="option-2">עובד</option>
                <option value="option-3">מקבל שירות</option>
            </select>

            {userType === 'option-1' && (
                <div>
                <h2>הוספת מטפל/מנהל</h2>
                <label htmlFor="name">:שם באנגלית</label>
                <input type="text" id="name" name="name" onChange={(e)=> setName(e.target.value)} /><br />

                <label htmlFor="email">:אימייל</label>
                <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} /><br />

                <label htmlFor="password">:סיסמא</label>
                <input type="password" id="password" name="password" minLength="8" onChange={(e)=> setPassword(e.target.value)}/><br />

                <label htmlFor="id">:תעודת זהות</label>
                <input type="text" id="id" name="id"  onChange={(e)=> setID(e.target.value)} /><br />

            

                <label htmlFor="phone">:טלפון</label>
                <input type="tel" id="phone" name="phone"  onChange={(e)=> setCellphone(e.target.value)} /><br />

                <label htmlFor="birthdate">:תאריך לידה</label>
                <input type="text" id="birthdate" name="birthdate"
                     onChange={(e)=> setDateOfBirth(e.target.value)}/><br />

                <label htmlFor="hebrewName">:שם בעברית</label>
                <input type="text" id="hebrewName" name="hebrewName" onChange={(e)=> SetHebrewName(e.target.value)} /><br />
                <button type="submit">הוסף משתמש</button>

                </div>
            )}

            {userType === 'option-2' && (
                <div>
                    <h2>הוספת עובד כללי</h2>

                    <label htmlFor="name">:שם באנגלית</label>
                    <input type="text" id="name" name="name" onChange={(e)=> setName(e.target.value)} /><br />

                    <label htmlFor="email">:אימייל</label>
                    <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} /><br />

                    <label htmlFor="password">:סיסמא</label>
                    <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)}/><br />

                    <label htmlFor="id">:תעודת זהות</label>
                    <input type="number" id="id" name="id" onChange={(e)=> setID(e.target.value)}/><br />

                    

                    <label htmlFor="phone">:טלפון</label>
                    <input type="tel" id="phone" name="phone" onChange={(e)=> setCellphone(e.target.value)} /><br />

                    <label htmlFor="birthdate">:תאריך לידה</label>
                    <input type="text" id="birthdate" name="birthdate" 
                          onChange={(e)=> setDateOfBirth(e.target.value)}/><br />

                    <label htmlFor="hebrewName">:שם בעברית</label>
                    <input type="text" id="hebrewName" name="hebrewName" onChange={(e)=> SetHebrewName(e.target.value)} /><br />
                    <button type="submit">הוסף משתמש</button>
                </div>
            )}

            {userType === 'option-3' && (
                <div>
                                        <h2>הוספת מקבל שירות</h2>
                    <label htmlFor="name">:שם באנגלית</label>
                    <input type="text" id="name" name="name" onChange={(e)=> setPatientName(e.target.value)} /><br />

                    <label htmlFor="id">:תעודת זהות</label>
                    <input type="text" id="id" name="id" onChange={(e)=> setPatientID(e.target.value)}/><br />

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
                    <input type="tel" id="phone" name="phone"  onChange={(e)=> setPatientPhone(e.target.value)}/><br />

                    <label htmlFor="birthdate">:תאריך לידה</label>
                    <input type="text" id="birthdate" name="birthdate"
                         onChange={(e)=> setPatientBirtday(e.target.value)}/><br />

                    <label htmlFor="hebrewName">:שם בעברית</label>
                    <input type="text" id="hebrewName" name="hebrewName" onChange={(e)=> setPatientHebrewName(e.target.value)} /><br />
                    <button type="submit">הוסף משתמש</button>

                </div>
                
            )}


        {error && <div className="error">{error}</div>}
        </form>
    )
}


export default UserForm;
