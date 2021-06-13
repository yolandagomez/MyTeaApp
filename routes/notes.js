const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notes'); //moving through files
const authorization = require('../middleware/authorization');

/* GET home page. */

router.get('/id', authorization.allowedTo, noteController.getNoteById);

router.put('/id', authorization.allowedTo, noteController.updatingInfo);

router.delete('/id', authorization.allowedTo, noteController.deletingNote);

router.post('/', authorization.allowedTo, noteController.createNote);

router.get('/id', authorization.allowedTo, noteController.getNoteById); //use this to test on postman


//exports router to use it on app.js
module.exports = router;

//why there is no error handler here ??????
