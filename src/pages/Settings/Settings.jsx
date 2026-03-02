import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import UserSettings from "./UserSettings";
import SecuritySettings from "./SecuritySettings";
import NotificationSettings from "./NotificationSettings";
import AdminSettings from "./AdminSettings";

function Settings() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("user");

  if (!user) return <div>Loading...</div>; // wait for user info

  return (
    <div style={{ padding: "20px" }}>
      <h2>Settings</h2>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("user")}>User</button>
        <button onClick={() => setActiveTab("security")}>Security</button>
        <button onClick={() => setActiveTab("notifications")}>
          Notifications
        </button>
        {user.role === "admin" && (
          <button onClick={() => setActiveTab("admin")}>Admin</button>
        )}
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {activeTab === "user" && <UserSettings />}
        {activeTab === "security" && <SecuritySettings />}
        {activeTab === "notifications" && <NotificationSettings />}
        {activeTab === "admin" && user.role === "admin" && <AdminSettings />}
      </div>
    </div>
  );
}

export default Settings;
