import '@testing-library/jest-dom/extend-expect';
import { capitalize, findAll, findByName, findByTypes, getTypes, gitHubLogin } from '../../util';

const NOME_POKEMON = 'Bulbasaur';
const POKEMON = {
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    abilities: [
        'overgrow',
        'chlorophyll'
    ],
    moves: [],
    types: [
        'grass',
        'poison'
    ],
    stats: [
        { 'base_stat': 45, 'name': 'hp' },
        { 'base_stat': 49, 'name': 'attack' },
        { 'base_stat': 49, 'name': 'defense' },
        { 'base_stat': 65, 'name': 'special-attack' },
        { 'base_stat': 65, 'name': 'special-defense' },
        { 'base_stat': 45, 'name': 'speed' }
    ],
    height: 7,
    id: 1,
    name: 'bulbasaur',
    weight: 69
};
const RESULT = {
    count: 1126,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
    previous: null,
    results: []
};
const RESULT_ERROR = {
    data: 'Not Found',
    status: 404,
    statusText: 'Not Found'
};
const RESULT_ERROR_GIT = {
    data: {
        message: 'Not Found',
        documentation_url: 'https://docs.github.com/rest/reference/users#get-a-user',
    },
    status: 404,
    statusText: 'Not Found'
};
const LENGTH_TYPES = 20;
const TYPE = 'https://pokeapi.co/api/v2/type/1/';
const TYPE_EXPECTED_COUNT = 20;
const NAME_LOGIN_GIT = 'arthurfcouto';
const USER = {
    name: 'Arthur Couto',
    image: 'https://avatars.githubusercontent.com/u/70111948?v=4'
};

describe('Testando as funções da pasta util', () => {

    it('Verificando se a função capitalize retorna a primeira letra maiúscula', () => {
        const data = capitalize(NOME_POKEMON.toLowerCase());
        expect(data).toEqual(NOME_POKEMON);
    });

    it('Verificando se são exibidos os primeiros 10 pokémons', async () => {
        const data = await findAll(10, 0).then((result) => result).catch((error) => error);
        expect({ ...data, results: [] }).toEqual(RESULT);
    }, 30000);

    it('Verificando se é retornado um pokemon buscado pelo nome', async () => {
        const data = await findByName(NOME_POKEMON).then((result) => result).catch((error) => error);
        expect({ ...data, moves: [] }).toEqual(POKEMON);
    }, 30000);

    it('Verificando se é retornado um erro padrão', async () => {
        const data = await findByName('qwerty').then((result) => result).catch((error) => error);
        expect(data).toEqual(RESULT_ERROR);
    }, 30000);

    it('Verificando se é retornado uma lista com a quantidade indicada na API', async () => {
        const data = await getTypes().then((response) => response.data).catch((error) => error);
        expect(data.length).toBe(LENGTH_TYPES);
    }, 30000);

    it('Verificando se é retornado os 20 (vinte) primeiros pokemons da lista por tipo', async () => {
        const data = await findByTypes(TYPE).then((response) => response).catch((error) => error);
        expect(data.results.length).toEqual(TYPE_EXPECTED_COUNT);
    }, 30000);

    it('Verificando se é retornado o nome e a imagem do perfil do GitHub', async () => {
        const data = await gitHubLogin(NAME_LOGIN_GIT).then((response) => response).catch((error) => error);
        expect(data).toEqual(USER);
    }, 30000);

    it('Verificando se é retornado um erro padrão para a função login no GitHub', async () => {
        const data = await gitHubLogin('q w e r t y').then((response) => response).catch((error) => error);
        expect(data).toEqual(RESULT_ERROR_GIT);
    }, 30000);
})
