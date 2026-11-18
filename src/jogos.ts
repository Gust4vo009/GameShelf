export const jogos = [
  { id: 'minecraft', nome: 'Minecraft', genero: 'Sandbox', plataforma: 'PC, consoles e celular', icone: '⛏️', descricao: 'Explore mundos de blocos, construa estruturas e reúna recursos para sobreviver.' },
  { id: 'terraria', nome: 'Terraria', genero: 'Aventura 2D', plataforma: 'PC, consoles e celular', icone: '🌳', descricao: 'Cave em busca de recursos, fabrique equipamentos e enfrente chefes em um mundo 2D.' },
  { id: 'stardew-valley', nome: 'Stardew Valley', genero: 'Simulação', plataforma: 'PC, consoles e celular', icone: '🌱', descricao: 'Restaure a fazenda que você herdou, plante, pesque e conheça os moradores da vila.' },
  { id: 'hollow-knight', nome: 'Hollow Knight', genero: 'Metroidvania', plataforma: 'PC e consoles', icone: '🗡️', descricao: 'Explore o reino subterrâneo de Hallownest e desbloqueie habilidades para alcançar novas áreas.' },
  { id: 'portal-2', nome: 'Portal 2', genero: 'Puzzle', plataforma: 'PC e consoles', icone: '🌀', descricao: 'Use uma arma de portais para atravessar obstáculos e resolver as salas de teste da Aperture Science.' },
  { id: 'celeste', nome: 'Celeste', genero: 'Plataforma 2D', plataforma: 'PC e consoles', icone: '🏔️', descricao: 'Ajude Madeline a escalar uma montanha usando saltos, escalada e impulsos no ar.' },
]

export type Jogo = (typeof jogos)[number]
