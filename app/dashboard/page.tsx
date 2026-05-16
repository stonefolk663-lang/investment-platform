'use client'
import React, { useState } from 'react';

export default function Dashboard() {
  // Hardcoded realistic default states for a professional view
  const [userProfile] = useState({
    name: 'John Doe',
    accountTier: 'Premium Investor',
    totalBalance: '14,850.50',
    weeklyGrowth: '+4.82%',
  });

  const cryptoBalances = [
    { name: 'Tether', ticker: 'USDT', network: 'TRC-20', balance: '8,420.00', valueInUSD: '$8,420.00', color: '#26a17b' },
    { name: 'Bitcoin', ticker: 'BTC', network: 'Native SegWit', balance: '0.094 BTC', valueInUSD: '$5,130.50', color: '#f7931a' },
    { name: 'Ethereum', ticker: 'ETH', network: 'ERC-20', balance: '0.38 ETH', valueInUSD: '$1,300.00', color: '#627eea' }
  ];

  const transactionHistory = [
    { id: 'TXN-90814', type: 'Deposit', asset: 'USDT (TRC-20)', amount: '+ $5,000.00', date: 'May 14, 2026', status: 'Completed', statusColor: '#10b981', bg: '#ecfdf5' },
    { id: 'TXN-88181', type: 'Weekly Yield', asset: 'Automated Return', amount: '+ $214.50', date: 'May 10, 2026', status: 'Completed', statusColor: '#10b981', bg: '#ecfdf5' },
    { id: 'TXN-75212', type: 'Withdrawal', asset: 'Bitcoin (BTC)', amount: '- $750.00', date: 'May 03, 2026', status: 'Processing', statusColor: '#f59e0b', bg: '#fffbeb' }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: '"Inter", sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* Premium Navigation Topbar */}
      <nav style={{ backgroundColor: '#0f172a', color: 'white', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: '#2563eb', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '18px' }}>S</div>
          <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px' }}>SpringWealth</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ textAlign: 'right', display: 'none', md: 'block' }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>{userProfile.name}</p>
            <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>{userProfile.accountTier}</p>
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px' }}>
            JD
          </div>
        </div>
      </nav>

      {/* Main Dashboard Workspace */}
      <main style={{ flex: 1, padding: '40px 20px', maxWidth: '1200px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* Welcome Header & Growth Section */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px 0' }}>Investor Dashboard</h2>
            <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Real-time monitoring of your managed capital assets.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)' }}>Deposit Funds</button>
            <button style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: '12px 24px', borderRadius: '8px', border: '1px solid #cbd5e1', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>Withdraw</button>
          </div>
        </div>

        {/* Hero Portfolio Stat Card */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '30px', marginBottom: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
          <p style={{ margin: '0 0 8px 0', fontSize: '13px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Portfolio Net Value</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '15px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '42px', fontWeight: '900', color: '#0f172a', letterSpacing: '-1px' }}>${userProfile.totalBalance}</span>
            <span style={{ backgroundColor: '#dcfce7', color: '#16a34a', padding: '4px 10px', borderRadius: '20px', fontSize: '13px', fontWeight: '700' }}>
              {userProfile.weeklyGrowth} This Week
            </span>
          </div>
        </div>

        {/* Middle Section: Assets & Networks Grid */}
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>Allocated Asset Accounts</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {cryptoBalances.map((coin, index) => (
            <div key={index} style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.01)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>{coin.name}</h4>
                  <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#94a3b8', fontWeight: '500' }}>Network: {coin.network}</p>
                </div>
                <span style={{ fontSize: '12px', fontWeight: '800', padding: '4px 8px', borderRadius: '6px', color: coin.color, backgroundColor: `${coin.color}15` }}>
                  {coin.ticker}
                </span>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>{coin.balance}</p>
                <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: '#64748b' }}>≈ {coin.valueInUSD}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Transaction Logs Table */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.01)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#fafafa' }}>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>Recent Ledger Operations</h3>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                  <th style={{ padding: '14px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b' }}>Reference ID</th>
                  <th style={{ padding: '14px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b' }}>Operation Type</th>
                  <th style={{ padding: '14px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b' }}>Asset Allocation</th>
                  <th style={{ padding: '14px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b' }}>Amount</th>
                  <th style={{ padding: '14px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b' }}>Execution Date</th>
                  <th style={{ padding: '14px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((txn, idx) => (
                  <tr key={idx} style={{ borderBottom: idx !== transactionHistory.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                    <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>{txn.id}</td>
                    <td style={{ padding: '16px 24px', fontSize: '14px', color: '#0f172a', fontWeight: '500' }}>{txn.type}</td>
                    <td style={{ padding: '16px 24px', fontSize: '14px', color: '#64748b' }}>{txn.asset}</td>
                    <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '700', color: txn.amount.includes('+') ? '#10b981' : '#0f172a' }}>{txn.amount}</td>
                    <td style={{ padding: '16px 24px', fontSize: '14px', color: '#64748b' }}>{txn.date}</td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{ backgroundColor: txn.bg, color: txn.statusColor, padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '700' }}>
                        {txn.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
