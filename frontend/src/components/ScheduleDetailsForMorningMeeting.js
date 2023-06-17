const ScheduleDetailsForMorningMeeting = ({schedule,title,startTime,endTime}) => {
    
    return(
        <div className="schedule-details">
            <h4><strong>{title}</strong></h4>
            <p>{startTime} - {endTime}</p>
            <img className="manage-schedule-image" src={"images/schedulePictures/" + schedule.englishTitle + ".png" }/> 
        </div>
    )
}



export default  ScheduleDetailsForMorningMeeting