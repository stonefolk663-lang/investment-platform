'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // This saves the extra info into the "User Metadata"
        data: {
          full_name: formData.get('full_name'),
          phone: formData.get('phone'),
          city: formData.get('city'),
          country: formData.get('country'),
        }
      },
    })

    if (error) {
      alert(error.message)
      setLoading(false)
    } else {
      // This sends them straight to the dashboard
      router.push('/dashboard')
    }
  }

  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: '#0f172a', padding: '40px', borderRadius: '16px', width: '100%', maxWidth: '400px', border: '1px solid #1e293b', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>SpringWealth</h1>
        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '24px', fontSize: '14px' }}>Create your investor profile</p>
        
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input name="full_name" placeholder="Full Name" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1e293b', color: 'white' }} />
          <input name="email" type="email" placeholder="Email Address" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1e293b', color: 'white' }} />
          <input name="phone" placeholder="Phone Number" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1e293b', color: 'white' }} />
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <input name="country" placeholder="Country" required style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1e293b', color: 'white' }} />
            <input name="city" placeholder="City" required style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1e293b', color: 'white' }} />
          </div>

          <input name="password" type="password" placeholder="Password (min 6 chars)" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1e293b', color: 'white' }} />
          
          <button disabled={loading} style={{ padding: '14px', borderRadius: '8px', backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px', border: 'none' }}>
            {loading ? 'Opening your account...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  )
}
