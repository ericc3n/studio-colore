import Hero from "./Hero/Hero";
import ServicesSection from "./ServicesSection/ServicesSection";
import TestimonialsSection from "./TestimonialsSection/Testimonials";
import WorkflowSection from "./WorkflowSection/WorkflowSection";

export default function page() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WorkflowSection />
      <TestimonialsSection />
    </>
  )
}
