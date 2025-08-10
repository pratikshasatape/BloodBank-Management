// // src/components/Hospital/HospitalPage.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import HospitalFormModal from './Hospital/HospitalFormModal';
// // import AddHospitalForm from './Hospital/AddHospitalForm.jsx';
// import AddHospitalForm from './Hospital/AddHospitalForm.jsx';
// const HospitalPage = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [selectedHospital, setSelectedHospital] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   // ✅ Fetch all hospitals
//   const fetchHospitals = async () => {
//   try {
//     const response = await axios.get('http://localhost:8080/hospitals');
//     console.log("Hospitals API Response:", response.data);
//     setHospitals(response.data);
//   } catch (error) {
//     console.error('Error fetching hospitals:', error);
//     alert('Error loading hospitals');
//   }
// };

//   useEffect(() => {
//     fetchHospitals();
//   }, []);

//   // ✅ Add/Edit logic
//   const handleAdd = () => {
//     setSelectedHospital(null);
//     setShowForm(true);
//   };

//   const handleEdit = (hospital) => {
//     setSelectedHospital(hospital);
//     setShowForm(true);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this hospital?')) return;
//     try {
//       await axios.delete(`http://localhost:8080/api/hospitals/${id}`);
//       fetchHospitals();
//     } catch (error) {
//       console.error('Error deleting hospital:', error);
//       alert('Delete failed');
//     }
//   };

//   const handleSave = async (hospitalData) => {
//     try {
//       if (hospitalData.id) {
//         await axios.put(`http://localhost:8080/api/hospitals/${hospitalData.id}`, hospitalData);
//       } else {
//         await axios.post(`http://localhost:8080/api/hospitals`, hospitalData);
//       }
//       fetchHospitals();
//       setShowForm(false);
//     } catch (error) {
//       console.error('Save failed:', error);
//       alert('Error saving hospital');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Hospital Management</h2>
//       <button onClick={handleAdd}>Add Hospital</button>

//       {showForm && (
//         <HospitalFormModal
//           hospital={selectedHospital}
//           onCancel={() => setShowForm(false)}
//           onSave={handleSave}
//         />
//       )}

//       <table border="1" style={{ width: '100%', marginTop: '20px' }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact</th>
//             <th>Address</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//   {(Array.isArray(hospitals) ? hospitals : []).map((h) => (
//     <tr key={h.id}>
//       <td>{h.id}</td>
//       <td>{h.name}</td>
//       <td>{h.email}</td>
//       <td>{h.contact}</td>
//       <td>{h.address}</td>
//       <td>
//         <button onClick={() => handleEdit(h)}>Edit</button>{' '}
//         <button onClick={() => handleDelete(h.id)}>Delete</button>
//       </td>
//     </tr>
//   ))}
// </tbody>
//       </table>
//     </div>
//   );
// };

// export default HospitalPage;


// src/components/Hospital/HospitalPage.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import HospitalFormModal from './Hospital/HospitalFormModal';

// const HospitalPage = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [selectedHospital, setSelectedHospital] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   // ✅ Fetch all hospitals
//   const fetchHospitals = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/hospitals');
//       console.log('Hospitals API Response:', response.data);
//       setHospitals(Array.isArray(response.data) ? response.data : []);
//     } catch (error) {
//       console.error('Error fetching hospitals:', error);
//       alert('Error loading hospitals');
//     }
//   };

//   useEffect(() => {
//     fetchHospitals();
//   }, []);

//   // ✅ Add/Edit logic
//   const handleAdd = () => {
//     setSelectedHospital(null);
//     setShowForm(true);
//   };

//   const handleEdit = (hospital) => {
//     setSelectedHospital(hospital);
//     setShowForm(true);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this hospital?')) return;
//     try {
//       await axios.delete(`http://localhost:8080/hospitals/${id}`);
//       fetchHospitals();
//     } catch (error) {
//       console.error('Error deleting hospital:', error);
//       alert('Delete failed');
//     }
//   };

//   const handleSave = async (hospitalData) => {
//     try {
//       if (hospitalData.id) {
//         await axios.put(`http://localhost:8080/hospitals/${hospitalData.id}`, hospitalData);
//       } else {
//         await axios.post(`http://localhost:8080/hospitals`, hospitalData);
//       }
//       fetchHospitals();
//       setShowForm(false);
//     } catch (error) {
//       console.error('Save failed:', error);
//       alert('Error saving hospital');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Hospital Management</h2>
//       <button onClick={handleAdd}>Add Hospital</button>

//       {/* ✅ Pass onSave properly */}
//       {showForm && (
//         <HospitalFormModal
//           hospital={selectedHospital}
//           onCancel={() => setShowForm(false)}
//           onSave={handleSave} // <-- now guaranteed to be a function
//         />
//       )}

//       <table border="1" style={{ width: '100%', marginTop: '20px' }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact</th>
//             <th>Address</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {hospitals.map((h) => (
//             <tr key={h.id}>
//               <td>{h.id}</td>
//               <td>{h.name}</td>
//               <td>{h.email}</td>
//               <td>{h.contact}</td>
//               <td>{h.address}</td>
//               <td>
//                 <button onClick={() => handleEdit(h)}>Edit</button>{' '}
//                 <button onClick={() => handleDelete(h.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HospitalPage;

import React, { useState, useEffect } from "react";
import HospitalFormModal from "./HospitalFormModal";

const HospitalPage = () => {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // ✅ Fetch hospitals from backend
  useEffect(() => {
    fetch("http://localhost:8080/hospitals")
      .then((res) => res.json())
      .then((data) => setHospitals(data))
      .catch((err) => console.error("Error fetching hospitals:", err));
  }, []);

  // ✅ Save (Add/Edit) hospital
  const handleSaveHospital = (hospitalData) => {
    if (hospitalData.id) {
      // Edit
      fetch(`http://localhost:8080/hospitals/${hospitalData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hospitalData),
      })
        .then(() => {
          setHospitals((prev) =>
            prev.map((h) => (h.id === hospitalData.id ? hospitalData : h))
          );
          setShowModal(false);
        })
        .catch((err) => console.error("Error updating hospital:", err));
    } else {
      // Add
      fetch("http://localhost:8080/hospitals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hospitalData),
      })
        .then((res) => res.json())
        .then((newHospital) => {
          setHospitals((prev) => [...prev, newHospital]);
          setShowModal(false);
        })
        .catch((err) => console.error("Error adding hospital:", err));
    }
  };

  // ✅ Delete hospital
  const handleDeleteHospital = (id) => {
    if (window.confirm("Are you sure you want to delete this hospital?")) {
      fetch(`http://localhost:8080/hospitals/${id}`, { method: "DELETE" })
        .then(() => {
          setHospitals((prev) => prev.filter((h) => h.id !== id));
        })
        .catch((err) => console.error("Error deleting hospital:", err));
    }
  };

  return (
    <div className="container">
      <h2>Hospitals</h2>
      <button
        onClick={() => {
          setSelectedHospital(null);
          setShowModal(true);
        }}
      >
        Add Hospital
      </button>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.length > 0 ? (
            hospitals.map((hospital) => (
              <tr key={hospital.id}>
                <td>{hospital.id}</td>
                <td>{hospital.name}</td>
                <td>{hospital.contact}</td>
                <td>{hospital.location}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedHospital(hospital);
                      setShowModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteHospital(hospital.id)}
                    style={{ marginLeft: "10px", color: "red" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No hospitals found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ✅ Hospital Form Modal */}
      {showModal && (
        <HospitalFormModal
          hospital={selectedHospital}
          onCancel={() => setShowModal(false)}
          onSave={handleSaveHospital}
        />
      )}
    </div>
  );
};

export default HospitalPage;

