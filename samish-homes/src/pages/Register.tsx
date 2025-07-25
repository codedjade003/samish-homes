import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../components/landing/Navbar";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        { name, email, password }
      );

      const data = response.data;

      console.log("✅ Registration successful!");
      console.log("User Info:", {
        id: data.user._id,
        name: data.user.name,
        email: data.user.email,
        role: data.user.role,
      });

      // Redirect to login instead of auto-login
      navigate("/login");
    } catch (err: any) {
      console.error("❌ Registration error:", err);
      setError(err.response?.data?.message || "An unexpected error occurred during registration");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 pt-6">
      <div className="absolute top-6 left-6">
        <button
          onClick={() => navigate("/")}
          className="p-2 rounded-md border text-blue-600 border-blue-600 hover:bg-blue-100"
        >
          <FaArrowLeft />
        </button>
      </div>

      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Join Samish Homes</h2>

        {error && <p className="mb-4 text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              Create Account
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Log in here
          </span>
        </p>
      </div>
    </div>
    </>
  );
}
