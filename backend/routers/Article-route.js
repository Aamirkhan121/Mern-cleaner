const express = require('express');
const createArticle = require('../controllers/article-controller');
// const upload = require('../middleware/clodinary-middleware');
const { getArticle, getArticleById } = require('../controllers/get-article-controller');
const sendMail  = require('../controllers/email-controller');
const router = express.Router();

router.post('/create-article',createArticle);
router.get('/get-article', getArticle);
router.get('/get-article/:id', getArticleById);
router.post("/sendmail",sendMail)


module.exports = router;