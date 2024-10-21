const Question = require('../models/Question');

// Start exam (fetch first 3 questions)
const startExam = async (req, res) => {
  try {
    const questions = await Question.find().limit(3);
    res.json({ questions });
  } catch (err) {
    res.status(500).json({ error: 'Failed to start exam' });
  }
};

// Submit answer
const submitAnswer = async (req, res) => {
  const { questionId, answer } = req.body;
  try {
    // Here you would save the answer to the database
    res.json({ message: 'Answer submitted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit answer' });
  }
};

module.exports = { startExam, submitAnswer };
