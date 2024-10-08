import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/ParkingPay.css';

function ParkingPay() {
  const location = useLocation();
  const navigate = useNavigate();

  const { cost, licensePlate } = location.state || { cost: 0, licensePlate: '' };

  const handlePaymentConfirm = () => {
    alert(`Payment of $${cost} for license plate ${licensePlate} successful!`);
    navigate('/'); // 支付成功后重定向回主页面
  };

  return (
    <div className="parking-pay">
      <div className="headerContainer">
        <h1>Payment Details</h1>
        <p>Please confirm your payment for the parking service.</p>
      </div>

      <div className="contentContainer">
        <h2>License Plate: {licensePlate}</h2>
        <h2>Amount Due: ${cost}</h2>
        <button onClick={handlePaymentConfirm}>Confirm Payment</button>
      </div>
    </div>
  );
}

export default ParkingPay;
