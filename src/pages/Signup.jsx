const Signup = () => (
  <div
    className="min-h-screen flex items-center justify-center px-4"
    style={{
      background: "linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)",
    }}
  >
    <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
      <h2
        className="text-4xl font-bold text-center mb-8 font-serif"
        style={{ color: "#693155ff" }}
      >
        Sign Up
      </h2>

      <form className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Name
          </label>
          <input
            className="w-full border border-accent-light text-text rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-light"
            type="text"
            placeholder="Full name"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Email
          </label>
          <input
            className="w-full border border-accent-light text-text rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-light"
            type="email"
            placeholder="example@mail.com"
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Password
          </label>
          <input
            className="w-full border border-accent-light text-text rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-light"
            type="password"
            placeholder="Create a password"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
);

export default Signup;
