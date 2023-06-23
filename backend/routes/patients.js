const express = require('express');
const router = express.Router();


// this is for uploading images
const multer = require('multer');
const postPhotoUpload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 4096 * 4096, // no larger than 2mb
    },
    fileFilter: function (req, file, cb) { // this is the file filter for multer to check if the file is an image or not.
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





// GET all patients.
router.get('/', getAllPatients,);

// GET single patients.
router.get('/:id', getSinglelPatient);

// POST a new patients.
router.post('/', /*postPhotoUpload,*/ createNewPatient);

// DELETE a patients.
router.delete('/:id', deletePatient);

// UPDATE a patients.
router.patch('/:id', updatePatient);

router.get('/:id/image', getPatientImage);



module.exports = router;

