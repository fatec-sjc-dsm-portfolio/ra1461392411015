// ============================================================================
// TODO o conteúdo do portfólio fica neste arquivo.
// Edite os textos marcados com [preencher] — os componentes não precisam mudar.
// A foto deve ser colocada em public/foto.jpg (ou altere o caminho abaixo).
// ============================================================================

export type Nivel = 1 | 2 | 3 | 4 | 5

export interface Skill {
  nome: string
  nivel: Nivel
}

export interface Perfil {
  nome: string
  titulo: string
  formacao: string
  periodo: string
  foto: string
  resumo: string
  objetivos: string[]
  interesses: string[]
}

export interface GrupoCompetencias {
  categoria: string
  itens: Skill[]
}

export interface ProjetoAcademico {
  semestre: number
  titulo: string
  empresa: string
  problema: string
  solucao: string
  tecnologias: string[]
  repositorio: string
  contribuicoes: string[]
  hardSkills: Skill[]
  softSkills: string[]
  imagens: string[]
}

export interface ProjetoProfissional {
  titulo: string
  empresa: string
  periodo: string
  descricao: string
  tecnologias: string[]
  contribuicoes: string[]
}

export interface ProjetoPessoal {
  titulo: string
  descricao: string
  tecnologias: string[]
  repositorio?: string
  demo?: string
}

export interface Curriculo {
  formacao: { curso: string; instituicao: string; periodo: string }[]
  certificacoes: { nome: string; emissor: string; ano: string }[]
  eventos: { nome: string; descricao: string; ano: string }[]
  idiomas: { idioma: string; nivel: string }[]
  publicacoes: { titulo: string; veiculo: string; ano: string; link?: string }[]
}

export interface Contato {
  email?: string
  github: string
  linkedin: string
}

export const perfil: Perfil = {
  nome: '[preencher] Nome Completo',
  titulo: 'Desenvolvedor de Software',
  formacao: 'Cursando Desenvolvimento de Software Multiplataforma – FATEC São José dos Campos',
  periodo: '2024 – 2026',
  foto: 'foto.jpg',
  resumo:
    '[preencher] Um parágrafo curto contando quem você é, o que te motiva e o tipo de problema que gosta de resolver.',
  objetivos: [
    '[preencher] Objetivo acadêmico (ex.: aprofundar estudos em Processamento de Linguagem Natural).',
    '[preencher] Objetivo profissional (ex.: atuar como desenvolvedor full stack em produtos com IA).',
  ],
  interesses: ['Desenvolvimento Web', 'APIs REST', 'Inteligência Artificial', 'Processamento de Linguagem Natural'],
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
      { nome: 'TypeScript', nivel: 3 },
      { nome: 'SQL', nivel: 3 },
    ],
  },
  {
    categoria: 'Frameworks e bibliotecas',
    itens: [
      { nome: 'React', nivel: 3 },
      { nome: 'Node.js / Express', nivel: 3 },
      { nome: 'Flask', nivel: 3 },
    ],
  },
  {
    categoria: 'Banco de dados',
    itens: [
      { nome: 'PostgreSQL / MySQL', nivel: 3 },
      { nome: 'MongoDB', nivel: 2 },
    ],
  },
  {
    categoria: 'Ferramentas',
    itens: [
      { nome: 'Git / GitHub', nivel: 4 },
      { nome: 'Docker', nivel: 2 },
    ],
  },
]

// ---------------------------------------------------------------------------
// Projetos Acadêmicos (API) — item obrigatório. Um por semestre.
// Lembre: "problema" descreve a situação que motiva a solução, não
// "falta de sistema". O repositório deve ser uma CÓPIA no seu GitHub pessoal.
// Empresa parceira: apenas o nome, sem logo.
// ---------------------------------------------------------------------------
const apiModelo = (semestre: number): ProjetoAcademico => ({
  semestre,
  titulo: `[preencher] Nome do projeto API – ${semestre}º semestre`,
  empresa: '[preencher] Empresa parceira',
  problema:
    '[preencher] Descreva a situação-problema que motivou o projeto (ex.: a necessidade de monitorar, organizar e controlar o atendimento de demandas...).',
  solucao: '[preencher] Descreva a solução desenvolvida e como ela resolve o problema.',
  tecnologias: ['[preencher]'],
  repositorio: 'https://github.com/[seu-usuario]/[copia-do-repositorio]',
  contribuicoes: ['[preencher] O que você fez pessoalmente no projeto.'],
  hardSkills: [{ nome: '[preencher] Ex.: React', nivel: 3 }],
  softSkills: ['[preencher] Ex.: Trabalho em equipe com Scrum'],
  imagens: [], // ex.: ['api1-tela.png'] — arquivos em public/
})

export const projetosAcademicos: ProjetoAcademico[] = [1, 2, 3, 4, 5, 6].map(apiModelo)

export const projetosProfissionais: ProjetoProfissional[] = [
  {
    titulo: '[preencher] Projeto/atividade do estágio ou emprego',
    empresa: '[preencher] Empresa',
    periodo: '[preencher] 2025 – atual',
    descricao: '[preencher] Contexto, o que foi desenvolvido e qual foi o resultado.',
    tecnologias: ['[preencher]'],
    contribuicoes: ['[preencher]'],
  },
]

export const projetosPessoais: ProjetoPessoal[] = [
  {
    titulo: '[preencher] Projeto pessoal',
    descricao: '[preencher] O que é, por que foi feito e o que você aprendeu.',
    tecnologias: ['[preencher]'],
    repositorio: 'https://github.com/[seu-usuario]/[projeto]',
    demo: '',
  },
]

export const curriculo: Curriculo = {
  formacao: [
    {
      curso: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
      instituicao: 'FATEC São José dos Campos – Prof. Jessen Vidal',
      periodo: '2024 – 2026',
    },
  ],
  certificacoes: [{ nome: '[preencher] Certificação', emissor: '[preencher]', ano: '2025' }],
  eventos: [{ nome: '[preencher] Evento / Hackathon', descricao: '[preencher] Participação ou resultado', ano: '2025' }],
  idiomas: [{ idioma: 'Inglês', nivel: '[preencher] Intermediário' }],
  publicacoes: [], // ex.: { titulo: '...', veiculo: '...', ano: '2026', link: '' }
}

export const contato: Contato = {
  email: '', // opcional
  github: 'https://github.com/[seu-usuario]',
  linkedin: 'https://www.linkedin.com/in/[seu-perfil]',
}
