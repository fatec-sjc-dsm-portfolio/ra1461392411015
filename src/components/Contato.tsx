import { contato } from '../data/portfolio'
import { LinkExterno } from './ui'

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
          <LinkExterno key={l.label} className="btn btn-sec" href={l.href}>{l.label}</LinkExterno>
        ))}
      </div>
    </section>
  )
}
