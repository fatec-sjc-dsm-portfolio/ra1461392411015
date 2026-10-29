// Componentes pequenos reutilizados pelas seções do portfólio.
import type { ComponentProps } from 'react'
import type { Skill } from '../data/tipos'
import Estrelas from './Estrelas'

export const LinkExterno = (props: ComponentProps<'a'>) => (
  <a target="_blank" rel="noreferrer" {...props} />
)

export const Lista = ({ itens }: { itens: string[] }) => (
  <ul>{itens.map((i) => <li key={i}>{i}</li>)}</ul>
)

export const Tags = ({ itens }: { itens: string[] }) => (
  <div className="tags">
    {itens.map((t) => <span key={t} className="tag">{t}</span>)}
  </div>
)

export const ListaSkills = ({ itens }: { itens: Skill[] }) => (
  <ul className="lista-skills">
    {itens.map((s) => (
      <li key={s.nome}><span>{s.nome}</span><Estrelas nivel={s.nivel} /></li>
    ))}
  </ul>
)
