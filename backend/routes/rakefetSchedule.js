const express = require('express');
const router = express.Router();
const rakefetScheduleController = require('../controllers/rakefetScheduleController');

const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)

// Route for creating a new schedule
router.post('/', rakefetScheduleController.createSchedule);

// Route for getting all schedules
router.get('/', rakefetScheduleController.getAllSchedules);

// Route for getting a single schedule by ID
router.get('/:id', rakefetScheduleController.getScheduleById);

// Route for updating a schedule by ID
router.put('/:id', rakefetScheduleController.updateScheduleById);

// Route for deleting a schedule by ID
router.delete('/:id', rakefetScheduleController.deleteScheduleById);

module.exports = router;
