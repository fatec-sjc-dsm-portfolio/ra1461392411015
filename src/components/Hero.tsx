import { useState } from 'react'
import { perfil, contato } from '../data/portfolio'

function Foto() {
  const [erro, setErro] = useState(false)
  const iniciais = perfil.nome
    .replace(/\[.*?\]/g, '')
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join('')

  if (erro) return <div className="foto foto-placeholder">{iniciais || '?'}</div>
  return (
    <img
      className="foto"
      src={`${import.meta.env.BASE_URL}${perfil.foto}`}
      alt={`Foto de ${perfil.nome}`}
      onError={() => setErro(true)}
    />
  )
}

export default function Hero() {
  return (
    <section id="sobre" className="hero container">
      <div className="hero-grid">
        <Foto />
        <div>
          <p className="eyebrow">{perfil.titulo}</p>
          <h1>{perfil.nome}</h1>
          <p className="formacao">{perfil.formacao}</p>
          <p className="resumo">{perfil.resumo}</p>
          <div className="hero-acoes">
            <a className="btn" href="#projetos">Ver projetos</a>
            <a className="btn btn-sec" href={contato.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      <div className="hero-cards">
        <div className="card">
          <h3>Objetivos acadêmicos e profissionais</h3>
          <ul>
            {perfil.objetivos.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </div>
        <div className="card">
          <h3>Áreas de interesse</h3>
          <div className="tags">
            {perfil.interesses.map((i) => <span key={i} className="tag">{i}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
