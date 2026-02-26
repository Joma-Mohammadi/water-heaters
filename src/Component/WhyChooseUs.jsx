import engineerImage from "../image/engineer-working.jpg";
import { FiCheck } from "react-icons/fi";

function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-orange-500 text-sm font-semibold mb-4 tracking-wide">
              WHY CHOOSE US
            </p>

            <h2 className=" lg:text-2xl font-bold text-slate-900 leading-tight mb-6">
              Reliable Hot Water — Installed and <br />
              Maintained by Experts
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you need a new system or a quick repair, HPS24/7 delivers
              dependable service for vented and unvented water heaters.Our certified
              engineers ensure your system provides consistent pressure, safe operation, and 
              energy Efficiency for years t come.
            </p>


            {/* FEATURES LIST */}
            <ul className="space-y-5 mb-8">
              {[
                "Specialists in unvented hot water systems",
                "Advice on the best setup for your property",
                "Fully certified and insured installers",
                "Preventative maintenance to reduce breakdowns",
                "Fast turnaround for repairs",
                "Compliant with all UK safety regulations",
                "Free quotes and transparent pricing",
                "Emergency call-outs available 24/7",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <FiCheck className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="tel:07852121346"
              className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md text-white font-semibold shadow-md"
            >
              Book Now
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={engineerImage}
              alt="Engineer Working"
              className="rounded-xl shadow-xl"
            />

            {/* 24/7 Badge */}
            <div className="absolute top-6 right-6 bg-slate-900 text-white px-5 py-2 rounded-lg shadow-lg font-bold">
              24/7
            </div>

            {/* 1000+ Box */}
            <div className="absolute bottom-6 left-6 bg-orange-500 text-white px-6 py-4 rounded-lg shadow-lg">
              <p className="text-xl font-bold">1000+</p>
              <p className="text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
