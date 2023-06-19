const express = require('express');
const router = express.Router();
const {
    // controller functions
    getAllData,
    getSinglelPatient
} = require('../controllers/statisticsController');


// middleware
const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)


// GET all patients data.
router.get('/', getAllData,);

module.exports = router;