import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { Battery, MessageCircle, BarChart3, Wifi } from 'lucide-react';

const features = [
  { iconComponent: Battery, en: 'Years on a coin cell', pt: 'Anos com uma bateria de moeda' },
  { iconComponent: MessageCircle, en: 'Natural language queries', pt: 'Consultas em linguagem natural' },
  { iconComponent: BarChart3, en: 'On-demand chart generation', pt: 'Geração de gráficos sob demanda' },
  { iconComponent: Wifi, en: 'Wireless mesh, no infrastructure', pt: 'Mesh sem fio, sem infraestrutura' },
];

const EvaSection = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono-dm text-xs uppercase tracking-[0.25em] text-primary mb-4"
            >
              Atmos · Temperature Intelligence
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-5xl mb-6"
            >
              {t('Meet E.VA —', 'Conheça a E.VA —')}
              <br />
              {t('your sensors run', 'seus sensores rodam')}
              <br />
              <span className="italic text-muted-foreground">{t('for years. And talk.', 'por anos. E conversam.')}</span>
            </motion.h2>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {features.map((f, i) => {
                const Icon = f.iconComponent;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                  >
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-mono-dm text-xs text-foreground">{t(f.en, f.pt)}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full border border-primary/10 animate-spin" style={{ animationDuration: '25s' }} />
              <div className="absolute w-40 h-40 rounded-full border border-primary/15 animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }} />
              <div className="absolute w-24 h-24 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '12s' }} />
              <div className="absolute w-3 h-3 rounded-full bg-primary/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaSection;
