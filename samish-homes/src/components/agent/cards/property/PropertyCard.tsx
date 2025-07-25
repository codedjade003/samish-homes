import type { Property } from '../../types/Property';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faBath,
  faVectorSquare,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const statusColor: Record<string, string> = {
  'For Sale': 'bg-blue-600',
  'For Rent': 'bg-green-600',
};

const PropertyCard = ({ property }: { property: Property }) => {
  const badgeColor = statusColor[property.status] || 'bg-gray-500';

  return (
    <div className="property-card bg-white rounded-lg overflow-hidden shadow-md relative group transition-transform hover:shadow-lg hover:-translate-y-1">
      {/* Image & Badge */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded ${badgeColor}`}>
          {property.status}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition duration-200">
            View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{property.title}</h3>
        <p className="text-gray-600 mb-2 flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 text-blue-500" />
          {property.location}
        </p>
        <p className="text-blue-600 font-bold text-xl mb-3">{property.price}</p>

        {/* Features */}
        <div className="flex justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faBed} />
            {property.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faBath} />
            {property.baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faVectorSquare} />
            {property.area.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
