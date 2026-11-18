import { Link } from 'react-router-dom'
import { jogos, type Jogo } from '../jogos'

export function ResumoFavoritos({ total }: { total: number }) {
  return <p>{total} {total === 1 ? 'jogo salvo' : 'jogos salvos'} neste navegador.</p>
}

export function ListaFavoritos({ itens }: { itens: Jogo[] }) {
  if (!itens.length) return <p>Sua lista está vazia. <Link to="/catalogo">Explore o catálogo</Link>.</p>

  return <ul className="grade">
    {itens.map((jogo) => <li key={jogo.id}>
      <h2><Link to={`/detalhes/${jogo.id}`}>{jogo.nome}</Link></h2>
      <p>{jogo.genero}</p>
    </li>)}
  </ul>
}

export default function Favoritos({ favoritos }: { favoritos: string[] }) {
  const itens = jogos.filter((jogo) => favoritos.includes(jogo.id))
  return <><h1>Favoritos</h1><ResumoFavoritos total={itens.length} /><ListaFavoritos itens={itens} /></>
}
