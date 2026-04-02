import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { Linkedin, Mail, Instagram } from 'lucide-react';

const ContactSection = () => {
  const { t } = useI18n();

  const links = [
    { icon: Linkedin, label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/josé-eduardo-izidoro/' },
    { icon: Mail, label: 'eduardojrizidoro@gmail.com →', href: 'mailto:eduardojrizidoro@gmail.com' },
    { icon: Instagram, label: 'Controlar Instagram ↗', href: 'https://www.instagram.com/controlar.automacao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { icon: Instagram, label: 'EYF ↗', href: 'https://www.instagram.com/experienceyourfuture?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { icon: Instagram, label: 'Flexsim Brasil ↗', href: 'https://www.instagram.com/flexsimbrasil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { icon: Instagram, label: 'UNIFEI ↗', href: 'https://www.instagram.com/unifei_oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono-dm text-xs uppercase tracking-[0.25em] text-primary mb-4 text-center"
          >
            Let's talk
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl mb-8 text-center"
          >
            {t('Open to the', 'Aberto à')}
            <br />
            <span className="italic text-muted-foreground">{t('right opportunity.', 'oportunidade certa.')}</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-10 flex flex-col items-center gap-4 mb-16"
          >
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono-dm text-xs text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Icon className="w-4 h-4" />
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              );
            })}
          </motion.div>

          {/* Full name signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border-t border-border pt-8"
          >
            <p className="font-display text-xl md:text-2xl mb-2">José Eduardo Izidoro Júnior</p>
            <p className="font-mono-dm text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              José Eduardo Izidoro Júnior · Araraquara, SP · Brazil
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
