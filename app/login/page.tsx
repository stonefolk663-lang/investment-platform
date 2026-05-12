import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">SpringWealth</h1>
          <p className="text-slate-400 mt-2">Secure Institutional Access</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition">Forgot password?</a>
            </div>
            <input 
              type="password" 
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-lg shadow-blue-900/20 transition duration-300">
            Sign In
          </button>
        </form>

        <p className="text-center text-slate-500 mt-8 text-sm">
          New to SpringWealth? <a href="/signup" className="text-blue-400 font-medium hover:underline">Create an account</a>
        </p>
      </div>
    </div>
  );
}
