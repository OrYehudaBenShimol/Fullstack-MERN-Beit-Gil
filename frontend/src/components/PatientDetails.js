const PatientDetails = ({patient}) => {
    return(
        <div className="patient-details">
            <h4>{patient.hebrewName}</h4>
            <p>{patient.name}<strong> :שם באנגלית </strong></p>
            <p><strong>תעודת זהות: </strong>{patient.id}</p>
            <p><strong>טלפון: </strong>{patient.cellphone}</p>
            <p>{patient.role}<strong> :תפקיד</strong></p>
            <p>{patient.classRoom} כיתה:</p>
        </div>
    )
}



export default  PatientDetails