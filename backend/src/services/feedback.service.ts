import Feedback from '../models/feedback.model';

class FeedbackService {
  private feedbacks: Feedback[] = [];

  getAllFeedback(): Feedback[] {
    return this.feedbacks;
  }

  addFeedback(name: string, feedback: string): boolean {
    this.feedbacks.push(new Feedback(name, feedback));
    return true;
  }
}

export default new FeedbackService();
