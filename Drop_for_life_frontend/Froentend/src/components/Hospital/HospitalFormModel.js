// src/components/Hospital/HospitalFormModal.js

// import React, { useState, useEffect } from 'react';

// const HospitalFormModal = ({ hospital, onCancel, onSave }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     address: ''
//   });

//   useEffect(() => {
//     if (hospital) {
//       setFormData(hospital);
//     }
//   }, [hospital]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <div style={{ margin: '20px 0' }}>
//       <h3>{hospital ? 'Edit' : 'Add'} Hospital</h3>
//       <form onSubmit={handleSubmit}>
//         <label>Name: </label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br />

//         <label>Email: </label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br />

//         <label>Contact: </label>
//         <input type="text" name="contact" value={formData.contact} onChange={handleChange} required /><br />

//         <label>Address: </label>
//         <input type="text" name="address" value={formData.address} onChange={handleChange} required /><br /><br />

//         <button type="submit">Save</button>
//         <button type="button" onClick={onCancel} style={{ marginLeft: '10px' }}>Cancel</button>
//       </form>
//     </div>
//   );
// };

// export default HospitalFormModal;

// src/components/Hospital/HospitalPage.js
// src/components/Hospital/HospitalFormModal.js

// import React, { useState, useEffect } from 'react';

// const HospitalFormModal = ({ hospital = null, onCancel = () => {}, onSave = () => {} }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     address: ''
//   });

//   useEffect(() => {
//     if (hospital) {
//       setFormData({
//         name: hospital.name || '',
//         email: hospital.email || '',
//         contact: hospital.contact || '',
//         address: hospital.address || ''
//       });
//     }
//   }, [hospital]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Safety check before calling onSave
//     if (typeof onSave === 'function') {
//       onSave(formData);
//     } else {
//       console.error("❌ onSave prop is missing or not a function!");
//     }
//   };

//   return (
//     <div style={{ margin: '20px 0', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
//       <h3>{hospital ? 'Edit Hospital' : 'Add Hospital'}</h3>
//       <form onSubmit={handleSubmit}>
//         <label>Name: </label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         /><br />

//         <label>Email: </label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         /><br />

//         <label>Contact: </label>
//         <input
//           type="text"
//           name="contact"
//           value={formData.contact}
//           onChange={handleChange}
//           required
//         /><br />

//         <label>Address: </label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <button type="submit">Save</button>
//         <button type="button" onClick={onCancel} style={{ marginLeft: '10px' }}>Cancel</button>
//       </form>
//     </div>
//   );
// };

// export default HospitalFormModal;

import React, { useState, useEffect } from "react";

const HospitalFormModal = ({ hospital, onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    id: hospital?.id || null,
    name: hospital?.name || "",
    contact: hospital?.contact || "",
    location: hospital?.location || "",
  });

  useEffect(() => {
    if (hospital) {
      setFormData({
        id: hospital.id || null,
        name: hospital.name || "",
        contact: hospital.contact || "",
        location: hospital.location || "",
      });
    }
  }, [hospital]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (typeof onSave === "function") {
  //     onSave(formData);
  //   } else {
  //     console.error("onSave is not a function");
  //   }
  // };



  function HospitalForm({ onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // ❌ This will fail if onSave is undefined or not a function
  };
}

  return (
    <div className="modal">
      <div className="modal-content" style={{ padding: "20px", background: "#fff" }}>
        <h3>{hospital ? "Edit Hospital" : "Add Hospital"}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Hospital Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default HospitalFormModal;
