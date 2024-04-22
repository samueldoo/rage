"use client";
import { useState } from "react";

import Header from "../header/page";
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "../footer/page";

const VolunteerSignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the form fields are empty
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (isFormValid) {
      // Here, you can send the form data to your backend or process it as needed
      console.log(formData);
      setNotificationMessage("Success! Your sign-up has been submitted.");
      setShowNotification(true);
      // Reset form data after displaying the notification
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          skills: "",
        });
        setShowNotification(false);
      }, 3000);
    } else {
      setNotificationMessage("Please fill out all the fields.");
      setShowNotification(true);
      // Clear the notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  return (
    <main
      className="w-full"
      style={{
        backgroundImage: 'url("img3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: '',
      }}
    >
      <Header />
      <section className="">
        <div className="px-9 my-9 py-9 mx-auto max-w-2xl bg-gray-300 bg-opacity-50 rounded-md shadow-md">
          <h2 className="text-3xl font-bold mb-8">Volunteer with Us</h2>
          <div className="bg-gray-500 bg-opacity-50 rounded-md p-8">
            {showNotification && (
              <div
                className={`border text-center px-4 py-3 rounded relative mb-6 ${
                  notificationMessage.includes("Success")
                    ? "bg-green-100 border-green-400 text-green-700"
                    : "bg-red-100 border-red-400 text-red-700"
                }`}
                role="alert"
              >
                {notificationMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="skills"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Skills
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                ></textarea>
              </div>
              <div className="flex items-center justify-center gap-6">
                <button
                  type="submit"
                  className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-700"
                >
                  Sign Up
                </button>
                <a
                  href="/"
                  className="flex items-center gap-1 bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-700"
                >
                  Back
                  <IoIosArrowRoundForward className="" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default VolunteerSignupPage;
