const express = require('express');
const {
    // controller functions
    createNewUser,
    getAllUsers,
    getSinglelUser,
    deleteUser,
    updateUser,
    getUserByEmail

} = require('../controllers/userController');

// middleware
const requireAuth = require('../middleware/requireAuth')
const router = express.Router();
router.use(requireAuth)


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

// GET user by email.
router.get('/:email', getUserByEmail)

module.exports = router;