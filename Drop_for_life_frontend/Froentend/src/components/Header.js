// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <>

//       <header className="top-bar">
//         <h2>(Drop for Life) Blood Bank Management System</h2>
//         <div className="header-right">
//           <span>🔍</span>
//           <span>👤</span>
//         </div>
//       </header>

//       <nav className="navbar">
//         <ul>
//           <li><a href="home">Home</a></li>
//           <li><a href="#">Donors</a></li>
//           <li><a href="#">Requests</a></li>
//           <li><a href="#">BloodBank</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//         <div className="signin">
//           <a href="#">SIGN IN</a>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

const handleLogout = () => {
    localStorage.removeItem('user'); // Clear localStorage
    navigate('/login'); // Redirect
    window.location.reload(); // Optional: to reset app state
  };
const isLoggedIn = !!localStorage.getItem('user');

  return (
    <>
      <header className="top-bar">
      <h1 className="text-3xl font-bold text-center"> DROP FOR LIFE</h1>
        <div className="header-right">


        </div>
      </header>

      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
          <li><Link to="/donors">Donors</Link></li>
          <li><Link to="/transactions">Transaction</Link></li>
          <li><Link to="/bloodbank">BloodBank</Link></li>
        <li><Link to="/patient">Patient</Link></li>
         <li> <Link to="/hospitals">Hospitals</Link> {" "}</li>
          <li><Link to="/donations">Donations</Link> {/* ✅ ADD THIS */}</li>
         {/* <li><Link to="/search/donors">Search Donors</Link></li>
        <li><Link to="/search/requests">Search Requests</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="Login">
          <Link to="/login">Login</Link><br></br>
          <Link to="/logout">Logout</Link>
        </div>
         {/* <div className="Logout"><Link to="/logout">Logout</Link>
          </div> */}
           
      </nav>
    </>
  );
};

export default Header;

