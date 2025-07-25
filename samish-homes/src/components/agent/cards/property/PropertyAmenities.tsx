const amenities = [
  { icon: 'fa-swimming-pool', label: 'Swimming Pool' },
  { icon: 'fa-wifi', label: 'WiFi' },
  { icon: 'fa-tshirt', label: 'Laundry' },
  { icon: 'fa-parking', label: 'Parking' },
  { icon: 'fa-utensils', label: 'Kitchen' },
  { icon: 'fa-tv', label: 'Cable TV' },
];

const PropertyAmenities = () => (
  <div className="mb-6">
    <h4 className="text-lg font-semibold mb-3">Amenities</h4>
    <div className="flex flex-wrap gap-3">
      {amenities.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
        >
          <i className={`fas ${item.icon} mr-1`} /> {item.label}
        </span>
      ))}
    </div>
  </div>
);

export default PropertyAmenities;
