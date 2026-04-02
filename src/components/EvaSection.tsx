import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { Battery, MessageCircle, BarChart3, Wifi } from 'lucide-react';

const features = [
  {
    iconComponent: Battery,
    titleEn: 'Years on a coin cell',
    titlePt: 'Anos com uma bateria moeda',
    descEn: 'nRF52840 in deep sleep at ~5µA. The sensor runs for 2+ years on a single CR2032 — no wiring, no recharging.',
    descPt: 'nRF52840 em deep sleep a ~5µA. O sensor roda por mais de 2 anos com uma única CR2032 — sem fios, sem recarga.',
  },
  {
    iconComponent: MessageCircle,
    titleEn: 'Natural language queries',
    titlePt: 'Consultas em linguagem natural',
    descEn: 'Ask E.VA about any sensor, any zone, any time range — she queries the database, reasons over the data, and explains what she finds.',
    descPt: 'Pergunte para a E.VA sobre qualquer sensor, qualquer zona, qualquer período — ela consulta o banco, raciocina sobre os dados e explica o que encontra.',
  },
  {
    iconComponent: BarChart3,
    titleEn: 'Model routing & chart generation',
    titlePt: 'Roteamento de modelos e geração de gráficos',
    descEn: 'E.VA can switch models depending on the task and use open-source models behind the scenes, while still generating charts and analytical outputs on demand.',
    descPt: 'A E.VA pode trocar de modelo dependendo da tarefa e usar modelos open source por trás, enquanto ainda gera gráficos e saídas analíticas sob demanda.',
  },
  {
    iconComponent: Wifi,
    titleEn: 'Wireless mesh, no infrastructure',
    titlePt: 'Mesh sem fio, sem infraestrutura',
    descEn: 'BLE 5.0 — sensors talk to a central hub over the air. No cables, no Wi-Fi required at the sensor level.',
    descPt: 'BLE 5.0 — sensores conversam com um hub central pelo ar. Sem cabos, sem Wi-Fi no nível do sensor.',
  },
];

const EvaSection = () => {
  const { t } = useI18n();

  return (
    <section id="eva" className="py-24 md:py-32 relative overflow-hidden">
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body font-light text-sm text-muted-foreground leading-relaxed mb-10"
            >
              {t(
                "E.VA is an LLM-based AI agent for Atmos, built for temperature intelligence and operational analysis. She isn't embedded in the sensor itself — she sits on top of the sensor network, connected to the full history of temperature, humidity, anomalies, and trends. Ask her about last night's cold zone. Ask her to compare shifts, explain anomalies, or generate analytical outputs. She can switch models depending on the task and also use open-source models behind the scenes.",
                'E.VA é um agente de IA baseado em LLM para o Atmos, construído para inteligência de temperatura e análise operacional. Ela não fica embarcada no sensor em si — ela opera por cima da rede de sensores, conectada ao histórico completo de temperatura, umidade, anomalias e tendências. Pergunte sobre a zona fria da noite passada. Peça comparações entre turnos, explicações de anomalias ou saídas analíticas. Ela pode trocar de modelo dependendo da tarefa e também usar modelos open source por trás.'
              )}
            </motion.p>

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
