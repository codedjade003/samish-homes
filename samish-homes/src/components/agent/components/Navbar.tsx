import { useState } from 'react';
import logo from '../../../assets/logo.png';
import { useAuth } from '../../../context/AuthContext'; // ✅ adjust path if needed

type NavbarProps = {
  onMobileMenuToggle?: (isOpen: boolean) => void;
};

export default function Navbar({ }: NavbarProps) {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();

  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting updated profile:', form);

    // 🔜 Replace this with axios.post/put to backend API
    // axios.put('/api/agent/profile', form, { headers: ... })
    //   .then(...).catch(...);
  };


  return (
    <nav className="bg-white shadow-md z-50 px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <img src={logo} alt="Samish Homes" className="h-10 w-auto" />

      {/* Avatar */}
      <button
        onClick={() => setShowModal(true)}
        className="h-9 w-9 rounded-full bg-blue-100 text-blue-600 font-semibold flex items-center justify-center"
        title="View Profile"
      >
        {user?.name?.slice(0, 2).toUpperCase() || 'JD'}
      </button>

      {/* Inline Profile Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h2 className="text-lg font-semibold mb-4">Update Profile</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>

            {/* Close icon */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
