import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [activeForm, setActiveForm] = useState<"login" | "register" | "forgot">("login");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {activeForm === "login" && "Login"}
            {activeForm === "register" && "Register"}
            {activeForm === "forgot" && "Forgot Password"}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="p-6">
          {activeForm === "login" && <LoginForm onSwitch={setActiveForm} onClose={onClose} />}
          {activeForm === "register" && <RegisterForm onSwitch={setActiveForm} onClose={onClose} />}
          {activeForm === "forgot" && <ForgotPasswordForm onSwitch={setActiveForm} />}
        </div>
      </div>
    </div>
  );
}
