'use client'
import React, { useState } from 'react';

export default function WithdrawPage() {
  const [amount, setAmount] = useState('');
  const [wallet, setWallet] = useState('');

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Withdrawal request submitted. Our team will review and process your request within 24 hours.');
  };

  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Withdraw Funds</h1>
        <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '14px' }}>Request a payout of your earnings to your external wallet.</p>
        
        <div style={{ backgroundColor: '#0f172a', padding: '30px', borderRadius: '16px', border: '1px solid #1e293b' }}>
          <form onSubmit={handleWithdraw}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', color: '#94a3b8', fontSize: '14px' }}>Withdrawal Amount ($)</label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                required
                style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155' }}
              />
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '5px' }}>Available Balance: $0.00</p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '10px', color: '#94a3b8', fontSize: '14px' }}>Your Destination Wallet (USDT TRC20)</label>
              <input 
                type="text" 
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                placeholder="Enter your TRC20 address"
                required
                style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155' }}
              />
            </div>

            <button type="submit" style={{ width: '100%', padding: '14px', borderRadius: '8px', backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
              Request Withdrawal
            </button>
          </form>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px' }}>
          <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center' }}>
            🔒 All withdrawals are processed manually for security.
          </p>
        </div>
      </div>
    </div>
  );
}
