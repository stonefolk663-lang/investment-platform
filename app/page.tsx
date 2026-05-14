'use client'
import React from 'react';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', borderBottom: '1px solid #1e293b', position: 'sticky', top: 0, backgroundColor: '#020617', zIndex: 100 }}>
        <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>SpringWealth</h1>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>About</a>
          <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>Contact</a>
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
           <a href="/login" style={{ backgroundColor: '#2563eb', padding: '15px 30px', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>View Investment Plans</a>
           <a href="#market" style={{ backgroundColor: '#1e293b', padding: '15px 30px', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 'bold', border: '1px solid #334155' }}>Live Market</a>
        </div>
      </header>

      {/* Live Market Section */}
      <section id="market" style={{ padding: '40px 5%', backgroundColor: '#0f172a' }}>
        <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '12px', marginBottom: '20px', letterSpacing: '1px' }}>LIVE MARKET UPDATES (USDT PAIRS)</div>
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
        <h3 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '50px' }}>Our Mission</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          <div>
            <h4 style={{ color: '#2563eb', marginBottom: '15px' }}>Transparency</h4>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>We provide real-time dashboards so you can watch your capital work. No hidden fees, just pure growth.</p>
          </div>
          <div>
            <h4 style={{ color: '#2563eb', marginBottom: '15px' }}>Security</h4>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Utilizing TRC20 network protocols and manual verification, we ensure your assets are always protected.</p>
          </div>
          <div>
            <h4 style={{ color: '#2563eb', marginBottom: '15px' }}>Accessibility</h4>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Whether you're in Australia, Nigeria, or the US, SpringWealth opens the door to global arbitrage markets.</p>
          </div>
        </div>
      </section>

      {/* NEW: Contact Us Section */}
      <section id="contact" style={{ padding: '80px 5%', backgroundColor: '#0f172a' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '32px', marginBottom: '15px' }}>Get in Touch</h3>
          <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Have questions about our investment tiers? Our team is here to help.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', textAlign: 'left' }}>
            <div>
              <h4 style={{ marginBottom: '10px' }}>Support Channels</h4>
              <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '20px' }}>We typically respond within 24 hours.</p>
              <p style={{ fontWeight: 'bold' }}>📧 support@springwealth.com</p>
              <p style={{ fontWeight: 'bold', marginTop: '10px' }}>💬 Live Chat (Inside Dashboard)</p>
            </div>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', border: '1px solid #334155', color: 'white' }} required />
              <input type="email" placeholder="Email Address" style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', border: '1px solid #334155', color: 'white' }} required />
              <textarea placeholder="Your Message" rows={4} style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', border: '1px solid #334155', color: 'white' }} required />
              <button type="submit" style={{ backgroundColor: '#2563eb', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 5%', textAlign: 'center', borderTop: '1px solid #1e293b', color: '#64748b', fontSize: '14px' }}>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <a href="#about" style={{ color: '#64748b', textDecoration: 'none' }}>About</a>
          <a href="#market" style={{ color: '#64748b', textDecoration: 'none' }}>Market</a>
          <a href="#contact" style={{ color: '#64748b', textDecoration: 'none' }}>Contact Support</a>
        </div>
        <p>© 2026 SpringWealth Investment Group. Professional Wealth Management.</p>
      </footer>
    </div>
  );
}
