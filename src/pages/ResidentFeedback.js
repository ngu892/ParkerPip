import React, { useState } from 'react';
import '../styles/ResidentFeedback.css';


function ResidentFeedback() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('Complaint');

  const handleFeedbackSubmit = () => {
    if (newFeedback.trim() === '') {
      alert("Feedback cannot be empty");
      return;
    }
    
    
    setFeedbackList([
      ...feedbackList, 
      { 
        text: newFeedback, 
        type: feedbackType, 
        timestamp: new Date(), 
        status: 'Pending' 
      }
    ]);

    
    setNewFeedback('');
    setFeedbackType('Complaint');
  };

  return (
    <div className="resident-feedback">
      <div className="headerContainer">
        <h1>Resident Feedback & Complaints</h1>
        <p>Submit your feedback and complaints confidentially.</p>
      </div>
      <div className="feedbackContainer">
        <h2>Your Feedback and Complaints</h2>
        <div className="feedbackList">
          {feedbackList.length === 0 ? (
            <p>No feedback or complaints yet.</p>
          ) : (
            feedbackList.map((feedback, index) => (
              <div key={index} className="feedback">
                <p><strong>Type:</strong> {feedback.type}</p> {/* Display Feedback Type */}
                <p>{feedback.text}</p>
                <small>{feedback.timestamp.toString()}</small>
                <p><strong>Status:</strong> {feedback.status}</p> {/* Display Feedback Type */}
              </div>
            ))
          )}
        </div>

        <div className="newFeedback">
          {/* Feedback type selection */}
          <select 
            value={feedbackType} 
            onChange={(e) => setFeedbackType(e.target.value)}
          >
            <option value="Complaint">Complaint</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Other">Other</option>
          </select>

          {/* Feedback content input box */}
          <textarea
            value={newFeedback}
            onChange={(e) => setNewFeedback(e.target.value)}
            placeholder="Enter your feedback or complaint..."
          />
          <button onClick={handleFeedbackSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ResidentFeedback;
