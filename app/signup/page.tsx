'use client'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function SignupPage() {
  const [loading, setLoading] = useState(false)
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
      window.location.href = '/dashboard'
    }
  }

  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: '#0f172a', padding: '40px', borderRadius: '16px', width: '100%', maxWidth: '400px', border: '1px solid #1e293b' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>SpringWealth</h1>
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
          <input name="full_name" placeholder="Full Name" required style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155' }} />
          <input name="email" type="email" placeholder="Email Address" required style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155' }} />
          <input name="phone" placeholder="Phone Number" required style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155' }} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <input name="country" placeholder="Country" required style={{ flex: 1, padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155' }} />
            <input name="city" placeholder="City" required style={{ flex: 1, padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155' }} />
          </div>
          <input name="password" type="password" placeholder="Password" required style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155' }} />
          <button disabled={loading} style={{ padding: '14px', borderRadius: '8px', backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}>
            {loading ? 'Processing...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  )
}
