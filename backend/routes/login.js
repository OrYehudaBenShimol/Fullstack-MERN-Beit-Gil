const express = require('express')
const router = express.Router();
const {
    // controller function
    loginUser
} = require('../controllers/loginController');

//login route
router.post('/',loginUser)


module.exports = router