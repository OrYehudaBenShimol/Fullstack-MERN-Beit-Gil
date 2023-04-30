const express = require('express');
const router = express.Router();
const orenScheduleController = require('../controllers/orenScheduleController');

const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)

// Route for creating a new schedule
router.post('/', orenScheduleController.createSchedule);

// Route for getting all schedules
router.get('/', orenScheduleController.getAllSchedules);

// Route for getting a single schedule by ID
router.get('/:id', orenScheduleController.getScheduleById);

// Route for updating a schedule by ID
router.put('/:id', orenScheduleController.updateScheduleById);

// Route for deleting a schedule by ID
router.delete('/:id', orenScheduleController.deleteScheduleById);

module.exports = router;
