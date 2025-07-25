import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();
  return (
    <section
      id="cta-section"
      className="bg-gradient-to-br from-blue-800 to-blue-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-bold">Ready to Find Your Dream Home?</h2>
        <p className="mt-4 text-xl">
          Join thousands of satisfied clients who found their perfect property with Samish Homes.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
          onClick={() => navigate("/buy")}
            className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-red-600 hover:text-white"
          >
            I'm Looking to Buy
          </button>

          <button
          onClick={() => navigate("/sell")}
            className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-green-600 hover:text-white"
          >
            I Want to Sell
          </button>
        </div>

        <p className="mt-4 text-sm">
          Want to earn commissions instead?{" "}
          <a href="/register" className="underline hover:text-blue-200">
            Join the Affiliate Program
          </a>
        </p>
      </div>
    </section>
  );
}
