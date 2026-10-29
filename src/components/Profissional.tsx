import { experienciaProfissional } from '../data/portfolio'
import { LinkExterno, Tags } from './ui'

export default function Profissional() {
  return (
    <section id="profissional" className="secao container">
      <h2>Experiência profissional</h2>
      {experienciaProfissional.map((exp) => (
        <div key={exp.empresa} className="experiencia">
          <div className="card experiencia-topo">
            <h3>
              {exp.site ? <LinkExterno href={exp.site}>{exp.empresa} ↗</LinkExterno> : exp.empresa}
            </h3>
            <p className="meta">{exp.cargo} · {exp.periodo}</p>
            <p>{exp.descricao}</p>
          </div>
          <div className="grid-cards">
            {exp.projetos.map((p) => (
              <article className="card" key={p.titulo}>
                <h3>{p.titulo}</h3>
                <p>{p.descricao}</p>
                <Tags itens={p.tags} />
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
