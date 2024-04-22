import { useState } from 'react';

const SignUp = ({ onClose, onSignUp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform sign-up logic here
      // For demonstration purposes, assume sign-up is successful
      // You can replace this with your actual sign-up API call
      await signUpUser(formData);

      // Call the onSignUp function provided by the parent component
      onSignUp();

      // Reset the form data
      setFormData({
        name: '',
        email: '',
        password: '',
      });

      // Close the modal
      onClose();
    } catch (error) {
      console.error('Sign-up error:', error);
      // Handle sign-up error, e.g., display an error message
    }
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Sign Up</h2>
            <button onClick={onClose}>
              {/* Close button */}
              <svg
                className="h-6 w-6 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Sign-up form fields */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Dummy function for demonstration purposes
const signUpUser = async (formData) => {
  // Simulating a delay to mimic an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Assuming sign-up is successful
  return true;
};

export default SignUp;
