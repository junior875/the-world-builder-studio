import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import HeroSphere from './HeroSphere';
import { ChevronDown } from 'lucide-react';

const wordAnimation = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const wordChild = {
  hidden: { opacity: 0, y: -30, rotateX: 45 },
  visible: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const HeroSection = () => {
  const { t, lang } = useI18n();

  const titleLines = lang === 'en'
    ? [
        { text: 'I build AI that', italic: false },
        { text: 'talks to the', italic: false },
        { text: 'real world.', italic: true },
      ]
    : [
        { text: 'Eu construo IA que', italic: false },
        { text: 'conversa com o', italic: false },
        { text: 'mundo real.', italic: true },
      ];

  const tags = ['Python', 'TypeScript', 'Multi-agent AI', 'LangChain', 'AWS Fargate', 'ESP32'];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroSphere />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono-dm text-xs uppercase tracking-[0.25em] text-primary mb-8"
          >
            {t(
              'Product Engineer · AI · IoT · Full-Stack',
              'Engenheiro de Produto · IA · IoT · Full-Stack'
            )}
          </motion.p>

          {/* Title */}
          <motion.h1
            variants={wordAnimation}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] leading-[1.05] mb-8"
          >
            {titleLines.map((line, i) => (
              <span key={`${lang}-${i}`} className="block">
                {line.text.split(' ').map((word, j) => (
                  <motion.span
                    key={j}
                    variants={wordChild}
                    className={`inline-block mr-[0.3em] ${line.italic ? 'italic text-muted-foreground' : ''}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="font-body font-light text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
          >
            {t(
              "Not prototypes. Not demos. Real systems — hardware in the field, sensors on walls, LLMs crunching gigabytes of industrial data for paying clients. I don't wait to fully understand something before I build it. That's always been the job.",
              "Não protótipos. Não demos. Sistemas reais — hardware no campo, sensores nas paredes, LLMs processando gigabytes de dados industriais para clientes reais. Não espero entender tudo antes de construir. Esse sempre foi o trabalho."
            )}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-2 mb-16"
          >
            {tags.map(tag => (
              <span key={tag} className="font-mono-dm text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
            <span className="font-mono-dm text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              {t('4 products in production · 2 enterprise clients', '4 produtos em produção · 2 clientes enterprise')}
            </span>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex items-center gap-3 text-muted-foreground"
          >
            <div className="w-[1px] h-8 bg-muted-foreground/30" />
            <span className="font-mono-dm text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-3 h-3 animate-bounce-subtle" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
