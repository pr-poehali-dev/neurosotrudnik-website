import HeroSection from '@/components/sections/HeroSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import CasesAndTestimonialsSection from '@/components/sections/CasesAndTestimonialsSection';
import ContactAndFaqSection from '@/components/sections/ContactAndFaqSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhatWeDoSection />
      <CasesAndTestimonialsSection />
      <ContactAndFaqSection />
    </div>
  );
};

export default Home;
