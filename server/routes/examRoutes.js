const express = require('express');
const { startExam, submitAnswer } = require('../controllers/examController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/start-exam', protect, startExam);
router.post('/submit-answer', protect, submitAnswer);

module.exports = router;
