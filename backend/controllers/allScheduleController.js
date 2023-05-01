const AllSchedule = require('../models/allScheduleModel');

// Controller function for creating a new schedule
module.exports.createSchedule = async (req, res) => {
  try {
    const {title,startTime,endTime} = req.body
    let emptyFields = [];
    if(!title){
      emptyFields.push('title')
    }
    if(!startTime){
      emptyFields.push('startTime')
    }
    if(!endTime){
      emptyFields.push('endTime')
    }


    if(emptyFields.length >0){
      return res.status(400).json({error:'נא למלא את כל השדות באדום', emptyFields})
    }
    const newSchedule = new AllSchedule({
      title: req.body.title,
      day: req.body.day,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      classRoom:req.body.classRoom
    });

    const savedSchedule = await newSchedule.save();
    res.status(201).json(savedSchedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:error.message});
  }
};

// Controller function for getting all schedules for a day
module.exports.getAllSchedules = async (req, res) => {
  try {
    const schedules = await AllSchedule.find({});
    res.json(schedules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:error.message });
  }
};

// Controller function for getting a single schedule by ID
module.exports.getScheduleById = async (req, res) => {
  try {
    const schedule = await AllSchedule.findById(req.params.id);
    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    res.json(schedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:error.message });
  }
};

// Controller function for updating a schedule by ID
module.exports.updateScheduleById = async (req, res) => {
  try {
    const updatedSchedule = await AllSchedule.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        day: req.body.day,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        classRoom:req.body.classRoom
      },
      { new: true }
    );
    if (!updatedSchedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    res.json(updatedSchedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:error.message });
  }
};

// Controller function for deleting a schedule by ID
module.exports.deleteScheduleById = async (req, res) => {
  try {
    const deletedSchedule = await AllSchedule.findByIdAndDelete(req.params.id);
    if (!deletedSchedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    res.json(deletedSchedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:error.message });
  }
};
