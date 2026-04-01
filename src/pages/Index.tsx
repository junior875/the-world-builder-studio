import { I18nProvider } from '@/lib/i18n';
import { ThemeProvider } from '@/lib/theme';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import PhotosSection from '@/components/PhotosSection';
import PersonalSection from '@/components/PersonalSection';
import BiaSection from '@/components/BiaSection';
import EvaSection from '@/components/EvaSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <CustomCursor />
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <PhotosSection />
          <PersonalSection />
          <BiaSection />
          <EvaSection />
          <AboutSection />
          <ContactSection />
        </main>
      </I18nProvider>
    </ThemeProvider>
  );
};

export default Index;
