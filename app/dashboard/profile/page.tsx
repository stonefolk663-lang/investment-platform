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
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>My Profile</h1>

        <div style={{ backgroundColor: '#0f172a', padding: '40px', borderRadius: '24px', border: '1px solid #1e293b', textAlign: 'center' }}>
          
          {/* Simple Avatar Circle */}
          <div style={{ 
            width: '100px', 
            height: '100px', 
            backgroundColor: '#2563eb', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '40px', 
            fontWeight: 'bold', 
            margin: '0 auto 20px',
            boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)'
          }}>
            {initial}
          </div>

          <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '5px' }}>{fullName}</h2>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '30px' }}>{user?.email}</p>

          <div style={{ textAlign: 'left', borderTop: '1px solid #1e293b', paddingTop: '30px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#64748b', fontSize: '12px', marginBottom: '5px', textTransform: 'uppercase' }}>Account Status</label>
              <div style={{ display: 'inline-block', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                ACTIVE
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#64748b', fontSize: '12px', marginBottom: '5px', textTransform: 'uppercase' }}>Preferred Network</label>
              <p style={{ fontWeight: '500' }}>USDT (TRC20)</p>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#64748b', fontSize: '12px', marginBottom: '5px', textTransform: 'uppercase' }}>Registration Date</label>
              <p style={{ fontWeight: '500' }}>{new Date(user?.created_at).toLocaleDateString() || 'Pending...'}</p>
            </div>
          </div>

          <button 
            onClick={() => supabase.auth.signOut().then(() => window.location.href = '/')}
            style={{ marginTop: '20px', width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: 'transparent', color: '#ef4444', border: '1px solid #ef4444', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}
