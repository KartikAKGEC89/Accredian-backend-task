const express = require('express');
const { Register } = require('../controller/Users');

const router = express.Router();

router.post('/users', Register);

module.exports = router;