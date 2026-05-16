'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [transactions, setTransactions] = useState<any[]>([])
  const [balance, setBalance] = useState(0)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getData = async () => {
      // 1. Get User
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        // 2. Get Transactions
        const { data: txData } = await supabase
          .from('transactions')
          .select('*')
          .order('created_at', { ascending: false })
        
        setTransactions(txData || [])

        // 3. Calculate Balance (Only Completed Deposits)
        const total = txData
          ?.filter(tx => tx.status === 'completed' && tx.type === 'deposit')
          .reduce((sum, tx) => sum + tx.amount, 0)
        
        setBalance(total || 0)
      }
    }
    getData()
  }, [supabase])

  const fullName = user?.user_metadata?.full_name || 'Investor'
  const initial = fullName.charAt(0).toUpperCase()

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>SpringWealth <span style={{ color: '#2563eb' }}>Portal</span></h1>
        
        <a href="/dashboard/profile" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Account</p>
            <p style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#0f172a' }}>{fullName}</p>
          </div>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#2563eb', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            {initial}
          </div>
        </a>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
          <p style={{ color: '#64748b', fontSize: '12px', margin: 0 }}>Total Balance</p>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px', color: '#0f172a' }}>${balance.toFixed(2)}</h2>
        </div>
        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
          <p style={{ color: '#64748b', fontSize: '12px', margin: 0 }}>Active Profits</p>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#16a34a', marginTop: '10px' }}>$0.00</h2>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <a href="/dashboard/deposit" style={{ textDecoration: 'none', flex: 1 }}><button style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Deposit</button></a>
        <a href="/dashboard/withdraw" style={{ textDecoration: 'none', flex: 1 }}><button style={{ width: '100%', backgroundColor: '#ffffff', color: '#0f172a', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>Withdraw</button></a>
        <a href="/dashboard/plans" style={{ textDecoration: 'none', flex: 1 }}><button style={{ width: '100%', backgroundColor: '#ffffff', color: '#0f172a', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold', cursor: 'pointer' }}>Plans</button></a>
      </div>

      {/* Dynamic Transactions Table */}
      <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold', color: '#0f172a', marginTop: 0 }}>Recent Transactions</h3>
        
        {transactions.length > 0 ? (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ color: '#64748b', fontSize: '12px' }}>
                  <th style={{ padding: '12px' }}>TYPE</th>
                  <th style={{ padding: '12px' }}>AMOUNT</th>
                  <th style={{ padding: '12px' }}>STATUS</th>
                  <th style={{ padding: '12px' }}>DATE</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} style={{ borderTop: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '15px', fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>{tx.type.toUpperCase()}</td>
                    <td style={{ padding: '15px', fontSize: '14px', color: '#0f172a' }}>${tx.amount.toFixed(2)}</td>
                    <td style={{ padding: '15px' }}>
                      <span style={{ 
                        padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold',
                        backgroundColor: tx.status === 'pending' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(22, 163, 74, 0.1)',
                        color: tx.status === 'pending' ? '#d97706' : '#16a34a'
                      }}>
                        {tx.status.toUpperCase()}
                      </span>
                    </td>
                    <td style={{ padding: '15px', fontSize: '12px', color: '#64748b' }}>
                      {new Date(tx.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ color: '#64748b', textAlign: 'center', padding: '50px 0' }}>
            <p style={{ margin: 0 }}>No transactions yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
