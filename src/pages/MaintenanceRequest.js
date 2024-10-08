import React, { useState } from 'react';
import { useMaintenance } from '../context/MaintenanceContext';
import '../styles/MaintenanceRequest.css';  

const MaintenanceRequest = () => {
  const [newRequest, setNewRequest] = useState('');
  const { requests, addRequest } = useMaintenance();

  const handleSubmitRequest = () => {
    if (newRequest) {
      addRequest(newRequest);
      setNewRequest('');
    }
  };

  return (
    <div className="maintenance-request-container">
      {/* <h2>Submit a Maintenance Request</h2> */}

      <h2>Your Maintenance Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Issue</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.issue}</td>
              <td>{request.date}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="submit-request">
        <input
          type="text"
          placeholder="Enter issue description"
          value={newRequest}
          onChange={(e) => setNewRequest(e.target.value)}
        />
        <button onClick={handleSubmitRequest}>Submit</button>
      </div>
    </div>
  );
};

export default MaintenanceRequest;
