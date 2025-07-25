import type { Property } from '../types/Property';
import { Link } from 'react-router-dom';
import PropertyCard from './property/PropertyCard';

type RecentListingsProps = {
  onPropertyClick: (property: Property) => void;
};

const properties: Property[] = [
  {
    title: '4-Bedroom Duplex',
    location: 'Lekki Phase 1, Lagos',
    price: '₦120,000,000',
    beds: 4,
    baths: 3,
    area: 3500,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=60',
    status: 'For Sale',
  },
  {
    title: '3-Bedroom Apartment',
    location: 'Victoria Island, Lagos',
    price: '₦4,500,000/yr',
    beds: 3,
    baths: 2,
    area: 1800,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=60',
    status: 'For Rent',
  },
  {
    title: '5-Bedroom Mansion',
    location: 'Banana Island, Lagos',
    price: '₦450,000,000',
    beds: 5,
    baths: 4,
    area: 6500,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=60',
    status: 'For Sale',
  },
];

export default function RecentListings({ onPropertyClick }: RecentListingsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 lg:col-span-3 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Your Recent Listings</h2>
        <Link to="/agent/listings" className="text-sm text-indigo-600 hover:underline">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {properties.map((property, i) => (
          <div key={i} onClick={() => onPropertyClick(property)} className="cursor-pointer">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
}
