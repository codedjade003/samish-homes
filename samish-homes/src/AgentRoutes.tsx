// src/routes/AgentRoutes.tsx
import { Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoutes";
import Dashboard from "./components/landing/AgentDashboard";
import Listings from "./components/agent/pages/Listings";
import Clients from "./components/agent/pages/Clients";
import Referrals from "./components/agent/pages/Referrals";
import Proposals from "./components/agent/pages/Proposals";
import Reports from "./components/agent/pages/Reports";
import Visits from "./components/agent/pages/Visits";
import Commission from "./components/agent/pages/Commission";
import Settings from "./components/agent/pages/Settings";
import AgentLayout from "./layouts/AgentLayout";

export default function AgentRoutes() {
  return (
    <Route
      path="/agent"
      element={
        <ProtectedRoute allowedRoles={["agent"]}>
          <AgentLayout />
        </ProtectedRoute>
      }
    >
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="listings" element={<Listings />} />
      <Route path="clients" element={<Clients />} />
      <Route path="referrals" element={<Referrals />} />
      <Route path="proposals" element={<Proposals />} />
      <Route path="reports" element={<Reports />} />
      <Route path="visits" element={<Visits />} />
      <Route path="commission" element={<Commission />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  );
}
