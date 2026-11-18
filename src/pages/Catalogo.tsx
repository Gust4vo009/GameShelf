import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { jogos, type Jogo } from '../jogos'

function normalizar(texto: string) {
  return texto.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim()
}

export function BuscaJogos({ termo, aoMudar }: { termo: string; aoMudar: (texto: string) => void }) {
  const campo = useRef<HTMLInputElement>(null)

  return <section>
    <label htmlFor="busca">Nome do jogo</label>
    <div className="busca">
      <input id="busca" ref={campo} type="search" placeholder="Ex.: Terraria" value={termo} onChange={(evento) => aoMudar(evento.target.value)} />
      <button onClick={() => { aoMudar(''); campo.current?.focus() }}>Limpar busca</button>
    </div>
  </section>
}

export function ListaJogos({ itens }: { itens: Jogo[] }) {
  if (!itens.length) return <p role="status">Nenhum jogo encontrado.</p>

  return <ul className="grade">
    {itens.map((jogo) => <li key={jogo.id}>
      <span className="icone" aria-hidden="true">{jogo.icone}</span>
      <h2><Link to={`/detalhes/${jogo.id}`}>{jogo.nome}</Link></h2>
      <p>{jogo.genero} · {jogo.plataforma}</p>
    </li>)}
  </ul>
}

export default function Catalogo() {
  const [termo, setTermo] = useState('')
  const itens = useMemo(() => {
    const consulta = normalizar(termo)
    return jogos.filter((jogo) => normalizar(jogo.nome).includes(consulta))
  }, [termo])

  return <><h1>Catálogo</h1><BuscaJogos termo={termo} aoMudar={setTermo} /><ListaJogos itens={itens} /></>
}
