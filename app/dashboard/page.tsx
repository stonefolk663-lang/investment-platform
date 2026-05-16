'use client'
import React from 'react';

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>
            SpringWealth <span style={{ color: '#2563eb' }}>Portal</span>
          </h1>
          <a href="/dashboard/profile" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Account</p>
              <p style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#0f172a' }}>Investor</p>
            </div>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#2563eb', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifycontent: 'center', fontWeight: 'bold', lineHeight: '40px', textAlign: 'center' }}>
              I
            </div>
          </a>
        </div>

        {/* Balance Metrics Grid — Exactly 0.00 as requested */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
            <p style={{ color: '#64748b', fontSize: '12px', margin: 0 }}>Total Balance</p>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0 0 0', color: '#0f172a' }}>$0.00</h2>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
            <p style={{ color: '#64748b', fontSize: '12px', margin: 0 }}>Active Profits</p>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#16a34a', margin: '10px 0 0 0' }}>$0.00</h2>
          </div>
        </div>

        {/* Action Buttons — True Functional Links */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <a href="/dashboard/deposit" style={{ textDecoration: 'none', flex: 1 }}>
            <button style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
              Deposit
            </button>
          </a>
          <a href="/dashboard/withdraw" style={{ textDecoration: 'none', flex: 1 }}>
            <button style={{ width: '100%', backgroundColor: '#ffffff', color: '#0f172a', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
              Withdraw
            </button>
          </a>
          <a href="/dashboard/plans" style={{ textDecoration: 'none', flex: 1 }}>
            <button style={{ width: '100%', backgroundColor: '#ffffff', color: '#0f172a', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>
              Plans
            </button>
          </a>
        </div>

        {/* Recent Transactions Section */}
        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 'bold', color: '#0f172a' }}>Recent Transactions</h3>
          <div style={{ color: '#64748b', textalign: 'center', padding: '50px 0', textAlign: 'center' }}>
            <p style={{ margin: 0 }}>No transactions yet.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
