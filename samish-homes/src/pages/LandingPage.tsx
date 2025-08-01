import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import FeaturedProperties from "../components/landing/FeaturedProperties";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  const { isAuthenticated, user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      if (user?.role === "admin") navigate("/admin/dashboard");
      else if (user?.role === "agent") navigate("/agent/dashboard");
      else navigate("/"); // Default (or public dashboard if you have)
    }
  }, [loading, isAuthenticated, user, navigate]);

  if (loading || isAuthenticated) return null;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
