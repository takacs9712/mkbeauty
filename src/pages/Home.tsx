import { Hero } from "../components/home/Hero";
import { WhyChooseMe } from "../components/home/WhyChooseMe";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { CTA } from "../components/home/CTA";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseMe />
      <ServicesPreview />
      <CTA />
      <Contact />
    </div>
  );
}

export default Home;
