import { useEffect, useState } from 'react'

const secoes = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'competencias', label: 'Competências' },
  { id: 'curriculo', label: 'Currículo' },
  { id: 'contato', label: 'Contato' },
]

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [ativa, setAtiva] = useState('sobre')

  // Destaca no menu a seção visível na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setAtiva(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    secoes.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#sobre" className="logo">&lt;portfólio /&gt;</a>
        <button
          className="menu-btn"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          ☰
        </button>
        <ul className={`nav-links ${aberto ? 'aberto' : ''}`}>
          {secoes.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={ativa === id ? 'ativa' : ''} onClick={() => setAberto(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
