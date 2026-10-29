import { niveis } from '../data/portfolio'
import type { Nivel } from '../data/tipos'

export default function Estrelas({ nivel }: { nivel: Nivel }) {
  return (
    <span className="estrelas" title={niveis[nivel]} aria-label={`${nivel} de 5 – ${niveis[nivel]}`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= nivel ? 'cheia' : ''}>★</span>
      ))}
    </span>
  )
}
