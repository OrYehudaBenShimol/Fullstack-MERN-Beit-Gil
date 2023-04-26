import React, { useState, useEffect } from 'react';
import Patient from '../components/Patient';
import { usePatientsContext } from '../hooks/usePatientsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const MorningMeeting = () => {
  const { patients, dispatch } = usePatientsContext();
  const { user } = useAuthContext();
  const [showComboBox, setShowComboBox] = useState(false);
  const [patientsToShow, setPatientToShow] = useState([]);
  const [className,setClassName] = useState('')
  const [showLabel,setShowLabel] = useState(false)

  function handleUserTypeChange(event) {
    const patientsByClass = patients.filter((patient) => patient.classRoom === event.target.value);
    setShowComboBox(true);
    setPatientToShow(patientsByClass);
    setClassName(event.target.value)
    if(patientsToShow.length === 0){
      setShowLabel(true)
    }else{
      setShowLabel(false)
    }

  }

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await fetch('/api/morningMeeting', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_PATIENTS', payload: json });
      }
    };

    if (user) {
      fetchPatients();
    }
  }, [dispatch, user]);

  return (
    <div className="morning-meeting-page">
      <div className="morning-meeting-container">
        {patientsToShow.length === 0 && (
          <div className='combobox-morning'>
            <label className='choose-class-label' htmlFor="user-type">בחר את הכיתה</label>
            <select id="patient-class" onChange={handleUserTypeChange}>
              <option value="">בחר כיתה</option>
              <option value="oren">אורן</option>
              <option value="gefen">גפן</option>
              <option value="dekel">דקל</option>
              <option value="sahlav">סחלב</option>
              <option value="tzivoni">צבעוני</option>
              <option value="rakefet">רקפת</option>
            </select>
            {showLabel && patientsToShow.length === 0 && (
          <div>לא נמצאו מטופלים<br></br> בכיתה זו.</div>
        )}
          </div>
        )}

        {showComboBox && patientsToShow.length > 0 && (
          <div>
                        <h2>{className}</h2>
                        <div className="patient-container-morning">
            {patientsToShow.map((patient) => (
              <Patient
                patient={patient}
                key={patient._id}
                name={patient.hebrewName}
                classroom={patient.classRoom}
                feelings={patient.feeling}
              />
            ))}
          </div>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default MorningMeeting;
