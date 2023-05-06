const express = require('express');
const router = express.Router();

const multer = require('multer');
const postPhotoUpload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 4096 * 4096,
    },
    fileFilter: function (req, file, cb) {
        const fname = file.originalname;
        const valid = [
            '.jpg',
            '.png',
            '.jpeg'
        ].find(ext => fname.endsWith(ext));
        cb(null, valid);
    }
}).single('image');


const {
    // controller functions
    getAllPatients,
    getSinglelPatient,
    createNewPatient,
    deletePatient,
    updatePatient,
    getPatientImage
} = require('../controllers/userController');



const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)





// GET all users.
router.get('/', getAllPatients,);

// GET single user.
router.get('/:id', getSinglelPatient);

// POST a new user.
router.post('/', postPhotoUpload , createNewPatient);

// DELETE a user.
router.delete('/:id', deletePatient);

// UPDATE a user.
router.patch('/:id', updatePatient);

router.get('/:id/image', getPatientImage);



module.exports = router;