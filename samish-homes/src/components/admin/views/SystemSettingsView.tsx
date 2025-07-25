export default function SystemSettingsView() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">System Settings</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Platform Name</label>
          <input type="text" placeholder="Samish Homes" className="w-full border rounded px-4 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
          <input type="email" placeholder="support@samishhomes.com" className="w-full border rounded px-4 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
          <input type="tel" placeholder="+234-8123456789" className="w-full border rounded px-4 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">App Version</label>
          <input type="text" placeholder="v1.0.0" className="w-full border rounded px-4 py-2" />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-indigo-700">
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}
