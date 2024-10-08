// src/context/PaymentContext.js
import React, { createContext, useState, useEffect } from 'react';

// 创建支付上下文
export const PaymentContext = createContext();

// 创建支付上下文提供者组件
export const PaymentProvider = ({ children }) => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  // 从 localStorage 加载历史记录
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('paymentHistory')) || [];
    setPaymentHistory(storedHistory);
  }, []);

  // 添加支付记录，同时保存到 localStorage
  const addPaymentRecord = (paymentRecord) => {
    const updatedHistory = [...paymentHistory, paymentRecord];
    setPaymentHistory(updatedHistory);
    localStorage.setItem('paymentHistory', JSON.stringify(updatedHistory)); // 保存到 localStorage
  };

  return (
    <PaymentContext.Provider value={{ paymentHistory, addPaymentRecord }}>
      {children}
    </PaymentContext.Provider>
  );
};
