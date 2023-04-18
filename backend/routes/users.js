const express = require('express');
const router = express.Router();
const {
    // for managers and employees
    createNewUser,
    getAllUsers,
    getSinglelUser,
    deleteUser,
    updateUser,

} = require('../controllers/userController');

// GET all users.
router.get('/', getAllUsers);

// GET single user.
router.get('/:id', getSinglelUser);

// POST a new user.
router.post('/', createNewUser);

// DELETE a user.
router.delete('/:id', deleteUser);

// UPDATE a user.
router.patch('/:id', updateUser);

module.exports = router;