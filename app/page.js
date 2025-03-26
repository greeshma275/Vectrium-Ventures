'use client';
import { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import { initScrollObserver } from '../utils/scrollHandler';
import ServicesSection from '../components/ServicesSection';
import StatsTestimonialsSection from '../components/StatsTestimonialsSection';
import BrandsSection from '../components/BrandsSection';
import MissionSection from '../components/MissionSection';
import VisionSection from '../components/VisionSection';
import CareersSection from '../components/CareersSection';
import CandidatesSection from '../components/CandidatesSection';
import FormSection from '../components/FormSection';
import Contact from '../components/Contact';
const TrustedBy = lazy(() => import('../components/TrustedBy'));
const SolutionsSection = lazy(() => import('../components/SolutionsSection'));
const CallToAction = lazy(() => import('../components/CallToAction'));
const ServicesCarousel = lazy(() => import('../components/ServicesCarousel'));
const FeaturesSection = lazy(() => import('../components/FeaturesSection'));
const Call = lazy(() => import('../components/Call'));

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    initScrollObserver();
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />
      
      {activeSection === 'services' ? (
        <>
          <HeroSection activeSection={activeSection} />
          <ServicesSection />
          <StatsTestimonialsSection />
          <BrandsSection />
          <Footer />
        </>
      ) : activeSection === 'aboutus' ? (
        <>
          <HeroSection activeSection={activeSection} />
          <AboutSection />
          <MissionSection />
          <VisionSection />
          <Footer />
        </>
      ) : activeSection === 'career' ? (
        <>
          <HeroSection activeSection={activeSection} />
          <CareersSection />
          <CandidatesSection/>
          <FormSection/>
          <Footer />
        </>
      ) :activeSection==='contactus'?(
        <>
        <Contact/>
        </>
      ) : (
        <>
          <HeroSection activeSection={activeSection} />
          <Suspense fallback={<div>Loading...</div>}>
          
            <TrustedBy />
            <SolutionsSection />
            <CallToAction />
            <ServicesCarousel />
            <FeaturesSection />
            <Call />
          </Suspense>
          <Footer />
        </>
      )}
    </div>
  );
}