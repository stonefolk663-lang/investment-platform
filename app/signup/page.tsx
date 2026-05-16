'use client'
import React, { useState } from 'react';

// Comprehensive list of global countries and their calling codes
const GLOBAL_COUNTRIES = [
  { name: 'United States', code: '+1' },
  { name: 'Australia', code: '+61' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Canada', code: '+1' },
  { name: 'Nigeria', code: '+234' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'United Arab Emirates', code: '+971' },
  { name: 'Saudi Arabia', code: '+966' },
  { name: 'South Africa', code: '+27' },
  { name: 'India', code: '+91' },
  { name: 'Brazil', code: '+55' },
  { name: 'Singapore', code: '+65' },
  { name: 'Hong Kong', code: '#852' },
  // You can easily paste more standard countries here as your platform expands
].sort((a, b) => a.name.localeCompare(b.name)); // Sorts alphabetically

// Move USA to the absolute top so it remains the primary default focus
const COUNTRY_LIST = [{ name: 'United States', code: '+1' }, ...GLOBAL_COUNTRIES.filter(c => c.name !== 'United States')];

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    country: 'United States',
    phoneCode: '+1',
    phone: '',
    socialType: 'WhatsApp',
    socialHandle: ''
  });

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = COUNTRY_LIST.find(c => c.name === e.target.value);
    if (selectedCountry) {
      setFormData({
        ...formData,
        country: selectedCountry.name,
        phoneCode: selectedCountry.code,
        phone: '' // Clear phone input to avoid code mismatch
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    const fullPhoneNumber = `${formData.phoneCode} ${formData.phone}`;
    console.log('Registering global user:', { ...formData, fullPhone: fullPhoneNumber });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '"Inter", sans-serif', padding: '40px 20px' }}>
      <div style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '480px', padding: '40px 30px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}>
        
        {/* Header Branding */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#2563eb', letterSpacing: '-1px', margin: '0 0 8px 0' }}>SpringWealth</h1>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Create your global secure trading profile today.</p>
        </div>

        {/* Onboarding Form */}
        <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Doe" style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} required />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="name@example.com" style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} required />
          </div>

          {/* Globalized Country & Phone Field Layout */}
          <div style={{ display: 'flex', gap: '15px', flexDirection: 'row' }}>
            <div style={{ flex: 1.2 }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Country</label>
              <select name="country" value={formData.country} onChange={handleCountryChange} style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'white', outline: 'none', fontSize: '15px', boxSizing: 'border-box', height: '47px' }}>
                {COUNTRY_LIST.map((c, idx) => (
                  <option key={idx} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            
            <div style={{ flex: 1.3 }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Phone Number</label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#f8fafc', height: '47px', boxSizing: 'border-box', overflow: 'hidden' }}>
                <span style={{ padding: '0 10px', color: '#64748b', fontSize: '14px', fontWeight: '600', borderRight: '1px solid #cbd5e1', backgroundColor: '#f1f5f9', height: '100%', display: 'flex', alignItems: 'center', minWidth: '45px', justifyContent: 'center' }}>
                  {formData.phoneCode}
                </span>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="205 555 0199" style={{ width: '100%', padding: '12px 14px', border: 'none', backgroundColor: 'transparent', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} required />
              </div>
            </div>
          </div>

          {/* Messaging Handles */}
          <div style={{ display: 'flex', gap: '15px', flexDirection: 'row' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Preferred Network</label>
              <select name="socialType" value={formData.socialType} onChange={handleInputChange} style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'white', outline: 'none', fontSize: '15px', boxSizing: 'border-box', height: '47px' }}>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Telegram">Telegram</option>
              </select>
            </div>
            
            <div style={{ flex: 1.5 }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Social Handle / ID</label>
              <input type="text" name="socialHandle" value={formData.socialHandle} onChange={handleInputChange} placeholder={formData.socialType === 'WhatsApp' ? 'Full Contact Number' : '@username'} style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} required />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '6px' }}>Secure Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="••••••••" style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px', boxSizing: 'border-box' }} required />
          </div>

          <button type="submit" style={{ backgroundColor: '#2563eb', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', marginTop: '10px', width: '100%', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)' }}>Complete Registration</button>
        </form>

        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginTop: '25px', margin: '25px 0 0 0' }}>
          Already registered? <a href="/login" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>Log in here</a>
        </p>
      </div>
    </div>
  );
}
