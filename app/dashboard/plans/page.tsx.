'use client'

export default function InvestmentPlans() {
  const plans = [
    {
      name: 'Starter Tier',
      min: '$100',
      max: '$999',
      roi: '5% Weekly',
      duration: '30 Days',
      color: '#94a3b8'
    },
    {
      name: 'Capital Pro',
      min: '$1,000',
      max: '$9,999',
      roi: '12% Weekly',
      duration: '60 Days',
      color: '#2563eb',
      popular: true
    },
    {
      name: 'Wealth Elite',
      min: '$10,000',
      max: 'Unlimited',
      roi: '25% Weekly',
      duration: '90 Days',
      color: '#f59e0b'
    }
  ]

  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>Investment Plans</h1>
        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '50px' }}>Select a plan that fits your financial goals</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{ 
              backgroundColor: '#0f172a', 
              padding: '30px', 
              borderRadius: '24px', 
              border: plan.popular ? `2px solid ${plan.color}` : '1px solid #1e293b',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {plan.popular && (
                <span style={{ backgroundColor: plan.color, color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', position: 'absolute', top: '-12px', alignSelf: 'center' }}>
                  MOST POPULAR
                </span>
              )}
              
              <h2 style={{ fontSize: '20px', color: plan.color, marginBottom: '10px' }}>{plan.name}</h2>
              <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>{plan.roi}</div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px', color: '#94a3b8' }}>
                <span>Minimum:</span>
                <span style={{ color: 'white' }}>{plan.min}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px', color: '#94a3b8' }}>
                <span>Maximum:</span>
                <span style={{ color: 'white' }}>{plan.max}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontSize: '14px', color: '#94a3b8' }}>
                <span>Duration:</span>
                <span style={{ color: 'white' }}>{plan.duration}</span>
              </div>

              <button style={{ 
                marginTop: 'auto',
                backgroundColor: plan.popular ? plan.color : '#1e293b', 
                color: 'white', 
                padding: '14px', 
                borderRadius: '12px', 
                border: 'none', 
                fontWeight: 'bold', 
                cursor: 'pointer' 
              }}>
                Invest Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
