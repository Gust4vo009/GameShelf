# GameShelf

Projeto da disciplina de Front-end Frameworks. O GameShelf reúne seis jogos em um catálogo que permite pesquisar por nome, consultar a ficha de cada título e montar uma lista pessoal de favoritos. A aplicação foi desenvolvida com React e TypeScript, usa React Router para a navegação e Vite para execução e compilação.

## Da busca aos favoritos

Ao digitar `terr` no **Catálogo**, a lista exibe *Terraria*. Um clique no título abre a ficha com gênero, plataformas e descrição. Na própria ficha, é possível marcar o jogo como favorito. Ele passa a aparecer em **Favoritos** e continua na lista ao recarregar a página no mesmo navegador. Clicar novamente no botão da ficha remove o jogo da coleção pessoal.

## Páginas e componentes

| Página | Componentes | Função |
| --- | --- | --- |
| Início | `JogoDestaque` e `Atalhos` | Apresentam o destaque da coleção e dão acesso ao catálogo e aos favoritos. |
| Catálogo | `BuscaJogos` e `ListaJogos` | Filtram os títulos conforme a digitação e informam quando a busca não encontra resultados. |
| Detalhes | `FichaJogo` e `BotaoFavorito` | Mostram os dados do jogo escolhido e permitem adicioná-lo aos favoritos ou removê-lo. |
| Favoritos | `ListaFavoritos` e `ResumoFavoritos` | Exibem os jogos salvos e a quantidade de títulos na lista. Quando ela está vazia, oferecem um caminho de volta ao catálogo. |
| Sobre | `ComoUsar` e `Equipe` | Orientam a navegação e apresentam os integrantes do grupo. |

Os dados dos jogos ficam em `src/jogos.ts`. O tipo `Jogo` descreve a estrutura de cada item da coleção. Ao abrir `/detalhes/terraria`, por exemplo, a página usa o identificador `terraria` para localizar a ficha correspondente. O mesmo identificador permite guardar apenas os IDs dos favoritos no `localStorage`. Em `src/App.tsx`, esse estado é compartilhado entre a ficha e a lista de favoritos.

## Execução local

Com Node.js 22.12 ou superior instalado, abra um terminal na pasta `gameshelf`, que contém o arquivo `package.json`. Execute os comandos em sequência e abra no navegador o endereço exibido pelo Vite.

```sh
npm ci
npm run dev
```

No PowerShell do Windows, os comandos equivalentes são `npm.cmd ci` e `npm.cmd run dev`. Para verificar os tipos e gerar a versão de produção, use `npm run build`.

## Ordem de apresentação

| Ordem | Integrante | Tema |
| --- | --- | --- |
| 1 | Antônio Gustavo | Abertura, página Início e navegação |
| 2 | João Máximo | Catálogo, busca e resultados |
| 3 | Lucas Gabriel | Ficha do jogo e botão de favorito |
| 4 | Giovanni Mannoel | Lista de favoritos e armazenamento |
| 5 | Vinícius Aleixes | Página Sobre, TypeScript e fechamento |

## Telas do projeto
<img width="1917" height="1077" alt="Exmplo Gameshelf 1" src="https://github.com/user-attachments/assets/fff52b26-2d46-4909-a6f7-477899b7e240" />
<img width="1917" height="1077" alt="Exmplo Gameshelf 3" src="https://github.com/user-attachments/assets/c2010f56-1785-412f-bba2-964ac3d261d1" />
<img width="1917" height="1077" alt="Exmplo Gameshelf 2" src="https://github.com/user-attachments/assets/925474ed-c82a-4ee7-9e30-13c56ae8416c" />
