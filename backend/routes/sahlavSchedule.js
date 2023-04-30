const express = require('express');
const router = express.Router();
const sahlavScheduleModel = require('../controllers/sahlavScheduleController');

const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)

// Route for creating a new schedule
router.post('/', sahlavScheduleModel.createSchedule);

// Route for getting all schedules
router.get('/', sahlavScheduleModel.getAllSchedules);

// Route for getting a single schedule by ID
router.get('/:id', sahlavScheduleModel.getScheduleById);

// Route for updating a schedule by ID
router.put('/:id', sahlavScheduleModel.updateScheduleById);

// Route for deleting a schedule by ID
router.delete('/:id', sahlavScheduleModel.deleteScheduleById);

module.exports = router;
