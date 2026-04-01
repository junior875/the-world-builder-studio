import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const PhotosSection = () => {
  const { t } = useI18n();

  const photos = [
    {
      label: t(
        'Atmos — BLE sensor network · production kit · Araraquara, SP',
        'Atmos — rede de sensores BLE · kit de produção · Araraquara, SP'
      ),
    },
    {
      label: t(
        'Controlar team · 7 people · shipping hardware to clients',
        'Time Controlar · 7 pessoas · entregando hardware para clientes'
      ),
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
            {t('Hardware ships.', 'O hardware é entregue.')}
            <br />
            <span className="italic text-muted-foreground">{t('Not slides.', 'Não slides.')}</span>
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
              className="group relative aspect-[3/4] bg-secondary rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono-dm text-xs">
                {t('Photo placeholder', 'Placeholder de foto')}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 font-mono-dm text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
