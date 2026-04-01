import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const hardSkills = [
  'AI & Machine Learning',
  'Backend & APIs (Python, FastAPI, TypeScript)',
  'Databases (PostgreSQL, Redis, DuckDB)',
  'Cloud & Infrastructure (AWS, Docker)',
  'Embedded & IoT (ESP32, nRF52840, BLE)',
  'Data & Analytics',
  'WhatsApp & Integrations',
  'C# (Unity, .NET)',
  'English — Advanced',
];

const softSkills = [
  'Hyperfocus under complexity',
  'Rapid context switching',
  'Problem-first thinking',
  'Team coordination (7 people)',
  'Stakeholder communication',
  'Fast prototyping (30-day validation)',
  'Pattern recognition across domains',
  'Scientific thinking',
];

const AboutSection = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-5xl mb-8"
            >
              {t('Engineer.', 'Engenheiro.')}
              <br />
              <span className="italic text-muted-foreground">{t('Co-founder. Obsessive.', 'Co-fundador. Obcecado.')}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body font-light text-sm text-muted-foreground leading-relaxed space-y-4"
            >
              <p>
                {t(
                  "I build things end-to-end — from ESP32 firmware to multi-agent AI pipelines running on AWS. Co-founder and lead engineer at Controlar Automação Industrial, where I coordinate a team of 7 people. I also work as a Software Engineer at EYF and Flexsim Brasil, leading AI and software development across both.",
                  "Eu construo coisas do começo ao fim — desde firmware em ESP32 até pipelines de IA multi-agente rodando na AWS. Co-fundador e engenheiro principal na Controlar Automação Industrial, onde coordeno um time de 7 pessoas. Também trabalho como Engenheiro de Software na EYF e na Flexsim Brasil."
                )}
              </p>
              <p>
                {t(
                  "I have ADHD, and honestly it shaped how I work more than any course or framework did. The hyperfocus is real — when something clicks, I go deep and don't stop. The context-switching is real too. Embedded C++ in the morning, LLM orchestration in the afternoon, product call at the end of the day.",
                  "Tenho TDAH, e honestamente ele moldou mais a minha forma de trabalhar do que qualquer curso ou framework. O hiperfoco é real — quando algo encaixa, eu mergulho fundo e não paro. A troca de contexto também é real. C++ embarcado de manhã, orquestração de LLM de tarde, reunião de produto no final do dia."
                )}
              </p>
              <p>
                {t(
                  "Completing my Computer Engineering degree at Universidade Federal de Itajubá (UNIFEI). Outside of engineering: I cook seriously. Bread from scratch, regional Brazilian cuisine, experimenting with flavor the same way I experiment with architectures.",
                  "Completando minha graduação em Engenharia de Computação na UNIFEI. Fora da engenharia: cozinho de verdade. Pão do zero, culinária regional mineira, experimentando com sabores da mesma forma que experimento com arquiteturas."
                )}
              </p>
            </motion.div>
          </div>

          {/* Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="font-mono-dm text-xs uppercase tracking-[0.25em] text-primary mb-6">Hard Skills</h3>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map(s => (
                  <span key={s} className="font-mono-dm text-[10px] px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-mono-dm text-xs uppercase tracking-[0.25em] text-primary mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map(s => (
                  <span key={s} className="font-mono-dm text-[10px] px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
