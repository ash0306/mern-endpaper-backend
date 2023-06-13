const express = require('express');
const router = express.Router();
const bookModel = require('../models/booksModel')
const {viewAllBooks} = require('../controllers/allBooks')

router.route('/').get(viewAllBooks);

module.exports = router;