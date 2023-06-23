const express = require('express');
const router = express.Router();
const allScheduleController = require('../controllers/allScheduleController');

const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)

// Route for creating a new schedule
router.post('/', allScheduleController.createSchedule);

// Route for getting all schedules
router.get('/', allScheduleController.getAllSchedules);

// Route for getting a single schedule by ID
router.get('/:id', allScheduleController.getScheduleById);

// Route for updating a schedule by ID
router.put('/:id', allScheduleController.updateScheduleById);

// Route for deleting a schedule by ID
router.delete('/:id', allScheduleController.deleteScheduleById);

module.exports = router;


