// // src/components/Hospital/HospitalList.js
// import React, { useEffect, useState } from 'react';
// import {
//   getAllHospitals,
//   createHospital,
//   updateHospital,
//   deleteHospital
// } from '../../services/hospitalService';
// import HospitalFormModal from './HospitalFormModal';

// const HospitalList = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editHospital, setEditHospital] = useState(null);

//   const fetchHospitals = async () => {
//     const res = await getAllHospitals();
//     setHospitals(res.data);
//   };

//   useEffect(() => {
//     fetchHospitals();
//   }, []);

//   const handleAdd = () => {
//     setEditHospital(null);
//     setIsModalOpen(true);
//   };

//   const handleEdit = (hospital) => {
//     setEditHospital(hospital);
//     setIsModalOpen(true);
//   };

//   const handleDelete = async (id) => {
//     await deleteHospital(id);
//     fetchHospitals();
//   };

//   const handleSubmit = async (hospital) => {
//     if (editHospital) {
//       await updateHospital(editHospital.hospitalId, hospital);
//     } else {
//       await createHospital(hospital);
//     }
//     setIsModalOpen(false);
//     fetchHospitals();
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Hospital Management</h1>
//       <button onClick={handleAdd} className="btn-primary mb-4">Add Hospital</button>

//       <table className="w-full table-auto border">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-2">Name</th>
//             <th>Contact</th>
//             <th>Address</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {hospitals.map((h) => (
//             <tr key={h.hospitalId} className="text-center border-t">
//               <td>{h.name}</td>
//               <td>{h.contact}</td>
//               <td>{h.address}</td>
//               <td>{h.email}</td>
//               <td>
//                 <button onClick={() => handleEdit(h)} className="btn-primary mr-2">Edit</button>
//                 <button onClick={() => handleDelete(h.hospitalId)} className="btn-secondary">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <HospitalFormModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={handleSubmit}
//         initialData={editHospital}
//       />
//     </div>
//   );
// };

// export default HospitalList;


import React, { useState, useEffect } from "react";
import axios from "axios";
import AddHospitalForm from "./AddHospitalForm.jsx"; // 🔁 import your form component

const HospitalPage = () => {
  const [hospitals, setHospitals] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const fetchHospitals = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/hospitals");
      setHospitals(response.data);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hospital Management</h1>

      <button
        onClick={() => setShowAddModal(true)}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Hospital
      </button>

      {/* ✅ ADD HOSPITAL MODAL - PLACE THIS HERE */}
      {showAddModal && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <AddHospitalForm
              onHospitalAdded={() => {
                fetchHospitals();
                setShowAddModal(false); // close modal after add
              }}
            />
            <button
              onClick={() => setShowAddModal(false)}
              className="mt-4 text-red-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* TABLE TO DISPLAY HOSPITALS */}
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Contact</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital) => (
            <tr key={hospital.id}>
              <td className="border p-2">{hospital.name}</td>
              <td className="border p-2">{hospital.contact}</td>
              <td className="border p-2">{hospital.address}</td>
              <td className="border p-2">{hospital.email}</td>
              <td className="border p-2">
                {/* You can add edit/delete buttons here */}
                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HospitalPage;
