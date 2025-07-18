import { useState } from "react";
import axios from "axios";

interface Props {
  onSwitch: (form: "register" | "forgot") => void;
  onClose: () => void;
}

export default function LoginForm({ onSwitch, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Store user and token in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));

      onClose(); // close modal
      window.location.reload(); // optionally trigger UI update
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="rememberMe" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
          <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">Remember me</label>
        </div>
        <button type="button" onClick={() => onSwitch("forgot")} className="text-sm text-blue-600 hover:underline">
          Forgot password?
        </button>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded shadow font-medium"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
      <div className="text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <button type="button" onClick={() => onSwitch("register")} className="text-blue-600 font-medium hover:underline">
          Register
        </button>
      </div>
    </form>
  );
}
