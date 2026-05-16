'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function UpdatePassword() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });

  // Security Check: Make sure the user arrived here via a valid recovery link session
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setMessage({ 
          text: 'Recovery session expired or invalid. Please request a new link from the login page.', 
          isError: true 
        });
      }
    };
    checkSession();
  }, [supabase]);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ text: '', isError: false });

    // Validate passwords match
    if (password !== confirmPassword) {
      setMessage({ text: 'Passwords do not match.', isError: true });
      return;
    }

    if (password.length < 6) {
      setMessage({ text: 'Password must be at least 6 characters long.', isError: true });
      return;
    }

    setLoading(true);

    // Update user password in Supabase auth database
    const { error } = await supabase.auth.updateUser({
      password: password
    });

    setLoading(false);

    if (error) {
      setMessage({ text: `Update failed: ${error.message}`, isError: true });
    } else {
      setMessage({ text: 'Password updated successfully! Redirecting to login...', isError: false });
      
      // Give them 2 seconds to read the success message, then route to login
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '"Inter", sans-serif', padding: '20px' }}>
      <div style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '420px', padding: '40px 30px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}>
        
        {/* Branding */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#2563eb', letterSpacing: '-1px', margin: '0 0 8px 0' }}>Capital Gain</h1>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Secure Credential Recovery Portal</p>
        </div>

        {/* Status Messages */}
        {message.text && (
          <div style={{ 
            backgroundColor: message.isError ? '#fef2f2' : '#f0fdf4', 
            color: message.isError ? '#991b1b' : '#166534', 
            padding: '12px 16px', 
            borderRadius: '8px', 
            fontSize: '14px', 
            marginBottom: '20px',
            border: `1px solid ${message.isError ? '#fee2e2' : '#dcfce7'}`,
            lineHeight: '1.5'
          }}>
            {message.text}
          </div>
        )}

        {/* Update Form */}
        <form onSubmit={handleUpdatePassword} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>New Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••" 
              style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} 
              disabled={loading || (message.text && message.isError && message.text.includes('expired'))}
              required 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Confirm New Password</label>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              placeholder="••••••••" 
              style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} 
              disabled={loading || (message.text && message.isError && message.text.includes('expired'))}
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading || (message.text && message.isError && message.text.includes('expired'))}
            style={{ backgroundColor: '#1e293b', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '10px', width: '100%', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Saving Changes...' : 'Update Password'}
          </button>
        </form>

      </div>
    </div>
  );
}
