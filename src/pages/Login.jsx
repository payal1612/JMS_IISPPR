import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import staticUsers from "../data/staticUsers";
import { ArrowLeft } from "lucide-react";

const roleToRoute = {
  admin: "/admin",
  editor: "/editor",
  reviewer: "/reviewer",
  author: "/author",
  reader: "/reader",
};

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const user = staticUsers.find(
      (u) => u.email === form.email && u.password === form.password
    );
    if (user) {
      navigate(roleToRoute[user.role]);
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)",
      }}
    >
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md relative">
        <h2
          className="text-4xl font-bold text-center mb-8 font-serif"
          style={{ color: "#693155ff" }}
        >
          Login
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-text mb-1">
              Email
            </label>
            <input
              className="w-full border border-accent-light text-text rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-light"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              autoComplete="username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-1">
              Password
            </label>
            <input
              className="w-full border border-accent-light text-text rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-light"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-subtext">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-semibold hover:underline"
              style={{ color: "#693155ff" }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
