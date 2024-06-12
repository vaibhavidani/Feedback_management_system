import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Feedback {
  name: string;
  feedback: string;
}

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await axios.get('http://localhost:3000/feedback');
      setFeedbacks(response.data);
    };

    fetchFeedback();
  }, []);

  return (
    <div>
     
      <p>After Click on Submit</p><p> Please refresh the page to see Feedback</p>
      <h2>Feedback List</h2>
      {feedbacks.map((fb, index) => (
        <div key={index}>
          <h4>{fb.name}</h4>
          <p>{fb.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
