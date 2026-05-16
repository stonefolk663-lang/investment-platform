'use client'

export default function InvestmentPlans() {
  const plans = [
    {
      name: 'Starter Tier',
      min: '$100',
      max: '$999',
      roi: '5% Weekly',
      duration: '30 Days',
      color: '#475569' // Polished Slate Gray
    },
    {
      name: 'Capital Pro',
      min: '$1,000',
      max: '$9,999',
      roi: '12% Weekly',
      duration: '60 Days',
      color: '#2563eb', // Dynamic Brand Royal Blue
      popular: true
    },
    {
      name: 'Wealth Elite',
      min: '$10,000',
      max: 'Unlimited',
      roi: '25% Weekly',
      duration: '90 Days',
      color: '#d97706' // Luxurious Rich Gold/Amber
    }
  ]

  return (
    <div style={{ backgroundColor: '#f1f5f9', color: '#0f172a', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Simple Navigation Back Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ width: '120px' }}></div> {/* Spatial balancer */}
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', margin: 0, color: '#0f172a' }}>Investment Plans</h1>
          <a href="/dashboard" style={{ textDecoration: 'none', color: '#2563eb', fontSize: '14px', fontWeight: 'bold', width: '120px', textAlign: 'right' }}>← Dashboard</a>
        </div>
        <p style={{ color: '#475569', textAlign: 'center', marginBottom: '50px', fontSize: '15px' }}>Select a secure tier that fits your physical and financial horizons.</p>

        {/* Clickable Card Allocation Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {plans.map((plan) => (
            <a key={plan.name} href="/dashboard/deposit" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
              <div style={{ 
                backgroundColor: '#ffffff', 
                padding: '35px 30px', 
                borderRadius: '24px', 
                border: plan.popular ? `2px solid ${plan.color}` : '1px solid #e2e8f0',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                boxShadow: plan.popular ? '0 10px 15px -3px rgba(37, 99, 235, 0.1)' : '0 4px 6px -1px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}>
                {plan.popular && (
                  <span style={{ backgroundColor: plan.color, color: 'white', padding: '6px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', letterSpacing: '0.5px' }}>
                    MOST POPULAR
                  </span>
                )}
                
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: plan.color, marginBottom: '10px', marginTop: 0 }}>{plan.name}</h2>
                <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '25px', color: '#0f172a', letterSpacing: '-0.5px' }}>{plan.roi}</div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px', color: '#475569', borderBottom: '1px dashed #e2e8f0', paddingBottom: '8px' }}>
                  <span>Minimum Capital:</span>
                  <span style={{ color: '#0f172a', fontWeight: 'bold' }}>{plan.min}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px', color: '#475569', borderBottom: '1px dashed #e2e8f0', paddingBottom: '8px' }}>
                  <span>Maximum Ceiling:</span>
                  <span style={{ color: '#0f172a', fontWeight: 'bold' }}>{plan.max}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '35px', fontSize: '14px', color: '#475569', paddingBottom: '4px' }}>
                  <span>Lockup Duration:</span>
                  <span style={{ color: '#0f172a', fontWeight: 'bold' }}>{plan.duration}</span>
                </div>

                {/* Primary Button Anchor Layout */}
                <button style={{ 
                  width: '100%',
                  backgroundColor: plan.popular ? plan.color : '#e2e8f0', 
                  color: plan.popular ? 'white' : '#0f172a', 
                  padding: '14px', 
                  borderRadius: '12px', 
                  border: 'none', 
                  fontWeight: 'bold', 
                  cursor: 'pointer',
                  marginTop: 'auto',
                  fontSize: '15px'
                }}>
                  Invest Now
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
