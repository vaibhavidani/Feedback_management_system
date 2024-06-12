import express from 'express';
import FeedbackService from '../services/feedback.service';

const router = express.Router();

router.get('/', (req, res) => {
  const feedbacks = FeedbackService.getAllFeedback();
  res.json(feedbacks);
});

router.post('/', (req, res) => {
  const { name, feedback } = req.body;
  if (FeedbackService.addFeedback(name, feedback)) {
    res.status(201).json({ message: 'Feedback added successfully' });
  } else {
    res.status(400).json({ message: 'Failed to add feedback' });
  }
});

export default router;
