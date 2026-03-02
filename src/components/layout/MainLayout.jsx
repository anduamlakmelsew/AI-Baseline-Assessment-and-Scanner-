import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div
      className="main-layout"
      style={{ display: "flex", minHeight: "100vh" }}
    >
      <Sidebar />
      <div
        className="main-content"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <div style={{ padding: "20px", flex: 1 }}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
