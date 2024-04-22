'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import SignUp from '@/app/signUp/page';
import SignIn from '@/app/signIn/page';

const Header = ({ isLoggedIn, onLogin, onLogout }) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpSuccess, setShowSignUpSuccess] = useState(false);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);

  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleSignUpSuccess = () => {
    setShowSignUpSuccess(true);
    setTimeout(() => {
      setShowSignUpSuccess(false);
      setShowSignUpModal(false);
    }, 3000);
  };

  const handleLoginSuccess = () => {
    setShowLoginSuccess(true);
    setTimeout(() => {
      setShowLoginSuccess(false);
      setShowLoginModal(false);
    }, 3000);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="ml-4">
          <Link href="/" className="no-underline">
            <p className="text-2xl font-bold hover:text-gray-600">
              R.A.G.E
            </p>
          </Link>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link
                href="/aboutSection"
                className="text-gray-600 hover:text-blue-600 hover:underline transition duration-300 delay-100 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/volunteerSignupPage"
                className="text-gray-600 hover:text-blue-600 hover:underline transition duration-300 delay-100 ease-in-out"
              >
                Volunteer
              </Link>
            </li>
            <li>
              <Link
                href="/causesSection"
                className="text-gray-600 hover:text-blue-600 hover:underline transition duration-300 delay-100 ease-in-out"
              >
                Causes
              </Link>
            </li>
            <li>
              <Link
                href="/donationSteps"
                className="text-gray-600 hover:text-blue-600 hover:underline transition duration-300 delay-100 ease-in-out"
              >
                Donate
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex mt-4 md:mt-0 mr-4">
          {!isLoggedIn && (
            <>
              <button
                onClick={toggleSignUpModal}
                className="text-gray-600 hover:text-blue-600 hover:underline transition duration-300 delay-100 ease-in-out mr-2"
              >
                Sign Up
              </button>
              <button
                onClick={toggleLoginModal}
                className="text-gray-600 hover:text-blue-600 hover:underline transition duration-300 delay-100 ease-in-out"
              >
                Login
              </button>
            </>
          )}
          {isLoggedIn && (
            <button
              onClick={onLogout}
              className="text-gray-600 hover:text-blue-600 hover:underline transition duration-300 delay-100 ease-in-out"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Success pop-ups */}
      {showSignUpSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4">
          Signup successful!
          <button onClick={() => setShowSignUpSuccess(false)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 5.652a.5.5 0 0 1 .708.708L10.707 10l4.35 4.35a.5.5 0 1 1-.708.708L10 10.707l-4.35 4.35a.5.5 0 1 1-.708-.708L9.293 10 4.643 5.65a.5.5 0 0 1 .708-.708L10 9.293l4.35-4.35z"/></svg>
          </button>
        </div>
      )}
      {showLoginSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4">
          Login successful!
          <button onClick={() => setShowLoginSuccess(false)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 5.652a.5.5 0 0 1 .708.708L10.707 10l4.35 4.35a.5.5 0 1 1-.708.708L10 10.707l-4.35 4.35a.5.5 0 1 1-.708-.708L9.293 10 4.643 5.65a.5.5 0 0 1 .708-.708L10 9.293l4.35-4.35z"/></svg>
          </button>
        </div>
      )}

      {/* Modals */}
      {showSignUpModal && <SignUp onClose={toggleSignUpModal} onSignUp={handleSignUpSuccess} />}
      {showLoginModal && <SignIn onClose={toggleLoginModal} onLogin={handleLoginSuccess} />}
    </header>
  );
};

export default Header;

