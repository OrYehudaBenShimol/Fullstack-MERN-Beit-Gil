const express = require('express')
const router = express.Router();
const {
    // for managers and employees
    loginUser
} = require('../controllers/loginController');

//login route
router.post('/',loginUser)


module.exports = router