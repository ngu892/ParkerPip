import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { PaymentContext } from '../context/PaymentContext'; 

const PaymentHistory = () => {
  const { paymentHistory } = useContext(PaymentContext); 
  const navigate = useNavigate(); 

  
  const handleBack = () => {
    navigate('/propertyfee');
  };

  return (
    <div>
      <h2>Payment History</h2>
      <table>
        <thead>
          <tr>
            <th>Fee Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Method</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment, index) => (
            <tr key={index}>
              <td>{payment.type}</td>
              <td>${payment.amount}</td>
              <td>{payment.paymentDate}</td>
              <td>{payment.method}</td>
            </tr>
          ))}
        </tbody>
      </table>

     
      <button onClick={handleBack} style={{ marginTop: '20px' }}>
        Return to Property Fee Management
      </button>
    </div>
  );
};

export default PaymentHistory;
