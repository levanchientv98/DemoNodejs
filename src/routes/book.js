const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/book');

router.get('/books',bookControllers.getAllBooks);
module.exports = router;