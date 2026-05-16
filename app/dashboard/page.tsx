'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [transactions, setTransactions] = useState<any[]>([])
  const [balance, setBalance] = useState(0)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getData = async () => {
      // 1. Get User
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        // 2. Get Transactions
        const { data: txData } = await supabase
          .from('transactions')
          .select('*')
          .order('created_at', { ascending: false })
        
        setTransactions(txData || [])

        // 3. Calculate Balance (Only Completed Deposits)
        const total = txData
          ?.filter(tx => tx.status === 'completed' && tx.type === 'deposit')
          .reduce((sum, tx) => sum + tx.amount, 0)
        
        setBalance(total || 0)
      }
    }
    getData()
  }, [supabase])

  const fullName = user?.user_metadata?.full_name || 'Investor'
  const initial = fullName.charAt(0).toUpperCase()

  // 1. Gamification Goal Metrics (Targeting a $10,000 Milestone)
  const targetMilestone = 10000;
  const progressPercentage = Math.min((balance / targetMilestone) * 100, 100);

  // 2. Portfolio Performance Weather Rules
  // Dynamic status based on user account history balance state
  const isAccountActive = balance > 0;
  const portfolioWeather = isAccountActive ? '☀️ Clear & Bullish' : '🌤️ Awaiting Funding';
  const statusBadgeColor = isAccountActive ? '#16a34a' : '#475569';
  const statusBadgeBg = isAccountActive ? 'rgba(22, 163, 74, 0.1)' : 'rgba(71, 85, 105, 0.1)';

  return (
    <div style={{ backgroundColor: '#f1f5f9', color: '#0f172a', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid #cbd5e1', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>SpringWealth <span style={{ color: '#2563eb' }}>Portal</span></h1>
          
          <a href="/dashboard/profile" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '12px', color: '#475569', margin: 0 }}>Account</p>
              <p style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#0f172a' }}>{fullName}</p>
            </div>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#2563eb', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              {initial}
            </div>
          </a>
        </div>

        {/* Dynamic Metric Widgets Block */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          
          {/* Main Financial Balance Panel */}
          <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: '#475569', fontSize: '12px', margin: 0, fontWeight: '600', textTransform: 'uppercase' }}>Total Balance</p>
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: statusBadgeColor, backgroundColor: statusBadgeBg, padding: '4px 8px', borderRadius: '6px' }}>
                {portfolioWeather}
              </span>
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: '12px 0 0 0', color: '#0f172a', letterSpacing: '-0.5px' }}>${balance.toFixed(2)}</h2>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#16a34a', fontWeight: '500' }}>Active Profits: $0.00 🔥</p>
          </div>

          {/* Gamified Goal Progress Tracker Bar Widget */}
          <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <p style={{ color: '#475569', fontSize: '12px', margin: 0, fontWeight: '600', textTransform: 'uppercase' }}>Milestone Track</p>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#2563eb' }}>{progressPercentage.toFixed(0)}% to $10k Target</span>
            </div>
            
            {/* Progress Track Background */}
            <div style={{ width: '100%', height: '12px', backgroundColor: '#e2e8f0', borderRadius: '10px', overflow: 'hidden', marginBottom: '8px' }}>
              <div style={{ width: `${progressPercentage}%`, height: '100%', backgroundColor: '#2563eb', borderRadius: '10px', transition: 'width 0.5s ease-in-out' }}></div>
            </div>
            <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>
              Accumulating funds toward your secure primary long-term investment horizon.
            </p>
          </div>

        </div>

        {/* Quick Actions Router Controls */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <a href="/dashboard/deposit" style={{ textDecoration: 'none', flex: 1 }}><button style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)' }}>Deposit</button></a>
          <a href="/dashboard/withdraw" style={{ textDecoration: 'none', flex: 1 }}><button style={{ width: '100%', backgroundColor: '#ffffff', color: '#0f172a', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>Withdraw</button></a>
          <a href="/dashboard/plans" style={{ textDecoration: 'none', flex: 1 }}><button style={{ width: '100%', backgroundColor: '#ffffff', color: '#0f172a', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>Plans</button></a>
        </div>

        {/* Dynamic Transactions Ledger Card Component */}
        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold', color: '#0f172a', marginTop: 0 }}>Recent Transactions</h3>
          
          {transactions.length > 0 ? (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ color: '#64748b', fontSize: '12px' }}>
                    <th style={{ padding: '12px' }}>TYPE</th>
                    <th style={{ padding: '12px' }}>AMOUNT</th>
                    <th style={{ padding: '12px' }}>STATUS</th>
                    <th style={{ padding: '12px' }}>DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr key={tx.id} style={{ borderTop: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '15px', fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>{tx.type.toUpperCase()}</td>
                      <td style={{ padding: '15px', fontSize: '14px', color: '#0f172a' }}>${tx.amount.toFixed(2)}</td>
                      <td style={{ padding: '15px' }}>
                        <span style={{ 
                          padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold',
                          backgroundColor: tx.status === 'pending' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(22, 163, 74, 0.1)',
                          color: tx.status === 'pending' ? '#d97706' : '#16a34a'
                        }}>
                          {tx.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ padding: '15px', fontSize: '12px', color: '#64748b' }}>
                        {new Date(tx.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ color: '#64748b', textAlign: 'center', padding: '50px 0' }}>
              <p style={{ margin: 0 }}>No transactions yet.</p>
            </div>
          )}
        </div>
        
      </div>
    </div>
  )
}
