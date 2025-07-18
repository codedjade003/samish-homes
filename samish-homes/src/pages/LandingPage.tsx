import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import FeaturedProperties from "../components/landing/FeaturedProperties";
import { useAuth } from "../context/AuthContext";

export default function LandingPage() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return null; // Auto-redirect will be handled in router

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProperties />
    </div>
  );
}
