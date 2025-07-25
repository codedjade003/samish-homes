// src/components/landing/WhyChooseUs.tsx
import { FaHome, FaUserTie, FaHandHoldingUsd, FaShieldAlt } from "react-icons/fa";

export default function WhyChooseUs() {
const features = [
  {
    icon: <FaHome className="text-xl" />,
    title: "Extensive Property Listings",
    description: "Access to thousands of properties across the country.",
  },
  {
    icon: <FaUserTie className="text-xl" />,
    title: "Expert Agents",
    description: "Our experienced agents will guide you through every step.",
  },
  {
    icon: <FaHandHoldingUsd className="text-xl" />,
    title: "Affordable Options",
    description: "Properties to fit every budget and lifestyle.",
  },
  {
    icon: <FaShieldAlt className="text-xl" />,
    title: "Secure Transactions",
    description: "Safe and secure property transactions with legal support.",
  },
];


  return (
    <section id="about" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Samish Homes?</h2>
          <p className="mt-2 text-lg text-gray-600">
            We provide exceptional service and expertise
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mx-auto">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
