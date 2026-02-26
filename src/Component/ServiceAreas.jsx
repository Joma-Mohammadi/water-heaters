function ServiceAreas() {
  const areas = [
    { name: "Acton", active: true },
    { name: "Brentford", active: false },
    { name: "Chiswick", active: true },
    { name: "Ealing", active: false },
    { name: "Fulham", active: true },
    { name: "Greenford", active: false },
    { name: "Hammersmith", active: false },
    { name: "Hanwell", active: true },
    { name: "Harlesden", active: false },
    { name: "Hayes", active: false },
    { name: "Hounslow", active: true },
    { name: "Isleworth", active: false },
    { name: "Kensington", active: false },
    { name: "Northolt", active: true },
    { name: "Notting Hill", active: false },
    { name: "Osterley", active: false },
    { name: "Perivale", active: true },
    { name: "Shepherd's Bush", active: false },
    { name: "Southall", active: false },
    { name: "West Ealing", active: true },
  ];

  return (
    <section className="bg-[#1e3a63] py-20  text-white ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <p className="text-orange-400 text-xs tracking-[3px] mb-4 font-semibold">
          SERVICE AREAS
        </p>

        <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
          Covering All of West London
        </h2>

        <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
         Our water heater engineers are available 24/7 across all West London boroughs. No matter where you are, we'll be there within 90 minutes for emergency calls.
        </p>

        <p className="text-sm mb-12">
          Average Response Time:{" "}
          <span className="text-orange-400 font-semibold">43 Minutes</span>
        </p>

        {/* Areas Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {areas.map((area, index) => (
            <div
              key={index}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold border
              transition-all duration-300 shadow-sm
              ${
                area.active
                  ? "bg-orange-500 border-orange-500 text-white shadow-md"
                  : "bg-[#27476f] border-[#355781] text-gray-200 hover:bg-[#355781] hover:scale-105"
              }`}
            >
              {area.name}
            </div>
          ))}
        </div>

        <p className="text-gray-300 text-sm mb-6">
          Can't see your area? Give us a call — we cover many more locations!
        </p>

        <a
          href="https://hpspros.co.uk/contact-us"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-7 py-3 rounded-lg font-semibold shadow-md cursor-pointer"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default ServiceAreas;
