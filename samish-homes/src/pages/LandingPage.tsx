import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import FeaturedProperties from "../components/landing/FeaturedProperties";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";
import { useAuth } from "../context/AuthContext";

export default function LandingPage() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // Wait for auth to resolve
  if (isAuthenticated) return null; // Optional: you could also redirect

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
