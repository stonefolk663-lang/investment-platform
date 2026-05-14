'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [supabase])

  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', padding: '20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #1e293b', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>SpringWealth <span style={{ color: '#2563eb' }}>Portal</span></h1>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '14px', color: '#94a3b8' }}>Welcome,</p>
          <p style={{ fontWeight: 'bold' }}>{user?.user_metadata?.full_name || 'Investor'}</p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #1e293b' }}>
          <p style={{ color: '#94a3b8', fontSize: '12px' }}>Total Balance</p>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>$0.00</h2>
        </div>
        <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #1e293b' }}>
          <p style={{ color: '#94a3b8', fontSize: '12px' }}>Active Profits</p>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981' }}>$0.00</h2>
        </div>
      </div>

      {/* Main Actions */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <a href="/dashboard/deposit" style={{ textDecoration: 'none', flex: 1, minWidth: '140px' }}>
          <button style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Deposit</button>
        </a>
        <a href="/dashboard/withdraw" style={{ textDecoration: 'none', flex: 1, minWidth: '140px' }}>
          <button style={{ width: '100%', backgroundColor: '#1e293b', color: 'white', padding: '12px', borderRadius: '8px', border: '1px solid #334155', fontWeight: 'bold', cursor: 'pointer' }}>Withdraw</button>
        </a>
        <a href="/dashboard/plans" style={{ textDecoration: 'none', flex: 1, minWidth: '140px' }}>
          <button style={{ width: '100%', backgroundColor: '#0f172a', color: 'white', padding: '12px', borderRadius: '8px', border: '1px solid #334155', fontWeight: 'bold', cursor: 'pointer' }}>Plans</button>
        </a>
      </div>

      {/* Transaction History Section */}
      <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '16px', border: '1px solid #1e293b' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '18px' }}>Recent Transactions</h3>
        <div style={{ color: '#94a3b8', textAlign: 'center', padding: '40px 0', border: '1px dashed #1e293b', borderRadius: '8px' }}>
          <p>No transactions yet.</p>
          <p style={{ fontSize: '12px' }}>Your deposit and withdrawal history will appear here.</p>
        </div>
      </div>
    </div>
  )
}
