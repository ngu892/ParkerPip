import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PaymentContext } from '../context/PaymentContext';
import '../styles/PaymentMethods.css'; 

const PaymentMethods = () => {
  const navigate = useNavigate();
  const { addPaymentRecord } = useContext(PaymentContext); 

  const handlePayment = (method) => {
    
    const newPayment = {
      type: 'Management Fee', 
      amount: 100, 
      paymentDate: new Date().toLocaleDateString(),
      method,
    };

   
    addPaymentRecord(newPayment);

  
    navigate('/paymenthistory');
  };

  return (
    <div className="container">
      <h2>Select Payment Method</h2>
      <button onClick={() => handlePayment('Credit Card')}>Credit Card</button>
      <button onClick={() => handlePayment('PayPal')}>PayPal</button>
      <button onClick={() => handlePayment('Bank Transfer')}>Bank Transfer</button>
    </div>
  );
};

export default PaymentMethods;
