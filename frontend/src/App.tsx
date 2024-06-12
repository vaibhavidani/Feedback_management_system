import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

const App: React.FC = () => {
  return (
    <div><center>
      <h1>Feedback Management System</h1>
      <FeedbackForm />
      <FeedbackList />
      </center>
    </div>
  );
};

export default App;
