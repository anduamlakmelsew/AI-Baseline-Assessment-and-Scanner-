import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import MainLayout from "../components/layout/MainLayout";

import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import BaselineOverview from "../pages/Baseline/BaselineOverview";
import Scanner from "../pages/Scanner/ScanForm";
import AnomalyDashboard from "../pages/Anomalies/AnomalyDashboard";
import AlertList from "../pages/Alerts/AlertList";
import ReportGenerator from "../pages/Reports/ReportGenerator";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/baseline"
        element={
          <ProtectedRoute>
            <MainLayout>
              <BaselineOverview />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/scanner"
        element={
          <ProtectedRoute roles={["admin"]}>
            <MainLayout>
              <Scanner />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/anomalies"
        element={
          <ProtectedRoute roles={["admin"]}>
            <MainLayout>
              <AnomalyDashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/alerts"
        element={
          <ProtectedRoute roles={["admin"]}>
            <MainLayout>
              <AlertList />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports"
        element={
          <ProtectedRoute roles={["admin"]}>
            <MainLayout>
              <ReportGenerator />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Settings />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default AppRoutes;
