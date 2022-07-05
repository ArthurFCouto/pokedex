# POKEDEX
# React JS + React Testing Library + Styled Components

<p align="center">
  <img alt="Pokedex logo" src="./src/assets/img/printscreen.png" width="400px" />
</p>

## :computer: O Projeto

Desenvolver uma plataforma web para listagem e visualização de pokemons e seus detalhes.

Utilizei o create-react-app para a construção deste projeto, e a API REST utilizada para obter as informações sobre os pokemons foi a [PokeApi](https://pokeapi.co/).

### :gear: Funcionalidades

- :white_check_mark: **Listagem dos pokemons**: Listar os pokemons com o uso da API REST.

- :white_check_mark: **Ampliar a listagem dos pokemons**: Método para adicionar mais pokemons a lista, ampliando-se a quantia de pokemons mostrada ao usuário de acordo com a quantidade definida pelo mesmo.

- :ballot_box_with_check: **Listagem dos pokemons por tipo**: Listar os vinte primeiros pokemons filtrando por tipo.

- :white_check_mark: **Buscar pokemons**: Método para mostrar apenas um pokemon pelo seu nome/id.

- :white_check_mark: **Efeito no card do pokemon**: Criar uma animação ao usuário quando passar o mouse sobre o card.

- :white_check_mark: **Selecionar pokemon**: Exibe um modal com mais detalhes sobre o pokemon escolhido, com opção de ampliar a foto.

- :white_check_mark: **Usuário do GitHub**: É possível informar seu usuário do GitHub para exibir sua foto e nome do perfil na página.

### :bookmark_tabs: Conceitos abordados

- Uso de flexbox para alinhar e ajustar elementos na página.

- Manipulação no eixo z com o uso da propriedade `z-index` no css.

- Uso de variáveis `:root` no css.

- Uso de `media querys` para a responsividade da página aos diversos tamanhos de tela.

- Consumo de api com o uso da lib [axios](https://github.com/axios/axios).

- Controle de paginação na listagem dos pokemons (consumo da api).

- Criação de tema global com o `createGlobalStyle` do [styled-components](https://www.styled-components.com/).

### :label: Notas

- A listagem por tipo está limitada a vinte pokemons pois ainda está sendo trabalhada a melhor forma de páginação, já que a api retorna todos os pokemons de uma vez.

- Não foi utilizado `typescript` devido a falta de dominio completo da linguagem.

## :rocket: Tecnologias

-  [React](https://pt-br.reactjs.org/)
-  [Styled-components](https://www.styled-components.com/)
-  [React-Icons](https://react-icons.netlify.com/)
-  [Axios](https://github.com/axios/axios)
