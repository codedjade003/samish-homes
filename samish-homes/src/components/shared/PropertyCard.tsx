interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  status: string;
  image: string;
  beds: number;
  baths: number;
}

export default function PropertyCard({
  title,
  location,
  price,
  status,
  image,
  beds,
  baths,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 property-card">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div
          className={`absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded ${
            status === "For Rent" ? "bg-green-600" : "bg-blue-600"
          }`}
        >
          {status}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{location}</p>
        <div className="mt-2 flex items-center">
          <i className="fas fa-bed text-blue-500 mr-1"></i>
          <span className="text-sm text-gray-600 mr-3">{beds} Beds</span>
          <i className="fas fa-bath text-blue-500 mr-1"></i>
          <span className="text-sm text-gray-600">{baths} Baths</span>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          <button className="text-blue-600 hover:text-blue-800">
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
