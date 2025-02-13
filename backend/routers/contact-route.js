const express = require('express');
const createContact = require('../controllers/contact-controller');
const router = express.Router();

router.post('/create-contact', createContact);

module.exports = router;