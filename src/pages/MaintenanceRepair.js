import React from 'react';
import { useMaintenance } from '../context/MaintenanceContext'; 

const MaintenanceRepair = () => {

  const { requests, updateStatus } = useMaintenance();

 
  const pendingCount = requests.filter(request => request.status === 'Pending').length;
  const inProgressCount = requests.filter(request => request.status === 'In Progress').length;
  const completedCount = requests.filter(request => request.status === 'Completed').length;

  return (
    <div>
      <h2>Maintenance and Repair Management</h2>
      <p>Handles daily maintenance and repair requests for the property, tracks the progress of issue resolution.</p>

      <table>
        <thead>
          <tr>
            <th>Issue</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.issue}</td>
              <td>{request.date}</td>
              <td>{request.status}</td>
              <td>
                {request.status === 'Completed' ? (
                  <button disabled>Completed</button>
                ) : (
                  <>
                    <button onClick={() => updateStatus(request.id, 'In Progress')}>Start</button>
                    <button onClick={() => updateStatus(request.id, 'Completed')}>Complete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h3>Pending Requests: {pendingCount}</h3>
        <h3>In Progress Requests: {inProgressCount}</h3>
        <h3>Completed Requests: {completedCount}</h3>
      </div>
    </div>
  );
};

export default MaintenanceRepair;
