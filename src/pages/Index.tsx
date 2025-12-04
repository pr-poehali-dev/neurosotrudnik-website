import { useState } from 'react';
import Header from '@/components/layout/Header';
import IndexHeroSection from '@/components/sections/IndexHeroSection';
import AboutAndBenefitsSection from '@/components/sections/AboutAndBenefitsSection';
import ServicesAndCasesSection from '@/components/sections/ServicesAndCasesSection';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <IndexHeroSection />
        <AboutAndBenefitsSection />
        <ServicesAndCasesSection 
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </main>
    </div>
  );
};

export default Index;
