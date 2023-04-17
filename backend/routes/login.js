const express = require('express')
const {loginUser} = require('../controllers/loginController');
const router = express.Router();


//login route
router.post('/',loginUser)


module.exports = router