import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { MessageSquare, AlertTriangle, TrendingDown, Droplets } from 'lucide-react';

const features = [
  {
    iconComponent: MessageSquare,
    titleEn: 'Conversational sensor access',
    titlePt: 'Acesso conversacional aos sensores',
    descEn: 'Ask anything in natural language. BIA queries the live database and responds with context — not just raw numbers.',
    descPt: 'Pergunte qualquer coisa em linguagem natural. A BIA consulta o banco ao vivo e responde com contexto — não só números crus.',
  },
  {
    iconComponent: AlertTriangle,
    titleEn: 'Peak detection & alerts',
    titlePt: 'Detecção de picos e alertas',
    descEn: 'Identifies anomalous spikes by hour, unit, and historical baseline — before the water bill lands.',
    descPt: 'Identifica picos anômalos por hora, unidade e baseline histórico — antes da conta de água chegar.',
  },
  {
    iconComponent: TrendingDown,
    titleEn: 'Bill optimization',
    titlePt: 'Otimização de contas',
    descEn: 'Analyzes consumption patterns and suggests concrete actions to reduce monthly costs — not generic tips.',
    descPt: 'Analisa padrões de consumo e sugere ações concretas para reduzir custos mensais — não dicas genéricas.',
  },
  {
    iconComponent: Droplets,
    titleEn: 'Silent leak detection',
    titlePt: 'Detecção de vazamentos silenciosos',
    descEn: 'Off-hours consumption analysis catches leaks humans never notice — the kind wasting thousands per month.',
    descPt: 'A análise de consumo fora de hora detecta vazamentos que humanos nunca percebem — do tipo que desperdiça milhares por mês.',
  },
];

const BiaSection = () => {
  const { t } = useI18n();

  return (
    <section id="bia" className="py-24 md:py-32 relative overflow-hidden">
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
                'BIA is the central AI agent wired directly into HiveGrid\'s sensor and reading database. She doesn\'t show dashboards. She talks to you. "Where did consumption spike last Tuesday at 3am?" She knows. "Which unit is silently leaking?" She knows that too.',
                'BIA é o agente central de IA conectada diretamente ao banco de sensores e leituras do HiveGrid. Ela não mostra dashboards. Ela conversa com você. "Onde o consumo disparou na terça passada às 3h?" Ela sabe. "Qual unidade está vazando silenciosamente?" Ela sabe isso também.'
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
                    className="p-4 rounded-lg bg-card border border-border"
                  >
                    <Icon className="w-4 h-4 text-primary mb-3" />
                    <p className="font-mono-dm text-xs text-foreground mb-2">{t(f.titleEn, f.titlePt)}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t(f.descEn, f.descPt)}</p>
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
