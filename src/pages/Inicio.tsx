import { Link } from 'react-router-dom'
import { jogos } from '../jogos'

export function JogoDestaque() {
  const jogo = jogos[0]

  return <section className="destaque">
    <span className="icone" aria-hidden="true">{jogo.icone}</span>
    <h2>{jogo.nome}</h2>
    <p>{jogo.descricao}</p>
    <Link to={`/detalhes/${jogo.id}`}>Ver ficha</Link>
  </section>
}

export function Atalhos() {
  return <section>
    <h2>Explore a coleção</h2>
    <div className="atalhos">
      <Link to="/catalogo">Buscar jogos</Link>
      <Link to="/favoritos">Ver favoritos</Link>
    </div>
  </section>
}

export default function Inicio() {
  return <><h1>Seu próximo jogo começa aqui</h1><JogoDestaque /><Atalhos /></>
}
