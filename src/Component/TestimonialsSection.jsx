import TestimonialCard from "./TestimonialCard";
import { FaStar } from "react-icons/fa";

function TestimonialsSection() {

  const testimonials = [
    {
      review:
        "Our unvented cylinder failed on a Sunday morning. HPS24/7 had an engineer at our door within an hour. Professional, efficient, and got our hot water back on the same day. Couldn't ask for better service.",
      name: "David Wilson",
      location: "Acton, West London",
      initials: "DW",
      rating: 5,
    },
    {
      review:
        "Needed a new water heater installed. The team explained all the options clearly, helped me choose the right system, and installed it professionally. Very happy with the upgrade and the service.",
      name: "Lisa Martinez",
      location: "Ealing, West London",
      initials: "LM",
      rating: 5,
    },
    {
      review:
        "Annual service was thorough and professional. The engineer spotted a potential issue before it became a problem and fixed it on the spot. Great preventative care that saved me from an emergency callout later!",
      name: "Thomas Chen",
      location: "Chiswick, West London",
      initials: "TC",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">
            What Our West London Customers Say
          </h2>
          <p className="text-gray-600 text-sm">
            Don’t just take our word for it. Read real reviews from homeowners who choose our service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>

        {/* Bottom Rating */}
        <div className="mt-16 bg-gray-200 rounded-xl py-8 text-center">
          <div className="flex justify-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="text-orange-400 text-lg" />
            ))}
          </div>
          <p className="text-sm text-gray-700">
            4.9/5 rating on 300+ reviews
          </p>
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
