import React from "react";
import './blood_image.jpeg.css';
const LoginPage = () => {
  return (
    <div className="p-6">
      
      <h1 className="text-2xl font-bold text-red-600">Login</h1>
      <form className="mt-4">
        <input
          type="text"
          placeholder="Username"
          className="block mb-3 border p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="block mb-3 border p-2 w-full"
        />
        <button className="bg-red-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;


// import React from 'react';
// import './LoginPage.css';

// const LoginPage = () => {
//   return (
//     <div className="login-container">
//       <form className="login-form">
//         <h2>Login</h2>
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

