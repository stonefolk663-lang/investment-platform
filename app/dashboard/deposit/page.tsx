'use client'
import React, { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function DepositPage() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleDeposit = async () => {
    if (!amount || parseFloat(amount) <= 0) return alert("Please enter a valid amount");
    
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase
      .from('transactions')
      .insert([
        { 
          user_id: user?.id, 
          amount: parseFloat(amount), 
          type: 'deposit', 
          status: 'pending' 
        }
      ]);

    if (!error) {
      alert('Deposit notification sent! Please wait for admin verification.');
      router.push('/dashboard');
    } else {
      alert('Error: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ backgroundColor: '#f1f5f9', color: '#0f172a', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        
        {/* Simple Navigation Back Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, color: '#0f172a' }}>Deposit Funds</h1>
          <a href="/dashboard" style={{ textDecoration: 'none', color: '#2563eb', fontSize: '14px', fontWeight: 'bold' }}>← Back to Dashboard</a>
        </div>
        
        {/* Centralized Premium Form Panel */}
        <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          
          <label style={{ display: 'block', marginBottom: '10px', color: '#475569', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Amount to Invest ($)
          </label>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 500"
            style={{ width: '100%', padding: '14px', borderRadius: '8px', backgroundColor: '#f8fafc', color: '#0f172a', border: '1px solid #cbd5e1', marginBottom: '25px', boxSizing: 'border-box', fontSize: '16px' }}
          />

          {/* Targeted BTC Secure Wallet Module */}
          <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px dashed #2563eb', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#475569', fontWeight: '600', margin: '0 0 8px 0' }}>
              Send Bitcoin (BTC) to:
            </p>
            <div style={{ backgroundColor: '#ffffff', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0', margin: '5px 0' }}>
              <code style={{ fontSize: '14px', color: '#b45309', fontWeight: 'bold', wordBreak: 'break-all', fontFamily: 'monospace' }}>
                bc1qvehsr7qajwzf5unz4439hgxdc56awf642gmpst
              </code>
            </div>
            <p style={{ fontSize: '11px', color: '#64748b', margin: '8px 0 0 0' }}>
              ⚠️ Ensure you are sending native BTC assets over the correct Bitcoin network layer.
            </p>
          </div>

          {/* CTA Operation Launcher */}
          <button 
            onClick={handleDeposit}
            disabled={loading}
            style={{ width: '100%', padding: '14px', borderRadius: '8px', backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold', marginTop: '25px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, fontSize: '15px', boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)' }}
          >
            {loading ? 'Processing...' : 'I Have Made the Transfer'}
          </button>
        </div>

      </div>
    </div>
  );
}
