'use client'
import Header from './header/page';
import Footer from './footer/page';
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from 'react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your actual login logic here (e.g., API call, form validation)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your actual logout logic here (e.g., clearing user data)
    setIsLoggedIn(false);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header
      isLoggedIn={isLoggedIn}
      onLogin={handleLogin}
      onLogout={handleLogout}
       />
      <div
        className="flex-grow text-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("img1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white max-w-3xl bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">
            Empowering Nigerian Children Through Education
          </h1>
          <p className="text-lg mb-8">
            Join our mission to provide free education for one million Nigerian
            children between the ages of 3 to 17 years.
          </p>
          <p className="text-center text-sm mx-auto mb-8">
            In order to achieve our goal of providing free education for one
            million Nigerian children, we will need the support of government
            agencies, non-profit organizations, businesses, and individuals who
            share our vision for a better future. Together, we can make a
            difference in the lives of these children and pave the way for a
            brighter tomorrow for Nigeria. Join us in this noble mission and be
            a part of the journey towards empowering Nigerian children through
            education.
          </p>
          <a
            href="/donationSteps"
            className="inline-flex items-center gap-1 bg-white text-gray-600 py-2 px-6 rounded-md hover:bg-gray-500 hover:text-white"
          >
            Donate Now <IoIosArrowRoundForward />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}