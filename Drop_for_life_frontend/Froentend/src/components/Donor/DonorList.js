import React, { useState } from 'react';
import './Donor.css';

const DonorList = ({ donors, updateAvailability }) => {
  const [filters, setFilters] = useState({ bloodGroup: '', location: '', available: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredDonors = donors.filter(donor => {
    return (
      (!filters.bloodGroup || donor.bloodGroup.toLowerCase().includes(filters.bloodGroup.toLowerCase())) &&
      (!filters.email || donor.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (filters.available === '' || donor.available === (filters.available === 'true'))
    );
  });

  return (
    <div className="donor-list">
      <h2>Donor List</h2>

      <div className="filters">
        
        <input name="bloodGroup" placeholder="Search by Blood Group" onChange={handleFilterChange} />
        <input name="email" placeholder="Search by email" onChange={handleFilterChange} />
        <select name="available" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="true">Available</option>
          <option value="false">Unavailable</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Blood Group</th><th>email</th><th>Available</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonors.map((donor, index) => (
            <tr key={index}>
              <td>{donor.name}</td>
              <td>{donor.age}</td>
              <td>{donor.bloodGroup}</td>
             <td>{donor.email}</td>
            
              <td>{donor.available ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => updateAvailability(index)}>
                  Mark {donor.available ? 'Unavailable' : 'Available'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonorList;