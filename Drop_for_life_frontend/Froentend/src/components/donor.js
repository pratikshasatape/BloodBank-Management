// import React, { useEffect, useState } from 'react';
// import Modal from 'react-modal';
// import DonorService from "../services/DonorService";
// import api from './api';

// const Donor = () => {
//   const [donors, setDonors] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: '', gender: '', age: '', bloodGroup: '', contact: '', address:'' });

//   const fetchDonors = async () => {
//     const res = await api.get('/donors');
//     setDonors(res.data);
//   };

//   useEffect(() => {
//     fetchDonors();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await api.post('/donors', formData);
//     fetchDonors();
//     setModalIsOpen(false);
//   };

//   const handleDelete = async (id) => {
//     await api.delete(`/donors/${id}`);
//     fetchDonors();
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Donor Management</h1>
//       <button onClick={() => setModalIsOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded">Add Donor</button>
//       <table className="w-full mt-4 border">
//         <thead><tr><th>Name</th><th>Age</th><th>Contact</th><th>Actions</th></tr></thead>
//         <tbody>
//           {donors.map((d) => (
//             <tr key={d.donorID}>
//               <td>{d.name}</td>
//               <td>{d.age}</td>
//               <td>{d.contact}</td>
//               <td>
//                 <button onClick={() => handleDelete(d.donorID)} className="text-red-500">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}>
//         <h2 className="text-lg font-bold">Add Donor</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
//           <input className="border p-2" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//           <input className="border p-2" placeholder="Gender" value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} />
//           <input className="border p-2" type="number" placeholder="Age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
//           <input className="border p-2" placeholder="Blood Group" value={formData.bloodGroup} onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })} />
//           <input className="border p-2" placeholder="Contact" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
//           <button className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default Donor;
