// Formato dos dados do portfólio. O conteúdo em si fica em portfolio.ts.

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
  tecnologias: string[]
  empresa: string
  problema: string
  solucao: string
  repositorio: string
  contribuicoes: string[]
  hardSkills: Skill[]
  softSkills: string[]
  imagens: string[]
}

export interface Contato {
  email?: string
  github: string
  linkedin: string
}
