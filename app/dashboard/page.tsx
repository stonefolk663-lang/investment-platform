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
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', padding: '20px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #1e293b', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>SpringWealth <span style={{ color: '#2563eb' }}>Portal</span></h1>
        
        <a href="/dashboard/profile" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Account</p>
            <p style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>{fullName}</p>
          </div>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            {initial}
          </div>
        </a>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ backgroundColor: '#0f172a', padding: '25px', borderRadius: '16px', border: '1px solid #1e293b' }}>
          <p style={{ color: '#94a3b8', fontSize: '12px' }}>Total Balance</p>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px' }}>${balance.toFixed(2)}</h2>
        </div>
        <div style={{ backgroundColor: '#0f172a', padding: '25px', borderRadius: '16px', border: '1px solid #1e293b' }}>
          <p style={{ color: '#94a3b8', fontSize: '12px' }}>Active Profits</p>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981', marginTop: '10px' }}>$0.00</h2>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <a href="/dashboard/deposit" style={{ textDecoration: 'none', flex: 1 }}><button style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Deposit</button></a>
        <a href="/dashboard/withdraw" style={{ textDecoration: 'none', flex: 1 }}><button style={{ width: '100%', backgroundColor: '#1e293b', color: 'white', padding: '14px', borderRadius: '12px', border: '1px solid #334155', fontWeight: 'bold', cursor: 'pointer' }}>Withdraw</button></a>
        <a href="/dashboard/plans" style={{ textDecoration: 'none', flex: 1 }}><button style={{ width: '100%', backgroundColor: '#0f172a', color: 'white', padding: '14px', borderRadius: '12px', border: '1px solid #334155', fontWeight: 'bold', cursor: 'pointer' }}>Plans</button></a>
      </div>

      {/* Dynamic Transactions Table */}
      <div style={{ backgroundColor: '#0f172a', padding: '25px', borderRadius: '20px', border: '1px solid #1e293b' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>Recent Transactions</h3>
        
        {transactions.length > 0 ? (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ color: '#94a3b8', fontSize: '12px' }}>
                  <th style={{ padding: '12px' }}>TYPE</th>
                  <th style={{ padding: '12px' }}>AMOUNT</th>
                  <th style={{ padding: '12px' }}>STATUS</th>
                  <th style={{ padding: '12px' }}>DATE</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} style={{ borderTop: '1px solid #1e293b' }}>
                    <td style={{ padding: '15px', fontSize: '14px', fontWeight: '600' }}>{tx.type.toUpperCase()}</td>
                    <td style={{ padding: '15px', fontSize: '14px' }}>${tx.amount.toFixed(2)}</td>
                    <td style={{ padding: '15px' }}>
                      <span style={{ 
                        padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold',
                        backgroundColor: tx.status === 'pending' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                        color: tx.status === 'pending' ? '#f59e0b' : '#10b981'
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
          <div style={{ color: '#94a3b8', textAlign: 'center', padding: '50px 0' }}>
            <p>No transactions yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
