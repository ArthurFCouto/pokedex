import '@testing-library/jest-dom/extend-expect';
import { findAll, findByName, findNaxtPage, getBackgroundColor } from '../../util';

const NOME_POKEMON = 'bulbasaur';
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
        {
            'base_stat': 45,
            name: 'hp'
        },
        { "base_stat": 49, "name": "attack" },
        { "base_stat": 49, "name": "defense" },
        { "base_stat": 65, "name": "special-attack" },
        { "base_stat": 65, "name": "special-defense" },
        { "base_stat": 45, "name": "speed" }
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
const RESULT_NEXT = {
    count: 1126,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=11&limit=1',
    previous: 'https://pokeapi.co/api/v2/pokemon?offset=9&limit=1',
    results: []
};
const RESULT_ERROR = {
    data: 'Not Found',
    status: 404,
    statusText: 'Not Found'
}

describe('Testando as funções da pasta util', () => {
    /*
    it('Verificando se são exibidos os primeiros 10 pokémons', async () => {
        const data = await findAll(0, 10).then((result) => result).catch((error) => error);
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

    it('Verificando se é retornado a próxima lista', async () => {
        const data = await findNaxtPage(RESULT.next).catch((error) => error);
        expect({ ...data, results: [] }).toEqual(RESULT_NEXT);
    }, 30000);

    it('Verificando se é retornado uma cor ao passar um type', async () => {
        const data = getBackgroundColor('grass');
        expect(data).toEqual('#48d0b0');
    }, 30000);

    it('Verificando se é retornado uma cor referente ao primeiro type ao passar um array', async () => {
        const data = getBackgroundColor(['grass', 'fire']);
        expect(data).toEqual('#48d0b0');
    }, 30000);
    */

    it('Verificando se é retornado uma cor padrão ao não passar o type', async () => {
        const data = getBackgroundColor();
        expect(data).toEqual('#ffd86f');
    }, 30000);
})
