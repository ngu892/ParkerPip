import React, { useState } from 'react';
import '../styles/RenovationManagement.css';

function RenovationManagement() {
  const [timeSlots, setTimeSlots] = useState([
    { day: 'Monday', time: '10 AM - 12 PM', booked: false },
    { day: 'Tuesday', time: '2 PM - 4 PM', booked: false },
    { day: 'Wednesday', time: '1 PM - 3 PM', booked: false },
  ]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleBooking = (index) => {
    setTimeSlots(prevSlots =>
      prevSlots.map((slot, i) => 
        i === index ? { ...slot, booked: true } : slot
      )
    );
    setSelectedSlot(timeSlots[index]);
  };

  const handleCancelBooking = () => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setTimeSlots(prevSlots =>
        prevSlots.map(slot =>
          slot === selectedSlot ? { ...slot, booked: false } : slot
        )
      );
      setSelectedSlot(null);
    }
  };

  return (
    <div className="renovation-management">
      <div className="headerContainer">
        <h1>Renovation Management</h1>
        <p>Book your renovation slots easily.</p>
      </div>

      <div className="contentContainer">
        <h2>Available Time Slots</h2>
        <ul className="timeSlots">
          {timeSlots.map((slot, index) => (
            <li key={index} className={slot.booked ? 'booked' : ''}>
              {slot.day}: {slot.time} 
              {!slot.booked ? (
                <button onClick={() => handleBooking(index)}>Book</button>
              ) : (
                <span style={{ color: 'red' }}> (Booked)</span>
              )}
            </li>
          ))}
        </ul>
        {selectedSlot && (
          <div className="bookingInfo">
            <h3>Your Booking</h3>
            <p>
              You have booked a slot on {selectedSlot.day} from {selectedSlot.time}.
            </p>
            <button className="cancel-button" onClick={handleCancelBooking}>Cancel Booking</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RenovationManagement;
