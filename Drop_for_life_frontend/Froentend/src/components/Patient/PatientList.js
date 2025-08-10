// import React, { useEffect, useState } from 'react';
// import {
//   getAllPatients,
//   createPatient,
//   updatePatient,
//   deletePatient
// } from '../../services/PatientService';
// import PatientFormModal from './PatientFormModal';

// const PatientList = () => {
//   const [patients, setPatients] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editPatient, setEditPatient] = useState(null);

//   const fetchPatients = async () => {
//     const res = await getAllPatients();
//     setPatients(res.data);
//   };

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const handleAdd = () => {
//     setEditPatient(null);
//     setIsModalOpen(true);
//   };

//   const handleEdit = (patient) => {
//     setEditPatient(patient);
//     setIsModalOpen(true);
//   };

//   const handleDelete = async (id) => {
//     await deletePatient(id);
//     fetchPatients();
//   };

//   const handleSubmit = async (patient) => {
//     if (editPatient) {
//       await updatePatient(editPatient.id, patient);
//     } else {
//       await createPatient(patient);
//     }
//     setIsModalOpen(false);
//     fetchPatients();
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Patient Management</h1>
//       <button onClick={handleAdd} className="btn-primary mb-4">Add Patient</button>

//       <table className="w-full table-auto border">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-2">Name</th>
//             <th>Age</th>
//             <th>Blood Group</th>
//             <th>Email</th>
//             <th>Hospital</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {patients.map((p) => (
//             <tr key={p.id} className="text-center border-t">
//               <td>{p.name}</td>
//               <td>{p.age}</td>
//               <td>{p.bloodGroup}</td>
//               <td>{p.email}</td>
//               <td>{p.hospital?.name || 'N/A'}</td>
//               <td>
//                 <button onClick={() => handleEdit(p)} className="btn-primary mr-2">Edit</button>
//                 <button onClick={() => handleDelete(p.id)} className="btn-secondary">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <PatientFormModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={handleSubmit}
//         initialData={editPatient}
//       />
//     </div>
//   );
// };

// export default PatientList;
import React, { useEffect, useState } from 'react';
import {
  getAllPatients,
  createPatient,
  updatePatient,
  deletePatient
} from '../../services/PatientService';
import PatientFormModal from './PatientFormModal';

const PatientList = () => {
  const [patients, setPatients] = useState([]); // ✅ initialized as array
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editPatient, setEditPatient] = useState(null);

  const fetchPatients = async () => {
    try {
      const res = await getAllPatients();
      const data = res?.data;

      // ✅ Ensure it's an array before setting
      if (Array.isArray(data)) {
        setPatients(data);
      } else {
        console.error('Expected an array, but got:', data);
        setPatients([]); // fallback to empty array
      }
    } catch (error) {
      console.error('Failed to fetch patients:', error);
      setPatients([]); // fallback on error
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleAdd = () => {
    setEditPatient(null);
    setIsModalOpen(true);
  };

  const handleEdit = (patient) => {
    setEditPatient(patient);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    await deletePatient(id);
    fetchPatients();
  };

  const handleSubmit = async (patient) => {
    if (editPatient) {
      await updatePatient(editPatient.id, patient);
    } else {
      await createPatient(patient);
    }
    setIsModalOpen(false);
    fetchPatients();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Management</h1>
      <button onClick={handleAdd} className="btn-primary mb-4">Add Patient</button>

      <table className="w-full table-auto border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Name</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>Email</th>
            <th>Hospital</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.length > 0 ? (
            patients.map((p) => (
              <tr key={p.id} className="text-center border-t">
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.bloodGroup}</td>
                <td>{p.email}</td>
                <td>{p.hospital?.name || 'N/A'}</td>
                <td>
                  <button onClick={() => handleEdit(p)} className="btn-primary mr-2">Edit</button>
                  <button onClick={() => handleDelete(p.id)} className="btn-secondary">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center p-4">No patients found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <PatientFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editPatient}
      />
    </div>
  );
};

export default PatientList;
