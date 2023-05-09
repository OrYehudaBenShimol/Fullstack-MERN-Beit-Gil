const fs = require('fs');


const getAllData = async (req,res) =>{
    fs.readFile('./morning-meeting.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const tempData = "[" + data + "]"
        const jsonData =  JSON.parse(tempData)
        // const filteredData = jsonData.filter(obj => obj.id === id);
        res.status(200).json(jsonData);
      });  
}


module.exports = {
    getAllData,
}