import { useState } from 'react'
import {
  projetosAcademicos,
  projetosProfissionais,
  projetosPessoais,
  type ProjetoAcademico,
  type ProjetoProfissional,
  type ProjetoPessoal,
} from '../data/portfolio'
import Estrelas from './Estrelas'

type Aba = 'api' | 'prof' | 'pessoais'

const abas: { id: Aba; label: string }[] = [
  { id: 'api', label: 'Acadêmicos (API)' },
  { id: 'prof', label: 'Profissionais' },
  { id: 'pessoais', label: 'Pessoais' },
]

const Tags = ({ itens }: { itens: string[] }) => (
  <div className="tags">
    {itens.map((t) => <span key={t} className="tag">{t}</span>)}
  </div>
)

function Imagens({ imagens }: { imagens: string[] }) {
  if (!imagens.length) return null
  return (
    <div className="galeria">
      {imagens.map((src) => (
        <img key={src} src={`${import.meta.env.BASE_URL}${src}`} alt="Captura de tela do projeto" loading="lazy" />
      ))}
    </div>
  )
}

function CardApi({ p }: { p: ProjetoAcademico }) {
  const [aberto, setAberto] = useState(false)
  return (
    <article className={`card projeto ${aberto ? 'aberto' : ''}`}>
      <button className="projeto-topo" onClick={() => setAberto(!aberto)} aria-expanded={aberto}>
        <span className="semestre">{p.semestre}º sem</span>
        <span className="projeto-titulo">
          <strong>{p.titulo}</strong>
          <small>Parceiro: {p.empresa}</small>
        </span>
        <span className="seta">{aberto ? '−' : '+'}</span>
      </button>

      {aberto && (
        <div className="projeto-corpo">
          <h4>Problema</h4>
          <p>{p.problema}</p>
          <h4>Solução desenvolvida</h4>
          <p>{p.solucao}</p>
          <h4>Tecnologias utilizadas</h4>
          <Tags itens={p.tecnologias} />
          <h4>Contribuições pessoais</h4>
          <ul>{p.contribuicoes.map((c) => <li key={c}>{c}</li>)}</ul>
          <div className="duas-colunas">
            <div>
              <h4>Hard skills</h4>
              <ul className="lista-skills">
                {p.hardSkills.map((s) => (
                  <li key={s.nome}><span>{s.nome}</span><Estrelas nivel={s.nivel} /></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Soft skills</h4>
              <ul>{p.softSkills.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
          <Imagens imagens={p.imagens} />
          <a className="btn btn-sec" href={p.repositorio} target="_blank" rel="noreferrer">Repositório no GitHub ↗</a>
        </div>
      )}
    </article>
  )
}

function CardProfissional({ p }: { p: ProjetoProfissional }) {
  return (
    <article className="card">
      <h3>{p.titulo}</h3>
      <p className="meta">{p.empresa} · {p.periodo}</p>
      <p>{p.descricao}</p>
      <h4>Contribuições</h4>
      <ul>{p.contribuicoes.map((c) => <li key={c}>{c}</li>)}</ul>
      <Tags itens={p.tecnologias} />
    </article>
  )
}

function CardPessoal({ p }: { p: ProjetoPessoal }) {
  return (
    <article className="card">
      <h3>{p.titulo}</h3>
      <p>{p.descricao}</p>
      <Tags itens={p.tecnologias} />
      <div className="hero-acoes">
        {p.repositorio && <a className="btn btn-sec" href={p.repositorio} target="_blank" rel="noreferrer">Código ↗</a>}
        {p.demo && <a className="btn" href={p.demo} target="_blank" rel="noreferrer">Demo ↗</a>}
      </div>
    </article>
  )
}

export default function Projetos() {
  const [aba, setAba] = useState<Aba>('api')

  return (
    <section id="projetos" className="secao container">
      <h2>Projetos</h2>
      <div className="abas" role="tablist">
        {abas.map((a) => (
          <button key={a.id} role="tab" aria-selected={aba === a.id} className={aba === a.id ? 'ativa' : ''} onClick={() => setAba(a.id)}>
            {a.label}
          </button>
        ))}
      </div>

      {aba === 'api' && (
        <>
          <p className="intro">
            Projetos Integradores (Aprendizagem por Projetos Integrados) desenvolvidos em parceria com empresas ao longo do curso.
            Clique em um projeto para ver os detalhes.
          </p>
          <div className="timeline">
            {projetosAcademicos.map((p) => <CardApi key={p.semestre} p={p} />)}
          </div>
        </>
      )}
      {aba === 'prof' && (
        <div className="grid-cards">{projetosProfissionais.map((p) => <CardProfissional key={p.titulo} p={p} />)}</div>
      )}
      {aba === 'pessoais' && (
        <div className="grid-cards">{projetosPessoais.map((p) => <CardPessoal key={p.titulo} p={p} />)}</div>
      )}
    </section>
  )
}
