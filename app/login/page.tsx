'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'; 

export default function SignIn() {
  const router = useRouter(); 
  const supabase = createClientComponentClient(); 
  
  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  
  // Loading States to prevent spam clicking
  const [loginLoading, setLoginLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  // 1. Handle Secure User Sign-In
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setLoginLoading(false);

    if (error) {
      alert(`Login Error: ${error.message}`);
    } else if (data?.user) {
      // Moves user securely straight into the dashboard layout
      router.push('/dashboard'); 
    }
  };

  // 2. Handle Password Recovery Request
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetLoading(true);
    
    const { error } = await supabase.auth.resetPasswordForEmail(forgotEmail, {
      redirectTo: 'https://investment-platform-dont.vercel.app/dashboard/update-password',
    });

    setResetLoading(false);

    if (error) {
      alert(`Error sending recovery email: ${error.message}`);
    } else {
      alert(`Reset link safely dispatched to ${forgotEmail}. Please check your inbox and spam folder.`);
      setIsForgotModalOpen(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '"Inter", sans-serif', padding: '20px' }}>
      <div style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '420px', padding: '40px 30px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}>
        
        {/* Branding */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#2563eb', letterSpacing: '-1px', margin: '0 0 8px 0' }}>SpringWealth</h1>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Welcome back. Log in to monitor your assets.</p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="name@example.com" 
              style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} 
              required 
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>Password</label>
              <button 
                type="button" 
                onClick={() => setIsForgotModalOpen(true)} 
                style={{ background: 'none', border: 'none', color: '#2563eb', fontSize: '13px', fontWeight: '600', cursor: 'pointer', padding: 0 }}
              >
                Forgot password?
              </button>
            </div>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••" 
              style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} 
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loginLoading}
            style={{ backgroundColor: '#1e293b', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '15px', cursor: loginLoading ? 'not-allowed' : 'pointer', marginTop: '10px', width: '100%', opacity: loginLoading ? 0.7 : 1 }}
          >
            {loginLoading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginTop: '30px', margin: '30px 0 0 0' }}>
          Don't have an account? <a href="/signup" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>Register here</a>
        </p>
      </div>

      {/* Forgot Password Modal Overlay */}
      {isForgotModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ backgroundColor: 'white', padding: '35px 30px', borderRadius: '16px', width: '100%', maxWidth: '400px', boxSizing: 'border-box' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' }}>Reset Password</h3>
            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5', margin: '0 0 20px 0' }}>Enter your verified email. We will send you an exclusive link to restore your dashboard credentials.</p>
            
            <form onSubmit={handleForgotPassword} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="email" 
                value={forgotEmail} 
                onChange={(e) => setForgotEmail(e.target.value)} 
                placeholder="name@example.com" 
                style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} 
                required 
              />
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button 
                  type="button" 
                  onClick={() => setIsForgotModalOpen(false)} 
                  style={{ flex: 1, backgroundColor: '#f1f5f9', color: '#64748b', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={resetLoading}
                  style={{ flex: 1, backgroundColor: '#2563eb', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: resetLoading ? 'not-allowed' : 'pointer', opacity: resetLoading ? 0.7 : 1 }}
                >
                  {resetLoading ? 'Sending...' : 'Send Link'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
