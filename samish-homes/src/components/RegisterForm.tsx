import { useState } from "react";
import axios from "axios";

interface Props {
  onSwitch: (form: "login" | "forgot") => void;
  onClose: () => void;
}

export default function RegisterForm({ onSwitch, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));

      onClose(); // close modal
      window.location.reload(); // refresh app
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-sm text-red-600">{error}</p>}
      <input id="name" type="text" placeholder="Full Name" required onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      <input id="email" type="email" placeholder="Email" required onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      <input id="phone" type="tel" placeholder="Phone Number" onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      <input id="password" type="password" placeholder="Password" required onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      <input id="confirmPassword" type="password" placeholder="Confirm Password" required onChange={handleChange} className="w-full px-3 py-2 border rounded" />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? "Registering..." : "Register"}
      </button>

      <div className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button type="button" onClick={() => onSwitch("login")} className="text-blue-600 font-medium hover:underline">
          Sign in
        </button>
      </div>
    </form>
  );
}
