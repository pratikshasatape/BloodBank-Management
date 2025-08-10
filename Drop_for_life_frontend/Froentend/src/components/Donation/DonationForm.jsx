import React, { useState, useEffect } from 'react';

const DonationForm = ({ donation, onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    date: '',
    donorId: '',
    bloodBankId: ''
  });

  useEffect(() => {
    if (donation) {
      setFormData({
        date: donation.date || '',
        donorId: donation.donorId || '',
        bloodBankId: donation.bloodBankId || ''
      });
    }
  }, [donation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = donation?.id ? { ...formData, id: donation.id } : formData;
    onSave(finalData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h3>{donation ? 'Edit Donation' : 'Add Donation'}</h3>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required /><br />
      <input type="text" name="donorId" placeholder="Donor ID" value={formData.donorId} onChange={handleChange} required /><br />
      <input type="text" name="bloodBankId" placeholder="Blood Bank ID" value={formData.bloodBankId} onChange={handleChange} required /><br />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: '10px' }}>Cancel</button>
    </form>
  );
};

export default DonationForm;
