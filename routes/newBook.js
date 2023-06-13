const express = require('express');
const router = express.Router();
const {addnewBook} = require('../controllers/newBook')

router.route('/').post(addnewBook);

module.exports = router;