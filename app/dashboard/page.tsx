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
  }, [])

  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', padding: '20px' }}>
      {/* Top Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #1e293b', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>SpringWealth <span style={{ color: '#2563eb' }}>Portal</span></h1>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '14px', color: '#94a3b8' }}>Welcome back,</p>
          <p style={{ fontWeight: 'bold' }}>{user?.user_metadata?.full_name || 'Investor'}</p>
        </div>
      </div>

      {/* Money Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ backgroundColor: '#0f172a', padding: '25px', borderRadius: '16px', border: '1px solid #1e293b' }}>
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>Total Balance</p>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px' }}>$0.00</h2>
        </div>
        <div style={{ backgroundColor: '#0f172a', padding: '25px', borderRadius: '16px', border: '1px solid #1e293b' }}>
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>Active Investments</p>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px', color: '#10b981' }}>$0.00</h2>
        </div>
        <div style={{ backgroundColor: '#0f172a', padding: '25px', borderRadius: '16px', border: '1px solid #1e293b' }}>
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>Total Profit</p>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px', color: '#2563eb' }}>$0.00</h2>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
        <h3>Ready to grow your capital?</h3>
        <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', marginTop: '15px', cursor: 'pointer' }}>
          Explore Investment Plans
        </button>
      </div>
    </div>
  )
}
