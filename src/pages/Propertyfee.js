import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PropertyFee.css'; 

const PropertyFee = () => {
  const [fees, setFees] = useState([
    { id: 1, type: 'Management Fee', amount: 100, dueDate: '2024-09-30', paid: false },
    { id: 2, type: 'Maintenance Fee', amount: 50, dueDate: '2024-09-15', paid: false },
    { id: 3, type: 'Other Fee', amount: 30, dueDate: '2024-10-01', paid: false }
  ]);

  const [paidTotal, setPaidTotal] = useState(0);
  const [remainingTotal, setRemainingTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const paid = fees.reduce((acc, fee) => (fee.paid ? acc + fee.amount : acc), 0);
    const remaining = fees.reduce((acc, fee) => (!fee.paid ? acc + fee.amount : acc), 0);
    setPaidTotal(paid);
    setRemainingTotal(remaining);
  }, [fees]);

  const handlePayment = (id) => {
    const feeToPay = fees.find(fee => fee.id === id);
    navigate('/paymentmethods', { state: { fee: feeToPay } });
  };

  const addFee = () => {
    const newFee = {
      id: fees.length + 1,
      type: 'New Generated Fee',
      amount: Math.floor(Math.random() * 200 + 50),
      dueDate: '2024-12-01',
      paid: false
    };
    setFees([...fees, newFee]);
  };

  const goToPaymentHistory = () => {
    navigate('/paymenthistory');
  };

  return (
    <div className="container">
      <h2>Property Fee Management</h2>
      <p>Manage and collect various property-related fees, like management fees, maintenance fees, and other charges.</p>
      
      <table>
        <thead>
          <tr>
            <th>Fee Type</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee) => (
            <tr key={fee.id}>
              <td>{fee.type}</td>
              <td>${fee.amount}</td>
              <td>{fee.dueDate}</td>
              <td>{fee.paid ? 'Paid' : 'Unpaid'}</td>
              <td className="actions">
                {fee.paid ? (
                  <button disabled>Paid</button>
                ) : (
                  <button onClick={() => handlePayment(fee.id)}>Pay Now</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-section">
        <h3>Total Fees Paid: ${paidTotal}</h3>
        <h3>Remaining Fees: ${remainingTotal}</h3>
      </div>

      <button onClick={addFee}>Generate New Fee</button>
      <button onClick={goToPaymentHistory}>View Payment History</button>

      <div className="need-help">
        <h4>Need Help?</h4>
        <p>For any issues with payment or fees, please contact the property management office.</p>
      </div>
    </div>
  );
};

export default PropertyFee;
