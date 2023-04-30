const express = require('express');
const router = express.Router();
const dekelScheduleModel = require('../controllers/dekelScheduleController');

const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)

// Route for creating a new schedule
router.post('/', dekelScheduleModel.createSchedule);

// Route for getting all schedules
router.get('/', dekelScheduleModel.getAllSchedules);

// Route for getting a single schedule by ID
router.get('/:id', dekelScheduleModel.getScheduleById);

// Route for updating a schedule by ID
router.put('/:id', dekelScheduleModel.updateScheduleById);

// Route for deleting a schedule by ID
router.delete('/:id', dekelScheduleModel.deleteScheduleById);

module.exports = router;
