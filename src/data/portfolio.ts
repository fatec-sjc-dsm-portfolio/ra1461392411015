// ============================================================================
// TODO o conteúdo do portfólio fica neste arquivo.
// Edite os textos marcados com [preencher] — os componentes não precisam mudar.
// A foto deve ser colocada em public/foto.jpg (ou altere o caminho abaixo).
// ============================================================================

import type {
  Nivel,
  Perfil,
  GrupoCompetencias,
  ProjetoAcademico,
  ExperienciaProfissional,
  Contato,
} from './tipos'

export const perfil: Perfil = {
  nome: 'André Salerno',
  titulo: 'Desenvolvedor de Software',
  formacao: 'Cursando Desenvolvimento de Software Multiplataforma – FATEC São José dos Campos',
  periodo: '2024 – 2026',
  foto: 'foto.jpg',
  resumo:
    'Com o desenvolvimento de software, passei a ser um melhor gestor em finanças e economia',
  objetivos: [
    'Objetivo acadêmico: criação de aplicações automatizadas que apoiem decisões econômico-financeiras',
    'Objetivo profissional: atuar como um gestor de riscos financeiros desenvolvidos com IA',
  ],
  interesses: ['Desenvolvimento Web', 'APIs REST', 'Inteligência Artificial', 'Processamento de Linguagem Natural', 'Economia', 'Finanças', 'Modelagem Estatística'],
}

// Nível de 1 (ouvi falar) a 5 (fluente) — conforme orientação do roteiro.
export const niveis: Record<Nivel, string> = {
  1: 'Ouvi falar',
  2: 'Utilizador básico',
  3: 'Utilizador intermediário',
  4: 'Desenvolvedor autônomo',
  5: 'Fluente',
}

export const competencias: GrupoCompetencias[] = [
  {
    categoria: 'Linguagens',
    itens: [
      { nome: 'Python', nivel: 4 },
      { nome: 'JavaScript', nivel: 4 },
      { nome: 'Java', nivel: 4 },
      { nome: 'TypeScript', nivel: 4 },
      { nome: 'SQL', nivel: 4 },
    ],
  },
  {
    categoria: 'Frameworks e bibliotecas',
    itens: [
      { nome: 'React', nivel: 4 },
      { nome: 'Node.js / Express', nivel: 4 },
      { nome: 'Flask', nivel: 4 },
      { nome: 'React-Native', nivel: 4 },
      { nome: 'Flutter', nivel: 4 },
    ],
  },
  {
    categoria: 'Banco de dados',
    itens: [
      { nome: 'PostgreSQL / MySQL', nivel: 4 },
      { nome: 'MongoDB', nivel: 4 },
      { nome: 'Redis', nivel: 3 },
      { nome: 'Cassandra', nivel: 4 },
    ],
  },
  {
    categoria: 'Ferramentas',
    itens: [
      { nome: 'Git / GitHub', nivel: 4 },
      { nome: 'Docker', nivel: 3 },
      { nome: 'Jira', nivel: 4 },
      { nome: 'Figma', nivel: 4 },
    ],
  },
]

// ---------------------------------------------------------------------------
// Projetos Acadêmicos (API) — item obrigatório. Um por semestre.
// Lembre: "problema" descreve a situação que motiva a solução, não
// "falta de sistema". O repositório deve ser uma CÓPIA no seu GitHub pessoal.
// Empresa parceira: apenas o nome, sem logo.
// ---------------------------------------------------------------------------
export const projetosAcademicos: ProjetoAcademico[] = [
  {
    semestre: 1,
    titulo: 'Smart Farm – Painel de monitoramento de estufa',
    empresa: 'Projeto Interno FATEC',
    problema:
      'Os dados ambientais de uma estufa de hortaliças (temperatura, umidade do solo, umidade do ar e volume de água), captados por uma câmera com sensores, eram coletados e analisados manualmente em planilhas Excel. O processo era moroso para a equipe e dificultava o acompanhamento contínuo do desenvolvimento das plantas.',
    solucao:
      'Aplicação web que importa os arquivos CSV gerados pelos sensores, armazena as leituras em banco MySQL e exibe os últimos valores e gráficos históricos, com filtro por período e exportação dos dados filtrados em CSV. A aplicação foi empacotada com Docker e hospedada em um Raspberry Pi 3.',
    tecnologias: ['Python', 'Flask', 'Pandas', 'Plotly', 'MySQL', 'HTML', 'CSS', 'Docker', 'Raspberry Pi'],
    repositorio: 'https://github.com/SkyFlyTeam/SmartFarm',
    contribuicoes: [
      'Scrum Master da equipe: condução das cerimônias e acompanhamento das quatro sprints.',
      'Criação e estruturação do repositório do projeto.',
      'Documentação do projeto: README, cronograma de sprints, papéis Scrum e backlog.',
    ],
    hardSkills: [
      { nome: 'Python', nivel: 3 },
      { nome: 'Flask', nivel: 2 },
      { nome: 'MySQL', nivel: 2 },
      { nome: 'Git / GitHub', nivel: 3 },
      { nome: 'Scrum', nivel: 3 },
    ],
    softSkills: ['Liderança como Scrum Master', 'Organização e planejamento de entregas', 'Comunicação com a equipe e os orientadores'],
    imagens: [],
  },
  {
    semestre: 2,
    titulo: 'Cloud Stock – Controle de estoque',
    empresa: 'Projeto Interno FATEC',
    problema:
      'A gestão de estoque era feita de forma manual, sujeita a erros humanos e sem visibilidade de onde cada produto estava armazenado. Faltavam avisos de estoque mínimo e de produtos próximos da validade, o que gerava rupturas e perdas, e não havia um histórico confiável de entradas e saídas para auditoria.',
    solucao:
      'Sistema web para cadastro de produtos, fornecedores, locais e setores, com registro de entradas e saídas por responsável e data e três níveis de acesso (administrador, gerente e funcionário). O sistema emite alertas de estoque baixo e de validade próxima e gera relatórios de movimentação e métricas de vendas e perdas.',
    tecnologias: ['TypeScript', 'React', 'Node.js', 'MySQL', 'Docker', 'Figma', 'Jira'],
    repositorio: 'https://github.com/SkyFlyTeam/cloudStock',
    contribuicoes: [
      'Scrum Master da equipe: planejamento das sprints, DoR/DoD e acompanhamento do backlog.',
      'Criação do repositório e manutenção da documentação de requisitos.',
    ],
    hardSkills: [
      { nome: 'TypeScript', nivel: 3 },
      { nome: 'React', nivel: 2 },
      { nome: 'Node.js', nivel: 2 },
      { nome: 'Modelagem de requisitos (user stories)', nivel: 3 },
      { nome: 'Scrum', nivel: 4 },
    ],
    softSkills: ['Liderança como Scrum Master', 'Facilitação e resolução de impedimentos', 'Priorização junto ao Product Owner'],
    imagens: [],
  },
  {
    semestre: 3,
    titulo: 'BeeOnTime – Ponto eletrônico e banco de horas',
    empresa: 'Nectus',
    problema:
      'O acompanhamento da jornada dos colaboradores envolve muitas informações espalhadas: marcações de ponto, horas extras, férias, folgas, justificativas e ajustes. Sem um controle centralizado, calcular o banco de horas e conferir o espelho de ponto se torna trabalhoso e sujeito a erros para o RH e os gestores.',
    solucao:
      'Aplicação web responsiva para marcação de ponto, espelho de ponto, banco de horas, solicitações e justificativas, com relatórios detalhados e envio de notificações. O back-end em Java/Spring Boot é organizado em serviços, e o front-end é feito em Next.js com TypeScript.',
    tecnologias: ['Java', 'Spring Boot', 'TypeScript', 'React', 'Next.js', 'MySQL', 'MongoDB', 'Redis', 'Docker'],
    repositorio: 'https://github.com/SkyFlyTeam/BeeOnTime-documentation',
    contribuicoes: [
      'Scrum Master da equipe.',
      'Estrutura inicial do back-end com Docker Compose, configurando os bancos relacional e não relacional e o Redis.',
      'Desenvolvimento das telas de colaborador no front-end: modal de cadastro, máscara de CPF e seleção de nível de acesso.',
    ],
    hardSkills: [
      { nome: 'Docker / Docker Compose', nivel: 3 },
      { nome: 'Java / Spring Boot', nivel: 2 },
      { nome: 'React / Next.js', nivel: 3 },
      { nome: 'TypeScript', nivel: 3 },
      { nome: 'Scrum', nivel: 4 },
    ],
    softSkills: ['Liderança como Scrum Master', 'Revisão colaborativa de código (pull requests)', 'Adaptação a feedback'],
    imagens: [],
  },
  {
    semestre: 4,
    titulo: 'Atmos – Monitoramento meteorológico e alertas',
    empresa: 'Tecsus',
    problema:
      'Acidentes ligados a condições meteorológicas, como deslizamentos de terra e inundações, têm se tornado mais frequentes. As áreas mais carentes de São José dos Campos são as mais afetadas e não contam com nenhum tipo de aviso ou alerta quando esses eventos estão para acontecer.',
    solucao:
      'Plataforma que coleta dados de estações meteorológicas distribuídas pela cidade e exibe dashboards por estação e consolidados, com envio de alertas em situações de risco e guias educativos sobre cada parâmetro. A arquitetura é distribuída: as estações (Arduino) publicam via MQTT, um receptor em Python grava no MongoDB Atlas e um processador em TypeScript valida, calibra e persiste os dados no PostgreSQL, consumidos pela API Express e pelo front-end em Next.js.',
    tecnologias: ['TypeScript', 'Next.js', 'React', 'Node.js / Express', 'Sequelize', 'PostgreSQL', 'MongoDB Atlas', 'Python', 'MQTT', 'Arduino', 'Docker', 'GitHub Actions'],
    repositorio: 'https://github.com/andresalerno/Atmos-processador-dados',
    contribuicoes: [
      'Desenvolvimento do processador de dados: conexão com o MongoDB, conversão e persistência das leituras no PostgreSQL e calibração dos valores por fator e offset.',
      'Criação dos pipelines de CI (GitHub Actions) do back-end, front-end, processador e receptor.',
      'Método de coleta de dados no receptor MQTT.',
      'Telas de listagem e cadastro de usuários e landing page do front-end.',
    ],
    hardSkills: [
      { nome: 'TypeScript / Node.js', nivel: 4 },
      { nome: 'MongoDB', nivel: 3 },
      { nome: 'PostgreSQL / Sequelize', nivel: 3 },
      { nome: 'CI/CD com GitHub Actions', nivel: 3 },
      { nome: 'Next.js / React', nivel: 3 },
    ],
    softSkills: ['Trabalho em equipe em arquitetura distribuída', 'Comunicação com a empresa parceira', 'Autonomia na entrega de tarefas técnicas'],
    imagens: [],
  },
  {
    semestre: 5,
    titulo: 'Veredito – Apoio à decisão judicial com PLN',
    empresa: 'Xertica',
    problema:
      'O volume de processos judiciais e a complexidade das teses cresceram de forma significativa, tornando difícil para juízes e assessores localizar rapidamente precedentes adequados e fundamentar decisões. Isso prolonga a tramitação dos processos e aumenta o risco de decisões pouco alinhadas à jurisprudência consolidada.',
    solucao:
      'Aplicativo para magistrados que recebe a petição inicial em PDF ou DOCX, extrai e analisa o texto, gera um resumo da peça e sugere precedentes ranqueados por similaridade. Cada precedente é classificado como "Aplicável", "Possivelmente aplicável" ou "Não aplicável" e acompanha uma síntese explicativa; o sistema também gera minutas de sentença e de petição inicial.',
    tecnologias: ['Dart', 'Flutter', 'Riverpod', 'TypeScript', 'NestJS', 'LangChain', 'OpenAI API', 'PostgreSQL', 'Docker', 'Jest'],
    repositorio: 'https://github.com/SkyFlyTeam/veredito-documentation',
    contribuicoes: [
      'Back-end: parser de texto das petições, pipeline de PLN e serviço de geração de resumo com controle de tokens.',
      'Testes unitários do pipeline executados em Docker e guia de reprodutibilidade do processamento em lote.',
      'Filtros na pipeline de análise de petição inicial.',
      'Front-end em Flutter: tela de upload com Clean Architecture e progresso real via Dio, home do juiz, tela de nova análise e modal de geração de minuta.',
    ],
    hardSkills: [
      { nome: 'Processamento de Linguagem Natural', nivel: 3 },
      { nome: 'NestJS / TypeScript', nivel: 4 },
      { nome: 'Flutter / Dart', nivel: 3 },
      { nome: 'Integração com LLMs', nivel: 3 },
      { nome: 'Testes automatizados', nivel: 3 },
    ],
    softSkills: ['Colaboração entre front-end e back-end', 'Passagem de contexto entre membros da equipe', 'Aprendizado rápido de novas tecnologias'],
    imagens: [],
  },
  {
    semestre: 6,
    titulo: 'VariSkill – Trilhas de aprendizagem com assistente inteligente',
    empresa: 'GSW',
    problema:
      'Na capacitação técnica corporativa, colaboradores costumam seguir trilhas de aprendizagem lineares e despersonalizadas, o que gera alta evasão e baixa retenção do conhecimento prático. Identificar lacunas conceituais e oferecer acompanhamento pedagógico contínuo e motivador é um dos maiores desafios das empresas de tecnologia.',
    solucao:
      'Plataforma de trilhas divididas em módulos e atividades (múltipla escolha, completar código e ordenar blocos) com correção determinística. Um assistente virtual faz o nivelamento inicial, tira dúvidas sem entregar a resposta e dá feedback, apoiado por um motor híbrido de PLN com banco vetorial (pgvector). A gamificação inclui XP, níveis, sequência diária e conquistas.',
    tecnologias: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'pgvector', 'TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Docker'],
    repositorio: 'https://github.com/SkyFlyTeam/VariSkill-documentantion',
    contribuicoes: [
      'CRUD de atividades e validação determinística das respostas com o padrão Strategy.',
      'Models de intenções e da base vetorial com pgvector para o PLN local.',
      'Persistência das respostas por questão, endpoint de diagnóstico de erros e parecer formativo.',
      'Memória de contexto do histórico pedagógico na sessão do chat.',
      'Front-end: modais do assistente Vari, sequência de onboarding e modal de resultado com feedback formativo.',
    ],
    hardSkills: [
      { nome: 'Python / Django', nivel: 4 },
      { nome: 'Banco vetorial (pgvector)', nivel: 3 },
      { nome: 'Padrões de projeto', nivel: 3 },
      { nome: 'React / TypeScript', nivel: 4 },
      { nome: 'Processamento de Linguagem Natural', nivel: 3 },
    ],
    softSkills: ['Abertura a code review', 'Visão de produto centrada no usuário', 'Trabalho em equipe com Scrum'],
    imagens: [],
  },
]

// ---------------------------------------------------------------------------
// Projetos Profissionais — item obrigatório (estágio, emprego ou empresa própria).
// ---------------------------------------------------------------------------
export const experienciaProfissional: ExperienciaProfissional[] = [
  {
    empresa: 'Data FinTech Solutions',
    cargo: 'Fundador',
    periodo: '2016 – atual',
    site: 'https://www.datafintechsolutions.com',
    descricao:
      'Consultoria especializada em inteligência de mercado, crédito e estratégia financeira, que combina consultoria, tecnologia e inteligência de dados para reduzir riscos e tornar operações financeiras mais eficientes. Atuação em políticas e modelagem de crédito, réguas de cobrança, otimização de capital de giro e ambientes orientados a dados, com dashboards, automações e modelos de IA.',
    projetos: [
      {
        titulo: 'Crédito Consignado',
        descricao:
          'Criação da política de crédito de uma operação de crédito consignado e automação do processo de ponta a ponta, com back-end, front-end e integrações com serviços externos, como bureaus de crédito.',
        tags: ['Python', 'Django', 'React', 'PostgreSQL'],
      },
      {
        titulo: 'Reestruturação do processo decisório de crédito',
        descricao:
          'Revisão e adequação das políticas e dos processos de concessão de crédito para decisões mais consistentes, com automações que trouxeram economia e menor risco.',
        tags: ['Políticas de crédito', 'Automações', 'Gestão de risco'],
      },
      {
        titulo: 'Melhorias no fluxo completo de crédito',
        descricao:
          'Automatizações e revisões ao longo de todo o fluxo de crédito, apoiadas em modelagem estatística e modelos de detecção de fraude, gerando economias substanciais.',
        tags: ['Modelagem estatística', 'Modelos de fraude', 'Otimização'],
      },
    ],
  },
]

export const contato: Contato = {
  email: '', // opcional
  github: 'https://github.com/andresalerno',
  linkedin: 'https://www.linkedin.com/in/andresalerno',
}
