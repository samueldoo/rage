'use client'
import React, { useState } from 'react';
import Header from '../header/page';

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import Footer from '../footer/page';

const DonateNow = () => {
  // State variables for donation details
  const [selectedCause, setSelectedCause] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, e.g., send data to server
    console.log('Donation Details:', {
      selectedCause,
      donationAmount,
      paymentMethod,
      ...(paymentMethod === 'paypal' ? { paypalEmail } : { cardNumber, cardExpiry, cardCVC }),
    });
    // Display a success message
    alert('Donation Successful!');
    // Reset form fields after submission
    setSelectedCause('');
    setDonationAmount('');
    setPaymentMethod('');
    setCardNumber('');
    setCardExpiry('');
    setCardCVC('');
    setPaypalEmail('');
  };

  return (
    <main
      style={{
        backgroundImage: 'url("vol1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: '',
      }}
    >
      <Header />
    <section className="container  mx-auto py-[2.83%] px-7">
      <h1 className="text-3xl font-bold mb-8">Donate Now</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1: Choose Cause and Amount */}
        <div className="bg-gray-400 bg-opacity-60 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">Step 1: Choose Cause and Amount</h2>
          {/* Cause selection */}
          <div className="mb-4">
            <label htmlFor="cause" className="block font-semibold mb-2">Choose the cause you want to support:</label>
            <select
              id="cause"
              value={selectedCause}
              onChange={(e) => setSelectedCause(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option className='text-gray-500' value="">Select Cause</option>
              <option className='text-gray-500' value="education">Education</option>
              <option className='text-gray-500' value="enviroment">Enviroment</option>
              <option className='text-gray-500' value="poverty">Poverty</option>
            </select>
          </div>
          {/* Donation amount */}
          <div className="mb-4">
            <label htmlFor="amount" className="block font-semibold mb-2">Enter the amount you wish to donate:</label>
            <input
              type="text"
              id="amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter Amount"
            />
          </div>
        </div>
        {/* Step 2: Select Payment Method */}
        <div className="bg-gray-400 bg-opacity-60 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">Step 2: Select Payment Method</h2>
          {/* Payment method selection */}
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block font-semibold mb-2">Select your preferred payment method:</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option className='text-gray-500' value="">Select Payment Method</option>
              <option className='text-gray-500' value="creditCard">Credit Card</option>
              <option className='text-gray-500' value="debitCard">Debit Card</option>
              <option className='text-gray-500' value="visaCard">Visa Card</option>
              <option className='text-gray-500' value="paypal">PayPal</option>
            </select>
          </div>
          {/* Payment method specific fields */}
          {paymentMethod === 'paypal' && (
            <div>
              <label htmlFor="paypalEmail" className="block font-semibold mb-2">Enter your PayPal email:</label>
              <input
                type="email"
                id="paypalEmail"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter PayPal Email"
              />
            </div>
          )}
          {['creditCard', 'debitCard', 'visaCard'].includes(paymentMethod) && (
            <div>
              <label htmlFor="cardNumber" className="block font-semibold mb-2">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Card Number"
              />
              <label htmlFor="cardExpiry" className="block font-semibold mb-2 mt-4">Expiry Date:</label>
              <input
                type="text"
                id="cardExpiry"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="MM/YY"
              />
              <label htmlFor="cardCVC" className="block font-semibold mb-2 mt-4">CVV:</label>
              <input
                type="text"
                id="cardCVC"
                value={cardCVC}
                onChange={(e) => setCardCVC(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="CVV"
              />
            </div>
          )}
        </div>
        {/* Step 3: Review and Confirm */}
        <div className="bg-gray-400  bg-opacity-60 p-6 rounded-md">
          <h2 className="text-xlfont-bold mb-4">Step 3: Review and Confirm</h2>
          {/* Display donation details for review */}
          <p className="mb-4">Cause: {selectedCause}</p>
          <p className="mb-4">Donation Amount: {donationAmount}</p>
          <p className="mb-4">Payment Method: {paymentMethod}</p>
          {/* Add more donation details for review here */}
          {/* Confirmation button */}
          <button
            onClick={handleSubmit}
            className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
          >
            Confirm Donation
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-[5%]">
            <a
              href="/donationSteps"
              className="inline-flex items-center gap-1 bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700"
            >
            <IoIosArrowRoundBack /> Back
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-1 bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 ml-[2%]"
            >
              Home page <IoIosArrowRoundForward />
            </a>
          </div>
    </section>
    <Footer />
    </main>
  );
};

export default DonateNow;
