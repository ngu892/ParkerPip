import React, { useState } from 'react';
import '../styles/ParkingManagement.css';
import { useNavigate } from 'react-router-dom';

function ParkingManagement() {
  const [licensePlate, setLicensePlate] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [availableSpaces, setAvailableSpaces] = useState(50);
  const [notification, setNotification] = useState('');
  const [parkedCars, setParkedCars] = useState({});
  
  const navigate = useNavigate();

  const handleLicensePlateChange = (e) => {
    setLicensePlate(e.target.value);
  };

  const handleParking = () => {
    if (licensePlate === '') {
      setNotification('Please enter your license plate number.');
      return;
    }

    if (availableSpaces <= 0) {
      setNotification('No parking spaces available.');
      return;
    }

    if (parkedCars[licensePlate]) {
      setNotification('Car is already parked.');
      return;
    }

    const startTime = new Date();
    setParkedCars({ ...parkedCars, [licensePlate]: { startTime } });
    setAvailableSpaces(availableSpaces - 1);
    setNotification('Car parked successfully!');
  };

  const handleExit = () => {
    if (!parkedCars[licensePlate]) {
      setNotification('This car is not parked here.');
      return;
    }

    const exitTime = new Date();
    const startTime = parkedCars[licensePlate].startTime;
    const parkedDurationMinutes = Math.floor((exitTime - startTime) / 60000);

    let cost = 0;
    if (parkedDurationMinutes > 30) {
      const hours = Math.ceil((parkedDurationMinutes - 30) / 60);
      cost = Math.min(hours * 5, 30);
    }

    setAvailableSpaces(availableSpaces + 1);
    const updatedParkedCars = { ...parkedCars };
    delete updatedParkedCars[licensePlate];
    setParkedCars(updatedParkedCars);

    setNotification(`Please pay $${cost}.`);

    if (cost > 0) {
      navigate('/pay', { state: { cost, licensePlate } });
    }
  };

  return (
    <div className="parking-management">
      <div className="headerContainer">
        <h1>Parking Management</h1>
        <p>Manage your parking space easily</p>
      </div>

      <div className="contentContainer">
        <h2>Enter License Plate Information</h2>
        <input 
          type="text" 
          value={licensePlate} 
          placeholder="Enter License Plate"
          onChange={handleLicensePlateChange}
        />
        <button onClick={handleParking}>Park</button>
        <button onClick={handleExit}>Exit</button>

        <h2>Available Spaces: {availableSpaces}</h2>
      </div>

      <div className="notificationContainer">
        <h2>Important Notifications</h2>
        <p>{notification}</p>
      </div>
    </div>
  );
}

export default ParkingManagement;
