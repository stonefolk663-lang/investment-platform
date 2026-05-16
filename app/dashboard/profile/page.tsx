'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [supabase])

  // Get first letter of name for avatar
  const fullName = user?.user_metadata?.full_name || 'Investor'
  const initial = fullName.charAt(0).toUpperCase()

  return (
    <div style={{ backgroundColor: '#f1f5f9', color: '#0f172a', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        {/* Simple Navigation Back Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, color: '#0f172a' }}>My Profile</h1>
          <a href="/dashboard" style={{ textDecoration: 'none', color: '#2563eb', fontSize: '14px', fontWeight: 'bold' }}>← Dashboard</a>
        </div>

        {/* Centralized Premium Card Panel */}
        <div style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          
          {/* Simple Avatar Circle */}
          <div style={{ 
            width: '100px', 
            height: '100px', 
            backgroundColor: '#2563eb', 
            color: 'white',
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '40px', 
            fontWeight: 'bold', 
            margin: '0 auto 20px',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
          }}>
            {initial}
          </div>

          <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '5px', color: '#0f172a' }}>{fullName}</h2>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '30px' }}>{user?.email}</p>

          {/* Profile Details Grid Info */}
          <div style={{ textAlign: 'left', borderTop: '1px solid #e2e8f0', paddingTop: '30px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#475569', fontSize: '12px', marginBottom: '5px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Account Status</label>
              <div style={{ display: 'inline-block', backgroundColor: 'rgba(22, 163, 74, 0.1)', color: '#16a34a', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                ACTIVE
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#475569', fontSize: '12px', marginBottom: '5px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Preferred Network</label>
              <p style={{ fontWeight: '600', margin: 0, color: '#0f172a' }}>Bitcoin (BTC)</p>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#475569', fontSize: '12px', marginBottom: '5px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Registration Date</label>
              <p style={{ fontWeight: '600', margin: 0, color: '#0f172a' }}>{user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Pending...'}</p>
            </div>
          </div>

          {/* Safe Sign Out Triggers */}
          <button 
            onClick={() => supabase.auth.signOut().then(() => window.location.href = '/')}
            style={{ marginTop: '20px', width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: 'transparent', color: '#dc2626', border: '1px solid #dc2626', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px', transition: 'background-color 0.2s' }}
          >
            Log Out
          </button>
        </div>

      </div>
    </div>
  )
}
