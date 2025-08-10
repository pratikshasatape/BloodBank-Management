
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PatientForm = () => {
//   const [patient, setPatient] = useState({
//     name: '',
//     age: '',
//     bloodGroup: '',
//     email: '',
//     hospitalId: ''
//   });

//   const [patients, setPatients] = useState([]);

//   const handleChange = (e) => {
//     setPatient({ ...patient, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // stop page reload
//     try {
//       await axios.post('http://localhost:8080/patients', patient);
//       alert("Patient added successfully!");
//       setPatient({
//         name: '',
//         age: '',
//         bloodGroup: '',
//         email: '',
//         hospitalId: ''
//       });
//       fetchPatients();
//     } catch (error) {
//       console.error("Error adding patient:", error);
//       alert("Error saving patient.");
//     }
//   };

//   const fetchPatients = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/patients');
//       setPatients(response.data);
//     } catch (err) {
//       console.error("Error fetching patients:", err);
//     }
//   };

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   return (
//     <div>
//       <h2 style={{ textAlign: 'center' }}>Add Patient</h2>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
//         <input type="text" name="name" placeholder="Name" value={patient.name} onChange={handleChange} required />
//         <input type="number" name="age" placeholder="Age" value={patient.age} onChange={handleChange} required />
//         <input type="text" name="bloodGroup" placeholder="Blood Group" value={patient.bloodGroup} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" value={patient.email} onChange={handleChange} required />
//         <input type="text" name="hospitalId" placeholder="Hospital ID" value={patient.hospitalId} onChange={handleChange} required />
//         <button type="submit">Add</button>
//         <button type="button" onClick={() => setPatient({ name: '', age: '', bloodGroup: '', email: '', hospitalId: '' })}>Cancel</button>
//       </form>

//       <table style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
//         <thead>
//           <tr>
//             <th>Name</th><th>Age</th><th>Blood Group</th><th>Email</th><th>Hospital ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {patients.length === 0 ? (
//             <tr><td colSpan="5">No patients found.</td></tr>
//           ) : (
//             patients.map(p => (
//               <tr key={p.id}>
//                 <td>{p.name}</td>
//                 <td>{p.age}</td>
//                 <td>{p.bloodGroup}</td>
//                 <td>{p.email}</td>
//                 <td>{p.hospitalId}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PatientForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientForm = () => {
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    email: '',
    hospitalId: ''
  });

  const [patients, setPatients] = useState([]);

  // ✅ Handle form field changes
  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  // ✅ Save patient
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/patients', patient);
      alert("✅ Patient added successfully!");
      setPatient({ name: '', age: '', bloodGroup: '', email: '', hospitalId: '' });
      fetchPatients();
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("❌ Error saving patient.");
    }
  };

  // ✅ Get all patients
  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:8080/patients');
      setPatients(response.data);
    } catch (err) {
      console.error("Error fetching patients:", err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#b30000' }}>🩸 Add Patient</h2>

      {/* Patient Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '20px'
        }}
      >
        <input type="text" name="name" placeholder="Name" value={patient.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={patient.age} onChange={handleChange} required />
        <input type="text" name="bloodGroup" placeholder="Blood Group" value={patient.bloodGroup} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={patient.email} onChange={handleChange} required />
        <input type="text" name="hospitalId" placeholder="Hospital ID" value={patient.hospitalId} onChange={handleChange} required />

        <button type="submit" style={{ backgroundColor: '#b30000', color: 'white', padding: '8px 16px', border: 'none', cursor: 'pointer' }}>
          Add
        </button>
        <button
          type="button"
          onClick={() => setPatient({ name: '', age: '', bloodGroup: '', email: '', hospitalId: '' })}
          style={{ backgroundColor: '#555', color: 'white', padding: '8px 16px', border: 'none', cursor: 'pointer' }}
        >
          Cancel
        </button>
      </form>

      {/* Patient Table */}
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>Email</th>
            <th>Hospital ID</th>
          </tr>
        </thead>
        <tbody>
          {patients.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ padding: '10px' }}>No patients found.</td>
            </tr>
          ) : (
            patients.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.bloodGroup}</td>
                <td>{p.email}</td>
                <td>{p.hospitalId}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientForm;
