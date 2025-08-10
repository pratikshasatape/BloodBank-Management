
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:8080/api/auth/login', formData);
//       console.log('Login successful:', response.data);

//       // Store JWT token if returned
//       localStorage.setItem('token', response.data.token);

//       // Redirect to homepage
//       navigate('/home');
//     } catch (err) {
//       const message = err.response?.data?.message || err.message || 'Login failed';
//       console.error('Login failed:', message);
//       setError(message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
//         <h2 className="text-xl font-bold text-red-600 mb-4 text-center">Login</h2>

//         {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           required
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-2 mb-3 border rounded"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           required
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded"
//         />

//         <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
//           Login
//         </button>
        

//         <p className="mt-4 text-center text-sm">
//           Don't have an account?{' '}
//           <Link to="/register" className="text-red-600 hover:underline">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
// import './blood_image.jpeg';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', formData);
      console.log('Login successful:', response.data);
      
      localStorage.setItem('token', response.data.token);

      // Show success message
      setSuccessMsg('Login successful! Redirecting...');
      
      // Redirect after a short delay
      setTimeout(() => {
        navigate('/donors');
      }, 1500); // 1.5 seconds
    } catch (err) {
      const message = err.response?.data?.message || err.message || 'Login failed';
      console.error('Login failed:', message);
      setError(message);
    }
  };

  return (

    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold text-red-600 mb-4 text-center">Login</h2>

        {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
        {successMsg && <p className="text-green-600 mb-3 text-sm">{successMsg}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
          Login
        </button>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-red-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
