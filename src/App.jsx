import HeroSection from './components/Home';
import ProjectAndWorkSections from './components/Project';
import WorkTogetherSection from './components/workTogether';
import PricingPlans from './components/Pricing';
import SponsorsSection from './components/Sponsor';
import TestimonialCarousel from './components/Testimonial';
import AppIntegrationHero from './components/Appintegre';
import Footer from './components/footer';

function App() {
  return (
    <div className="">
        <HeroSection />
        <ProjectAndWorkSections />
        <WorkTogetherSection />
        <PricingPlans />
        <SponsorsSection />
        <AppIntegrationHero />
        <TestimonialCarousel />
        <Footer />

    </div>
  );
}

export default App;