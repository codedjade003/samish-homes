export default function Hero() {
  return (
    <div className="gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Find Your Dream Home With Samish Homes
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Discover the perfect property that matches your lifestyle and budget.
            </p>
            <div className="mt-8">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-auth-modal", { detail: "register" }))}
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
            alt="Modern House"
            className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
