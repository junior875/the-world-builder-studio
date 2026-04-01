import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const PersonalSection = () => {
  const { t } = useI18n();

  const cards = [
    {
      titleEn: 'ADHD',
      titlePt: 'TDAH',
      descEn: "Diagnosed and embraced. It's the reason I obsess deeply, switch contexts without losing thread, and find genuine excitement in problems most people avoid.",
      descPt: 'Diagnosticado e abraçado. É a razão pela qual eu me aprofundo obsessivamente, troco contexto sem perder o fio, e encontro empolgação genuína em problemas que a maioria evita.',
    },
    {
      titleEn: 'Scientific Research',
      titlePt: 'Pesquisa Científica',
      descEn: 'Published at VIII Simpósio de IC (UNIFEI), funded by CNPq and FAPEMIG. JS vs WebAssembly performance using donated TV boxes. Score: 10/10.',
      descPt: 'Publicado no VIII Simpósio de IC (UNIFEI), financiado por CNPq e FAPEMIG. Performance JS vs WebAssembly usando TV boxes doadas. Nota: 10/10.',
    },
    {
      titleEn: 'Hackathons & UNIFEI',
      titlePt: 'Hackathons & UNIFEI',
      descEn: 'Multiple hackathons at Universidade Federal de Itajubá — including Startup Weekend, where the sport is rapid prototyping.',
      descPt: 'Múltiplos hackathons na Universidade Federal de Itajubá — incluindo Startup Weekend, onde o esporte é prototipagem rápida.',
    },
    {
      titleEn: 'Culinary Obsession',
      titlePt: 'Obsessão Culinária',
      descEn: 'Bread from scratch, regional Minas Gerais cuisine. The same iterative instinct that ships software also shapes dough.',
      descPt: 'Pão do zero, culinária regional mineira. O mesmo instinto iterativo que entrega software também molda massa.',
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl">
            {t('More than', 'Mais do que')}
            <br />
            <span className="italic text-muted-foreground">{t('code.', 'código.')}</span>
          </h2>
        </motion.div>

        {/* Personal photo placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            t('Homemade waffle with chocolate ganache', 'Waffle artesanal com ganache de chocolate'),
            t('Bread from scratch', 'Pão artesanal'),
            t('Startup Weekend @ UNIFEI', 'Startup Weekend @ UNIFEI'),
            t('VIII Simpósio de IC · CNPq · FAPEMIG', 'VIII Simpósio de IC · CNPq · FAPEMIG'),
          ].map((label, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square bg-secondary rounded-xl flex items-center justify-center p-4"
            >
              <p className="font-mono-dm text-[10px] text-muted-foreground text-center">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Context cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-mono-dm text-xs uppercase tracking-wider text-primary mb-3">
                {t(card.titleEn, card.titlePt)}
              </h3>
              <p className="font-body font-light text-sm text-muted-foreground leading-relaxed">
                {t(card.descEn, card.descPt)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
