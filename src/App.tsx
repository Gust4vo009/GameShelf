import { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import Detalhes from './pages/Detalhes'
import Favoritos from './pages/Favoritos'
import Sobre from './pages/Sobre'
import { jogos } from './jogos'

const chave = 'catalogo-jogos:favoritos'

function lerFavoritos(): string[] {
  try {
    const dados: unknown = JSON.parse(localStorage.getItem(chave) ?? '[]')
    return Array.isArray(dados) ? jogos.filter(({ id }) => dados.includes(id)).map(({ id }) => id) : []
  } catch {
    return []
  }
}

export default function App() {
  const [favoritos, setFavoritos] = useState(lerFavoritos)
  const [falhaAoSalvar, setFalhaAoSalvar] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(chave, JSON.stringify(favoritos))
      setFalhaAoSalvar(false)
    } catch {
      setFalhaAoSalvar(true)
    }
  }, [favoritos])

  function alternarFavorito(id: string) {
    setFavoritos((atuais) => atuais.includes(id)
      ? atuais.filter((atual) => atual !== id)
      : [...atuais, id])
  }

  return <>
    <header>
      <strong>GameShelf</strong>
      <nav aria-label="Menu principal">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/catalogo">Catálogo</NavLink>
        <NavLink to="/detalhes">Detalhes</NavLink>
        <NavLink to="/favoritos">Favoritos</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>
    </header>
    <main>
      {falhaAoSalvar && <p role="status">O navegador bloqueou o armazenamento. Os favoritos duram até fechar ou recarregar a página.</p>}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/detalhes/:id?" element={<Detalhes favoritos={favoritos} alternarFavorito={alternarFavorito} />} />
        <Route path="/favoritos" element={<Favoritos favoritos={favoritos} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </main>
  </>
}
