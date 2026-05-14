'use client'
import React from 'react';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', borderBottom: '1px solid #1e293b', position: 'sticky', top: 0, backgroundColor: '#020617', zIndex: 100 }}>
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', letterSpacing: '-0.5px' }}>SpringWealth</h1>
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>About</a>
          <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Contact</a>
          <a href="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Login</a>
          <a href="/login" style={{ backgroundColor: '#2563eb', padding: '10px 22px', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', transition: '0.3s' }}>Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '100px 5% 80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '24px', lineHeight: '1.1' }}>Grow Your Wealth with <span style={{ color: '#2563eb' }}>Precision</span></h2>
        <p style={{ color: '#94a3b8', maxWidth: '650px', margin: '0 auto 40px', fontSize: '19px', lineHeight: '1.6' }}>
          Join a global network of investors using SpringWealth to secure consistent weekly ROI through automated crypto and gemstone market arbitrage.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
           <a href="/login" style={{ backgroundColor: '#2563eb', padding: '16px 32px', borderRadius: '10px', color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>View Investment Plans</a>
           <a href="#market" style={{ backgroundColor: '#1e293b', padding: '16px 32px', borderRadius: '10px', color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', border: '1px solid #334155' }}>Live Market</a>
        </div>
      </header>

      {/* Live Market Section */}
      <section id="market" style={{ padding: '40px 5%', backgroundColor: '#0f172a', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b' }}>
        <div style={{ textAlign: 'center', color: '#64748b', fontSize: '12px', marginBottom: '25px', letterSpacing: '2px', fontWeight: 'bold' }}>LIVE MARKET UPDATES (USDT PAIRS)</div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
          {[
            { pair: 'BTC/USDT', price: '$64,230.12', up: true },
            { pair: 'ETH/USDT', price: '$3,450.45', up: true },
            { pair: 'SOL/USDT', price: '$145.20', up: false },
          ].map((coin, i) => (
            <div key={i} style={{ padding: '20px 40px', borderRadius: '16px', backgroundColor: '#020617', border: '1px solid #1e293b', minWidth: '180px', textAlign: 'center' }}>
              <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '8px' }}>{coin.pair}</p>
              <p style={{ fontWeight: 'bold', fontSize: '18px', color: coin.up ? '#10b981' : '#ef4444' }}>
                {coin.price} {coin.up ? '↑' : '↓'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section with Professional Visuals */}
      <section id="about" style={{ padding: '100px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h3 style={{ fontSize: '38px', fontWeight: 'bold', marginBottom: '15px' }}>Our Mission</h3>
          <div style={{ width: '50px', height: '4px', backgroundColor: '#2563eb', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          {/* Card 1: Global Market */}
          <div style={{ backgroundColor: '#0f172a', borderRadius: '24px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <img 
              src="https://images.unsplash.com/photo-1526303328184-c75c4f28ec49?auto=format&fit=crop&q=80&w=800" 
              alt="Global Markets" 
              style={{ width: '100%', height: '220px', objectFit: 'cover' }}
            />
            <div style={{ padding: '30px' }}>
              <h4 style={{ color: '#2563eb', marginBottom: '12px', fontSize: '22px', fontWeight: 'bold' }}>Global Arbitrage</h4>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '15px' }}>
                We bridge the gap between emerging operations and international markets, capturing value through high-frequency arbitrage in crypto and physical assets.
              </p>
            </div>
          </div>

          {/* Card 2: Security */}
          <div style={{ backgroundColor: '#0f172a', borderRadius: '24px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <img 
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" 
              alt="Security" 
              style={{ width: '100%', height: '220px', objectFit: 'cover' }}
            />
            <div style={{ padding: '30px' }}>
              <h4 style={{ color: '#2563eb', marginBottom: '12px', fontSize: '22px', fontWeight: 'bold' }}>Secured Capital</h4>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '15px' }}>
                Your funds are protected by institutional-grade encryption and TRC20 protocols. We prioritize capital preservation above all else.
              </p>
            </div>
          </div>

          {/* Card 3: Growth */}
          <div style={{ backgroundColor: '#0f172a', borderRadius: '24px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <img 
              src="https://images.unsplash.com/photo-1611974714658-75d4f1ad33da?auto=format&fit=crop&q=80&w=800" 
              alt="Growth" 
              style={{ width: '100%', height: '220px', objectFit: 'cover' }}
            />
            <div style={{ padding: '30px' }}>
              <h4 style={{ color: '#2563eb', marginBottom: '12px', fontSize: '22px', fontWeight: 'bold' }}>Weekly ROI</h4>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '15px' }}>
                Accessibility for every investor. Whether you are in Australia or Nigeria, SpringWealth offers a direct path to consistent weekly returns.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" style={{ padding: '100px 5%', backgroundColor: '#0f172a', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h3 style={{ fontSize: '38px', fontWeight: 'bold', marginBottom: '15px' }}>Get in Touch</h3>
            <p style={{ color: '#94a3b8', fontSize: '18px' }}>Have questions? Our team typically responds within 24 hours.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ marginBottom: '30px', padding: '20px', borderRadius: '15px', backgroundColor: '#020617', border: '1px solid #1e293b' }}>
                <p style={{ color: '#2563eb', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>Email Support</p>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>support@springwealth.com</p>
              </div>
              <div style={{ padding: '20px', borderRadius: '15px', backgroundColor: '#020617', border: '1px solid #1e293b' }}>
                <p style={{ color: '#2563eb', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>Live Assistance</p>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>24/7 Dashboard Chat</p>
              </div>
            </div>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Full Name" style={{ padding: '14px', borderRadius: '10px', backgroundColor: '#020617', border: '1px solid #334155', color: 'white', outline: 'none' }} required />
              <input type="email" placeholder="Email Address" style={{ padding: '14px', borderRadius: '10px', backgroundColor: '#020617', border: '1px solid #334155', color: 'white', outline: 'none' }} required />
              <textarea placeholder="How can we help you?" rows={4} style={{ padding: '14px', borderRadius: '10px', backgroundColor: '#020617', border: '1px solid #334155', color: 'white', outline: 'none', resize: 'none' }} required />
              <button type="submit" style={{ backgroundColor: '#2563eb', color: 'white', padding: '16px', borderRadius: '10px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 5%', textAlign: 'center', borderTop: '1px solid #1e293b', color: '#64748b', fontSize: '14px' }}>
        <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</a>
          <a href="#market" style={{ color: '#94a3b8', textDecoration: 'none' }}>Market</a>
          <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact Support</a>
          <a href="/login" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms</a>
        </div>
        <p>© 2026 SpringWealth Investment Group. Professional Wealth Management Services.</p>
      </footer>
    </div>
  );
}
