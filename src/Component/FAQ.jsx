import { useState } from "react";
import { FiPlus} from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: " Do you offer same-day water heater repairs?",
      answer:
        "Yes, we offer same-day water heater repairs across West London. In most cases, we can attend within 90 minutes for emergency callouts, depending on your location and availability.",
    },
    {
      question: "Are you Gas Safe registered?",
      answer:
        "Absolutely. All of our engineers are Gas Safe registered and fully qualified with over 10 years of experience.",
    },
    {
      question: "How often should I service my water heater?",
      answer:
        "We recommend servicing your water heater once a year. Regular maintenance helps improve efficiency, extend the lifespan of your system, and prevent unexpected breakdowns.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We cover all West London boroughs including Ealing, Acton, Chiswick, Fulham, Hammersmith and more.",
    },
    
    {
      question: "What's the difference between vented and unvented systems?",
      answer:
        "A vented system uses a cold-water storage tank (usually in the loft) and relies on gravity for water pressure.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a63] mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Got questions? We’ve got answers. If you need more help, call us anytime.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-50 transition"
              >
                <h3 className="font-semibold text-[#1e3a63] text-sm md:text-base">
                  {faq.question}
                </h3>

                {activeIndex === index ? (
                  <IoIosClose className="text-2xl text-orange-500" />
                ) : (
                  <FiPlus className="text-xl text-[#1e3a63]" />
                )}
              </div>

              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
