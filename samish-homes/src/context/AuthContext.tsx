import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "agent" | "public";
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (data: { user: User; token: string }) => void;
  logout: () => void;
  isAuthenticated: boolean;
  role: string | null;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Load and verify token
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
        setToken(storedToken);
        setUser(res.data);
      })
      .catch(() => {
        // Token invalid or expired — wipe storage
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const login = ({ user, token }: { user: User; token: string }) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
        role: user?.role || null,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
