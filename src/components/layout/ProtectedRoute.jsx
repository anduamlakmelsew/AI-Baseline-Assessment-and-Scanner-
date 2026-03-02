// src/components/layout/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children, roles }) {
  const { user } = useAuth();

  // Not logged in
  if (!user) return <Navigate to="/login" />;

  // Role restriction
  if (roles && !roles.includes(user.role)) {
    // Redirect unauthorized roles to dashboard
    return <Navigate to="/dashboard" />;
  }

  return children;
}

export default ProtectedRoute;
