// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">

//       {/* Header */}
//       <header className="bg-red-600 text-white py-6 shadow-md">
//         <div className="container mx-auto px-6">
//           <h1 className="text-4xl font-bold">Drop For Life</h1>
//           <p className="text-md mt-1">Empowering lives through blood donation</p>
//         </div>
//       </header>

//       {/* Main content */}
//       <main className="flex-grow container mx-auto px-6 py-10">
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {/* Donors */}
//           <Link to="/donors" className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
//             <h2 className="text-2xl font-semibold text-red-600 mb-2">Donors</h2>
//             <p className="text-sm">Manage and view information of all registered blood donors.</p>
//           </Link>

//           {/* Donations */}
//           <Link to="/donations" className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
//             <h2 className="text-2xl font-semibold text-red-600 mb-2">Donations</h2>
//             <p className="text-sm">Track and record all blood donations in the system.</p>
//           </Link>

//           {/* Patients */}
//           <Link to="/patients" className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
//             <h2 className="text-2xl font-semibold text-red-600 mb-2">Patients</h2>
//             <p className="text-sm">Monitor patient records and blood requests made by them.</p>
//           </Link>

//           {/* Hospitals */}
//           <Link to="/hospitals" className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
//             <h2 className="text-2xl font-semibold text-red-600 mb-2">Hospitals</h2>
//             <p className="text-sm">View and manage hospital partners and their blood requirements.</p>
//           </Link>

//           {/* Blood Banks */}
//           <Link to="/bloodbanks" className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
//             <h2 className="text-2xl font-semibold text-red-600 mb-2">Blood Banks</h2>
//             <p className="text-sm">Oversee blood bank inventories and stock levels.</p>
//           </Link>

//           {/* Transactions */}
//           <Link to="/transactions" className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
//             <h2 className="text-2xl font-semibold text-red-600 mb-2">Transactions</h2>
//             <p className="text-sm">Manage all blood-related transactions between banks and hospitals.</p>
//           </Link>

//           <Link to="/patients">Patients</Link>
          
//           <Link to="/login">Login</Link>



//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white text-center py-4 text-gray-500 border-t">
//         &copy; {new Date().getFullYear()} Drop For Life. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';
// //import './HomePage.css';

// const HomePage = () => {
//   return (
//     <div>
//       <header className="top-bar">
//         <h2>DROP FOR LIFE</h2>
//         <div className="header-right">
        
//         </div>
//       </header>

//       <nav className="navbar">
//         <ul>
//           <li><a href="Home">Home</a></li>
//           <li><a href="donorlist">Donors</a></li>
//           <li><a href="PatientList">Patient</a></li>
//           <li><a href="bloodbank">BloodBank</a></li>
//           <li><a href="hospital">Hospital</a></li>
//           <li><a href="Contact">Contact</a></li>
//         </ul>
//         <div className="signin">
//           <a href="Login">SIGN IN</a>
//         </div>
//       </nav>

//       <section className="hero">
//         <div className="hero-text">
//           <h1>Donate Blood,<br />Save Lives</h1>
//           <p>Your donation can make the difference between life and death. Join us and become a part of the mission to save lives.</p>
//           <div className="buttons">
//             <button className="donor-btn">Become a Donor</button>
//             <button className="request-btn">Request Blood</button>
//           </div>
//         </div>
//         <div className="hero-image">
//           <img src="/blood-bag.png" alt="Blood bag" />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

// import React from "react";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center px-4">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-red-700 mb-4">Blood Bank Management System</h1>
//         <p className="text-lg text-gray-700 mb-8">
//           Efficiently manage donors, donations, blood inventory, hospitals, and patients.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
//           <Link
//             to="/donors"
//             className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-red-100 transition"
//           >
//             <h2 className="text-xl font-semibold text-red-600">Manage Donors</h2>
//           </Link>
//           <Link
//             to="/donations"
//             className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-red-100 transition"
//           >
//             <h2 className="text-xl font-semibold text-red-600">Manage Donations</h2>
//           </Link>
//           <Link
//             to="/bloodbanks"
//             className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-red-100 transition"
//           >
//             <h2 className="text-xl font-semibold text-red-600">Manage Blood Banks</h2>
//           </Link>
//           <Link
//             to="/transactions"
//             className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-red-100 transition"
//           >
//             <h2 className="text-xl font-semibold text-red-600">Manage Transactions</h2>
//           </Link>
//           <Link
//             to="/hospitals"
//             className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-red-100 transition"
//           >
//             <h2 className="text-xl font-semibold text-red-600">Manage Hospitals</h2>
//           </Link>
//           <Link
//             to="/patients"
//             className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-red-100 transition"
//           >
//             <h2 className="text-xl font-semibold text-red-600">Manage Patients</h2>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-red-50 flex flex-col">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Drop For Life</h1>
        <p className="text-lg">Your trusted Blood Bank Management System</p>
        <div className="mt-6 space-x-4">
          <Link to="/donors">
            <button className="bg-white text-red-600 font-semibold px-5 py-2 rounded hover:bg-gray-100">
              View Donors
            </button>
          </Link>
          <Link to="/patient">
            <button className="bg-white text-red-600 font-semibold px-5 py-2 rounded hover:bg-gray-100">
              Patients
            </button>
          </Link>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 px-8 py-10 text-center">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Why Choose Us?</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          Our system provides a complete solution for managing blood donations, donor registrations, transactions,
          hospital coordination, and patient tracking. We aim to save lives by ensuring that blood is available when
          and where it's needed the most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="text-lg font-bold text-red-600">Manage Donors</h3>
            <p className="text-gray-600 mt-2">Register, update, and view donor data efficiently.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="text-lg font-bold text-red-600">Track Donations</h3>
            <p className="text-gray-600 mt-2">Maintain clear records of all blood donations and supplies.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="text-lg font-bold text-red-600">Help Patients</h3>
            <p className="text-gray-600 mt-2">Ensure timely blood delivery to patients in need.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-600 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Drop For Life. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
