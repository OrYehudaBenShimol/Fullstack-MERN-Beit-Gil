const express = require('express');
const router = express.Router();
const tzivoniScheduleModel = require('../controllers/tzivoniScheduleController');

const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)

// Route for creating a new schedule
router.post('/', tzivoniScheduleModel.createSchedule);

// Route for getting all schedules
router.get('/', tzivoniScheduleModel.getAllSchedules);

// Route for getting a single schedule by ID
router.get('/:id', tzivoniScheduleModel.getScheduleById);

// Route for updating a schedule by ID
router.put('/:id', tzivoniScheduleModel.updateScheduleById);

// Route for deleting a schedule by ID
router.delete('/:id', tzivoniScheduleModel.deleteScheduleById);

module.exports = router;
