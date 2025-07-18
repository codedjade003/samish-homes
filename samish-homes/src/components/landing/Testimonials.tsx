// src/components/landing/Testimonials.tsx
export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: `"The team at Samish Homes made the entire process so smooth. They found me the perfect home within my budget and handled all the paperwork."`,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Michael Chen",
      role: "Investor",
      text: `"As a real estate investor, I rely on Samish Homes for their market knowledge and negotiation skills. They've helped me build an impressive portfolio."`,
      image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      text: `"Being a first-time homebuyer was overwhelming, but my agent explained everything clearly and found properties that matched exactly what I wanted."`,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        <p className="mt-2 text-lg text-gray-600">
          Hear from people who found their dream home with us
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((client) => (
          <div
            key={client.name}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div className="flex items-center">
              <img
                src={client.image}
                alt={client.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">{client.name}</h4>
                <p className="text-blue-600">{client.role}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{client.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
