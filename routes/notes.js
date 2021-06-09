const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notes'); //moving through files

/* GET home page. */

router.get('/id', noteController.getNoteById);

router.put('/id', noteController.updatingInfo);

router.delete('/id', noteController.deletingNote);

router.post('/', noteController.createNote);



//exports router to use it on app.js
module.exports = router;

//why there is no error handler here ??????
