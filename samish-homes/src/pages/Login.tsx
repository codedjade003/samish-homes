import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import Navbar from "../components/landing/Navbar";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password }
      );

      const data = response.data;

      login({ user: data.user, token: data.token });

if (!data.user) {
  throw new Error("User object missing in response");
}

    console.log("✅ Login successful!");
    console.log("User Info:", {
    id: data.user._id,
    name: data.user.name,
    email: data.user.email,
    role: data.user.role,
    });


      // Redirect based on role
      switch (data.user.role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "agent":
          navigate("/agent/dashboard");
          break;
        case "public":
        default:
          navigate("/public/dashboard");
          break;
      }
    } catch (err: any) {
      console.error("❌ Login error:", err);
      setError(
        err.response?.data?.message || "An unexpected error occurred during login"
      );
    }
  };

  return (
    <>
      {/* Full Nav for consistency */}
      <Navbar />

      {/* Page content */}
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 pt-6">
        {/* Back Icon Button */}
        <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 p-2 rounded-full bg-white text-blue-600 shadow hover:bg-gray-100 transition"
        aria-label="Go back"
        >
        <FaArrowLeft className="h-5 w-5" />
        </button>

        {/* Login Card */}
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            Welcome Back
          </h2>

          {error && <p className="mb-4 text-red-500 text-sm text-center">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Log In
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Register here
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
