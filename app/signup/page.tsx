'use client'
import React, { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    country: 'Nigeria',
    phone: '',
    socialType: 'WhatsApp',
    socialHandle: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registering global user with details:', formData);
    // Your backend database registration script hooks here
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '"Inter", sans-serif', padding: '40px 20px' }}>
      <div style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '480px', padding: '40px 30px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}>
        
        {/* Header Branding */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#2563eb', letterSpacing: '-1px', margin: '0 0 8px 0' }}>SpringWealth</h1>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Create your global secure trading profile today.</p>
        </div>

        {/* Multi-Field Onboarding Form */}
        <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Doe" style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} required />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="name@example.com" style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} required />
          </div>

          {/* Side-by-Side Flex Layout: Country and Phone */}
          <div style={{ display: 'flex', gap: '15px', flexDirection: 'row' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Country</label>
              <select name="country" value={formData.country} onChange={handleInputChange} style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'white', outline: 'none', fontSize: '15px', boxSizing: 'border-box', height: '47px' }}>
                <option value="Singapore">Singapore</option>
                <option value="Australia">Australia</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
            
            <div style={{ flex: 1.5 }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+234..." style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} required />
            </div>
          </div>

          {/* Social Platform Selection Field */}
          <div style={{ display: 'flex', gap: '15px', flexDirection: 'row' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Network</label>
              <select name="socialType" value={formData.socialType} onChange={handleInputChange} style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'white', outline: 'none', fontSize: '15px', boxSizing: 'border-box', height: '47px' }}>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Telegram">Telegram</option>
              </select>
            </div>
            
            <div style={{ flex: 1.5 }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Social Handle/Number</label>
              <input type="text" name="socialHandle" value={formData.socialHandle} onChange={handleInputChange} placeholder={formData.socialType === 'WhatsApp' ? 'WhatsApp Number' : '@username'} style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} required />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Secure Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="••••••••" style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} required />
          </div>

          <button type="submit" style={{ backgroundColor: '#2563eb', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', marginTop: '10px', width: '100%', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)' }}>Complete Registration</button>
        </form>

        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginTop: '25px', margin: '25px 0 0 0' }}>
          Already registered? <a href="/login" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>Log in account</a>
        </p>
      </div>
    </div>
  );
}
