import { useEffect } from 'react'
import { perfil } from './data/portfolio'
import Header from './components/Header'
import Hero from './components/Hero'
import Competencias from './components/Competencias'
import Projetos from './components/Projetos'
import Contato from './components/Contato'

export default function App() {
  useEffect(() => {
    document.title = `${perfil.nome} | Portfólio`
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projetos />
        <Competencias />
        <Contato />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {perfil.nome} · FATEC São José dos Campos
      </footer>
    </>
  )
}
