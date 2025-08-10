import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    // transactionId: '',
    transactionDate: '',
    quantityIssued: '',
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(formData);
   
    setFormData({  transactionDate: '', quantityIssued: '',  });
  };

  return (
    <div className="transaction-form">
      <h2>Raise Blood Transaction</h2>
      <form onSubmit={handleSubmit}>
        {/* <input name="transactionId" placeholder="Transaction Id" value={formData.transactionId} onChange={handleChange} required /> */}
        <input type="date" name="transactionDate" value={formData.transactionDate} onChange={handleChange} required />
        
        <input type="number" name="quantityIssued" placeholder="Quantity (units)" value={formData.quantityIssued} onChange={handleChange} required />
        <button type="submit">Request Blood</button>
      </form>
    </div>
  );
};

export default TransactionForm;