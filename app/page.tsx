'use client'
import React from 'react';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#ffffff', color: '#1e293b', minHeight: '100vh', fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      
      {/* Navigation Bar - Clean & Sticky */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '15px 8%', 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e2e8f0', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100 
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#2563eb', letterSpacing: '-1px' }}>SpringWealth</h1>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#about" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>About</a>
          <a href="#market" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Market</a>
          <a href="/login" style={{ color: '#1e293b', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Login</a>
          <a href="/login" style={{ backgroundColor: '#2563eb', padding: '12px 24px', borderRadius: '10px', color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)' }}>Get Started</a>
        </div>
      </nav>

      {/* Hero Section with Wealth Background Image */}
      <header style={{ 
        position: 'relative',
        padding: '120px 8%', 
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.95)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <h2 style={{ fontSize: '64px', fontWeight: '900', color: '#0f172a', marginBottom: '24px', lineHeight: '1.1', letterSpacing: '-2px' }}>
          Intelligent Wealth <br/><span style={{ color: '#2563eb' }}>Management</span>
        </h2>
        <p style={{ color: '#475569', maxWidth: '700px', margin: '0 auto 40px', fontSize: '20px', lineHeight: '1.6' }}>
          Experience a new standard of financial growth. We combine automated technology with global market expertise to deliver consistent performance.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
           <a href="/login" style={{ backgroundColor: '#2563eb', padding: '18px 40px', borderRadius: '12px', color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.3)' }}>Start Investing</a>
           <a href="#about" style={{ backgroundColor: '#ffffff', padding: '18px 40px', borderRadius: '12px', color: '#1e293b', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', border: '1px solid #e2e8f0' }}>Learn More</a>
        </div>
      </header>

      {/* Live Market Section - Clean Glass Look */}
      <section id="market" style={{ padding: '60px 8%', backgroundColor: '#f8fafc' }}>
        <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '12px', marginBottom: '30px', letterSpacing: '3px', fontWeight: 'bold', textTransform: 'uppercase' }}>Real-Time Global Indices</div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {[
            { pair: 'BTC/USDT', price: '$64,230.12', up: true },
            { pair: 'ETH/USDT', price: '$3,450.45', up: true },
            { pair: 'SOL/USDT', price: '$145.20', up: false },
          ].map((coin, i) => (
            <div key={i} style={{ padding: '24px 40px', borderRadius: '20px', backgroundColor: 'white', border: '1px solid #e2e8f0', minWidth: '220px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
              <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>{coin.pair}</p>
              <p style={{ fontWeight: '800', fontSize: '20px', color: coin.up ? '#10b981' : '#ef4444' }}>
                {coin.price} <span style={{fontSize: '14px'}}>{coin.up ? '▲' : '▼'}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section with Refined Cards */}
      <section id="about" style={{ padding: '100px 8%', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h3 style={{ fontSize: '42px', fontWeight: '900', color: '#0f172a', marginBottom: '15px' }}>Built for Global Markets</h3>
          <p style={{ color: '#64748b', fontSize: '18px' }}>Strategic investment operations spanning Nigeria, Australia, and the US.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          
          {/* Card 1 */}
          <div style={{ backgroundColor: 'white', borderRadius: '32px', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ padding: '40px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontSize: '24px', marginBottom: '25px' }}>🌍</div>
              <h4 style={{ color: '#0f172a', marginBottom: '15px', fontSize: '24px', fontWeight: 'bold' }}>Global Arbitrage</h4>
              <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '16px' }}>
                Leveraging market price differences across continents to ensure optimized capital entry and exit.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ backgroundColor: 'white', borderRadius: '32px', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ padding: '40px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#f0fdf4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '24px', marginBottom: '25px' }}>🛡️</div>
              <h4 style={{ color: '#0f172a', marginBottom: '15px', fontSize: '24px', fontWeight: 'bold' }}>Institutional Security</h4>
              <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '16px' }}>
                Your portfolio is protected by cold-storage protocols and encrypted asset management systems.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ backgroundColor: 'white', borderRadius: '32px', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ padding: '40px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#fff7ed', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', fontSize: '24px', marginBottom: '25px' }}>📈</div>
              <h4 style={{ color: '#0f172a', marginBottom: '15px', fontSize: '24px', fontWeight: 'bold' }}>High Performance</h4>
              <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '16px' }}>
                Automated weekly returns designed for the modern investor who values consistency and transparency.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section - Bright & Professional */}
      <section id="contact" style={{ padding: '100px 8%', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '42px', fontWeight: '900', color: '#0f172a', marginBottom: '20px' }}>Let's talk about your future.</h3>
            <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '40px' }}>Whether you're starting small or scaling a portfolio, our team is here to assist.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ color: '#2563eb', fontWeight: 'bold' }}>Email:</div>
                <div style={{ fontWeight: '600' }}>support@springwealth.com</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ color: '#2563eb', fontWeight: 'bold' }}>Support:</div>
                <div style={{ fontWeight: '600' }}>24/7 Global Live Chat</div>
              </div>
            </div>
          </div>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}>
            <input type="text" placeholder="Full Name" style={{ padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', color: '#1e293b', outline: 'none', backgroundColor: '#f8fafc' }} required />
            <input type="email" placeholder="Email Address" style={{ padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', color: '#1e293b', outline: 'none', backgroundColor: '#f8fafc' }} required />
            <textarea placeholder="Tell us about your goals..." rows={4} style={{ padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', color: '#1e293b', outline: 'none', resize: 'none', backgroundColor: '#f8fafc' }} required />
            <button type="submit" style={{ backgroundColor: '#2563eb', color: 'white', padding: '18px', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)' }}>Send Inquiry</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 8% 40px', textAlign: 'center', backgroundColor: 'white', color: '#94a3b8', fontSize: '14px' }}>
        <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <a href="#about" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '600' }}>About</a>
          <a href="#market" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '600' }}>Live Market</a>
          <a href="/login" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '600' }}>Legal & Privacy</a>
        </div>
        <p style={{ fontWeight: '500' }}>© 2026 SpringWealth Investment Group. All rights reserved.</p>
      </footer>
    </div>
  );
}
