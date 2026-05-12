export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 py-12">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Join SpringWealth</h1>
          <p className="text-slate-400 mt-2">Create your investor profile</p>
        </div>

        <form className="space-y-5">
          {/* Row 1: Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
            <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
          </div>

          {/* Row 2: Email */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address</label>
            <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="name@example.com" />
          </div>

          {/* Row 3: Phone Number */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone Number (with country code)</label>
            <input type="tel" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+234..." />
          </div>

          {/* Row 4: Country & City */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Country</label>
              <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Nigeria" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">City</label>
              <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Lagos" />
            </div>
          </div>

          {/* Row 5: Preferred Messaging */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Preferred Contact Method</label>
            <div className="flex gap-6">
              <label className="flex items-center text-slate-300 cursor-pointer">
                <input type="radio" name="messenger" className="mr-2 accent-blue-500" /> WhatsApp
              </label>
              <label className="flex items-center text-slate-300 cursor-pointer">
                <input type="radio" name="messenger" className="mr-2 accent-blue-500" /> Telegram
              </label>
            </div>
          </div>

          {/* Row 6: Password */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
            <input type="password" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="••••••••" />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-lg shadow-blue-900/20 transition duration-300 mt-4">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
