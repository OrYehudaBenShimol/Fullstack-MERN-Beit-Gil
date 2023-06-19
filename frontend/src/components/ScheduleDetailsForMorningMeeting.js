const ScheduleDetailsForMorningMeeting = ({schedule,title,startTime,endTime}) => {
    
    // this component is used in the MorningMeeting component to show the details of the schedule.
    return(
        <div className="schedule-details">
            <h4><strong>{title}</strong></h4>
            <h5 className="time">{startTime} - {endTime}</h5>
            <img className="manage-schedule-image-morning-meeting" src={"images/schedulePictures/" + schedule.englishTitle + ".png" }/> 
        </div>
    )
}



export default  ScheduleDetailsForMorningMeeting