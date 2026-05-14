'use client'
import React from 'react';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', borderBottom: '1px solid #1e293b' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>SpringWealth</h1>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>About</a>
          <a href="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Login</a>
          <a href="/login" style={{ backgroundColor: '#2563eb', padding: '8px 20px', borderRadius: '6px', color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '80px 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px' }}>Grow Your Wealth with <span style={{ color: '#2563eb' }}>Precision</span></h2>
        <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 30px', fontSize: '18px' }}>
          Join thousands of investors using SpringWealth to secure weekly ROI through automated crypto and gem-market arbitrage.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
           {/* Redirecting to login to ensure they sign up first */}
           <a href="/login" style={{ backgroundColor: '#2563eb', padding: '15px 30px', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>View Investment Plans</a>
           <a href="#market" style={{ backgroundColor: '#1e293b', padding: '15px 30px', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 'bold', border: '1px solid #334155' }}>Live Market</a>
        </div>
      </header>

      {/* Market Ticker Section */}
      <section id="market" style={{ padding: '40px 5%', backgroundColor: '#0f172a' }}>
        <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '14px', marginBottom: '20px' }}>LIVE MARKET UPDATES (USDT PAIRS)</div>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ padding: '15px', borderRadius: '12px', border: '1px solid #1e293b', minWidth: '150px', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', fontSize: '12px' }}>BTC/USDT</p>
            <p style={{ fontWeight: 'bold', color: '#10b981' }}>$64,230.12 ↑</p>
          </div>
          <div style={{ padding: '15px', borderRadius: '12px', border: '1px solid #1e293b', minWidth: '150px', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', fontSize: '12px' }}>ETH/USDT</p>
            <p style={{ fontWeight: 'bold', color: '#10b981' }}>$3,450.45 ↑</p>
          </div>
          <div style={{ padding: '15px', borderRadius: '12px', border: '1px solid #1e293b', minWidth: '150px', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', fontSize: '12px' }}>SOL/USDT</p>
            <p style={{ fontWeight: 'bold', color: '#ef4444' }}>$145.20 ↓</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '80px 5%', maxWidth: '1000px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '50px' }}>How it Works</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          <div>
            <h4 style={{ color: '#2563eb', marginBottom: '15px' }}>1. Create an Account</h4>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Sign up in seconds to access our exclusive investment tiers and dashboard.</p>
          </div>
          <div>
            <h4 style={{ color: '#2563eb', marginBottom: '15px' }}>2. Deposit USDT</h4>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Securely fund your wallet via TRC20. We manually verify every deposit for maximum security.</p>
          </div>
          <div>
            <h4 style={{ color: '#2563eb', marginBottom: '15px' }}>3. Collect Weekly ROI</h4>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Watch your capital grow with up to 25% weekly returns, withdrawable to your wallet at any time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 5%', textAlign: 'center', borderTop: '1px solid #1e293b', color: '#64748b', fontSize: '14px' }}>
        <p>© 2026 SpringWealth. Professional Wealth Management.</p>
      </footer>
    </div>
  );
}
