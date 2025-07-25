const PropertyContactForm = () => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <h4 className="text-lg font-semibold mb-3">Contact Owner</h4>
    <form>
      {['name', 'email', 'phone'].map((field) => (
        <div className="mb-4" key={field}>
          <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
            {`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
          </label>
          <input
            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
            id={field}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ))}
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Send Inquiry
      </button>
    </form>
  </div>
);

export default PropertyContactForm;
