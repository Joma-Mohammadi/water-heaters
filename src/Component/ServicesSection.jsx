import { FiSettings} from "react-icons/fi";
import { FiTool } from "react-icons/fi";
import { IoPulseOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import ServiceCard from "./ServiceCard";


function ServicesSection() {
 

const services = [
  {
    icon: <FiSettings className="w-6 h-6 text-slate-700" />,
    title: "System Conversion",
    description: "Upgrade from conventional to modern vented or unvented cylinders for better performance.",
    features: [
      "Full conversion from system to combi boliers",
      "Installation of new vented or unvented cylinders",
      "Professional pipework modifications",
      "Complete system testing",
    ],
  },
  {
    icon: <FiTool className="w-6 h-6 text-slate-700" />,
    title: "Repairs & Inspections",
    description: "Fast, reliable repairs and thorough safety inspection to keep your water heater running smoothly.",
    features: [
      "Emergency repair service",
      "Annual safety inspection",
      "Leak detection and repair",
      "Component replacement",
    ],
  },
  {
    icon: <IoPulseOutline className="w-6 h-6 text-slate-700" />,
    title: "Pressure Testing",
    description: "Comprehensive pressure testing and system diagnostics to ensure optimal performance and safety.",
    features: [
      "Annual pressure testing",
      "G3 Safety valve checks",
      "Temperature & pressure relif testing",
      "Complete system diagnostic",
    ],
  },
  {
    icon: <FiUserCheck className="w-6 h-6 text-slate-700" />,
    title: "Water Heater Replacement",
    description: "Expert replacement of old or inefficient water heaters with modern, energy-efficient models.",
    features: [
      "Old water heatr removal",
      "New system installation",
      "Energy-efficient upgrades",
      "Full commissioning & certifiation",
    ],
  },
];



  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* serves section */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3">
            Our Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Complete System Conversion Services in West London
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Whether you need a new hot water system or a quick repair, HPS24/7
            delivers reliable service for vented and unvented water heaters. Our
            certified engineers ensure your system provides consistent pressure,
            safe operation, and energy efficiency for years to come.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
