// // src/components/AddHospitalForm.jsx

// import React, { useState } from 'react';

// const AddHospitalForm = ({ onSave, onCancel }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     address: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
//       <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br />
//       <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br />
//       <input name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required /><br />
//       <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required /><br />
//       <button type="submit">Save</button>
//       <button type="button" onClick={onCancel} style={{ marginLeft: '10px' }}>Cancel</button>
//     </form>
//   );
// };

// export default AddHospitalForm;



import React, { useState, useEffect } from 'react';

const AddHospitalForm = ({ hospital, onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: ''
  });

  useEffect(() => {
    if (hospital) {
      setFormData({
        name: hospital.name || '',
        email: hospital.email || '',
        contact: hospital.contact || '',
        address: hospital.address || ''
      });
    }
  }, [hospital]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = hospital?.id ? { ...formData, id: hospital.id } : formData;
    onSave(finalData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h3>{hospital ? 'Edit Hospital' : 'Add Hospital'}</h3>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br />
      <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required /><br />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required /><br />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: '10px' }}>Cancel</button>
    </form>
  );
};

export default AddHospitalForm;
