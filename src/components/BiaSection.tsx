import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { MessageSquare, AlertTriangle, TrendingDown, Droplets } from 'lucide-react';

const features = [
  { iconComponent: MessageSquare, en: 'Conversational sensor access', pt: 'Acesso conversacional aos sensores' },
  { iconComponent: AlertTriangle, en: 'Peak detection & alerts', pt: 'Detecção de picos e alertas' },
  { iconComponent: TrendingDown, en: 'Bill optimization', pt: 'Otimização de contas' },
  { iconComponent: Droplets, en: 'Silent leak detection', pt: 'Detecção de vazamentos silenciosos' },
];

const BiaSection = () => {
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
              HiveGrid · Water Intelligence
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-5xl mb-6"
            >
              {t('Meet BIA —', 'Conheça a BIA —')}
              <br />
              {t('your meters', 'seus hidrômetros')}
              <br />
              <span className="italic text-muted-foreground">{t('have a voice.', 'têm voz.')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body font-light text-sm text-muted-foreground leading-relaxed mb-10"
            >
              {t(
                "BIA is the central AI agent wired directly into HiveGrid's sensor database. She doesn't show dashboards. She talks to you. \"Where did consumption spike last Tuesday at 3am?\" She knows.",
                'BIA é o agente central de IA conectada diretamente ao banco de dados de sensores do HiveGrid. Ela não mostra dashboards. Ela conversa com você. "Onde o consumo disparou na terça passada às 3h?" Ela sabe.'
              )}
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
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

          {/* Abstract visual placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-primary/10 flex items-center justify-center relative">
              <div className="w-48 h-48 rounded-full border border-primary/15 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute w-32 h-32 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              <div className="absolute w-4 h-4 rounded-full bg-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiaSection;
