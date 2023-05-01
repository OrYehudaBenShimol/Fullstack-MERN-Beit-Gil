const ScheduleDetailsForMorningMeeting = ({title,startTime,endTime}) => {
    
    return(
        <div className="schedule-details">
            <h4><strong>{title}</strong></h4>
            <p>{startTime} - {endTime}</p>
        </div>
    )
}



export default  ScheduleDetailsForMorningMeeting