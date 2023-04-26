const express = require('express')
const router = express.Router();
const {
    // controller function
    createNewPatient,
    getSinglelPatient,
    getAllPatients,
    updatePatient
} = require('../controllers/morningMeetingController');

const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)

//morning meeting route
router.get('/',getAllPatients)

router.get('/:id',getSinglelPatient)

router.post('/', updatePatient);



module.exports = router