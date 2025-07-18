import { useState } from "react";
import axios from "axios";

interface Props {
  onSwitch: (form: "login") => void;
}

export default function ForgotPasswordForm({ onSwitch }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      // This would normally hit your real reset password API
      await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      setStatus("If this email is valid, a reset link has been sent.");
    } catch (err: any) {
      setStatus("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleReset} className="space-y-4">
      <p className="text-sm text-gray-600">
        Enter your email address and we’ll send you a link to reset your password.
      </p>

      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? "Sending..." : "Reset Password"}
      </button>

      {status && <p className="text-sm text-center text-blue-600">{status}</p>}

      <div className="text-center text-sm text-gray-600">
        Remember your password?{" "}
        <button type="button" onClick={() => onSwitch("login")} className="text-blue-600 font-medium hover:underline">
          Sign in
        </button>
      </div>
    </form>
  );
}
