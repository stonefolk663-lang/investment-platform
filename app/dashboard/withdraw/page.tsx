'use client'
import React, { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function WithdrawPage() {
  const [amount, setAmount] = useState('')
  const [wallet, setWallet] = useState('')
  const [balance, setBalance] = useState(0)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const fetchBalance = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('wallet_balance')
          .eq('id', user.id)
          .single()

        if (profileData) {
          setBalance(profileData.wallet_balance || 0)
        }
      }
      setLoading(false)
    }
    fetchBalance()
  }, [supabase])

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const numericAmount = parseFloat(amount)
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert('Please enter a valid withdrawal amount.')
      return
    }

    if (numericAmount > balance) {
      alert(`Insufficient funds. Your available balance is $${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`)
      return
    }

    setSubmitting(true)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        alert('Authentication error. Please log out and try again.')
        setSubmitting(false)
        return
      }

      // Insert transaction history item into database as PENDING
      const { error } = await supabase
        .from('transactions')
        .insert([
          {
            user_id: user.id,
            type: 'withdrawal',
            amount: numericAmount,
            status: 'pending',
            created_at: new Date().toISOString()
          }
        ])

      if (error) {
        console.error('Database insertion error:', error.message)
        alert('Something went wrong processing your request. Please try again.')
      } else {
        alert('Withdrawal request submitted. Our team will review and process your request within 24 hours.')
        setAmount('')
        setWallet('')
        // Optimistically lower balance display until manual database change occurs
        setBalance(prev => prev - numericAmount)
      }
    } catch (err) {
      console.error(err)
      alert('An unexpected error occurred.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div style={{ backgroundColor: '#f1f5f9', color: '#0f172a', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        
        {/* Simple Navigation Back Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, color: '#0f172a' }}>Withdraw Funds</h1>
          <a href="/dashboard" style={{ textDecoration: 'none', color: '#2563eb', fontSize: '14px', fontWeight: 'bold' }}>← Dashboard</a>
        </div>
        <p style={{ color: '#475569', marginBottom: '30px', fontSize: '14px' }}>Request a payout of your earnings to your external wallet.</p>
        
        {/* Centralized Premium Form Panel */}
        <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <form onSubmit={handleWithdraw}>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', color: '#475569', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Withdrawal Amount ($)
              </label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                step="any"
                required
                disabled={submitting}
                style={{ width: '100%', padding: '14px', borderRadius: '8px', backgroundColor: '#f8fafc', color: '#0f172a', border: '1px solid #cbd5e1', boxSizing: 'border-box', fontSize: '16px' }}
              />
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '8px', fontWeight: '500' }}>
                Available Balance: {loading ? 'Loading...' : `$${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '10px', color: '#475569', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Your Destination Wallet (Bitcoin BTC)
              </label>
              <input 
                type="text" 
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                placeholder="Enter your BTC wallet address"
                required
                disabled={submitting}
                style={{ width: '100%', padding: '14px', borderRadius: '8px', backgroundColor: '#f8fafc', color: '#0f172a', border: '1px solid #cbd5e1', boxSizing: 'border-box', fontSize: '16px' }}
              />
            </div>

            <button 
              type="submit" 
              disabled={submitting}
              style={{ 
                width: '100%', 
                padding: '14px', 
                borderRadius: '8px', 
                backgroundColor: submitting ? '#94a3b8' : '#2563eb', 
                color: 'white', 
                fontWeight: 'bold', 
                border: 'none', 
                cursor: submitting ? 'not-allowed' : 'pointer', 
                fontSize: '15px', 
                boxShadow: submitting ? 'none' : '0 2px 4px rgba(37, 99, 235, 0.2)' 
              }}
            >
              {submitting ? 'Submitting Request...' : 'Request Withdrawal'}
            </button>
          </form>
        </div>

        {/* Security Bottom Notice */}
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'rgba(71, 85, 105, 0.05)', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
          <p style={{ fontSize: '13px', color: '#475569', textAlign: 'center', margin: 0 }}>
            🔒 All withdrawals are processed manually for security.
          </p>
        </div>
      </div>
    </div>
  )
}
