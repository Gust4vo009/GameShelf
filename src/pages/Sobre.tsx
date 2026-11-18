export function ComoUsar() {
  return <section>
    <h2>Como usar</h2>
    <ol>
      <li>Busque um jogo no catálogo.</li>
      <li>Abra a ficha e adicione o jogo aos favoritos.</li>
      <li>Volte à ficha a qualquer momento para removê-lo.</li>
    </ol>
    <p>Seus favoritos ficam salvos neste navegador.</p>
  </section>
}

export function Equipe() {
  return <section>
    <h2>Equipe</h2>
    <p>Projeto de Front-end Frameworks.</p>
    <ul>
      <li>Antônio Gustavo</li>
      <li>Lucas Gabriel</li>
      <li>Giovanni Mannoel</li>
      <li>Vinícius Aleixes</li>
      <li>João Máximo</li>
    </ul>
  </section>
}

export default function Sobre() {
  return <><h1>Sobre o GameShelf</h1><ComoUsar /><Equipe /></>
}
