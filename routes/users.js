const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.get('/notes', userController.getAllNotes);

module.exports = router;
