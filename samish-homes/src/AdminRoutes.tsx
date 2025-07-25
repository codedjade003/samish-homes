// src/routes/AdminRoutes.tsx
import { Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoutes";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./components/landing/AdminDashboard";
import PropertiesView from "./components/admin/views/PropertiesView";
import UsersView from "./components/admin/views/UsersView";
import AdminAnalyticsView from "./components/admin/views/AdminAnalyticsView";
import LeadsView from "./components/admin/views/LeadsView";
import AgentsView from "./components/admin/views/AgentsView";
import OwnersView from "./components/admin/views/OwnersView";
import SystemSettingsView from "./components/admin/views/SystemSettingsView";
import RolesPermissionsView from "./components/admin/views/RolesPermissionsView";

export default function AdminRoutes() {
  return (
    <Route
      path="/admin"
      element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminLayout />
        </ProtectedRoute>
      }
    >
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="properties" element={<PropertiesView />} />
      <Route path="users" element={<UsersView />} />
      <Route path="analytics" element={<AdminAnalyticsView />} />
      <Route path="leads" element={<LeadsView />} />
      <Route path="agents" element={<AgentsView />} />
      <Route path="owners" element={<OwnersView />} />
      <Route path="settings" element={<SystemSettingsView />} />
      <Route path="roles" element={<RolesPermissionsView />} />
    </Route>
  );
}
