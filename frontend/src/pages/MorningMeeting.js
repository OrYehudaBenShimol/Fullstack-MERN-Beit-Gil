import React, { useState, useEffect } from 'react';
import Patient from '../components/Patient';
import ScheduleDetailsForMorningMeeting from '../components/ScheduleDetailsForMorningMeeting';
import { usePatientsContext } from '../hooks/usePatientsContext';
import { useScheduleContext } from '../hooks/useScheduleContext';
import { useAuthContext } from '../hooks/useAuthContext';

const MorningMeeting = () => {
  const { patients, dispatch } = usePatientsContext();
  const { schedules,dispatch:orenDispatch} = useScheduleContext();
  const { user } = useAuthContext();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
  const [showComboBox, setShowComboBox] = useState(false);
  const [patientsToShow, setPatientToShow] = useState([]);
  const [schedulesToShow,setSchedulesToShow] = useState([]);
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
    localStorage.setItem('weather', 'rain')

  }

  function handleWeatherSunny(){
    setShowOthersWeather(false)
    setShowWeatherSunny(true)
    setShowWeatherRain(false)
    setShowWeatherHail(false)
    setShowWeatherLightning(false)
    setShowWeatherWind(false)
    setShowWeatherRainbow(false)
    localStorage.setItem('weather', 'sunny')

  }

  function handleWeatherHail(){
    setShowOthersWeather(false)
    setShowWeatherSunny(false)
    setShowWeatherRain(false)
    setShowWeatherRainbow(false)
    setShowWeatherLightning(false)
    setShowWeatherWind(false)
    setShowWeatherHail(true)
    localStorage.setItem('weather', 'hail')

  }

  function handleWeatherRainbow(){
    setShowOthersWeather(false)
    setShowWeatherSunny(false)
    setShowWeatherRain(false)
    setShowWeatherHail(false)
    setShowWeatherLightning(false)
    setShowWeatherWind(false)
    setShowWeatherRainbow(true)
    localStorage.setItem('weather', 'rainbow')

  }


  function handleWeatherLightning(){
    setShowOthersWeather(false)
    setShowWeatherSunny(false)
    setShowWeatherRain(false)
    setShowWeatherHail(false)
    setShowWeatherRainbow(false)
    setShowWeatherWind(false)
    setShowWeatherLightning(true)
    localStorage.setItem('weather', 'lightning')

  }

  function handleWeatherWind(){
    setShowOthersWeather(false)
    setShowWeatherSunny(false)
    setShowWeatherRain(false)
    setShowWeatherHail(false)
    setShowWeatherRainbow(false)
    setShowWeatherLightning(false)
    setShowWeatherWind(true)
    localStorage.setItem('weather', 'wind')

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
    localStorage.setItem('day', 'day1')

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
    localStorage.setItem('day', 'day2')

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
    localStorage.setItem('day', 'day3')

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
    localStorage.setItem('day', 'day4')

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
    localStorage.setItem('day', 'day5')

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
    localStorage.setItem('day', 'day6')

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
    localStorage.setItem('day', 'day7')

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
    localStorage.setItem('month', 'month1')

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
    localStorage.setItem('month', 'month2')

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
    localStorage.setItem('month', 'month3')

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
    localStorage.setItem('month', 'month4')
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
    localStorage.setItem('month', 'month5')

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
    localStorage.setItem('month', 'month6')

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
    localStorage.setItem('month', 'month7')

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
    localStorage.setItem('month', 'month8')

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
    localStorage.setItem('month', 'month9')

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
    localStorage.setItem('month', 'month10')

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
    localStorage.setItem('month', 'month11')

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

    localStorage.setItem('month', 'month12')
  }
  /* END OF MONTHS HANDLERS */

  async function handleUserTypeChange(event) {
        const patientsByClass =  patients.filter((patient) => patient.classRoom === event.target.value);
        setShowComboBox(true);
        setPatientToShow(patientsByClass);
        // setClassName(event.target.value)
        switch (event.target.value) {
          case 'oren':
            setClassName('אורן');
              break;
          case 'gefen':
            setClassName('גפן');
              break;
          case 'dekel':
            setClassName('דקל');
              break;
          case 'sahlav':
            setClassName('סחלב');
              break;
          case 'tzivoni':
            setClassName('צבעוני');
              break;
          case 'rakefet':
            setClassName('רקפת');
              break;
          default:
              break;
      }

        if(patientsToShow.length === 0){
          setShowLabel(true)
        }else{
          setShowLabel(false)
        }
        let scheduleByDay = null
        switch (event.target.value) {
          case "oren": 
            scheduleByDay =  schedules.filter((schedule)=> schedule.day === currentDayOfWeek && schedule.classRoom === "oren")
            setSchedulesToShow(scheduleByDay)
            break;
          case "gefen":
            scheduleByDay = schedules.filter((schedule)=> schedule.day === currentDayOfWeek && schedule.classRoom === "gefen")
            setSchedulesToShow(scheduleByDay)
            break;
          case "dekel":
            scheduleByDay = schedules.filter((schedule)=> schedule.day === currentDayOfWeek && schedule.classRoom === "dekel")
            setSchedulesToShow(scheduleByDay)
            break;
          case "sahlav":
            scheduleByDay = schedules.filter((schedule)=> schedule.day === currentDayOfWeek && schedule.classRoom === "sahlav")
            setSchedulesToShow(scheduleByDay)
            break;
          case "tzivoni":
            scheduleByDay = schedules.filter((schedule)=> schedule.day === currentDayOfWeek && schedule.classRoom === "tzivoni")
            setSchedulesToShow(scheduleByDay)
            break;
          case "rakefet":
            scheduleByDay = schedules.filter((schedule)=> schedule.day === currentDayOfWeek && schedule.classRoom === "rakefet")
            setSchedulesToShow(scheduleByDay)
            break;
        
          default:
            setSchedulesToShow([])
            break;
        }
  }

  useEffect(() => {
    const fetchPatients = async () => {
      let response = await fetch('/api/morningMeeting', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      let json = await response.json();
      if (response.ok) {

        dispatch({ type: 'SET_PATIENTS', payload: json });
      }

      response = await fetch('/api/schedule', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      json = await response.json();
      if (response.ok) {
       await orenDispatch({ type: 'SET_SCHEDULES', payload: json });
      }

     

    };

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
    if (user) {
        fetchPatients();
   
      switch (localStorage.getItem('day')) {
        case "day1":
          handleSunday()
          break;
        case "day2":
          handleMonday()
          break;
        case "day3":
          handleTuesday()
          break;
        case "day4":
          handleWednesday()
          break;
        case "day5":
          handleThursday()
          break;
        case "day6":
          handleFriday()
          break;
        case "day7":
          handleSaturday()
          break;
        default:
          break;
      }
      switch (localStorage.getItem('month')) {
        case "month1":
          handleMonth1()
          break;
        case "month2":
          handleMonth2()
          break;
        case "month3":
          handleMonth3()
          break;
        case "month4":
          handleMonth4()
          break;
        case "month5":
          handleMonth5()
          break;
        case "month6":
          handleMonth6()
          break;
        case "month7":
          handleMonth7()
          break;
        case "month8":
          handleMonth8()
          break;
        case "month9":
          handleMonth9()
          break;
        case "month10":
          handleMonth10()
          break;
        case "month11":
          handleMonth11()
          break;
        case "month12":
          handleMonth12()
          break;
        default:
          break;
      }

      switch (localStorage.getItem('weather')) {
        case "rain":
          handleWeatherRain()
          break;
        case "wind":
          handleWeatherWind()
          break;
        case "lightning":
          handleWeatherLightning()
          break;
        case "hail":
          handleWeatherHail()
          break;
        case "rainbow":
          handleWeatherRainbow()
          break;
        case "sunny":
          handleWeatherSunny()
          break;
        default:
          break;
      }
    }
  }, [user,dispatch,orenDispatch]);

 
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
          <div className="name-of-classRoom">
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
    <div className='schedules-container'>

      {showComboBox && schedules && (
        
        <div className="schedule-container-morning">
              <label className='daily'>לו"ז יומי</label>

        {schedules.filter(s => s.classRoom === className && s.day === currentDayOfWeek).sort((a, b) => {
          const timeA = new Date(`1970-01-01T${a.startTime}`);
          const timeB = new Date(`1970-01-01T${b.startTime}`);
          return timeA - timeB;
        }).map((schedule) => (
          <ScheduleDetailsForMorningMeeting
            schedule={schedule}
            key={schedule._id}
            title={schedule.title}
            startTime={schedule.startTime}
            endTime={schedule.endTime}
          />
          
        ))}
        
      </div>
      )}
    </div>
  
    </div>
 
    </div>
  );
};

export default MorningMeeting;
