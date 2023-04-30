const express = require('express');
const router = express.Router();
const gefenScheduleModel = require('../controllers/gefenScheduleController');

const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)

// Route for creating a new schedule
router.post('/', gefenScheduleModel.createSchedule);

// Route for getting all schedules
router.get('/', gefenScheduleModel.getAllSchedules);

// Route for getting a single schedule by ID
router.get('/:id', gefenScheduleModel.getScheduleById);

// Route for updating a schedule by ID
router.put('/:id', gefenScheduleModel.updateScheduleById);

// Route for deleting a schedule by ID
router.delete('/:id', gefenScheduleModel.deleteScheduleById);

module.exports = router;
