import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Redirects to /signin when there is no session.
export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/signin" replace />;
}
