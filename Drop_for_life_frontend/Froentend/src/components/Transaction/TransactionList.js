import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      <h2>Transaction Requests (Admin)</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction Id</th>
            <th>Date</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.transactionId}</td>
              <td>{tx.transactionDate}</td>
              <td>{tx.quantityIssued}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;