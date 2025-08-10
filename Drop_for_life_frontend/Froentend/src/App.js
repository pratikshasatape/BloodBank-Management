
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import DonorForm from './components/Donor/DonorForm';
import DonorList from './components/Donor/DonorList';
import BloodBank from './components/BloodBank/BloodBank';
import Register from './components/Register'; 
import './App.css';
import Navbar from "./components/Navbar";
import Logout from './components/Logout';
import Login from './components/Login/Login';
import PatientList from './components/Patient/PatientList';
import TransactionList from './components/Transaction/TransactionList';
import TransactionForm from './components/Transaction/TransactionForm';
import HospitalPage from './components/Hospital';
import HomePage from './pages/HomePage';
import DonationPage from './components/Donation/DonationPage';

function App() {
  
  const [donors, setDonors] = useState([]);
 const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  // Add a new donor
  const addDonor = async(donor,method='POST') => {
   // setDonors([...donors, donor]);
    try {
      const response = await fetch('http://localhost:8080/donors', {
        method ,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(donor)
      });

      if (!response.ok) {
        throw new Error('Failed to save donor');
      }

      const result = await response.json();
      console.log(result);
      setDonors([...donors, result]);
      //setMessage('Donor saved successfully!');
      alert('Donor added.');
    } catch (error) {
      console.error('Error:', error);
     // setMessage('Error saving donor.');
    }
  };

  // Toggle donor availability
  const updateAvailability = (index) => {
    const updatedDonors = [...donors];
    updatedDonors[index].available = !updatedDonors[index].available;
    //setDonors(updatedDonors);
    addDonor(updatedDonors[index], 'PUT');
  };
 
  useEffect(() => {
    fetch('http://localhost:8080/donors')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch donors');
        }
        return response.json();
      })
      .then((data) => {
        setDonors(data);
        //setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        //setError(err.message);
        //setLoading(false);
      });
  }, []);

  const [transactions, setTransactions] = useState([]);

const addTransaction = async (tx, method='POST' ) => {
  try {
      const response = await fetch('http://localhost:8080/transactions', {
        method ,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tx)
      });

      if (!response.ok) {

        throw new Error('Failed to save transaction');
      }
        
      const result = await response.json();
      console.log(result);
      setTransactions([...transactions, result]);
      alert('Transaction request raised.');
      //setMessage('Donor saved successfully!');
      
    } catch (error) {
      console.error('Error:', error);
     // setMessage('Error saving donor.');
    }
  
};

useEffect(() => {
    fetch('http://localhost:8080/transactions',{
  method: "GET",
  headers: {
    "Cache-Control": "no-cache"
  }
})
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data);
        //setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        //setError(err.message);
        //setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Header />
       <Navbar setUser={setUser} />
      {/* rest of the routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route
          path="/donors"
          element={
            <>
              <DonorForm addDonor={addDonor} />
              <DonorList donors={donors} updateAvailability={updateAvailability} />
            </>
          }
        />


       <Route path="/transactions" element={
  <>
    <TransactionForm addTransaction={addTransaction} />
    <TransactionList transactions={transactions}/>
  </>
} />
<Route path="/" element={<HomePage />} />
<Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/bloodbank" element={<BloodBank />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/patient" element={<PatientList/>}/>
        <Route path="/transaction" element={<TransactionList/>}/>
        <Route path="/logout" element={<Logout setUser={setUser} />} />
         <Route path="/hospitals" element={<HospitalPage />} />
         <Route path="/donations" element={<DonationPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;





