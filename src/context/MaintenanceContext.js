import React, { createContext, useState, useContext, useEffect } from 'react';


const MaintenanceContext = createContext();


export const useMaintenance = () => useContext(MaintenanceContext);


export const MaintenanceProvider = ({ children }) => {

  const getInitialRequests = () => {
    const storedRequests = localStorage.getItem('maintenanceRequests');
    return storedRequests ? JSON.parse(storedRequests) : [
      { id: 1, issue: 'Leaking pipe', date: '2024-09-10', status: 'Pending' },
      { id: 2, issue: 'Broken door lock', date: '2024-09-11', status: 'In Progress' },
      { id: 3, issue: 'Malfunctioning air conditioner', date: '2024-09-12', status: 'Completed' }
    ];
  };

  const [requests, setRequests] = useState(getInitialRequests);

  
  useEffect(() => {
    localStorage.setItem('maintenanceRequests', JSON.stringify(requests));
  }, [requests]);

  const updateStatus = (id, newStatus) => {
    setRequests(prevRequests =>
      prevRequests.map(request => 
        request.id === id ? { ...request, status: newStatus } : request
      )
    );
  };

  const addRequest = (newRequest) => {
    const newReq = {
      id: requests.length + 1,
      issue: newRequest,
      date: new Date().toLocaleDateString(),
      status: 'Pending',
    };
    setRequests([...requests, newReq]);
  };

  return (
    <MaintenanceContext.Provider value={{ requests, updateStatus, addRequest }}>
      {children}
    </MaintenanceContext.Provider>
  );
};
