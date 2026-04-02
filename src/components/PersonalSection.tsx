import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const PersonalSection = () => {
  const { t } = useI18n();

  const cards = [
    {
      titleEn: 'Neurodivergent',
      titlePt: 'Neurodivergente',
      descEn: "Diagnosed and embraced. It's the reason I obsess deeply, switch contexts without losing thread, and find genuine excitement in problems most people avoid.",
      descPt: 'Diagnosticado e abraçado. É a razão pela qual eu me aprofundo obsessivamente, troco contexto sem perder o fio, e encontro empolgação genuína em problemas que a maioria evita.',
    },
    {
      titleEn: 'Scientific research',
      titlePt: 'Pesquisa científica',
      descEn: 'Published at VIII Simpósio de Iniciação Científica (UNIFEI), funded by CNPq and FAPEMIG. Comparative analysis of JavaScript vs WebAssembly performance using donated TV boxes as hardware. Score: 10/10.',
      descPt: 'Publicado no VIII Simpósio de Iniciação Científica (UNIFEI), financiado por CNPq e FAPEMIG. Análise comparativa de performance entre JavaScript e WebAssembly usando TV boxes doadas como hardware. Nota: 10/10.',
    },
    {
      titleEn: 'Hackathons & UNIFEI',
      titlePt: 'Hackathons & UNIFEI',
      descEn: 'Multiple hackathons and innovation competitions at Universidade Federal de Itajubá — including Startup Weekend, where rapid prototyping is the sport.',
      descPt: 'Múltiplos hackathons e competições de inovação na Universidade Federal de Itajubá — incluindo Startup Weekend, onde prototipagem rápida é o esporte.',
    },
    {
      titleEn: 'Culinary obsession',
      titlePt: 'Obsessão culinária',
      descEn: 'Cooking from scratch — bread, pastries, regional Minas Gerais cuisine. The same iterative instinct that ships software also shapes dough.',
      descPt: 'Cozinhando do zero — pão, doces, culinária regional mineira. O mesmo instinto iterativo que entrega software também molda massa.',
    },
  ];

  const photos = [
    {
      src: '/portfolio-photo-3-waffle.jpg',
      labelEn: 'Homemade waffle with chocolate ganache — cooking is another form of iteration',
      labelPt: 'Waffle artesanal com ganache de chocolate — cozinhar é outra forma de iteração',
    },
    {
      src: '/portfolio-photo-4-bread.jpg',
      labelEn: 'Bread from scratch — same obsession, different substrate',
      labelPt: 'Pão do zero — a mesma obsessão, outro substrato',
    },
    {
      src: '/portfolio-photo-5-startup-weekend.jpg',
      labelEn: 'Startup Weekend @ UNIFEI — building a smart community garden',
      labelPt: 'Startup Weekend @ UNIFEI — construindo uma horta comunitária inteligente',
    },
    {
      src: '/portfolio-photo-6-simposio-ic.jpg',
      labelEn: 'VIII Simpósio de Iniciação Científica · CNPq · FAPEMIG — JS vs WebAssembly · score: 10/10',
      labelPt: 'VIII Simpósio de Iniciação Científica · CNPq · FAPEMIG — JS vs WebAssembly · nota: 10/10',
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
          <p className="font-mono-dm text-xs uppercase tracking-[0.25em] text-primary mb-4">
            {t('The person behind the engineer', 'A pessoa por trás do engenheiro')}
          </p>
          <h2 className="font-display text-3xl md:text-5xl">
            {t('More than', 'Mais do que')}
            <br />
            <span className="italic text-muted-foreground">{t('code.', 'código.')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-secondary"
            >
              <img
                src={photo.src}
                alt={t(photo.labelEn, photo.labelPt)}
                className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-[1.07] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85" />
              <p className="absolute bottom-3 left-3 right-3 font-mono-dm text-[10px] leading-relaxed text-white/85">
                {t(photo.labelEn, photo.labelPt)}
              </p>
            </motion.div>
          ))}
        </div>

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
