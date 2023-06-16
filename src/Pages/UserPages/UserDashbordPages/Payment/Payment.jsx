// import React from 'react';
// todo--parsefloat=====
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PaymentFrom from './PaymentFrom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {
  const data = useLoaderData();
  const total = parseFloat(data.price).toFixed(2);
  const price = parseFloat(total);

  return (
    <div>
      <h2 className='text-center pb-5'>Money !!!</h2>
      <Elements stripe={stripePromise}>
        <PaymentFrom newPay={data} price={price}></PaymentFrom>
      </Elements>
    </div>
  );
};

export default Payment;
