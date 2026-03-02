// src/components/layout/Sidebar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const { user } = useAuth();

  return (
    <div style={{ width: "200px", padding: "20px", background: "#f5f5f5" }}>
      <h3>App Navigation</h3>
      <p>User: {user?.username}</p>
      <p>Role: {user?.role}</p>

      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/baseline">Baseline</Link>
          </li>

          {user?.role === "admin" && (
            <li>
              <Link to="/scanner">Scanner</Link>
            </li>
          )}
          {user?.role === "admin" && (
            <li>
              <Link to="/anomalies">Anomalies</Link>
            </li>
          )}
          {user?.role === "admin" && (
            <li>
              <Link to="/alerts">Alerts</Link>
            </li>
          )}
          {user?.role === "admin" && (
            <li>
              <Link to="/reports">Reports</Link>
            </li>
          )}

          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
