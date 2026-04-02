import { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { useTheme } from '@/lib/theme';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe } from 'lucide-react';

const navLinks = [
  { en: 'Work', pt: 'Trabalhos', href: '#projects' },
  { en: 'BIA', pt: 'BIA', href: '#bia' },
  { en: 'E.VA', pt: 'E.VA', href: '#eva' },
  { en: 'About', pt: 'Sobre', href: '#about' },
  { en: 'Contact', pt: 'Contato', href: '#contact' },
];

const Navbar = () => {
  const { lang, toggleLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 z-[100] h-[2px] bg-primary transition-all duration-100" style={{ width: `${progress}%` }} />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/70 backdrop-blur-xl border-b border-border' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-mono-dm text-sm tracking-widest uppercase text-foreground">
            JOSÉ EDUARDO IZIDORO JÚNIOR · 23 ANOS
          </a>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono-dm text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {lang === 'en' ? link.en : link.pt}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 font-mono-dm text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'inline-block' }}
                >
                  {lang === 'en' ? 'PT' : 'EN'}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
