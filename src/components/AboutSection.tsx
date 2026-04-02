import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const hardSkills = [
  'AI & Machine Learning — LLM APIs (OpenAI, Anthropic, Gemini), LangChain, multi-agent orchestration, prompt engineering, context window optimization, supervised and unsupervised model training, Random Forest, Isolation Forest, KNN, SGDClassifier, incremental/online learning, computer vision, OCR pipelines, model serialization with joblib and pickle, data profiling, scikit-learn pipelines.',
  'Backend & APIs — Python, FastAPI, async/await, TypeScript, Node.js, REST API design, system architecture, JWT, RBAC, Nginx, middleware, Alembic, SQLModel, Pydantic.',
  'Databases & Queues — PostgreSQL, Neon, Redis, ARQ, DuckDB, async queues, job scheduling, session management.',
  'Cloud & Infrastructure — AWS Fargate, S3, ECR, API Gateway, SigV4, Docker, docker-compose, Railway, DigitalOcean, Vercel, ECR image management, presigned URLs, cold start optimization.',
  'Certifications — AWS Certified Cloud Practitioner.',
  'Embedded & IoT — ESP32, ESP32-CAM, nRF52840 (Seeed XIAO), Embedded C++, Arduino framework, BLE 5.0, MQTT, TinyGSM, SIM7670G 4G modem, deep sleep optimization, sensor fusion, firmware architecture.',
  'Data & Analytics — pandas, numpy, matplotlib, seaborn, plotly, Isolation Forest for anomaly detection, DuckDB, data cleaning pipelines, WebAssembly (WASM).',
  'WhatsApp & Integrations — Z-API, webhook design, session state management, multi-user flows, rate limit handling.',
  'C# — Unity game development, 2D/3D scripting, WinForms/WPF desktop applications, .NET console tools.',
];

const softSkills = [
  "Hyperfocus under complexity — when a hard problem clicks, I go deep and don't stop until it's solved. ADHD-driven, not discipline-driven. That's how entire pipeline architectures get redesigned overnight.",
  'Rapid context switching — same day: firmware debug at 7am, LLM architecture decision at noon, client meeting at 4pm. ADHD makes this natural rather than draining.',
  "Problem-first thinking — learned at Startup Weekend, reinforced every day since. Fall in love with the problem before touching the keyboard. Everything I've shipped started from a real pain, not a cool technology.",
  'Team coordination — at Controlar, I currently lead 7 people across embedded systems, AI, and backend. I unblock people rather than micromanage. The goal is to make the team move, not to be the one who moves.',
  'Stakeholder communication — translating technical decisions into language clients and managers actually understand. Done this at FlexSim, T&D Sustentável, Jockey Club, and Condomínio Saturno.',
  'Fast prototyping and validation — ship something real before overthinking. Both Rio enterprise clients were validated with working hardware prototypes in 30 days.',
  'Pattern recognition across domains — ADHD gives genuine cross-domain curiosity. I see connections between IoT hardware behavior, AI pipeline design, and product decisions that specialists in a single area tend to miss.',
  "Honest under pressure — I push back when something doesn't make technical sense, even with clients or managers. That's how you avoid building the wrong thing expensively.",
  'Scientific thinking — published research at VIII Simpósio de Iniciação Científica (UNIFEI), funded by CNPq and FAPEMIG. I treat engineering problems the same way: hypothesize, test, measure, iterate.',
];

const AboutSection = () => {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
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
                {lang === 'en' ? (
                  <>
                    I build things end-to-end — from ESP32 firmware to multi-agent AI pipelines running on AWS. Co-founder and lead engineer at{' '}
                    <a href="https://www.instagram.com/controlar.automacao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-75">
                      <strong>Controlar Automação Industrial</strong>
                    </a>
                    , where I coordinate a team of <strong>7 people</strong>. I also work as a Software Engineer at{' '}
                    <a href="https://www.instagram.com/experienceyourfuture?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-75">
                      <strong>EYF (Experience Your Future)</strong>
                    </a>{' '}
                    and{' '}
                    <a href="https://www.instagram.com/flexsimbrasil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-75">
                      <strong>Flexsim Brasil</strong>
                    </a>
                    , where I execute AI and software development work across both. SentrIA was born at EYF and is currently in homologation with enterprise clients.
                  </>
                ) : (
                  <>
                    Eu construo coisas do começo ao fim — desde firmware em ESP32 até pipelines de IA multi-agente rodando na AWS. Co-fundador e engenheiro principal na{' '}
                    <a href="https://www.instagram.com/controlar.automacao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-75">
                      <strong>Controlar Automação Industrial</strong>
                    </a>
                    , onde coordeno um time de <strong>7 pessoas</strong>. Também trabalho como Engenheiro de Software na{' '}
                    <a href="https://www.instagram.com/experienceyourfuture?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-75">
                      <strong>EYF (Experience Your Future)</strong>
                    </a>{' '}
                    e na{' '}
                    <a href="https://www.instagram.com/flexsimbrasil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-75">
                      <strong>Flexsim Brasil</strong>
                    </a>
                    , onde executo trabalho de IA e desenvolvimento de software nas duas. O SentrIA nasceu na EYF e está em homologação com clientes enterprise.
                  </>
                )}
              </p>
              <p>
                {t(
                  "I have ADHD, and honestly it shaped how I work more than any course or framework did. The hyperfocus is real — when something clicks, I go deep and don't stop. The context-switching is real too. Embedded C++ in the morning, LLM orchestration in the afternoon, product call at the end of the day. It's not discipline, it's just how I'm wired.",
                  'Tenho TDAH, e honestamente ele moldou mais a minha forma de trabalhar do que qualquer curso ou framework. O hiperfoco é real — quando algo encaixa, eu mergulho fundo e não paro. A troca de contexto também é real. C++ embarcado de manhã, orquestração de LLM de tarde, reunião de produto no final do dia. Não é disciplina, é só como eu sou.'
                )}
              </p>
              <p>
                {t(
                  "What I'm really in love with is the problem itself. That became clear at Startup Weekend — 54 hours to go from nothing to a product with software, hardware, and a pitch. No safety net, no time to overthink. You fall in love with the problem fast or you ship nothing. I've carried that instinct into everything since.",
                  'O que eu realmente amo é o problema em si. Isso ficou claro no Startup Weekend — 54 horas para sair do zero até um produto com software, hardware e pitch. Sem rede de segurança, sem tempo para pensar demais. Você se apaixona pelo problema rápido ou não entrega nada. Carrego esse instinto em tudo desde então.'
                )}
              </p>
              <p>
                {lang === 'en' ? (
                  <>
                    Completing my Computer Engineering degree at{' '}
                    <a href="https://www.instagram.com/unifei_oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-75">
                      <strong>Universidade Federal de Itajubá (UNIFEI)</strong>
                    </a>
                    . I've participated in multiple hackathons and startup competitions throughout — the thesis is the only thing left.
                  </>
                ) : (
                  <>
                    Completando minha graduação em Engenharia de Computação na{' '}
                    <a href="https://www.instagram.com/unifei_oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-75">
                      <strong>Universidade Federal de Itajubá (UNIFEI)</strong>
                    </a>
                    . Participei de vários hackathons e competições de startup ao longo do caminho — só falta o TCC.
                  </>
                )}
              </p>
              <p>
                {t(
                  "Outside of engineering: I cook seriously. Bread from scratch, regional Brazilian cuisine, experimenting with flavor the same way I experiment with architectures — until it's actually good.",
                  'Fora da engenharia: cozinho de verdade. Pão do zero, culinária regional brasileira, experimentando com sabores da mesma forma que experimento com arquiteturas — até ficar bom de verdade.'
                )}
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="font-mono-dm text-xs uppercase tracking-[0.25em] text-primary mb-6">Hard Skills</h3>
              <div className="space-y-0 border border-border rounded-xl overflow-hidden">
                {hardSkills.map((s) => (
                  <div key={s} className="border-b border-border last:border-b-0 px-4 py-3 bg-card/40 hover:bg-secondary/30 transition-colors">
                    <p className="text-sm leading-relaxed text-muted-foreground">{s}</p>
                  </div>
                ))}
                <div className="px-4 py-3 bg-card/40 hover:bg-secondary/30 transition-colors flex items-start justify-between gap-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{t('English', 'Inglês')}</p>
                  <span className="font-mono-dm text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {t('Advanced', 'Avançado')}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-mono-dm text-xs uppercase tracking-[0.25em] text-primary mb-6">Soft Skills</h3>
              <div className="space-y-0 border border-border rounded-xl overflow-hidden">
                {softSkills.map((s) => (
                  <div key={s} className="border-b border-border last:border-b-0 px-4 py-3 bg-card/40 hover:bg-secondary/30 transition-colors">
                    <p className="text-sm leading-relaxed text-muted-foreground">{s}</p>
                  </div>
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
