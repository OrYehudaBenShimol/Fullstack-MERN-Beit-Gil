const SahlavSchedule = require('../models/sahlavScheduleModel');

// Controller function for creating a new schedule
exports.createSchedule = async (req, res) => {
  try {
    const newSchedule = new SahlavSchedule({
      title: req.body.title,
      day: req.body.day,
      startTime: req.body.startTime,
      endTime: req.body.endTime
    });

    const savedSchedule = await newSchedule.save();
    res.status(201).json(savedSchedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:error.message});
  }
};

// Controller function for getting all schedules for a day
exports.getAllSchedules = async (req, res) => {
  try {
    const schedules = await SahlavSchedule.find({day:req.body.day});
    res.json(schedules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:error.message });
  }
};

// Controller function for getting a single schedule by ID
exports.getScheduleById = async (req, res) => {
  try {
    const schedule = await SahlavSchedule.findById(req.params.id);
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
exports.updateScheduleById = async (req, res) => {
  try {
    const updatedSchedule = await SahlavSchedule.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        day: req.body.day,
        startTime: req.body.startTime,
        endTime: req.body.endTime
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
exports.deleteScheduleById = async (req, res) => {
  try {
    const deletedSchedule = await SahlavSchedule.findByIdAndDelete(req.params.id);
    if (!deletedSchedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    res.json(deletedSchedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:error.message });
  }
};
