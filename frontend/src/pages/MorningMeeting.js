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
  /* WHAT TO SHOW STATES */
  const [showOthersWeather,setShowOthersWeather] = useState(false)
  const [showOthersDays,setShowOthersDays] = useState(false)
  const [showOthersMonths,setShowOthersMonths] = useState(false)
  /* WEATHERS STATES */
  const [showWeatherRain,setShowWeatherRain] = useState(false)
  const [showWeatherSunny,setShowWeatherSunny] = useState(false)
  const [showWeatherHail,setShowWeatherHail] = useState(false)
  const [showWeatherRainbow,setShowWeatherRainbow] = useState(false)
  const [showWeatherLightning,setShowWeatherLightning]= useState(false)
  const [showWeatherWind,setShowWeatherWind] = useState(false)
  /* DAYS STATES */
  const [showSunday,setShowSunday] = useState(false)
  const [showMonday,setShowMonday] = useState(false)
  const [showTuesday,setShowTuesday] = useState(false)
  const [showWednesday,setShowWednesday] = useState(false)
  const [showThursday,setShowThursday] = useState(false)
  const [showFriday,setShowFriday] = useState(false)
  const [showSaturday,setShowSaturday] = useState(false)
  /* MONTHS STATES */
  const [showMonth1,setShowMonth1]=useState(false)
  const [showMonth2,setShowMonth2]=useState(false)
  const [showMonth3,setShowMonth3]=useState(false)
  const [showMonth4,setShowMonth4]=useState(false)
  const [showMonth5,setShowMonth5]=useState(false)
  const [showMonth6,setShowMonth6]=useState(false)
  const [showMonth7,setShowMonth7]=useState(false)
  const [showMonth8,setShowMonth8]=useState(false)
  const [showMonth9,setShowMonth9]=useState(false)
  const [showMonth10,setShowMonth10]=useState(false)
  const [showMonth11,setShowMonth11]=useState(false)
  const [showMonth12,setShowMonth12]=useState(false)

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* START OF WEATHER HANDLERS */
  function handleOthersWeather(event){
    setShowOthersWeather(true)
  }

  function handleWeatherRain(){
    setShowOthersWeather(false)
    setShowWeatherRain(true)
    setShowWeatherSunny(false)
    setShowWeatherHail(false)
    setShowWeatherWind(false)
    setShowWeatherLightning(false)
    setShowWeatherRainbow(false)
  }

  function handleWeatherSunny(){
    setShowOthersWeather(false)
    setShowWeatherSunny(true)
    setShowWeatherRain(false)
    setShowWeatherHail(false)
    setShowWeatherLightning(false)
    setShowWeatherWind(false)
    setShowWeatherRainbow(false)
  }

  function handleWeatherHail(){
    setShowOthersWeather(false)
    setShowWeatherSunny(false)
    setShowWeatherRain(false)
    setShowWeatherRainbow(false)
    setShowWeatherLightning(false)
    setShowWeatherWind(false)
    setShowWeatherHail(true)
  }

  function handleWeatherRainbow(){
    setShowOthersWeather(false)
    setShowWeatherSunny(false)
    setShowWeatherRain(false)
    setShowWeatherHail(false)
    setShowWeatherLightning(false)
    setShowWeatherWind(false)
    setShowWeatherRainbow(true)
  }


  function handleWeatherLightning(){
    setShowOthersWeather(false)
    setShowWeatherSunny(false)
    setShowWeatherRain(false)
    setShowWeatherHail(false)
    setShowWeatherRainbow(false)
    setShowWeatherWind(false)
    setShowWeatherLightning(true)
  }

  function handleWeatherWind(){
    setShowOthersWeather(false)
    setShowWeatherSunny(false)
    setShowWeatherRain(false)
    setShowWeatherHail(false)
    setShowWeatherRainbow(false)
    setShowWeatherLightning(false)
    setShowWeatherWind(true)
  }
  /* END OF WEATHER HANDLERS */
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /* START OF DAYS HANDLERS */
  function handleOthersDays(event){
    setShowOthersDays(true)
  }

  function handleSunday(){
    setShowOthersDays(false)
    setShowSunday(true)
    setShowMonday(false)
    setShowTuesday(false)
    setShowWednesday(false)
    setShowThursday(false)
    setShowFriday(false)
    setShowSaturday(false)
  }

  function handleMonday(){
    setShowOthersDays(false)
    setShowSunday(false)
    setShowMonday(true)
    setShowTuesday(false)
    setShowWednesday(false)
    setShowThursday(false)
    setShowFriday(false)
    setShowSaturday(false)
  }

  function handleTuesday(){
    setShowOthersDays(false)
    setShowSunday(false)
    setShowMonday(false)
    setShowTuesday(true)
    setShowWednesday(false)
    setShowThursday(false)
    setShowFriday(false)
    setShowSaturday(false)
  }

  function handleWednesday(){
    setShowOthersDays(false)
    setShowSunday(false)
    setShowMonday(false)
    setShowTuesday(false)
    setShowWednesday(true)
    setShowThursday(false)
    setShowFriday(false)
    setShowSaturday(false)
  }

  function handleThursday(){
    setShowOthersDays(false)
    setShowSunday(false)
    setShowMonday(false)
    setShowTuesday(false)
    setShowWednesday(false)
    setShowThursday(true)
    setShowFriday(false)
    setShowSaturday(false)
  }

  function handleFriday(){
    setShowOthersDays(false)
    setShowSunday(false)
    setShowMonday(false)
    setShowTuesday(false)
    setShowWednesday(false)
    setShowThursday(false)
    setShowFriday(true)
    setShowSaturday(false)
  }

  function handleSaturday(){
    setShowOthersDays(false)
    setShowSunday(false)
    setShowMonday(false)
    setShowTuesday(false)
    setShowWednesday(false)
    setShowThursday(false)
    setShowFriday(false)
    setShowSaturday(true)
  }
  /* END OF DAYS HANDLERS */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /* START OF MONTHS HANDLERS */
  function handleOthersMonths(event){
    setShowOthersMonths(true)
  }

  function handleMonth1(){
    setShowOthersMonths(false)
    setShowMonth1(true)
    setShowMonth2(false)
    setShowMonth3(false)
    setShowMonth4(false)
    setShowMonth5(false)
    setShowMonth6(false)
    setShowMonth7(false)
    setShowMonth8(false)
    setShowMonth9(false)
    setShowMonth10(false)
    setShowMonth11(false)
    setShowMonth12(false)
  }

  function handleMonth2(){
    setShowOthersMonths(false)
    setShowMonth1(false)
    setShowMonth2(true)
    setShowMonth3(false)
    setShowMonth4(false)
    setShowMonth5(false)
    setShowMonth6(false)
    setShowMonth7(false)
    setShowMonth8(false)
    setShowMonth9(false)
    setShowMonth10(false)
    setShowMonth11(false)
    setShowMonth12(false)
  }
  function handleMonth3(){
    setShowOthersMonths(false)
    setShowMonth1(false)
    setShowMonth2(false)
    setShowMonth3(true)
    setShowMonth4(false)
    setShowMonth5(false)
    setShowMonth6(false)
    setShowMonth7(false)
    setShowMonth8(false)
    setShowMonth9(false)
    setShowMonth10(false)
    setShowMonth11(false)
    setShowMonth12(false)
  }
  function handleMonth4(){
    setShowOthersMonths(false)
    setShowMonth1(false)
    setShowMonth2(false)
    setShowMonth3(false)
    setShowMonth4(true)
    setShowMonth5(false)
    setShowMonth6(false)
    setShowMonth7(false)
    setShowMonth8(false)
    setShowMonth9(false)
    setShowMonth10(false)
    setShowMonth11(false)
    setShowMonth12(false)
  }
  function handleMonth5(){
    setShowOthersMonths(false)
    setShowMonth1(false)
    setShowMonth2(false)
    setShowMonth3(false)
    setShowMonth4(false)
    setShowMonth5(true)
    setShowMonth6(false)
    setShowMonth7(false)
    setShowMonth8(false)
    setShowMonth9(false)
    setShowMonth10(false)
    setShowMonth11(false)
    setShowMonth12(false)
  }
  function handleMonth6(){
    setShowOthersMonths(false)
    setShowMonth1(false)
    setShowMonth2(false)
    setShowMonth3(false)
    setShowMonth4(false)
    setShowMonth5(false)
    setShowMonth6(true)
    setShowMonth7(false)
    setShowMonth8(false)
    setShowMonth9(false)
    setShowMonth10(false)
    setShowMonth11(false)
    setShowMonth12(false)
  }
  function handleMonth7(){
    setShowOthersMonths(false)
    setShowMonth1(false)
    setShowMonth2(false)
    setShowMonth3(false)
    setShowMonth4(false)
    setShowMonth5(false)
    setShowMonth6(false)
    setShowMonth7(true)
    setShowMonth8(false)
    setShowMonth9(false)
    setShowMonth10(false)
    setShowMonth11(false)
    setShowMonth12(false)
  }
  function handleMonth8(){
    setShowOthersMonths(false)
    setShowMonth1(false)
    setShowMonth2(false)
    setShowMonth3(false)
    setShowMonth4(false)
    setShowMonth5(false)
    setShowMonth6(false)
    setShowMonth7(false)
    setShowMonth8(true)
    setShowMonth9(false)
    setShowMonth10(false)
    setShowMonth11(false)
    setShowMonth12(false)
  }
  function handleMonth9(){
    setShowOthersMonths(false)
    setShowMonth1(false)
    setShowMonth2(false)
    setShowMonth3(false)
    setShowMonth4(false)
    setShowMonth5(false)
    setShowMonth6(false)
    setShowMonth7(false)
    setShowMonth8(false)
    setShowMonth9(true)
    setShowMonth10(false)
    setShowMonth11(false)
    setShowMonth12(false)
  }
  function handleMonth10(){
    setShowOthersMonths(false)
    setShowMonth1(false)
    setShowMonth2(false)
    setShowMonth3(false)
    setShowMonth4(false)
    setShowMonth5(false)
    setShowMonth6(false)
    setShowMonth7(false)
    setShowMonth8(false)
    setShowMonth9(false)
    setShowMonth10(true)
    setShowMonth11(false)
    setShowMonth12(false)
  }
  function handleMonth11(){
    setShowOthersMonths(false)
    setShowMonth1(false)
    setShowMonth2(false)
    setShowMonth3(false)
    setShowMonth4(false)
    setShowMonth5(false)
    setShowMonth6(false)
    setShowMonth7(false)
    setShowMonth8(false)
    setShowMonth9(false)
    setShowMonth10(false)
    setShowMonth11(true)
    setShowMonth12(false)
  }
  function handleMonth12(){
    setShowOthersMonths(false)
    setShowMonth1(false)
    setShowMonth2(false)
    setShowMonth3(false)
    setShowMonth4(false)
    setShowMonth5(false)
    setShowMonth6(false)
    setShowMonth7(false)
    setShowMonth8(false)
    setShowMonth9(false)
    setShowMonth10(false)
    setShowMonth11(false)
    setShowMonth12(true)
  }
  /* END OF MONTHS HANDLERS */


   function handleUserTypeChange(event) {
        const patientsByClass =  patients.filter((patient) => patient.classRoom === event.target.value);
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
    <div className='main-page-morning'>

    <div className='main-container-morning-meeting'>
  
      <div className="morning-meeting-page">
      <div className="morning-meeting-container">
        {patients && patientsToShow.length === 0 && (
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
      {showComboBox && patientsToShow.length > 0 && (
                  <div className="choose-others-morning-meeting">
                    <img src="images/emojis/weather.png" className="weather-logo" onClick={handleOthersWeather}/>
                    <img src="images/emojis/day.png" className="days-logo" onClick={handleOthersDays}/>
                    <img src="images/emojis/month.png" className="months-logo" onClick={handleOthersMonths}/>
                  </div>
        )}
      {showOthersWeather && (
          <div className='choose-weather-pictures'>
            <img src="images/emojis/rain.png" className="chosen-weather-logo"   onClick={handleWeatherRain} />
            <img src="images/emojis/sunny.png" className="chosen-weather-logo"  onClick={handleWeatherSunny} />
            <img src="images/emojis/hail.png" className="chosen-weather-logo"  onClick={handleWeatherHail} />
            <img src="images/emojis/rainbow.png" className="chosen-weather-logo"  onClick={handleWeatherRainbow} />
            <img src="images/emojis/lightning.png" className="chosen-weather-logo"  onClick={handleWeatherLightning} />
            <img src="images/emojis/wind.png" className="chosen-weather-logo"  onClick={handleWeatherWind} />
          </div>
        )}
      {showOthersDays && (
          <div className='choose-days-pictures'>
            <img src="images/emojis/sunday.png" className="day-logo"   onClick={handleSunday} />
            <img src="images/emojis/monday.png" className="day-logo"  onClick={handleMonday} />
            <img src="images/emojis/tuesday.png" className="day-logo"  onClick={handleTuesday} />
            <img src="images/emojis/wednesday.png" className="day-logo"  onClick={handleWednesday} />
            <img src="images/emojis/thursday.png" className="day-logo"  onClick={handleThursday} />
            <img src="images/emojis/friday.png" className="day-logo"  onClick={handleFriday} />
            <img src="images/emojis/saturday.png" className="day-logo"  onClick={handleSaturday} />
          </div>
        )}
      {showOthersMonths && (
          <div className='choose-months-pictures'>
            <img src="images/emojis/month-1.png" className="month-logo"   onClick={handleMonth1} />
            <img src="images/emojis/month-2.png" className="month-logo"  onClick={handleMonth2} />
            <img src="images/emojis/month-3.png" className="month-logo"  onClick={handleMonth3} />
            <img src="images/emojis/month-4.png" className="month-logo"  onClick={handleMonth4} />
            <img src="images/emojis/month-5.png" className="month-logo"  onClick={handleMonth5} />
            <img src="images/emojis/month-6.png" className="month-logo"  onClick={handleMonth6} />
            <img src="images/emojis/month-7.png" className="month-logo"  onClick={handleMonth7} />
            <img src="images/emojis/month-8.png" className="month-logo"  onClick={handleMonth8} />
            <img src="images/emojis/month-9.png" className="month-logo"  onClick={handleMonth9} />
            <img src="images/emojis/month-10.png" className="month-logo"  onClick={handleMonth10} />
            <img src="images/emojis/month-11.png" className="month-logo"  onClick={handleMonth11} />
            <img src="images/emojis/month-12.png" className="month-logo"  onClick={handleMonth12} />

          </div>
        )}

      <div className="weather-pictures">
          {showWeatherRain && (
            <img src="images/emojis/rain.png" className="chosen-weather-logo"/>
          )}
          {showWeatherSunny && (
            <img src="images/emojis/sunny.png" className="chosen-weather-logo"/>
          )}
          {showWeatherHail && (
            <img src="images/emojis/hail.png" className="chosen-weather-logo"/>
          )}
          {showWeatherRainbow && (
            <img src="images/emojis/rainbow.png" className="chosen-weather-logo"/>
          )}
          {showWeatherLightning && (
            <img src="images/emojis/lightning.png" className="chosen-weather-logo"/>
          )}
          {showWeatherWind && (
            <img src="images/emojis/wind.png" className="chosen-weather-logo"/>
          )}
          {showSunday && (
            <img src="images/emojis/sunday.png" className="day-logo"/>
          )}
          {showMonday && (
            <img src="images/emojis/monday.png" className="day-logo"/>
          )}
          {showTuesday && (
            <img src="images/emojis/tuesday.png" className="day-logo"/>
          )}
          {showWednesday && (
            <img src="images/emojis/wednesday.png" className="day-logo"/>
          )}
          {showThursday && (
            <img src="images/emojis/thursday.png" className="day-logo"/>
          )}
          {showFriday && (
            <img src="images/emojis/friday.png" className="day-logo"/>
          )}
          {showSaturday && (
            <img src="images/emojis/saturday.png" className="day-logo"/>
          )}
          {showMonth1 && (
            <img src="images/emojis/month-1.png" className="month-logo"/>
          )}
          {showMonth2 && (
            <img src="images/emojis/month-2.png" className="month-logo"/>
          )}
          {showMonth3 && (
            <img src="images/emojis/month-3.png" className="month-logo"/>
          )}
          {showMonth4 && (
            <img src="images/emojis/month-4.png" className="month-logo"/>
          )}
          {showMonth5 && (
            <img src="images/emojis/month-5.png" className="month-logo"/>
          )}
          {showMonth6 && (
            <img src="images/emojis/month-6.png" className="month-logo"/>
          )}
          {showMonth7 && (
            <img src="images/emojis/month-7.png" className="month-logo"/>
          )}
          {showMonth8 && (
            <img src="images/emojis/month-8.png" className="month-logo"/>
          )}
          {showMonth9 && (
            <img src="images/emojis/month-9.png" className="month-logo"/>
          )}
          {showMonth10 && (
            <img src="images/emojis/month-10.png" className="month-logo"/>
          )}
          {showMonth11 && (
            <img src="images/emojis/month-11.png" className="month-logo"/>
          )}
          {showMonth12 && (
            <img src="images/emojis/month-12.png" className="month-logo"/>
          )}
        </div>
    </div>
  
    </div>
 
    </div>
  );
};

export default MorningMeeting;
