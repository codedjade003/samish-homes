import { FaBed, FaBath, FaHeart } from "react-icons/fa";

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
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl">
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

        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <FaBed className="text-blue-500" />
            {beds} Beds
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <FaBath className="text-blue-500" />
            {baths} Baths
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          <button className="text-blue-600 hover:text-blue-800">
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
}
