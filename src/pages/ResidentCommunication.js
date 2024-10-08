import React, { useState } from 'react';
import '../styles/ResidentCommunication.css';


function ResidentCommunication() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    setMessages([...messages, { text: newMessage, timestamp: new Date() }]);
    setNewMessage('');
  };

  return (
    <div className="resident-communication">
      <div className="headerContainer">
        <h1>Resident Communication</h1>
        <p>Stay in touch with property management securely.</p>
      </div>
      <div className="messageContainer">
        <h2>Messages</h2>
        <div className="messageList">
          {messages.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className="message">
                <p>{msg.text}</p>
                <small>{msg.timestamp.toString()}</small>
              </div>
            ))
          )}
        </div>
        <div className="newMessage">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send Message</button>
        </div>
      </div>
      <div className="notificationContainer">
        <h2>Community Events & Updates</h2>
        <p>You are all caught up with the latest events and updates in your building!</p>
        {/**/}
      </div>
    </div>
  );
}

export default ResidentCommunication;
