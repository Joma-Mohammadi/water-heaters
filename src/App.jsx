import Hero from "./Component/Hero.jsx";
import Benefits from"./Component/Benefits.jsx";
import ServicesSection from "./Component/ServicesSection.jsx";
import WhyChooseUs from "./Component/WhyChooseUs.jsx";
import TestimonialsSection from "./Component/TestimonialsSection.jsx";
import ServiceAreas from "./Component/ServiceAreas.jsx";
import FAQ from "./Component/FAQ.jsx";
import CTASection from "./Component/CTASection.jsx";

export default function App() {
  return (
    <div>
     
     <Hero/>
     <Benefits/>
     <ServicesSection/>
     <WhyChooseUs/>
     <TestimonialsSection/>
     <ServiceAreas/>
     <FAQ/>
     <CTASection/>
    </div>
  );
}
 