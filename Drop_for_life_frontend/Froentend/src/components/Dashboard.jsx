// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-green-100">
//       <h1 className="text-3xl font-bold text-green-700">Welcome to Dashboard</h1>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import './Dashboard.css';
import BloodBank from './BloodBank/BloodBank';

const Bloodbank = {
  'A+': 120,
  'A-': 30,
  'B+': 100,
  'B-': 20,
  'AB+': 50,
  'AB-': 10,
  'O+': 140,
  'O-': 25
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard Overview</h2>

      {/* Blood Inventory Summary */}
      <div className="card-grid">
        {Object.entries(Bloodbank).map(([type, units]) => (
          <div className="card blood-type" key={type}>
            <h3>{type}</h3>
            <p>{units} Units</p>
          </div>
        ))}
      </div>

      {/* Additional Cards */}
      <div className="card-row">
        <div className="card summary-card">
          <h3>Pending Requests</h3>
          <p>8</p>
        </div>
        <div className="card summary-card">
          <h3>Available Donors</h3>
          <p>52</p>
        </div>
        <div className="card summary-card">
          <h3>Total Donations This Week</h3>
          <p>24</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>John Doe donated O+ blood at Mumbai Center</li>
          <li>Request for A- blood approved for City Hospital</li>
          <li>New donor registered: Priya Sharma</li>
          <li>Blood inventory updated: B+ +10 units</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;