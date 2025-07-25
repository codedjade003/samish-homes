const PropertyDetails = () => {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-3">Property Details</h4>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div><p className="text-sm text-gray-500">Property Type</p><p className="font-medium">Duplex</p></div>
        <div><p className="text-sm text-gray-500">Price</p><p className="font-medium text-blue-600">₦120,000,000</p></div>
        <div><p className="text-sm text-gray-500">Bedrooms</p><p className="font-medium">4</p></div>
        <div><p className="text-sm text-gray-500">Bathrooms</p><p className="font-medium">3</p></div>
        <div><p className="text-sm text-gray-500">Square Feet</p><p className="font-medium">3,500</p></div>
        <div><p className="text-sm text-gray-500">Year Built</p><p className="font-medium">2018</p></div>
      </div>
      <div>
        <p className="text-sm text-gray-500">Description</p>
        <p className="font-medium">
          This luxurious 4-bedroom duplex is located in the prestigious Lekki Phase 1 area. The property features a modern kitchen, spacious living areas, a private garden, and a swimming pool.
        </p>
      </div>
    </div>
  );
};

export default PropertyDetails;
