import React, { useEffect, useContext } from 'react';
import YufaabContext from '../context/YufaabContext';

const Payment = () => {
  const { yufaabInstance } = useContext(YufaabContext);

  const displayRazorpay = async () => {
    const data = await yufaabInstance.makePayment(1);
    const options = {
      key: process.env.REACT_APP_YOUR_KEY_ID,
      currency: data.data.currency,
      amount: data.data.amount,
      description: 'Yufaab Payment',
      order_id: data.data.id,
      async handler(response) {
        console.log(response);
      },
      prefill: {
        name: 'test',
        email: 'test',
        contact: 'test',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript('https://checkout.razorpay.com/v1/checkout.js');
  });

  return (
    <div>
      <button type="button">Back</button>
      <button type="button" onClick={displayRazorpay}>
        Make Payment
      </button>
    </div>
  );
};

export default Payment;
