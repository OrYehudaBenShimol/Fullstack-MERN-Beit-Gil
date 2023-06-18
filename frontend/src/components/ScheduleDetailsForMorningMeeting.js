const ScheduleDetailsForMorningMeeting = ({schedule,title,startTime,endTime}) => {
    
    return(
        <div className="schedule-details">
            <h4><strong>{title}</strong></h4>
            <h5 className="time">{startTime} - {endTime}</h5>
            <img className="manage-schedule-image-morning-meeting" src={"images/schedulePictures/" + schedule.englishTitle + ".png" }/> 
        </div>
    )
}



export default  ScheduleDetailsForMorningMeeting