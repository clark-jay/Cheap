import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// Keeps the session in React state AND localStorage so it survives a page refresh.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("cheap_user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (token, userData) => {
    localStorage.setItem("cheap_token", token);
    localStorage.setItem("cheap_user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("cheap_token");
    localStorage.removeItem("cheap_user");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
