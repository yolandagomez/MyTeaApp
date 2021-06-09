const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.get('/notes/:id', userController.getAllNotes); //(with the id part now the controller should accept an id)
router.get('/greeting', noteController.createGreeting);

module.exports = router;
