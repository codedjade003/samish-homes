export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-bold">Ready to Find Your Dream Home?</h2>
        <p className="mt-4 text-xl">
          Join thousands of satisfied clients who found their perfect property with Samish Homes.
        </p>
        <div className="mt-8">
          <button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-auth-modal", { detail: "register" }))
            }
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
