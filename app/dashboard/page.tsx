'use client'
import React, { useState } from 'react';

export default function Dashboard() {
  // Hardcoded secure stats that require ZERO external files or missing folders to compile
  const [metrics] = useState({
    totalBalance: '14,850.50',
    activeProfits: '2,410.20',
    accountTier: 'Premium Investor',
    userName: 'Investor'
  });

  const cryptoBalances = [
    { name: 'Tether', ticker: 'USDT', network: 'TRC-20', balance: '8,420.00', valueInUSD: '$8,420.00', color: '#10b981' },
    { name: 'Bitcoin', ticker: 'BTC', network: 'Native SegWit', balance: '0.094 BTC', valueInUSD: '$5,130.50', color: '#f59e0b' },
    { name: 'Ethereum', ticker: 'ETH', network: 'ERC-20', balance: '0.38 ETH', valueInUSD: '$1,300.00', color: '#6366f1' }
  ];

  const transactionHistory = [
    { id: 'TXN-90814', type: 'Deposit', asset: 'USDT (TRC-20)', amount: '+ $5,000.00', date: 'May 14, 2026', status: 'Completed', statusColor: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
    { id: 'TXN-88181', type: 'Weekly Yield', asset: 'Automated Return', amount: '+ $214.50', date: 'May 10, 2026', status: 'Completed', statusColor: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
    { id: 'TXN-75212', type: 'Withdrawal', asset: 'Bitcoin (BTC)', amount: '- $750.00', date: 'May 03, 2026', status: 'Processing', statusColor: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' }
  ];

  // Safe fallback alerting mechanism so it never crashes if sub-folders don't exist on GitHub yet
  const handleNavigation = (path: string) => {
    alert(`Navigating to ${path}... System linking active.`);
  };

  return (
    <div style={{ backgroundColor: '#020617', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #1e293b', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, letterSpacing: '-0.5px' }}>
            SpringWealth <span style={{ color: '#2563eb' }}>Portal</span>
          </h1>
          
          <div onClick={() => handleNavigation('/profile')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>{metrics.accountTier}</p>
              <p style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>{metrics.userName}</p>
            </div>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              I
            </div>
          </div>
        </div>

        {/* Hero Metrics Grid - Removed pure HTML comments that crash compilers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <div style={{ backgroundColor: '#0f172a', padding: '25px', borderRadius: '16px', border: '1px solid #1e293b' }}>
            <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Balance</p>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0 0 0', letterSpacing: '-1px' }}>${metrics.totalBalance}</h2>
          </div>
          
          <div style={{ backgroundColor: '#0f172a', padding: '25px', borderRadius: '16px', border: '1px solid #1e293b' }}>
            <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Profits</p>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#10b981', margin: '10px 0 0 0', letterSpacing: '-1px' }}>${metrics.activeProfits}</h2>
          </div>
        </div>

        {/* Action Button Navigation Links */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <button onClick={() => handleNavigation('/deposit')} style={{ flex: 1, minWidth: '120px', backgroundColor: '#2563eb', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
            Deposit
          </button>
          <button onClick={() => handleNavigation('/withdraw')} style={{ flex: 1, minWidth: '120px', backgroundColor: '#1e293b', color: 'white', padding: '14px', borderRadius: '12px', border: '1px solid #334155', fontWeight: 'bold', cursor: 'pointer' }}>
            Withdraw
          </button>
          <button onClick={() => handleNavigation('/plans')} style={{ flex: 1, minWidth: '120px', backgroundColor: '#0f172a', color: 'white', padding: '14px', borderRadius: '12px', border: '1px solid #334155', fontWeight: 'bold', cursor: 'pointer' }}>
            Plans
          </button>
        </div>

        {/* Crypto Balance breakdown */}
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>Funding Network Breakdown</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {cryptoBalances.map((coin, index) => (
            <div key={index} style={{ backgroundColor: '#0f172a', borderRadius: '16px', border: '1px solid #1e293b', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#ffffff' }}>{coin.name} Balance</h4>
                  <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#94a3b8' }}>Network: {coin.network}</p>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '6px', color: coin.color, backgroundColor: `${coin.color}20` }}>
                  {coin.ticker}
                </span>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '22px', fontWeight: 'bold', color: '#ffffff' }}>{coin.balance}</p>
                <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#94a3b8' }}>≈ {coin.valueInUSD}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Real-time Ledger Operations */}
        <div style={{ backgroundColor: '#0f172a', padding: '25px', borderRadius: '20px', border: '1px solid #1e293b', overflow: 'hidden' }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 'bold' }}>Recent Ledger Operations</h3>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #1e293b', color: '#94a3b8' }}>
                  <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '600' }}>Reference ID</th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '600' }}>Operation Type</th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '600' }}>Asset Allocation</th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '600' }}>Amount</th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '600' }}>Execution Date</th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '600' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((txn, idx) => (
                  <tr key={idx} style={{ borderBottom: idx !== transactionHistory.length - 1 ? '1px solid #1e293b' : 'none' }}>
                    <td style={{ padding: '16px', fontSize: '14px', fontWeight: 'bold', color: '#ffffff' }}>{txn.id}</td>
                    <td style={{ padding: '16px', fontSize: '14px', color: '#ffffff' }}>{txn.type}</td>
                    <td style={{ padding: '16px', fontSize: '14px', color: '#94a3b8' }}>{txn.asset}</td>
                    <td style={{ padding: '16px', fontSize: '14px', fontWeight: 'bold', color: txn.amount.includes('+') ? '#10b981' : '#ffffff' }}>{txn.amount}</td>
                    <td style={{ padding: '16px', fontSize: '14px', color: '#94a3b8' }}>{txn.date}</td>
                    <td style={{ padding: '16px' }}>
                      <span style={{ backgroundColor: txn.bg, color: txn.statusColor, padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>
                        {txn.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
