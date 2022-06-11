# POKEDEX
# React JS + React Testing Library + Styled Components

<p align="center">
  <img alt="Pokedex logo" src="./src/assets/img/printscreen.png" width="400px" />
</p>

## O Projeto :computer: 

Desenvolver uma plataforma web para listagem e visualização de pokemons e seus detalhes.

Utilizei o create-react-app para a construção deste projeto, e a API REST utilizada para obter as informações sobre os pokemons foi a [PokéApi](https://pokeapi.co/).

### Funcionalidades

- :white_check_mark: **Listagem dos pokémons**: Listar os pokémons com o uso da API REST.

- :white_check_mark: **Ampliar a listagem dos pokémons**: Método para adicionar mais pokémons a lista, ampliando-se a quantia de pokémons mostrada ao usuário de acordo com a quantidade definida pelo mesmo.

- :ballot_box_with_check: **Listagem dos por tipo**: Listar os vinte primeiros pokémons filtrando por tipo.

- :white_check_mark: **Buscar pokémons**: Método para apenas um pokemon pelo seu nome/id.

- :white_check_mark: **Efeito no cartão do pokémon**: Criar uma animação ao usuário quando passar o mouse sobre o cartão.

- :white_check_mark: **Selecionar pokémon**: Exibe um modal com mais detalhes sobre o pokémon escolhido, com opção de ampliar a foto.

- :white_check_mark: **Usuário do GitHub**: É possível informar seu usuário do GitHub para poder exiibir sua foto e nome do perfil na página.

### Conceitos abordados

- Uso de flexbox para alinhar e ajustar elementos na página.

- Manipulação no eixo z com o uso da propriedade `z-index` no css.

- Uso de variáveis `:root` no css.

- Uso de `media querys` para a responsividade da página aos diversos tamanhos de tela.

- Consumo de api com o uso da lib [axios](https://github.com/axios/axios).

- Controle de paginação na listagem dos pokémons.

- Criando tema global de cores com o `createGlobalStyle` do [styled-components](https://www.styled-components.com/).

### Notas :label:

- A listagem por tipo está limitada a vinte pokemons pois ainda está sendo trabalhada a melhor forma de páginação, já que a api retorna todos os pokemons de uma vez.

- Não foi utilizado `typescript` devido a falta de dominio completo da linguagem.

## :rocket: Tecnologias

-  [React](https://pt-br.reactjs.org/)
-  [Styled-components](https://www.styled-components.com/)
-  [React-Icons](https://react-icons.netlify.com/)
-  [Axios](https://github.com/axios/axios)
