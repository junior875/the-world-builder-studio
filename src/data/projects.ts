export interface Project {
  id: string;
  badgeText: string;
  badgeColor: string;
  typeEn: string;
  typePt: string;
  descEn: string;
  descPt: string;
  stats: { label: string; value: string }[];
  quoteEn: string;
  quotePt: string;
  stackTags: string[];
}

export const projects: Project[] = [
  {
    id: 'hivegrid',
    badgeText: 'Live · 2 Clients',
    badgeColor: 'bg-primary/15 text-primary',
    typeEn: 'Industrial IoT SaaS · Water Intelligence · Computer Vision',
    typePt: 'SaaS IoT Industrial · Inteligência Hídrica · Visão Computacional',
    descEn: 'A multi-tenant platform that makes any water meter intelligent — from 1970s analog dials to modern digital displays. An ESP32-CAM points at the meter. Gemini Vision reads it. No wiring, no replacement, no specialist required. It works on every meter in Brazil precisely because we use an LLM instead of brittle OCR templates.',
    descPt: 'Uma plataforma multi-tenant que torna qualquer hidrômetro inteligente — de dials analógicos dos anos 70 a displays digitais modernos. Um ESP32-CAM aponta para o hidrômetro. Gemini Vision lê. Sem fiação, sem substituição, sem especialista. Funciona em qualquer hidrômetro do Brasil porque usamos um LLM em vez de templates frágeis de OCR.',
    stats: [
      { value: '30d', label: 'Field test to signed contract' },
      { value: '2', label: 'Enterprise clients RJ' },
      { value: '100%', label: 'Zero manual reading' },
      { value: '~30%', label: 'Waste reduction via leak detection' },
    ],
    quoteEn: '"Works on every meter in Brazil — because the intelligence is in the LLM, not the hardware."',
    quotePt: '"Funciona em qualquer hidrômetro do Brasil — porque a inteligência está no LLM, não no hardware."',
    stackTags: ['FastAPI', 'TypeScript', 'Gemini Vision', 'Redis', 'Z-API', 'ESP32', 'PostgreSQL'],
  },
  {
    id: 'atmos',
    badgeText: 'Live',
    badgeColor: 'bg-primary/15 text-primary',
    typeEn: 'Wireless BLE Sensor Network · Industrial Temperature Monitoring',
    typePt: 'Rede de Sensores BLE Sem Fio · Monitoramento Industrial de Temperatura',
    descEn: 'A wireless industrial sensor network that runs for years on a coin cell battery — no wiring, no infrastructure, no maintenance. Each Atmos Wire sensor uses an nRF52840 chip in deep sleep, consuming ~5µA between readings. A central ESP32-C3 hub aggregates the entire network via BLE 5.0 and pushes everything to HiveGrid via MQTT.',
    descPt: 'Uma rede de sensores industriais sem fio que funciona por anos com uma bateria de moeda — sem cabeamento, sem infraestrutura, sem manutenção. Cada sensor Atmos Wire usa um chip nRF52840 em deep sleep, consumindo ~5µA entre leituras. Um hub central ESP32-C3 agrega toda a rede via BLE 5.0 e envia tudo ao HiveGrid via MQTT.',
    stats: [
      { value: '2+y', label: 'Battery life on a single coin cell' },
      { value: '~5µA', label: 'Deep sleep current nRF52840' },
      { value: 'BLE 5', label: 'No infrastructure needed' },
      { value: 'E.VA', label: 'AI agent — talk to your sensors' },
    ],
    quoteEn: '"A sensor that runs for years on a coin cell and connects to an LLM that generates charts for you on demand."',
    quotePt: '"Um sensor que funciona por anos com uma bateria de moeda e se conecta a um LLM que gera gráficos sob demanda."',
    stackTags: ['C++ (Arduino)', 'BLE 5.0', 'MQTT', 'nRF52840', 'ESP32-C3', 'FastAPI', 'LLM Agent'],
  },
  {
    id: 'td-edge',
    badgeText: 'Closing',
    badgeColor: 'bg-blue-500/15 text-blue-400',
    typeEn: 'HiveGrid Sub-product · Field Operations · AI-Generated Frontend',
    typePt: 'Sub-produto HiveGrid · Operações de Campo · Frontend Gerado por IA',
    descEn: 'Built for T&D Sustentável — a water utility operator with field teams spread across multiple regions. Operators photograph meters via WhatsApp. The system reads, validates and logs each reading automatically. The standout feature: a built-in AI agent that generates and modifies the entire frontend on demand.',
    descPt: 'Construído para T&D Sustentável — operadora de água com equipes em campo espalhadas por múltiplas regiões. Operadores fotografam hidrômetros via WhatsApp. O sistema lê, valida e registra cada leitura automaticamente. O destaque: um agente de IA integrado que gera e modifica o frontend inteiro sob demanda.',
    stats: [
      { value: '60%', label: 'Fewer frontend requests' },
      { value: '0', label: 'Apps to install' },
      { value: 'AI', label: 'LLM generates UI changes on demand' },
    ],
    quoteEn: '"The client stopped calling the dev team to change a chart color. They just asked the AI."',
    quotePt: '"O cliente parou de ligar pro time de dev pra mudar cor de gráfico. Só pediu pra IA."',
    stackTags: ['FastAPI', 'Gemini Vision', 'Z-API', 'LLM UI Agent', 'Three.js', 'HiveGrid'],
  },
  {
    id: 'sentria',
    badgeText: 'Staging · Enterprise',
    badgeColor: 'bg-amber-500/15 text-amber-400',
    typeEn: 'AI Data Analysis Platform · Proprietary Agent Framework · Enterprise Connectors',
    typePt: 'Plataforma de Análise de Dados IA · Framework Proprietário de Agentes · Conectores Enterprise',
    descEn: 'Ask a question. Get a verified, executable chart. No SQL. No Python. No analyst on standby. SentrIA profiles any dataset and routes the question through a proprietary multi-agent pipeline: a Planner reasons about the goal, a Codegen agent writes Python, and an Executor runs it in a fully isolated AWS Fargate container with up to 16 vCPUs and 120 GB of RAM.',
    descPt: 'Faça uma pergunta. Receba um gráfico verificado e executável. Sem SQL. Sem Python. Sem analista de plantão. O SentrIA perfila qualquer dataset e roteia a pergunta por um pipeline multi-agente proprietário: um Planner raciocina sobre o objetivo, um agente Codegen escreve Python, e um Executor roda em um container AWS Fargate totalmente isolado.',
    stats: [
      { value: '16', label: 'vCPUs per isolated container' },
      { value: '120GB', label: 'RAM handles gigabyte-scale data' },
      { value: '~95%', label: 'Token reduction vs initial arch' },
      { value: 'TB', label: 'BigQuery · Databricks incoming' },
    ],
    quoteEn: '"Code is the most flexible output an LLM can produce. With code, you can make it do anything."',
    quotePt: '"Código é a saída mais flexível que um LLM pode produzir. Com código, você faz qualquer coisa."',
    stackTags: ['Python', 'LangChain', 'AWS Fargate', 'FastAPI', 'DuckDB', 'OpenAI API', 'TypeScript'],
  },
  {
    id: 'recruitment-ai',
    badgeText: 'Live',
    badgeColor: 'bg-primary/15 text-primary',
    typeEn: 'Intelligent Hiring Platform · Real-time Salary Intelligence',
    typePt: 'Plataforma Inteligente de Recrutamento · Inteligência Salarial em Tempo Real',
    descEn: 'The same proprietary agent framework that powers SentrIA — applied to hiring. Recruiters build custom application forms, the system profiles and ranks candidates automatically, and a dedicated web-scraping agent crawls job boards continuously to deliver real-time salary benchmarks.',
    descPt: 'O mesmo framework proprietário de agentes que alimenta o SentrIA — aplicado ao recrutamento. Recrutadores montam formulários personalizados, o sistema perfila e ranqueia candidatos automaticamente, e um agente de web scraping varre vagas continuamente para entregar benchmarks de salário em tempo real.',
    stats: [],
    quoteEn: '"The best architectures compound. The same framework that analyzes industrial datasets now profiles candidates."',
    quotePt: '"As melhores arquiteturas se multiplicam. O mesmo framework que analisa datasets industriais agora perfila candidatos."',
    stackTags: ['Python', 'LangChain', 'Web scraping', 'FastAPI', 'LLM APIs'],
  },
  {
    id: 'deliveryroute',
    badgeText: 'Built',
    badgeColor: 'bg-primary/15 text-primary',
    typeEn: 'WhatsApp AI Agent · Route Optimization · Gig Economy',
    typePt: 'Agente de IA WhatsApp · Otimização de Rotas · Gig Economy',
    descEn: "A WhatsApp-native AI agent that helps delivery drivers find the most efficient route for multiple stops — just by having a conversation. No app, no GPS subscription, no training. Built for Brazilian gig workers who run 10–20 deliveries per shift.",
    descPt: 'Um agente de IA nativo no WhatsApp que ajuda entregadores a encontrar a rota mais eficiente para múltiplas paradas — só conversando. Sem app, sem assinatura de GPS, sem treinamento. Construído para trabalhadores de gig economy brasileiros.',
    stats: [],
    quoteEn: '"The best interface for a delivery driver isn\'t a new app. It\'s the app they already have open all day."',
    quotePt: '"A melhor interface para um entregador não é um app novo. É o app que ele já tem aberto o dia todo."',
    stackTags: ['Python', 'LLM Agent', 'Z-API', 'Route optimization', 'WhatsApp'],
  },
  {
    id: 'izibar',
    badgeText: 'Real Clients',
    badgeColor: 'bg-primary/15 text-primary',
    typeEn: 'Event Operations Platform · Mobile-first · TypeScript Full-Stack',
    typePt: 'Plataforma de Operações de Eventos · Mobile-first · TypeScript Full-Stack',
    descEn: 'A full event-operations system built for IziBar, a company that hired me to work across both frontend and backend in TypeScript. The product reached real clients and was used in actual event environments.',
    descPt: 'Um sistema completo de operações de eventos construído para a IziBar. O produto chegou a clientes reais e foi usado em ambientes de evento reais — da descoberta e fluxo de menu até a experiência de compra.',
    stats: [],
    quoteEn: '"What made IziBar interesting was that the software helped run the event itself."',
    quotePt: '"O que tornou o IziBar interessante foi que o software ajudou a rodar o evento em si."',
    stackTags: ['TypeScript', 'Frontend', 'Backend', 'Mobile-first UI', 'Real clients'],
  },
];
