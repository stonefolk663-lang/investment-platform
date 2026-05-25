'use client'
import React, { useState, useEffect } from 'react';

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 968);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#1e293b', minHeight: '100vh', fontFamily: '"Inter", sans-serif', scrollBehavior: 'smooth' }}>
      
      {/* Navigation Bar */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: isMobile ? '15px 5%' : '20px 8%', 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e2e8f0', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100 
      }}>
        <h1 style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: '900', color: '#2563eb', letterSpacing: '-1px', margin: 0 }}>SpringWealth</h1>
        <div style={{ display: 'flex', gap: isMobile ? '15px' : '30px', alignItems: 'center' }}>
          {!isMobile && <a href="#about" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>About</a>}
          {!isMobile && <a href="#market" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Market</a>}
          {!isMobile && <a href="#reviews" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Reviews</a>}
          <a href="/login" style={{ color: '#1e293b', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Login</a>
          <a href="/login" style={{ backgroundColor: '#1e293b', padding: isMobile ? '10px 18px' : '12px 24px', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ 
        position: 'relative',
        padding: isMobile ? '80px 5% 60px' : '140px 8%', 
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 40%, rgba(255, 255, 255, 0.4)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: isMobile ? '100%' : '650px', textAlign: isMobile ? 'center' : 'left' }}>
          <h2 style={{ fontSize: isMobile ? '38px' : '56px', fontWeight: '900', color: '#0f172a', marginBottom: '20px', lineHeight: '1.15', letterSpacing: '-1.5px' }}>
            Trade a range of instruments from a <span style={{ color: '#2563eb' }}>single account</span>
          </h2>
          <p style={{ color: '#475569', margin: '0 0 40px 0', fontSize: isMobile ? '16px' : '20px', lineHeight: '1.6', fontWeight: '400' }}>
            Expand your market reach, diversify your portfolio, and utilize our tools to manage your risk. Secure consistent performance through automated crypto and gemstone arbitrage.
          </p>
          <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
             <a href="/login" style={{ backgroundColor: '#2563eb', padding: '16px 36px', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px', letterSpacing: '1px', boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.4)' }}>START TRADING</a>
          </div>
        </div>
      </header>

      {/* Metrics Strip */}
      <section style={{ backgroundColor: '#f8fafc', padding: '40px 5%', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', 
          gap: isMobile ? '20px' : '30px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {[
            { metric: 'Tight spreads', value: 'from 0.0 pips', icon: '⚡' },
            { metric: '$100 minimum', value: 'deposit', icon: '💵' },
            { metric: 'Fast execution', value: 'speeds', icon: '🚀' },
            { metric: 'Trader-centric', value: 'technology', icon: '📊' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px' }}>
              <div style={{ fontSize: '28px' }}>{item.icon}</div>
              <div>
                <p style={{ margin: 0, fontWeight: '700', fontSize: '15px', color: '#0f172a', lineHeight: '1.3' }}>{item.metric}</p>
                <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Assets Showcase */}
      <section id="market" style={{ padding: isMobile ? '60px 5%' : '80px 8%' }}>
        <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '11px', marginBottom: '35px', letterSpacing: '3px', fontWeight: '800' }}>LIVE MARKETS (USDT PAIRS)</div>
        <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '15px', justifyContent: isMobile ? 'flex-start' : 'center' }}>
          {[
            { pair: 'BTC/USDT', price: '$64,230.12', up: true },
            { pair: 'ETH/USDT', price: '$3,450.45', up: true },
            { pair: 'SOL/USDT', price: '$145.20', up: false },
          ].map((coin, i) => (
            <div key={i} style={{ padding: '20px 30px', borderRadius: '12px', backgroundColor: 'white', border: '1px solid #e2e8f0', minWidth: '200px', textAlign: 'center', flexShrink: 0 }}>
              <p style={{ color: '#64748b', fontSize: '13px', fontWeight: '600', margin: '0 0 6px 0' }}>{coin.pair}</p>
              <p style={{ fontWeight: '800', fontSize: '18px', margin: 0, color: coin.up ? '#10b981' : '#ef4444' }}>
                {coin.price} {coin.up ? '▲' : '▼'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section id="about" style={{ padding: isMobile ? '60px 5%' : '100px 8%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '40px' : '80px', alignItems: 'center' }}>
          <div style={{ flex: 1, width: '100%' }}>
            <img 
              src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80" 
              alt="Trading Environment" 
              style={{ width: '100%', height: isMobile ? '280px' : '450px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: isMobile ? '32px' : '44px', fontWeight: '900', color: '#0f172a', margin: '0 0 20px 0', lineHeight: '1.2' }}>Our trading structures</h2>
            <h4 style={{ color: '#2563eb', fontSize: '18px', fontWeight: '600', margin: '0 0 25px 0' }}>Technology built for diverse investing styles and all experience levels.</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { name: 'Global Arbitrage Operations', desc: 'Capturing real-time pricing inefficiencies across digital and raw gemstone environments.' },
                { name: 'Secured Capital Thresholds', desc: 'Protected processing routes through cold wallets and fully verified TRC20 networks.' },
                { name: 'Transparent Ledgering', desc: 'Access granular weekly return distributions directly inside your unique tracking dashboard.' }
              ].map((plat, idx) => (
                <div key={idx} style={{ borderLeft: '3px solid #e2e8f0', paddingLeft: '20px' }}>
                  <p style={{ margin: '0 0 5px 0', fontWeight: '700', color: '#0f172a', fontSize: '16px' }}>{plat.name}</p>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>{plat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Flow Section */}
      <section style={{ backgroundColor: '#0f172a', color: 'white', padding: isMobile ? '60px 5%' : '100px 8%', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '32px' : '44px', fontWeight: '900', margin: '0 0 15px 0', letterSpacing: '-1px' }}>How to get started with SpringWealth</h2>
          <p style={{ color: '#94a3b8', fontSize: '16px', margin: '0 0 60px 0' }}>Open your active production dashboard in minutes</p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '30px', marginBottom: '50px' }}>
            {[
              { num: '01', step: 'Register', body: 'Choose an investment structure and complete our fast and secure verification profile.' },
              { num: '02', step: 'Fund', body: 'Fund your strategic portfolio using a wide range of secure processing gateways.' },
              { num: '03', step: 'Trade', body: 'Monitor premium performance distributions with clear automated reports.' }
            ].map((card, i) => (
              <div key={i} style={{ backgroundColor: '#1e293b', padding: '40px 30px', borderRadius: '16px', textAlign: 'left', border: '1px solid #334155' }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#2563eb', backgroundColor: '#eff6ff', padding: '4px 10px', borderRadius: '6px' }}>{card.num}</span>
                <h3 style={{ fontSize: '22px', fontWeight: '700', margin: '20px 0 10px 0' }}>{card.step}</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>{card.body}</p>
              </div>
            ))}
          </div>
          <a href="/login" style={{ display: 'inline-block', backgroundColor: '#2563eb', padding: '16px 40px', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>START TRADING</a>
        </div>
      </section>

      {/* Reviews and Trust Section */}
      <section id="reviews" style={{ padding: isMobile ? '60px 5%' : '100px 8%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: isMobile ? '32px' : '44px', fontWeight: '900', color: '#0f172a', margin: '0 0 10px 0', letterSpacing: '-1px' }}>Trusted by Investors Worldwide</h2>
          <p style={{ color: '#64748b', fontSize: '16px', margin: 0 }}>See what our community members say about their portfolio performance.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
          gap: '30px' 
        }}>
          {[
            { name: 'Marcus K.', location: 'Queensland, AU', rating: '⭐⭐⭐⭐⭐', review: 'The weekly arbitrage payouts are completely automated. I started with a modest balance to test the TRC20 speed, and withdrawals process smoothly every time.', verified: true },
            { name: 'Chidi O.', location: 'Buffalo, NY', rating: '⭐⭐⭐⭐⭐', review: 'What sets them apart is the transparency. Having a dashboard that clearly illustrates the arbitrage tracking helps me feel fully secure with my capital commitment.', verified: true },
            { name: 'Sarah L.', location: 'Alabama, USA', rating: '⭐⭐⭐⭐⭐', review: 'Extremely clean interface on mobile, making it very straightforward to keep track of performance while on the move. Highly recommend SpringWealth.', verified: true }
          ].map((user, idx) => (
            <div key={idx} style={{ 
              backgroundColor: '#ffffff', 
              padding: '30px', 
              borderRadius: '16px', 
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ color: '#f59e0b', fontSize: '14px', marginBottom: '15px' }}>{user.rating}</div>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', fontStyle: 'italic', margin: '0 0 20px 0' }}>"{user.review}"</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
                <div>
                  <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>{user.name}</h4>
                  <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>{user.location}</p>
                </div>
                {user.verified && (
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#10b981', backgroundColor: '#ecfdf5', padding: '4px 8px', borderRadius: '4px' }}>✓ Verified</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clean Contact Form */}
      <section id="contact" style={{ padding: isMobile ? '60px 5%' : '100px 8%', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '32px' : '40px', fontWeight: '900', color: '#0f172a', margin: '0 0 15px 0' }}>Connect with Support</h2>
          <p style={{ color: '#64748b', fontSize: '16px', margin: '0 0 40px 0' }}>Our global desks typical respond within 24 operational hours.</p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Full Name" style={{ padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px' }} required />
            <input type="email" placeholder="Email Address" style={{ padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px' }} required />
            <textarea placeholder="How can our desk assist your portfolio?" rows={4} style={{ padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', resize: 'none', fontSize: '15px' }} required />
            <button type="submit" style={{ backgroundColor: '#0f172a', color: 'white', padding: '16px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>Send Message</button>
          </form>
        </div>
      </section>

      {/* Responsive Footer */}
      <footer style={{ padding: '60px 5%', textAlign: 'center', borderTop: '1px solid #e2e8f0', color: '#94a3b8', fontSize: '14px' }}>
        <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center', gap: isMobile ? '20px' : '40px', flexWrap: 'wrap' }}>
          <a href="#about" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>About Group</a>
          <a href="#market" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>Asset Feed</a>
          <a href="#contact" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>Support Desk</a>
        </div>
        <p style={{ margin: 0 }}>© 2026 SpringWealth Investment Group. All structural rights reserved.</p>
      </footer>

    </div>
  );
}
