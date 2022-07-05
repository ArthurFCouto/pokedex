import '@testing-library/jest-dom/extend-expect';
import { capitalize, findAll, findByName, findByTypes, getTypes, gitHubLogin } from '../../util';

const NAME_POKEMON = 'Bulbasaur';
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
const RESULT_GIT = {
    user: 'arthurfcouto',
    name: 'Arthur Couto'
};
const RESULT_ERROR_GIT = {
    data: {
        message: 'Not Found',
        documentation_url: 'https://docs.github.com/rest/reference/users#get-a-user',
    },
    status: 404,
    statusText: 'Not Found'
};
const RESULT_LIST_KEYS = [
    'count', 'next', 'previous', 'results'
];
const RESULT_NOT_FOUND = {
    data: 'Not Found',
    status: 404,
    statusText: 'Not Found'
};
const TYPE = 'https://pokeapi.co/api/v2/type/1/';
const TYPES_LENGTH = 20;

describe('Testando as funções da pasta util', () => {

    it('Verificando se a função capitalize retorna a string com a primeira letra maiúscula', () => {
        const data = capitalize(NAME_POKEMON.toLowerCase());
        expect(data).toEqual(NAME_POKEMON);
    });

    it('Verificando se é retornada uma resposta padrão para listas', async () => {
        const count = 10;
        const data = await findAll(count, 0).then((result) => result).catch((error) => error);
        const keys = Object.keys(data);
        expect(keys).toEqual(RESULT_LIST_KEYS);
    }, 30000);

    it('Verificando se são exibidos os primeiros 10 pokémons no método findAll', async () => {
        const count = 10;
        const data = await findAll(count, 0).then((result) => result).catch((error) => error);
        const { results } = data;
        expect(results.length).toBe(count);
    }, 30000);

    it('Verificando se é retornado um pokemon buscado pelo nome', async () => {
        const data = await findByName(NAME_POKEMON).then((result) => result).catch((error) => error);
        const { id } = data;
        expect(id).toBe(POKEMON.id);
    }, 30000);

    it('Verificando se é retornado um erro padrão - Not Founf', async () => {
        const data = await findByName('qwerty').then((result) => result).catch((error) => error);
        expect(data).toEqual(RESULT_NOT_FOUND);
    }, 30000);

    /*
        Aqui é comparado coma  quantidade informada na documentação da API
    */
    it('Verificando a quantidade de types retornada', async () => {
        const data = await getTypes().then((response) => response.data).catch((error) => error);
        expect(data.length).toBe(TYPES_LENGTH);
    }, 30000);

    it('Verificando se são exibidos os primeiros 20 pokémons no método findByTypes', async () => {
        const count = 20;
        const data = await findByTypes(TYPE).then((response) => response).catch((error) => error);
        const { results } = data;
        expect(results.length).toBe(count);
    }, 30000);

    it('Verificando se é retornado o nome e a imagem do perfil do GitHub', async () => {
        const data = await gitHubLogin(RESULT_GIT.user).then((response) => response).catch((error) => error);
        const { name } = data;
        expect(name).toEqual(RESULT_GIT.name);
    }, 30000);

    it('Verificando se é retornado um erro padrão para a função login no GitHub', async () => {
        const data = await gitHubLogin('q w e r t y').then((response) => response).catch((error) => error);
        expect(data).toEqual(RESULT_ERROR_GIT);
    }, 30000);
})
