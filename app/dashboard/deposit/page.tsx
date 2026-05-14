'use client'
import React, { useState } from 'react';

export default function DepositPage() {
  const [amount, setAmount] = useState('');

  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Deposit Funds</h1>
      
      <div style={{ backgroundColor: '#0f172a', padding: '30px', borderRadius: '16px', border: '1px solid #1e293b', maxWidth: '500px', margin: '0 auto' }}>
        <label style={{ display: 'block', marginBottom: '10px', color: '#94a3b8' }}>Amount to Invest ($)</label>
        <input 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g. 500"
          style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155', marginBottom: '20px' }}
        />

        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px dashed #2563eb' }}>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '5px' }}>Send USDT (TRC20) to:</p>
          <code style={{ fontSize: '16px', color: '#fbbf24', wordBreak: 'break-all' }}>
            YOUR_WALLET_ADDRESS_HERE
          </code>
        </div>

        <button style={{ width: '100%', padding: '14px', borderRadius: '8px', backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold', marginTop: '20px', border: 'none', cursor: 'pointer' }}>
          I Have Made the Transfer
        </button>
      </div>
    </div>
  );
}
