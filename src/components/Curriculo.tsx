import type { ReactNode } from 'react'
import { curriculo } from '../data/portfolio'

const Bloco = ({ titulo, children }: { titulo: string; children: ReactNode }) => (
  <div className="card">
    <h3>{titulo}</h3>
    <ul className="lista-cv">{children}</ul>
  </div>
)

export default function Curriculo() {
  const { formacao, certificacoes, eventos, idiomas, publicacoes } = curriculo
  return (
    <section id="curriculo" className="secao container">
      <h2>Informações curriculares</h2>
      <div className="grid-cards">
        <Bloco titulo="Formação acadêmica">
          {formacao.map((f) => (
            <li key={f.curso}><strong>{f.curso}</strong><span>{f.instituicao} · {f.periodo}</span></li>
          ))}
        </Bloco>
        <Bloco titulo="Certificações e cursos">
          {certificacoes.map((c) => (
            <li key={c.nome}><strong>{c.nome}</strong><span>{c.emissor} · {c.ano}</span></li>
          ))}
        </Bloco>
        <Bloco titulo="Participação em eventos">
          {eventos.map((e) => (
            <li key={e.nome}><strong>{e.nome} ({e.ano})</strong><span>{e.descricao}</span></li>
          ))}
        </Bloco>
        <Bloco titulo="Idiomas">
          {idiomas.map((i) => (
            <li key={i.idioma}><strong>{i.idioma}</strong><span>{i.nivel}</span></li>
          ))}
        </Bloco>
        {publicacoes.length > 0 && (
          <Bloco titulo="Publicações e apresentações">
            {publicacoes.map((p) => (
              <li key={p.titulo}>
                <strong>{p.link ? <a href={p.link} target="_blank" rel="noreferrer">{p.titulo}</a> : p.titulo}</strong>
                <span>{p.veiculo} · {p.ano}</span>
              </li>
            ))}
          </Bloco>
        )}
      </div>
    </section>
  )
}
