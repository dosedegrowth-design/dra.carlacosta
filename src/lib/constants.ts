import type { Service, Mito, Testimonial, FAQ, BlogPost, Pilar } from "@/types";

export const SITE = {
  name: "Dra. Carla Costa",
  title: "Dra. Carla Costa — Anestesiologia Ambulatorial para Clínicas",
  description:
    "Anestesiologia e Medicina da Dor com foco em clínicas dermatológicas, odontológicas, plásticas e estéticas. Segurança, conforto e humanização em cada procedimento.",
  url: "https://dracarlacosta.com.br",
  crm: "CRM/SP 000000",
  phone: "+55 11 00000-0000",
  whatsapp: "5511000000000",
  email: "contato@dracarlacosta.com.br",
  address: "São Paulo — SP",
  instagram: "https://instagram.com/dracarlacostac",
  linkedin: "https://linkedin.com/in/dracarlacosta",
  ogImage: "/images/og-image.jpg",
};

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#servicos" },
  { label: "Para Clínicas", href: "#parceria" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const MARQUEE_ITEMS = [
  "Dermatologia",
  "Odontologia",
  "Cirurgia Plástica",
  "Bucomaxilofacial",
  "Estética Avançada",
  "Medicina da Dor",
  "Sedação Consciente",
  "Avaliação Pré-anestésica",
];

export const PILARES: Pilar[] = [
  {
    image: "/images/icons/pilar-seguranca.png",
    title: "Segurança",
    description:
      "Monitorização contínua e protocolos anestésicos rigorosos para cada procedimento.",
  },
  {
    image: "/images/icons/pilar-acolhimento.png",
    title: "Acolhimento",
    description:
      "Escuta ativa e tranquilização do paciente antes, durante e após o procedimento.",
  },
  {
    image: "/images/icons/pilar-conforto.png",
    title: "Conforto",
    description:
      "Experiência suave e amparo completo, com técnicas adaptadas para cada caso.",
  },
  {
    image: "/images/icons/pilar-humanizacao.png",
    title: "Humanização",
    description:
      "Abordagem individualizada que respeita a história e as necessidades do paciente.",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "anestesia-ambulatorial-dermatologia",
    title: "Anestesia Ambulatorial em Dermatologia",
    short: "Morpheus, laser, peelings profundos e procedimentos estéticos complexos.",
    description:
      "Sedação endovenosa para procedimentos dermatológicos que exigem conforto e controle da dor, permitindo ao seu paciente uma experiência tranquila e ao médico mais previsibilidade.",
    icon: "Syringe",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
  },
  {
    slug: "anestesia-odontologica",
    title: "Anestesia em Odontologia",
    short: "Extrações complexas, implantes e cirurgias orais sob sedação.",
    description:
      "Sedação consciente e anestesia para procedimentos odontológicos que demandam mais do que o bloqueio local, oferecendo segurança e conforto ao paciente ansioso.",
    icon: "Stethoscope",
    image: "/images/services/servico-odontologia.jpg",
  },
  {
    slug: "centro-cirurgico",
    title: "Cirurgia Plástica e Bucomaxilofacial",
    short: "Anestesia em centro cirúrgico para procedimentos de médio e grande porte.",
    description:
      "Atendimento anestésico em hospitais e centros cirúrgicos parceiros, com avaliação pré-operatória completa e acompanhamento pós-anestésico.",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80",
  },
  {
    slug: "sedacao-consciente",
    title: "Sedação Consciente",
    short: "Para pacientes com ansiedade em procedimentos estéticos e dentários.",
    description:
      "Técnica que mantém o paciente relaxado e cooperativo, sem perda completa da consciência — ideal para procedimentos ambulatoriais de menor porte.",
    icon: "Moon",
    image: "/images/services/servico-sedacao.jpg",
  },
  {
    slug: "medicina-da-dor",
    title: "Medicina da Dor",
    short: "Avaliação e manejo de dor aguda e crônica.",
    description:
      "Tratamento multidisciplinar da dor, com plano individualizado para cada paciente e integração com as demais especialidades médicas.",
    icon: "HeartPulse",
    image: "/images/services/servico-medicina-dor.jpg",
  },
  {
    slug: "avaliacao-pre-anestesica",
    title: "Avaliação Pré-anestésica",
    short: "Triagem completa antes de qualquer procedimento.",
    description:
      "Anamnese detalhada, análise de exames e planejamento anestésico personalizado — reduzindo riscos e complicações intra e pós-operatórias.",
    icon: "ClipboardCheck",
    image: "/images/services/servico-pre-anestesica.jpg",
  },
];

export const B2B_BENEFITS = [
  {
    icon: "TrendingUp",
    title: "Aumente o ticket médio",
    description:
      "Procedimentos com sedação ampliam o portfólio da clínica e justificam valores mais altos.",
  },
  {
    icon: "Shield",
    title: "Mais segurança e previsibilidade",
    description:
      "Anestesista dedicada reduz complicações, ansiedade do paciente e tempo de procedimento.",
  },
  {
    icon: "Smile",
    title: "Paciente mais satisfeito",
    description:
      "Experiência sem dor e sem estresse converte em avaliações positivas e indicações.",
  },
  {
    icon: "Handshake",
    title: "Parceria dedicada",
    description:
      "Agenda integrada à sua clínica, comunicação direta com sua equipe e suporte contínuo.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Contato inicial",
    description:
      "Você entra em contato apresentando sua clínica, especialidade e volume de procedimentos.",
  },
  {
    step: "02",
    title: "Alinhamento clínico",
    description:
      "Reunião para alinhar protocolos, fluxos, exigências sanitárias e expectativas mútuas.",
  },
  {
    step: "03",
    title: "Agendamento integrado",
    description:
      "Agenda sincronizada com a sua clínica, incluindo avaliação pré-anestésica dos pacientes.",
  },
  {
    step: "04",
    title: "Procedimento e pós",
    description:
      "Atendimento presencial com monitorização completa e acompanhamento pós-anestésico.",
  },
];

export const MITOS: Mito[] = [
  {
    mito: "O paciente pode não acordar após a anestesia.",
    verdade:
      "Com avaliação pré-anestésica e monitorização contínua, o risco é extremamente baixo. A anestesia moderna é segura e precisa.",
  },
  {
    mito: "A anestesia causa perda permanente de memória.",
    verdade:
      "Não existe evidência de perda permanente. Alguns pacientes podem apresentar confusão passageira, que desaparece em horas ou poucos dias.",
  },
  {
    mito: "Anestesia é sempre perigosa.",
    verdade:
      "Quando realizada por anestesista qualificado e em ambiente adequado, a anestesia é tão segura quanto qualquer procedimento médico planejado.",
  },
  {
    mito: "Sedação e anestesia geral são a mesma coisa.",
    verdade:
      "Não. A sedação consciente mantém o paciente responsivo, enquanto a anestesia geral produz inconsciência completa. Cada técnica tem indicação específica.",
  },
  {
    mito: "Jejum por poucas horas é suficiente.",
    verdade:
      "O jejum é individualizado conforme a técnica e o tipo de procedimento. Segui-lo corretamente reduz drasticamente riscos de aspiração.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dra. Marina Lopes",
    role: "Dermatologista — Clínica Parceira",
    text: "A parceria com a Dra. Carla mudou o patamar da minha clínica. Pacientes saem tranquilos, sem dor, e voltam sempre.",
  },
  {
    name: "Dr. Roberto Alves",
    role: "Cirurgião-dentista — Implantodontia",
    text: "Profissional extremamente técnica e acolhedora. A avaliação pré-anestésica é um diferencial real para casos complexos.",
  },
  {
    name: "Maria L.",
    role: "Paciente",
    text: "Cheguei aterrorizada e saí tranquila. A Dra. Carla explicou cada passo e me deixou totalmente segura antes do procedimento.",
  },
  {
    name: "Dra. Beatriz Nunes",
    role: "Cirurgiã Plástica",
    text: "Ter uma anestesista dedicada aumentou minha previsibilidade operatória e a satisfação dos meus pacientes.",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "Como funciona a parceria com clínicas?",
    answer:
      "A Dra. Carla atende presencialmente na sua clínica ou em centro cirúrgico parceiro, com agenda sincronizada e avaliação pré-anestésica completa de cada paciente.",
  },
  {
    question: "Quais especialidades atende?",
    answer:
      "Dermatologia, odontologia, cirurgia plástica, bucomaxilofacial, estética avançada e medicina da dor — todos em ambiente ambulatorial ou cirúrgico.",
  },
  {
    question: "É possível agendar um procedimento individual?",
    answer:
      "Sim. Pacientes indicados por clínicas parceiras podem agendar diretamente via WhatsApp para avaliação pré-anestésica.",
  },
  {
    question: "Quanto custa a avaliação pré-anestésica?",
    answer:
      "Os valores variam conforme o tipo de procedimento e são definidos em conjunto com a clínica parceira ou diretamente com o paciente.",
  },
  {
    question: "A Dra. Carla atende emergências?",
    answer:
      "O foco do atendimento é ambulatorial e programado. Para emergências, o paciente deve procurar serviços hospitalares.",
  },
  {
    question: "Atende em quais cidades?",
    answer:
      "Atendimento presencial em São Paulo capital e região metropolitana. Consulte disponibilidade para outras localidades.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sedacao-ambulatorial-o-que-muda",
    title: "Sedação ambulatorial: o que muda para sua clínica",
    excerpt:
      "Como oferecer procedimentos sob sedação eleva a experiência do paciente e o patamar clínico da sua prática.",
    date: "2025-01-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80",
    category: "Para Clínicas",
  },
  {
    slug: "avaliacao-pre-anestesica-por-que-importa",
    title: "Avaliação pré-anestésica: por que ela é o seu seguro",
    excerpt:
      "O que é investigado antes de um procedimento e como essa etapa reduz drasticamente os riscos intra e pós-operatórios.",
    date: "2025-01-08",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
    category: "Pacientes",
  },
  {
    slug: "mitos-sobre-anestesia",
    title: "5 mitos sobre anestesia que você precisa parar de acreditar",
    excerpt:
      "Separando ciência de achismo — um guia direto para quem vai passar por um procedimento.",
    date: "2024-12-20",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80",
    category: "Educação",
  },
];

export const STATS = [
  { value: "+8", label: "anos de experiência" },
  { value: "+1.500", label: "procedimentos realizados" },
  { value: "+20", label: "clínicas parceiras" },
  { value: "100%", label: "dedicação a cada paciente" },
];
