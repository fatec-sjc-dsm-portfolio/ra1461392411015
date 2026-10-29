import { useState } from 'react'
import { projetosAcademicos } from '../data/portfolio'
import type { ProjetoAcademico } from '../data/tipos'
import { LinkExterno, Lista, ListaSkills, Tags } from './ui'

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
          <Lista itens={p.contribuicoes} />
          <div className="duas-colunas">
            <div>
              <h4>Hard skills</h4>
              <ListaSkills itens={p.hardSkills} />
            </div>
            <div>
              <h4>Soft skills</h4>
              <Lista itens={p.softSkills} />
            </div>
          </div>
          <Imagens imagens={p.imagens} />
          <LinkExterno className="btn btn-sec" href={p.repositorio}>Repositório no GitHub ↗</LinkExterno>
        </div>
      )}
    </article>
  )
}

export default function Projetos() {
  return (
    <section id="projetos" className="secao container">
      <h2>Projetos Acadêmicos (API)</h2>
      <p className="intro">
        Projetos Integradores (Aprendizagem por Projetos Integrados) desenvolvidos em parceria com empresas ao longo do curso.
        Clique em um projeto para ver os detalhes.
      </p>
      <div className="timeline">
        {projetosAcademicos.map((p) => <CardApi key={p.semestre} p={p} />)}
      </div>
    </section>
  )
}
