import PropertyCard from "../../components/shared/PropertyCard";

const properties = [
  {
    id: 1,
    title: "Modern Villa in Beverly Hills",
    location: "Beverly Hills, CA",
    price: "$1,250,000",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    beds: 4,
    baths: 3,
  },
  {
    id: 2,
    title: "Luxury Apartment Downtown",
    location: "New York, NY",
    price: "$3,500/mo",
    status: "For Rent",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    beds: 2,
    baths: 2,
  },
  {
    id: 3,
    title: "Waterfront Family Home",
    location: "Miami, FL",
    price: "$2,750,000",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    beds: 5,
    baths: 4,
  },
];

export default function FeaturedProperties() {
  return (
    <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
        <p className="mt-2 text-lg text-gray-600">Browse our selection of premium properties</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("open-auth-modal", { detail: "register" }))}
          className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          View All Properties
        </button>
      </div>
    </section>
  );
}
