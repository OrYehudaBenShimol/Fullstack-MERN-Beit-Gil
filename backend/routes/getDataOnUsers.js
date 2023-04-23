const express = require('express');
const router = express.Router();
const {
    getSinglelUser
} = require('../controllers/getUserDataController');


const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)


// GET single user.
router.get('/:email', getSinglelUser);




module.exports = router;