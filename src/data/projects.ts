export interface Project {
  id: string;
  name: string;
  number: string;
  badgeText: string;
  badgeColor: string;
  typeEn: string;
  typePt: string;
  descEn: string;
  descPt: string;
  imageSrc?: string;
  imageAlt?: string;
  stats: { value: string; labelEn: string; labelPt: string }[];
  quoteEn: string;
  quotePt: string;
  meta?: { label: string; valueEn: string; valuePt: string }[];
  stackTags: string[];
}

export const projects: Project[] = [
  {
    id: 'hivegrid',
    name: 'HiveGrid',
    number: '01',
    badgeText: 'Live · 2 Clients',
    badgeColor: 'bg-primary/15 text-primary',
    typeEn: 'Industrial IoT SaaS · Water Intelligence · Computer Vision',
    typePt: 'SaaS IoT Industrial · Inteligência Hídrica · Visão Computacional',
    descEn: 'A multi-tenant platform that makes any water meter intelligent — from 1970s analog dials to modern digital displays. An ESP32-CAM points at the meter. Gemini Vision reads it. No wiring, no replacement, no specialist required. It works on every meter in Brazil precisely because we use an LLM instead of brittle OCR templates: the intelligence adapts to whatever it sees. Readings land automatically on a dashboard and WhatsApp, with full traceability — timestamp, photo, operator, deviation flag. Deployed at Jockey Club Rio de Janeiro and Condomínio Saturno, both signed within 30 days of on-site field validation.',
    descPt: 'Uma plataforma multi-tenant que torna qualquer hidrômetro inteligente — de dials analógicos dos anos 70 a displays digitais modernos. Um ESP32-CAM aponta para o hidrômetro. Gemini Vision lê. Sem fiação, sem substituição, sem especialista. Funciona em qualquer hidrômetro do Brasil porque usamos um LLM em vez de templates frágeis de OCR: a inteligência se adapta ao que vê. Leituras chegam automaticamente no dashboard e no WhatsApp, com rastreabilidade total — timestamp, foto, operador, flag de desvio. Implantado no Jockey Club Rio de Janeiro e Condomínio Saturno, ambos assinados em 30 dias de validação em campo.',
    stats: [
      { value: '30d', labelEn: 'From field test to signed contract', labelPt: 'Do teste em campo ao contrato assinado' },
      { value: '2', labelEn: 'Enterprise clients — Rio de Janeiro', labelPt: 'Clientes enterprise — Rio de Janeiro' },
      { value: '100%', labelEn: 'Automated — zero manual reading', labelPt: 'Automatizado — zero leitura manual' },
      { value: '~30%', labelEn: 'Estimated waste reduction via early leak detection', labelPt: 'Redução estimada de desperdício via detecção precoce de vazamentos' },
    ],
    quoteEn: '"Works on every meter in Brazil — from 1970s analog dials to modern digital displays — because the intelligence is in the LLM, not the hardware."',
    quotePt: '"Funciona em qualquer hidrômetro do Brasil — de dials analógicos dos anos 70 a displays digitais modernos — porque a inteligência está no LLM, não no hardware."',
    meta: [
      { label: 'Clients', valueEn: 'Jockey Club RJ · Condomínio Saturno RJ', valuePt: 'Jockey Club RJ · Condomínio Saturno RJ' },
      { label: 'Hardware', valueEn: 'ESP32-CAM · ESP32-C3 · BLE · SIM7670G 4G modem', valuePt: 'ESP32-CAM · ESP32-C3 · BLE · modem 4G SIM7670G' },
      { label: 'AI', valueEn: 'Gemini Vision · LLM-based universal OCR', valuePt: 'Gemini Vision · OCR universal baseado em LLM' },
    ],
    stackTags: ['FastAPI', 'TypeScript', 'Gemini Vision', 'Redis', 'Z-API', 'ESP32', 'PostgreSQL'],
  },
  {
    id: 'atmos',
    name: 'Atmos',
    number: '02',
    badgeText: 'Live',
    badgeColor: 'bg-primary/15 text-primary',
    typeEn: 'Wireless BLE Sensor Network · Industrial Temperature Monitoring',
    typePt: 'Rede de Sensores BLE Sem Fio · Monitoramento Industrial de Temperatura',
    descEn: 'A wireless industrial sensor network that runs for years on a coin cell battery — no wiring, no infrastructure, no maintenance. Each Atmos Wire sensor uses an nRF52840 chip in deep sleep, consuming microamps between readings. A central ESP32-C3 hub aggregates the entire network and pushes everything to HiveGrid via MQTT. But the surprising part is what happens after the data arrives: E.VA — the embedded AI agent — is connected directly to the sensor database and answers questions in natural language. "Which zone ran hottest last night?" She knows. And because SentrIA\'s code-generation engine sits underneath, E.VA doesn\'t just describe data — she writes and executes Python on the fly, producing charts, correlations, and anomaly reports on demand.',
    descPt: 'Uma rede de sensores industriais sem fio que funciona por anos com uma bateria de moeda — sem cabeamento, sem infraestrutura, sem manutenção. Cada sensor Atmos Wire usa um chip nRF52840 em deep sleep, consumindo microampères entre leituras. Um hub central ESP32-C3 agrega toda a rede e envia tudo ao HiveGrid via MQTT. Mas a parte surpreendente é o que acontece depois que os dados chegam: E.VA — o agente de IA embarcado — está conectada diretamente ao banco de dados de sensores e responde perguntas em linguagem natural. "Qual zona ficou mais quente ontem à noite?" Ela sabe. E porque o motor de geração de código do SentrIA está por baixo, E.VA não só descreve dados — ela escreve e executa Python na hora, gerando gráficos, correlações e relatórios de anomalias sob demanda.',
    stats: [
      { value: '2+y', labelEn: 'Battery life on a single coin cell', labelPt: 'Vida útil em uma única bateria moeda' },
      { value: '~5µA', labelEn: 'Deep sleep current — nRF52840', labelPt: 'Corrente em deep sleep — nRF52840' },
      { value: 'BLE 5', labelEn: 'Wireless, no infrastructure needed', labelPt: 'Sem fio, sem infraestrutura' },
      { value: 'E.VA', labelEn: 'AI agent — talk to your sensors', labelPt: 'Agente de IA — converse com seus sensores' },
    ],
    quoteEn: '"A sensor that runs for years on a coin cell and connects to an LLM that generates charts for you on demand — that\'s not a research project, it\'s a product we\'re shipping."',
    quotePt: '"Um sensor que funciona por anos com uma bateria de moeda e se conecta a um LLM que gera gráficos sob demanda — isso não é projeto de pesquisa, é produto sendo entregue."',
    meta: [
      { label: 'Chip', valueEn: 'nRF52840 (Seeed XIAO) · ESP32-C3 central hub', valuePt: 'nRF52840 (Seeed XIAO) · hub central ESP32-C3' },
      { label: 'Protocol', valueEn: 'BLE 5.0 · MQTT · HiveGrid cloud', valuePt: 'BLE 5.0 · MQTT · cloud HiveGrid' },
      { label: 'AI Agent', valueEn: 'E.VA — conversational sensor intelligence', valuePt: 'E.VA — inteligência conversacional para sensores' },
    ],
    stackTags: ['C++ (Arduino)', 'BLE 5.0', 'MQTT', 'nRF52840', 'ESP32-C3', 'FastAPI', 'LLM Agent'],
  },
  {
    id: 'td-edge',
    name: 'TD-Edge',
    number: '03',
    badgeText: 'Launching · 70 Paid Users',
    badgeColor: 'bg-blue-500/15 text-blue-400',
    typeEn: 'HiveGrid Sub-product · Field Operations · AI-Generated Frontend',
    typePt: 'Sub-produto HiveGrid · Operações de Campo · Frontend Gerado por IA',
    descEn: 'Built for T&D Sustentável — a water utility operator with field teams spread across multiple regions. Operators photograph meters via WhatsApp. The system reads, validates and logs each reading automatically — no app to install, no training. But the standout feature is one that changed how the client thinks about software: a built-in AI agent that generates and modifies the entire frontend on demand. The client types a request — "make the dashboard use our brand colors and add a weekly trend chart" — and the interface updates live, using an LLM to write and apply the changes in real time. During homologation, this capability alone reduced frontend requests to the development team by 60%. The project is not closed — it remains active and is scheduled to start in one month with 70 paying users.',
    descPt: 'Construído para T&D Sustentável — operadora de água com equipes em campo espalhadas por múltiplas regiões. Operadores fotografam hidrômetros via WhatsApp. O sistema lê, valida e registra cada leitura automaticamente — sem app para instalar, sem treinamento. Mas o destaque é o que mudou a forma como o cliente pensa sobre software: um agente de IA integrado que gera e modifica o frontend inteiro sob demanda. O cliente digita um pedido — "coloca nossas cores de marca e adiciona um gráfico semanal" — e a interface atualiza ao vivo, com o LLM escrevendo e aplicando as mudanças em tempo real. Durante a homologação, essa capacidade sozinha reduziu as requisições de frontend ao time de desenvolvimento em 60%. O projeto não está encerrado — ele segue ativo e está previsto para iniciar em um mês com 70 usuários pagantes.',
    stats: [
      { value: '60%', labelEn: 'Fewer frontend requests to the dev team during homologation', labelPt: 'Menos pedidos de frontend ao time durante a homologação' },
      { value: '70', labelEn: 'Paying users expected at launch in one month', labelPt: 'Usuários pagantes previstos no lançamento em um mês' },
      { value: '0', labelEn: 'Apps to install — runs entirely via WhatsApp', labelPt: 'Apps para instalar — roda totalmente via WhatsApp' },
      { value: 'AI', labelEn: 'LLM generates and applies UI changes on demand', labelPt: 'LLM gera e aplica mudanças de UI sob demanda' },
    ],
    quoteEn: '"The client stopped calling the dev team to change a chart color. They just asked the AI. That\'s what software should feel like."',
    quotePt: '"O cliente parou de ligar para o time de desenvolvimento para mudar a cor de um gráfico. Eles só pediram para a IA. É assim que software deveria ser."',
    meta: [
      { label: 'Client', valueEn: 'T&D Sustentável', valuePt: 'T&D Sustentável' },
      { label: 'Interface', valueEn: 'WhatsApp + AI-generated web dashboard', valuePt: 'WhatsApp + dashboard web gerado por IA' },
      { label: 'AI', valueEn: 'Gemini Vision · LLM frontend generation agent', valuePt: 'Gemini Vision · agente de geração de frontend com LLM' },
    ],
    stackTags: ['FastAPI', 'Gemini Vision', 'Z-API', 'LLM UI Agent', 'Three.js', 'HiveGrid'],
  },
  {
    id: 'sentria',
    name: 'SentrIA',
    number: '04',
    badgeText: 'Staging · Enterprise Clients',
    badgeColor: 'bg-amber-500/15 text-amber-400',
    typeEn: 'AI Data Analysis Platform · Proprietary Agent Framework · Enterprise Connectors',
    typePt: 'Plataforma de Análise de Dados IA · Framework Proprietário de Agentes · Conectores Enterprise',
    descEn: 'Ask a question. Get a verified, executable chart. No SQL. No Python. No analyst on standby. SentrIA profiles any dataset — CSV, Excel, SQLite — and routes the question through a proprietary multi-agent pipeline: a Planner reasons about the goal, a Codegen agent writes Python, and an Executor runs it in a fully isolated AWS Fargate container with up to 16 vCPUs and 120 GB of RAM. That\'s enough to process gigabyte-scale industrial datasets in seconds. The pipeline architecture was one of the core engineering challenges: early versions consumed hundreds of thousands of tokens per analysis. Through a complete redesign of the context propagation system — where each agent receives only what it actually needs, not the full trace — we drove output token consumption down to approximately 15,000 per run. Same intelligence, a fraction of the cost. Currently in homologation with enterprise clients. Upcoming: connectors for terabyte-scale databases — BigQuery, Databricks, Snowflake, Redshift — so clients can query their entire data warehouse through natural language.',
    descPt: 'Faça uma pergunta. Receba um gráfico verificado e executável. Sem SQL. Sem Python. Sem analista de plantão. O SentrIA perfila qualquer dataset — CSV, Excel, SQLite — e roteia a pergunta por um pipeline multi-agente proprietário: um Planner raciocina sobre o objetivo, um agente Codegen escreve Python, e um Executor roda em um container AWS Fargate totalmente isolado com até 16 vCPUs e 120 GB de RAM. Isso é suficiente para processar datasets industriais em gigabytes em segundos. A arquitetura do pipeline foi um dos principais desafios de engenharia: versões iniciais consumiam centenas de milhares de tokens por análise. Com um redesign completo do sistema de propagação de contexto — onde cada agente recebe apenas o que realmente precisa, e não o traço completo — reduzimos o consumo de tokens de saída para aproximadamente 15.000 por execução. A mesma inteligência, por uma fração do custo. Atualmente em homologação com clientes enterprise. Em breve: conectores para bancos de dados em terabytes — BigQuery, Databricks, Snowflake, Redshift — para que clientes consultem todo o data warehouse em linguagem natural.',
    stats: [
      { value: '16', labelEn: 'vCPUs per isolated analysis container', labelPt: 'vCPUs por container isolado de análise' },
      { value: '120GB', labelEn: 'RAM — handles gigabyte-scale industrial data', labelPt: 'RAM — lida com dados industriais em gigabytes' },
      { value: '~95%', labelEn: 'Token reduction vs. initial pipeline architecture', labelPt: 'Redução de tokens vs. arquitetura inicial do pipeline' },
      { value: 'TB', labelEn: 'Scale — connectors for BigQuery, Databricks incoming', labelPt: 'Escala — conectores BigQuery, Databricks a caminho' },
    ],
    quoteEn: '"Code is the most flexible output an LLM can produce. With code, you can make it do anything — and that\'s exactly the insight SentrIA is built on."',
    quotePt: '"Código é a saída mais flexível que um LLM pode produzir. Com código, você pode fazer qualquer coisa — e é exatamente essa a ideia sobre a qual o SentrIA foi construído."',
    meta: [
      { label: 'Pipeline', valueEn: 'Planner → Codegen → Executor (isolated Fargate)', valuePt: 'Planner → Codegen → Executor (Fargate isolado)' },
      { label: 'Infra', valueEn: 'AWS Fargate · S3 · ECR · API Gateway', valuePt: 'AWS Fargate · S3 · ECR · API Gateway' },
      { label: 'Upcoming connectors', valueEn: 'BigQuery · Databricks · Snowflake · Redshift · TOTVS', valuePt: 'BigQuery · Databricks · Snowflake · Redshift · TOTVS' },
    ],
    stackTags: ['Python', 'LangChain', 'AWS Fargate', 'FastAPI', 'DuckDB', 'OpenAI API', 'TypeScript'],
  },
  {
    id: 'recruitment-ai',
    name: 'Recruitment AI',
    number: '05',
    badgeText: 'Live',
    badgeColor: 'bg-primary/15 text-primary',
    typeEn: 'Intelligent Hiring Platform · Real-time Salary Intelligence',
    typePt: 'Plataforma Inteligente de Recrutamento · Inteligência Salarial em Tempo Real',
    descEn: 'The same proprietary agent framework that powers SentrIA — applied to hiring. Recruiters build custom application forms, the system profiles and ranks candidates automatically, and a dedicated web-scraping agent crawls job boards continuously to deliver real-time salary benchmarks for any role in Brazil. Two products. One framework. The decision to build a generalized architecture instead of a one-off pipeline meant the second product cost a fraction of the first to build — and future products will cost even less.',
    descPt: 'O mesmo framework proprietário de agentes que alimenta o SentrIA — aplicado ao recrutamento. Recrutadores montam formulários personalizados, o sistema perfila e ranqueia candidatos automaticamente, e um agente de web scraping dedicado varre vagas continuamente para entregar benchmarks de salário em tempo real para qualquer cargo no Brasil. Dois produtos. Um framework. A decisão de construir uma arquitetura generalizada em vez de um pipeline pontual fez o segundo produto custar uma fração do primeiro — e os próximos custarão ainda menos.',
    stats: [],
    quoteEn: '"The best architectures compound. The same framework that analyzes industrial datasets in SentrIA now profiles candidates and benchmarks salaries — with minimal additional work."',
    quotePt: '"As melhores arquiteturas se acumulam. O mesmo framework que analisa datasets industriais no SentrIA agora perfila candidatos e gera benchmarks salariais — com trabalho adicional mínimo."',
    meta: [
      { label: 'Agents', valueEn: 'Web Scraper · Profile Analyzer · Ranking Engine', valuePt: 'Web Scraper · Profile Analyzer · Ranking Engine' },
      { label: 'Market', valueEn: 'Real-time salary data · Full Brazilian job market', valuePt: 'Dados salariais em tempo real · mercado brasileiro completo' },
    ],
    stackTags: ['Python', 'LangChain', 'Web scraping', 'FastAPI', 'LLM APIs'],
  },
  {
    id: 'deliveryroute',
    name: 'DeliveryRoute AI',
    number: '06',
    badgeText: 'Built',
    badgeColor: 'bg-primary/15 text-primary',
    typeEn: 'WhatsApp AI Agent · Route Optimization · Gig Economy',
    typePt: 'Agente de IA WhatsApp · Otimização de Rotas · Gig Economy',
    descEn: "A WhatsApp-native AI agent that helps delivery drivers find the most efficient route for multiple stops — just by having a conversation. No app, no GPS subscription, no training. A driver lists their deliveries in a message, and the agent reasons through the optimal sequence, factoring in distance, traffic patterns, and fuel efficiency. Built for Brazilian gig workers who run 10–20 deliveries per shift and lose real money to inefficient routing. The interface is WhatsApp because that's what they already use. The intelligence is an LLM because rigid routing algorithms break on messy real-world data.",
    descPt: 'Um agente de IA nativo no WhatsApp que ajuda entregadores a encontrar a rota mais eficiente para múltiplas paradas — só conversando. Sem app, sem assinatura de GPS, sem treinamento. O entregador lista suas entregas numa mensagem, e o agente raciocina a sequência ideal, considerando distância, padrões de tráfego e eficiência de combustível. Construído para trabalhadores brasileiros de gig economy que fazem 10–20 entregas por turno e perdem dinheiro real com rotas ineficientes. A interface é o WhatsApp porque é isso que eles já usam. A inteligência é um LLM porque algoritmos rígidos de roteamento quebram com dados confusos do mundo real.',
    stats: [
      { value: '0', labelEn: 'New apps to install — runs on WhatsApp', labelPt: 'Novos apps para instalar — roda no WhatsApp' },
      { value: '10-20', labelEn: 'Stops optimized per conversation', labelPt: 'Paradas otimizadas por conversa' },
      { value: 'Fuel', labelEn: 'Real savings for gig workers per shift', labelPt: 'Economia real para entregadores por turno' },
    ],
    quoteEn: '"The best interface for a delivery driver isn\'t a new app. It\'s the app they already have open all day."',
    quotePt: '"A melhor interface para um entregador não é um app novo. É o app que ele já tem aberto o dia todo."',
    meta: [
      { label: 'Interface', valueEn: 'WhatsApp (Z-API) — zero friction adoption', valuePt: 'WhatsApp (Z-API) — adoção sem fricção' },
      { label: 'Target', valueEn: 'Brazilian gig delivery workers — iFood, Rappi, etc.', valuePt: 'Entregadores brasileiros de gig economy — iFood, Rappi, etc.' },
    ],
    stackTags: ['Python', 'LLM Agent', 'Z-API', 'Route optimization', 'WhatsApp'],
  },
  {
    id: 'izibar',
    name: 'IziBar',
    number: '07',
    badgeText: 'Real Clients',
    badgeColor: 'bg-primary/15 text-primary',
    typeEn: 'Event Operations Platform · Mobile-first Frontend · TypeScript Backend',
    typePt: 'Plataforma de Operações de Eventos · Frontend mobile-first · Backend em TypeScript',
    descEn: 'A full event-operations system built for IziBar, a company that hired me to work across both frontend and backend in TypeScript. The product started as an event organization platform, but the real value was operational: the entire event could be managed through the app, from discovery and menu flow to the purchase experience inside the venue. This wasn\'t a portfolio concept or internal prototype. The product reached real clients and was used in actual event environments.',
    descPt: 'Um sistema completo de operações de eventos construído para a IziBar, uma empresa que me contratou para trabalhar tanto no frontend quanto no backend em TypeScript. O produto começou como uma plataforma de organização de eventos, mas o valor real era operacional: o evento inteiro podia ser gerenciado pelo app, da descoberta e fluxo de cardápio até a experiência de compra dentro do local. Isso não era conceito de portfólio nem protótipo interno. O produto chegou a clientes reais e foi usado em ambientes reais de evento.',
    imageSrc: '/izibar.png',
    imageAlt: 'IziBar app screenshots showing event flow and in-app menu',
    stats: [],
    quoteEn: '"What made IziBar interesting was that the software wasn\'t just marketing for the event. It helped run the event itself."',
    quotePt: '"O que tornou o IziBar interessante foi que o software não era só marketing para o evento. Ele ajudava a rodar o evento em si."',
    meta: [
      { label: 'Role', valueEn: 'Frontend and backend engineer', valuePt: 'Engenheiro de frontend e backend' },
      { label: 'Stack', valueEn: 'TypeScript across product development', valuePt: 'TypeScript em todo o desenvolvimento do produto' },
      { label: 'Focus', valueEn: 'Event organization, menu flow and operational experience', valuePt: 'Organização de eventos, fluxo de cardápio e experiência operacional' },
    ],
    stackTags: ['TypeScript', 'Frontend', 'Backend', 'Mobile-first UI', 'Real clients', 'Events'],
  },
];
