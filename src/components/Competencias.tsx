import { competencias, niveis } from '../data/portfolio'
import Estrelas from './Estrelas'

export default function Competencias() {
  return (
    <section id="competencias" className="secao container">
      <h2>Competências técnicas</h2>
      <p className="legenda">
        {Object.entries(niveis).map(([n, label]) => (
          <span key={n}>{n}★ {label}</span>
        ))}
      </p>
      <div className="grid-cards">
        {competencias.map((grupo) => (
          <div className="card" key={grupo.categoria}>
            <h3>{grupo.categoria}</h3>
            <ul className="lista-skills">
              {grupo.itens.map((s) => (
                <li key={s.nome}>
                  <span>{s.nome}</span>
                  <Estrelas nivel={s.nivel} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
