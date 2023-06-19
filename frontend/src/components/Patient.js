import React, { useEffect, useState } from 'react';
import {useAuthContext} from '../hooks/useAuthContext'



// describe the Patient component with params
// patient is the patient object
// name is the patient name
// id is the patient id
// image is the patient image
// onFeelingClick is the function that is called when the patient feeling is clicked

const Patient = ({patient, name, id, image, onFeelingClick }) => {
  const [showFeelings, setShowFeelings] = useState(false);
  const [showPatientFeelings, setShowPatientFeelings] = useState(true)
  const [typeOfFeeling,setTypeOfFeeling] = useState('')
  const {user} = useAuthContext()

  useEffect(()=>{
        const setFeelingPicture= async() =>{
          if(patient.feeling != null){
            if(patient.feeling.length > 0){
              setTypeOfFeeling(patient.feeling)
              setShowPatientFeelings(false)
            }
        }
      }

        if(user){
          setFeelingPicture()
        }
    
        
    },[user]);


  // The updatePatient function is an async function which sets the patient feeling in the server depending on the feelingVar.
  const updatePatient= async (feelingVar) =>{

    let isHere = true
 
    if(feelingVar==="home"){
      isHere=false
    }
    
    const updated = {id: patient.id, classRoom: patient.classRoom, hebrewName: patient.hebrewName, arrived: isHere,feeling:feelingVar }
    const response = await fetch('/api/morningMeeting',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(updated)
    })

    const json = await response.json()
    if(response.ok){
      // console.log('updated in db ',json)
    }
  }

// The handleHappyFeelingClick function is called when the happy feeling is clicked
  const handleHappyFeelingClick=()=>{
    setTypeOfFeeling("happy")
    setShowFeelings(false)
    setShowPatientFeelings(false)
    updatePatient("happy")
  }

// The handleSadFeelingClick function is called when the sad feeling is clicked
  const handleSadFeelingClick =() =>{
    setTypeOfFeeling("sad")
    setShowFeelings(false)
    setShowPatientFeelings(false)
    updatePatient("sad")

  }

// The handleConfusedFeelingClick function is called when the confused feeling is clicked
  const handleConfusedFeelingClick = () =>{
    setTypeOfFeeling("confused")
    setShowFeelings(false)
    setShowPatientFeelings(false)
    updatePatient("confused")
  }

// The handleHomeFeelingClick function is called when the home feeling is clicked
  const handleHomeFeelingClick = () => {
    setTypeOfFeeling("home")
    setShowFeelings(false)
    setShowPatientFeelings(false)
    updatePatient("home")

  }

  return (
    <div>
      <div className="patient-morning-meeting">
        <img src={`images/patients/${patient.id}.png`} alt={name} onClick={(e)=>{setShowFeelings(!showFeelings)}} className="morning-picture"  />
        <img src={`images/emojis/${typeOfFeeling}.png`} hidden={showPatientFeelings} className="patient-morning-picture"/>
        <label className="morning-meeting-name">{name}</label>

      </div>
      <div>
        {showFeelings && (
          <div className="feelings-popup">
            <label>שמח</label>
            <img src="images/emojis/happy.png" className="happy"  onClick={handleHappyFeelingClick} />
            <label>עצוב</label>
            <img src="images/emojis/sad.png" className="sad"  onClick={handleSadFeelingClick} />
            <label>מבולבל</label>
            <img src="images/emojis/confused.png" className="confused"  onClick={handleConfusedFeelingClick} />
            <label>בית</label>
            <img src="images/emojis/home.png" className="home"  onClick={handleHomeFeelingClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Patient;


