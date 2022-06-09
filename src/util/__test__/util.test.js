import '@testing-library/jest-dom/extend-expect';
import { capitalize, findAll, findByName, findByTypes, getTypes } from '../../util';

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
}
const LENGTH_TYPES = 20;
const TYPE = 'normal';
const TYPE_EXPECTED_COUNT = 12;

describe('Testando as funções da pasta util', () => {

    it('Verificando se são exibidos os primeiros 10 pokémons', async () => {
        const data = await findAll(10, 0).then((result) => result).catch((error) => error);
        expect({ ...data, results: [] }).toEqual(RESULT);
    }, 30000);

    it('Verificando se é retornado um pokemon buscado pelo nome', async () => {
        const data = await findByName(NOME_POKEMON).catch((error) => error);
        expect({ ...data, moves: [] }).toEqual(POKEMON);
    }, 30000);

    it('Verificando se é retornado um erro padrão', async () => {
        const data = await findByName('qwerty').catch((error) => error);
        expect(data).toEqual(RESULT_ERROR);
    }, 30000);

    it('Verificando se a função capitalize retorna a primeira letra maiúscula', () => {
        const data = capitalize(NOME_POKEMON.toLowerCase());
        expect(data).toEqual(NOME_POKEMON);
    });

    it('Verificando se a função getType retorna uma lista com a quantidade indicada na API', async () => {
        const data = await getTypes().then((response) => response.data).catch((error) => error);
        expect(data.length).toBe(LENGTH_TYPES);
    }, 30000);

    it('Verificando se é retornado os 12 primeiros pokemons da lista por tipo', async () => {
        const data = await findByTypes(TYPE).then((response) => response.data).catch((error) => error);
        expect(data.results.length).toEqual(TYPE_EXPECTED_COUNT);
    }, 30000);
})
