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

  // Get the first initial for the avatar
  const fullName = user?.user_metadata?.full_name || 'Investor'
  const initial = fullName.charAt(0).toUpperCase()

  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', padding: '20px' }}>
      
      {/* Updated Header with Profile Link */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #1e293b', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>SpringWealth <span style={{ color: '#2563eb' }}>Portal</span></h1>
        
        {/* Clickable Profile Navigation */}
        <a href="/dashboard/profile" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Account</p>
            <p style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>{fullName}</p>
          </div>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#2563eb', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontWeight: 'bold', 
            fontSize: '16px',
            boxShadow: '0 0 10px rgba(37, 99, 235, 0.2)'
          }}>
            {initial}
          </div>
        </a>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ backgroundColor: '#0f172a', padding: '25px', borderRadius: '16px', border: '1px solid #1e293b' }}>
          <p style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Balance</p>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px' }}>$0.00</h2>
        </div>
        <div style={{ backgroundColor: '#0f172a', padding: '25px', borderRadius: '16px', border: '1px solid #1e293b' }}>
          <p style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Active Profits</p>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981', marginTop: '10px' }}>$0.00</h2>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <a href="/dashboard/deposit" style={{ textDecoration: 'none', flex: 1, minWidth: '140px' }}>
          <button style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' }}>
            Deposit
          </button>
        </a>
        <a href="/dashboard/withdraw" style={{ textDecoration: 'none', flex: 1, minWidth: '140px' }}>
          <button style={{ width: '100%', backgroundColor: '#1e293b', color: 'white', padding: '14px', borderRadius: '12px', border: '1px solid #334155', fontWeight: 'bold', cursor: 'pointer' }}>
            Withdraw
          </button>
        </a>
        <a href="/dashboard/plans" style={{ textDecoration: 'none', flex: 1, minWidth: '140px' }}>
          <button style={{ width: '100%', backgroundColor: '#0f172a', color: 'white', padding: '14px', borderRadius: '12px', border: '1px solid #334155', fontWeight: 'bold', cursor: 'pointer' }}>
            Plans
          </button>
        </a>
      </div>

      {/* Transaction History Section */}
      <div style={{ backgroundColor: '#0f172a', padding: '25px', borderRadius: '20px', border: '1px solid #1e293b' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>Recent Transactions</h3>
        <div style={{ color: '#94a3b8', textAlign: 'center', padding: '50px 0', border: '1px dashed #1e293b', borderRadius: '16px' }}>
          <div style={{ fontSize: '30px', marginBottom: '10px' }}>📋</div>
          <p style={{ fontWeight: '500', color: 'white' }}>No transactions yet.</p>
          <p style={{ fontSize: '12px', marginTop: '5px' }}>Your deposit and withdrawal history will appear here.</p>
        </div>
      </div>

    </div>
  )
}
