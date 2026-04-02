import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const PhotosSection = () => {
  const { t } = useI18n();

  const photos = [
    {
      src: '/portfolio-photo-1-atmos-kit.jpg',
      label: t(
        'Atmos — BLE sensor network · production kit · Araraquara, SP',
        'Atmos — rede de sensores BLE · kit de produção · Araraquara, SP'
      ),
    },
    {
      src: '/portfolio-photo-2-investor-delivery.jpg',
      label: t(
        'Product delivery to our investor partner',
        'Entrega do produto para nosso sócio investidor'
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-black/95">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono-dm text-xs uppercase tracking-[0.25em] text-white/30 mb-4">Behind the work</p>
          <h2 className="font-display text-3xl md:text-5xl text-white">
            {t('Hardware ships.', 'O hardware é entregue.')}
            <br />
            <span className="italic text-white/35">{t('Not slides.', 'Não slides.')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-secondary"
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-[1.07] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 font-mono-dm text-xs text-white/80 group-hover:text-white transition-colors duration-300">
                {photo.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotosSection;
