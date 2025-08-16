const LoginSignup = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
    <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-2xl flex flex-col md:flex-row gap-10">
      {/* Login Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" type="password" placeholder="Enter your password" />
          </div>
          <button className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition">Login</button>
        </form>
      </div>
      {/* Signup Section */}
      <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" type="text" placeholder="Full name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" type="password" placeholder="Create a password" />
          </div>
          <button className="w-full bg-indigo-700 text-white py-2 rounded font-semibold hover:bg-indigo-800 transition">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
);

export default LoginSignup; 