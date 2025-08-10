import React, { useState } from 'react';
import './Donor.css';


const DonorForm = ({ addDonor }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender:'',
    address:'',
    bloodGroup: '',
    contact: '',
   email: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = value;
    if(name ==='age'){
      newValue = Number.parseInt(value);
    }
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDonor(formData);
    setFormData({ name: '',  bloodGroup: '', email:'' });
  };

  return (
    <form className="donor-form" onSubmit={handleSubmit}>
      <h2>Register as Donor</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
       <input name="age" placeholder="age" value={formData.age} onChange={handleChange} required />
      <input name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
      <textarea name="address" placeholder="address" value={formData.address} onChange={handleChange} required />
      <input name="bloodGroup" placeholder="Blood Group (e.g. A+)" value={formData.bloodGroup} onChange={handleChange} required />
           <input name="gender" placeholder="gender " value={formData.gender} onChange={handleChange} required />
      <input name="email" placeholder="v@gmail.com" value={formData.email} onChange={handleChange} required />
      <label>
        <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} />
        Available to donate
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default DonorForm;