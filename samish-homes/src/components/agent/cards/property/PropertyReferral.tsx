const handleCopy = () => {
  navigator.clipboard.writeText('https://primerealtor.com/ref/johndoe/4bd-duplex-lekki');
  alert('Referral link copied to clipboard!');
};

const PropertyReferral = () => (
  <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
    <h4 className="text-lg font-semibold mb-2 text-yellow-800">Earn Commission</h4>
    <p className="text-sm text-yellow-700 mb-3">
      Share your unique referral link and earn 1% commission when a deal is closed.
    </p>
    <div className="flex items-center">
      <input
        type="text"
        className="flex-1 px-3 py-2 border border-yellow-300 rounded-l-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-sm"
        value="https://primerealtor.com/ref/johndoe/4bd-duplex-lekki"
        readOnly
      />
        <button onClick={handleCopy} className="bg-blue-600 text-white px-3 py-2 rounded-r-md hover:bg-blue-700">
        Copy
        </button>
    </div>
  </div>
);

export default PropertyReferral;
