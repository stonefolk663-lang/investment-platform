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
    <div style={{ backgroundColor: '#f1f5f9', color: '#0f172a', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        
        {/* Simple Navigation Back Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, color: '#0f172a' }}>Withdraw Funds</h1>
          <a href="/dashboard" style={{ textDecoration: 'none', color: '#2563eb', fontSize: '14px', fontWeight: 'bold' }}>← Dashboard</a>
        </div>
        <p style={{ color: '#475569', marginBottom: '30px', fontSize: '14px' }}>Request a payout of your earnings to your external wallet.</p>
        
        {/* Centralized Premium Form Panel */}
        <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <form onSubmit={handleWithdraw}>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', color: '#475569', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Withdrawal Amount ($)
              </label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                required
                style={{ width: '100%', padding: '14px', borderRadius: '8px', backgroundColor: '#f8fafc', color: '#0f172a', border: '1px solid #cbd5e1', boxSizing: 'border-box', fontSize: '16px' }}
              />
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '8px', fontWeight: '500' }}>Available Balance: $0.00</p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '10px', color: '#475569', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Your Destination Wallet (Bitcoin BTC)
              </label>
              <input 
                type="text" 
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                placeholder="Enter your BTC wallet address"
                required
                style={{ width: '100%', padding: '14px', borderRadius: '8px', backgroundColor: '#f8fafc', color: '#0f172a', border: '1px solid #cbd5e1', boxSizing: 'border-box', fontSize: '16px' }}
              />
            </div>

            <button type="submit" style={{ width: '100%', padding: '14px', borderRadius: '8px', backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '15px', boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)' }}>
              Request Withdrawal
            </button>
          </form>
        </div>

        {/* Security Bottom Notice */}
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'rgba(71, 85, 105, 0.05)', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
          <p style={{ fontSize: '13px', color: '#475569', textAlign: 'center', margin: 0 }}>
            🔒 All withdrawals are processed manually for security.
          </p>
        </div>
      </div>
    </div>
  );
}
