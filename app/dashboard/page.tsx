'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [transactions, setTransactions] = useState<any[]>([])
  const [balance, setBalance] = useState(0)
  const [loadingBalance, setLoadingBalance] = useState(true)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('wallet_balance')
          .eq('id', user.id)
          .single()

        if (profileData) {
          setBalance(profileData.wallet_balance || 0)
        }
        setLoadingBalance(false)

        const { data: txData } = await supabase
          .from('transactions')
          .select('*')
          .order('created_at', { ascending: false })
        
        setTransactions(txData || [])
      } else {
        setLoadingBalance(false)
      }
    }
    getData()

    var Tawk_API = (window as any).Tawk_API || {}, Tawk_LoadStart = new Date();
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6a088fec963adc1c27641aaf/1joon4dqc';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    return () => {
      s1.remove();
    }
  }, [supabase])

  const fullName = user?.user_metadata?.full_name || 'Investor'
  const initial = fullName.charAt(0).toUpperCase()

  const targetMilestone = 10000
  const progressPercentage = Math.min((balance / targetMilestone) * 100, 100)

  const isAccountActive = balance > 0
  const portfolioWeather = isAccountActive ? '🟢 Funded' : '🌤️ Awaiting Funding'
  const statusBadgeColor = isAccountActive ? '#16a34a' : '#475569'
  const statusBadgeBg = isAccountActive ? 'rgba(22, 163, 74, 0.1)' : 'rgba(71, 85, 105, 0.1)'

  return (
    <div style={{ backgroundColor: '#f1f5f9', color: '#0f172a', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid #cbd5e1', paddingBottom: '15px' }}>
          
          {/* Brand Logo Container (Clean & Enhanced Layout) */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '5px 0' }}>
            <img 
              src="/LOGO.PNG.png" 
              alt="SpringWealth Logo" 
              style={{ height: '75px', width: 'auto', maxWidth: '280px', objectFit: 'contain' }} 
            />
          </div>
          
          <a href="/dashboard/profile" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '12px', color: '#475569', margin: 0 }}>Account</p>
              <p style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#0f172a' }}>{fullName}</p>
            </div>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#2563eb', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              {initial}
            </div>
          </a>
        </div>

        {/* Dynamic Metric Widgets Block */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          
          {/* Main Financial Balance Panel */}
          <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4
