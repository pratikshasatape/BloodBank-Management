// import React from 'react';


// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
//       <ul className="flex gap-6 text-gray-700">
//         {/* <li><Link to="/">Home</Link></li>
//         <li><Link to="/donors">Donors</Link></li>
//         <li><Link to="/inventory">Inventory</Link></li>
//         <li><Link to="/login">Login</Link></li> */}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // remove JWT or session
    setUser(null);                   // reset user context/state
    navigate("/login");              // redirect to login page
  };

  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center">
      {/* <h1 className="text-xl font-bold">Drop For Life</h1>
      <div className="space-x-4">
        <button
          onClick={handleLogout}
          className="bg-white text-red-600 px-3 py-1 rounded hover:bg-gray-200"
        >
          Logout
        </button> */}
   
    </nav>
  );
};

export default Navbar;
