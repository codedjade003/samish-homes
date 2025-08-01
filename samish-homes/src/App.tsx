// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import BuyerForm from "./pages/BuyerForm";
import SellerForm from "./pages/SellerForm";

// Protected Route Groups
import AdminRoutes from "./AdminRoutes";
import AgentRoutes from "./AgentRoutes";
import AffiliateRoutes from "./AffiliateRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<BuyerForm />} />
        <Route path="/sell" element={<SellerForm />} />

        {/* Admin and Agent Routes */}
        {AdminRoutes()}
        {AgentRoutes()}
        {AffiliateRoutes()}
      </Routes>
    </Router>
  );
}

export default App;
