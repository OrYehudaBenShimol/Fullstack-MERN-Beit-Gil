const express = require('express');
const router = express.Router();
const {
    // for patients
    getAllPatients,
    getSinglelPatient,
    createNewPatient,
    deletePatient,
    updatePatient
} = require('../controllers/userController');

// GET all users.
router.get('/', getAllPatients,);

// GET single user.
router.get('/:id', getSinglelPatient);

// POST a new user.
router.post('/', createNewPatient);

// DELETE a user.
router.delete('/:id', deletePatient);

// UPDATE a user.
router.patch('/:id', updatePatient);



module.exports = router;