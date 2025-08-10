import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DonationForm from './DonationForm';

const DonationPage = () => {
  const [donations, setDonations] = useState([]);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchDonations = async () => {
    try {
    //const response = await axios.get('http://localhost:8080/donations');
    const response = await axios.get("http://localhost:8080/donations");
      setDonations(response.data);
    } catch (error) {
      console.error('Error fetching donations:', error);
      alert('Failed to load donations');
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this donation?')) return;
    try {
      await axios.delete(`http://localhost:8080/donations/${id}`);
      fetchDonations();
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Failed to delete donation');
    }
  };

  const handleEdit = (donation) => {
    setSelectedDonation(donation);
    setShowForm(true);
  };

  const handleAdd = () => {
    setSelectedDonation(null);
    setShowForm(true);
  };

  const handleSave = async (donationData) => {
    try {
      if (donationData.id) {
        await axios.put(`http://localhost:8080/donations/${donationData.id}`, donationData);
      } else {
        await axios.post('http://localhost:8080/donations', donationData);
      }
      fetchDonations();
      setShowForm(false);
    } catch (error) {
      console.error('Error saving donation:', error);
      alert('Failed to save donation');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Donation Management</h2>
      <button onClick={handleAdd}>Add Donation</button>

      {showForm && (
        <DonationForm
          donation={selectedDonation}
          onCancel={() => setShowForm(false)}
          onSave={handleSave}
        />
      )}

      <table border="1" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Donor ID</th>
            <th>Blood Bank ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(Array.isArray(donations) ? donations : []).map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.date}</td>
              <td>{d.donorId}</td>
              <td>{d.bloodBankId}</td>
              <td>
                <button onClick={() => handleEdit(d)}>Edit</button>{' '}
                <button onClick={() => handleDelete(d.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {donations.length === 0 && (
            <tr><td colSpan="5" style={{ textAlign: 'center' }}>No donations found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DonationPage;
