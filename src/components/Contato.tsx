import { contato } from '../data/portfolio'

interface Link {
  label: string
  href: string
}

export default function Contato() {
  const links: Link[] = [
    { label: 'GitHub', href: contato.github },
    { label: 'LinkedIn', href: contato.linkedin },
    ...(contato.email ? [{ label: contato.email, href: `mailto:${contato.email}` }] : []),
  ]

  return (
    <section id="contato" className="secao container contato">
      <h2>Contato</h2>
      <p className="intro">Vamos conversar sobre oportunidades, projetos ou parcerias.</p>
      <div className="hero-acoes centro">
        {links.map((l) => (
          <a key={l.label} className="btn btn-sec" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
        ))}
      </div>
    </section>
  )
}
