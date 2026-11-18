import { Link, useParams } from 'react-router-dom'
import { jogos, type Jogo } from '../jogos'

export function FichaJogo({ jogo }: { jogo: Jogo }) {
  return <section>
    <span className="icone" aria-hidden="true">{jogo.icone}</span>
    <h2>{jogo.nome}</h2>
    <p>{jogo.genero} · {jogo.plataforma}</p>
    <p>{jogo.descricao}</p>
  </section>
}

export function BotaoFavorito({ marcado, alternar }: { marcado: boolean; alternar: () => void }) {
  return <button aria-pressed={marcado} onClick={alternar}>
    {marcado ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
  </button>
}

export default function Detalhes({ favoritos, alternarFavorito }: {
  favoritos: string[]
  alternarFavorito: (id: string) => void
}) {
  const { id } = useParams()
  const jogo = jogos.find((item) => item.id === id)

  if (!jogo) return <>
    <h1>Detalhes</h1>
    <p>{id ? 'Jogo não encontrado.' : 'Escolha um jogo para ver a ficha.'}</p>
    <Link to="/catalogo">Abrir catálogo</Link>
  </>

  return <>
    <h1>Detalhes</h1>
    <FichaJogo jogo={jogo} />
    <div className="atalhos">
      <BotaoFavorito marcado={favoritos.includes(jogo.id)} alternar={() => alternarFavorito(jogo.id)} />
      <Link to="/catalogo">Voltar ao catálogo</Link>
    </div>
  </>
}
