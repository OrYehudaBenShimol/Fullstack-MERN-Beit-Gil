import { useEffect, useState} from "react"
import {usePatientsContext} from '../hooks/usePatientsContext'
import {useAuthContext} from '../hooks/useAuthContext'
import Loading from '../components/loading';
import StatisticsDetails from "../components/StatisticsDetails"
import { useStatisticsContext } from "../hooks/useStatisticsContext";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


// This component is used to show the statistics page.
const Statistics = () => {

    const {statistics,dispatch} = useStatisticsContext();
    const {user} = useAuthContext();
    const [className,setClassName] = useState('');
    const [showClassChoose,setShowClassChoose] = useState(true)
    const [showUserChoose,setShowUserChoose] = useState(false)
    const [userID,setUserID] = useState('')
    const [show,setShow] = useState(false)
    

    function handleClassRoomChange(event) {
        setClassName(event.target.value);
        setShowUserChoose(true);
    }

    function handleUserID(event) {
        setUserID(event.target.value);
    }



    
    useEffect(()=>{ 
        const fetchStatistics = async() =>{
            const response = await fetch('/api/statistics',{
                method:"GET",
                headers:{
                    'Authorization': `Bearer ${user.token}`
                },
            })
            const json = await response.json()
            if(response.ok){
                dispatch({type: 'SET_STATISTICS', payload: json},)
            }
        }

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

        if(user){
            fetchStatistics()
        }        
    },[dispatch,user]);


    // handleExport is a function which is called when the user clicks on the export button.
    // This function exports the statistics to an excel file
    const handleExport = () => {
        const fieldMapping = {
            id: 'מספר זיהוי',
            hebrewName: 'שם בעברית',
            arrived: 'הגיע',
            classRoom: 'כיתה',
            updatedAt: 'עודכן בתאריך',
            feeling: 'תחושה',
          };
        
          // Modify the field names in the data to Hebrew
          const modifiedData = statistics.map((item) => {
            const modifiedItem = {};
            for (const key in item) {
              if (fieldMapping[key]) {
                modifiedItem[fieldMapping[key]] = item[key];
              }
            }
            return modifiedItem;
          });
        const sheet = XLSX.utils.json_to_sheet(modifiedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, sheet, 'דיווח נוכחות כללי');
    
        // Generate the Excel file with styles
        const excelFile = XLSX.write(workbook, {
          bookType: 'xlsx',
          bookSST: false,
          type: 'array',
          cellStyles: true,
        });
    
        // Convert the array buffer to a Blob
        const blob = new Blob([excelFile], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
        // Save the file using FileSaver.js
        saveAs(blob, 'דוח נוכחות.xlsx');
      };

    return(
        <div className="Patients-Statistics">
            <div>

                {!statistics && <Loading />}

                {/* {showClassChoose && (
                    <select id="user-type" className="chooseTypeStatistics" value={className} onChange={handleClassRoomChange}>
                        <option value="empty">כיתה</option>
                        <option value="oren">אורן</option>
                        <option value="gefen">גפן</option>
                        <option value="dekel">דקל</option>
                        <option value="sahlav">סחלב</option>
                        <option value="tzivoni">צבעוני</option>
                        <option value="rakefet">רקפת</option>
                    </select>
                    
                    
                )}
                    {showUserChoose && (
                    <select id="user-type" className="chooseTypeStatistics" value={userID} onChange={handleUserID}>
                        <option value="empty">מקבל שירות</option>
                        {statistics
                            .filter((s) => s.classRoom === className)
                            .filter((stat, index, self) => self.findIndex((s) => s.id === stat.id) === index)
                            .map((stat) => (
                            <option value={stat.id}> {stat.hebrewName + " " + stat.id} </option>
                            ))}
                        </select>
                )}

                <br/>
                <br/> */}

                {statistics && (
                    <div className="patients-export-div">
                        <button className="export-to-xlsx" onClick={handleExport}>הפקת דו"ח נוכחות</button>
                    </div>
                )}

            {/* <div className="patients">
                {userID && className && statistics.filter(s => s.classRoom === className && s.id == userID).map((stat) => (
                    <div className="patient-container" key={stat._id}>
                        <StatisticsDetails stat={stat} />
                    </div>
                ))}
                </div> */}
            </div>
        </div>
    )
}




export default Statistics