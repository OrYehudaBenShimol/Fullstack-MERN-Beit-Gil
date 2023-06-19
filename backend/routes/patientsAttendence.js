const express = require('express');
const router = express.Router();
const {
    // controller functions
    getAllPatients,
    updatePatientAttendence
    
} = require('../controllers/attendenceController');

// middleware
const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)


// GET all users.
router.get('/', getAllPatients,);

// POST a new user.
router.post('/', updatePatientAttendence);



module.exports = router;