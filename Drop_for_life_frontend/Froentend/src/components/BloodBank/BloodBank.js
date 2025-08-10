import React, { useEffect, useState } from 'react';
import './BloodBank.css';

const initialStock = {
  'A+': 40,
  'A-': 20,
  'B+': 60,
  'B-': 10,
  'AB+': 25,
  'AB-': 15,
  'O+': 70,
  'O-': 12
};

const MIN_STOCK_LEVEL = 30;

const BloodBank = () => {
  const [stock, setStock] = useState([]);
  const [formData, setFormData] = useState({ type: '', units: '', action: 'add' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const updateStock = async(e) => {
    e.preventDefault();
    const { bloodType, units, action } = formData;
    const unitValue = Number.parseInt(units, 10);

    if (!bloodType || isNaN(unitValue)) return;
     try {
      const bloodbank = stock.find((obj) => obj.bloodType=== bloodType);
      const bloodbankId = bloodbank.bankId;
      const current = Number.parseInt(bloodbank.units || 0);
      const finalUnits = action === 'add' ? current + unitValue : Math.max(current - unitValue, 0);
      
      const response = await fetch('http://localhost:8080/api/bloodbanks/'+ bloodbankId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...bloodbank, units: finalUnits
        })
      });

      if (!response.ok) {
        throw new Error('Failed to bloodbank updated');
      }

      const result = await response.json();
      console.log(result);
      setStock((st)=> st.map((obj)=> obj.bloodType===result.bloodType?result:obj)
        );
      //setMessage(' saved successfully!');
      alert('bloodbank details updated.');
    } catch (error) {
      console.error('Error:', error);
     // setMessage('Error saving donor.');
    }
    
    setFormData({ bloodType: '', units: '', action: 'add' });
  };

  useEffect(() => {
      fetch('http://localhost:8080/api/bloodbanks')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch bloodbank');
          }
          return response.json();
        })
        .then((data) => {
          setStock(data);
          //setLoading(false);
        })
        .catch((err) => {
          console.error('Error:', err);
          //setError(err.message);
          //setLoading(false);
        });
    }, []);

  return (
    <div className="BloodBank-container">
      <h2> BloodBank</h2>

      <form onSubmit={updateStock} className="BloodBank-form">
        <select name="bloodType" value={formData.bloodType} onChange={handleChange} required>
          <option value="">Select Blood Type</option>
          {stock. map(obj => (
            <option key={obj.bloodType} value={obj.bloodType}>{obj.bloodType}</option>
          ))}
        </select>
        <input
          type="number"
          name="units"
          placeholder="Units"
          value={formData.units}
          onChange={handleChange}
          required
        />
        <select name="action" value={formData.action} onChange={handleChange}>
          <option value="add">Add</option>
          <option value="remove">Remove</option>
        </select>
        <button type="submit">Update</button>
      </form>

      <table className="BloodBank-table">
        <thead>
          <tr>
            <th>Blood Type</th>
            <th>Units</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((obj) => (
            <tr key={obj.bloodType} className={obj.units < MIN_STOCK_LEVEL ? 'low-stock' : ''}>
              <td>{obj.bloodType}</td>
              <td>{obj.units}</td>
              <td>{obj.units < MIN_STOCK_LEVEL ? '⚠ Low Stock' : '✔ Sufficient'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodBank;