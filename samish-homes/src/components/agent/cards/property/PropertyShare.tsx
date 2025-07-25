const handleCopy = () => {
  navigator.clipboard.writeText('https://primerealtor.com/listings/4bd-duplex-lekki');
  alert('Link copied to clipboard!');
};


const PropertyShare = () => (
  <div className="mt-4">
    <h4 className="text-lg font-semibold mb-3">Share This Property</h4>
    <div className="flex space-x-2">
      <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        <i className="fab fa-facebook-f mr-2" /> Facebook
      </button>
      <button className="flex-1 bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500">
        <i className="fab fa-twitter mr-2" /> Twitter
      </button>
      <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
        <i className="fab fa-whatsapp mr-2" /> WhatsApp
      </button>
    </div>
    <div className="mt-3 flex items-center">
      <input
        type="text"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value="https://primerealtor.com/listings/4bd-duplex-lekki"
        readOnly
      />
        <button onClick={handleCopy} className="bg-blue-600 text-white px-3 py-2 rounded-r-md hover:bg-blue-700">
        Copy
        </button>
    </div>
  </div>
);

export default PropertyShare;
