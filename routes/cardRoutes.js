// routes/cardRoutes.js
const express = require('express');
const { addCard, getCardById } = require('../controllers/cardController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, addCard);
router.get('/:id', authMiddleware, getCardById);

module.exports = router;
