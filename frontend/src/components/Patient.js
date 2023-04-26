import React, { useEffect, useState } from 'react';
import {useAuthContext} from '../hooks/useAuthContext'

const Patient = ({patient, name, id, image, onFeelingClick }) => {
  const [showFeelings, setShowFeelings] = useState(false);
  const [showPatientFeelings, setShowPatientFeelings] = useState(true)
  const [typeOfFeeling,setTypeOfFeeling] = useState('')
  const {user} = useAuthContext()

  useEffect(()=>{
        const setFeelingPicture= async() =>{
            if(patient.feeling.length > 0){
              setTypeOfFeeling(patient.feeling)
              setShowPatientFeelings(false)
            }
        }

        if(user){
          setFeelingPicture()
        }
    
        
    },[user]);


  const updatePatient= async (feelingVar) =>{

    const isHere = true
 
    
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
      console.log('updated in db ',json)
    }
  }


  const handleHappyFeelingClick=()=>{
    setTypeOfFeeling("happy")
    setShowFeelings(false)
    setShowPatientFeelings(false)
    updatePatient("happy")
  }

  const handleSadFeelingClick =() =>{
    setTypeOfFeeling("sad")
    setShowFeelings(false)
    setShowPatientFeelings(false)
    updatePatient("sad")

  }

  const handleConfusedFeelingClick = () =>{
    setTypeOfFeeling("confused")
    setShowFeelings(false)
    setShowPatientFeelings(false)
    updatePatient("confused")
  }

  const handleHomeFeelingClick = () => {
    setTypeOfFeeling("home")
    setShowFeelings(false)
    setShowPatientFeelings(false)
    updatePatient("home")

  }

  return (
    <div>
      <div className="patient-morning-meeting">
        <img src="images/blank.png" alt={name} onClick={(e)=>{setShowFeelings(!showFeelings)}} className="morning-picture"  />
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


