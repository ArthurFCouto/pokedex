import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../../card';

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
const VALUE_EXPECT = 'Hello World!';
const mockAction = () => {
    const h1 = document.createElement('h1');
    const text = document.createTextNode(VALUE_EXPECT);
    h1.appendChild(text);
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(h1);
};

describe('Testando o component Card', () => {

    it('Verificando se as informações do pokemon são repassadas via props', () => {
        render(<Card pokemon={POKEMON} />);
        const name = POKEMON.name;
        const expectElement = screen.getByText(name[0].toUpperCase() + name.substring(1).toLowerCase());
        expect(expectElement).toBeInTheDocument();
    });

    it('Verificando se são exibidas todos os types do pokemon', () => {
        render(<Card pokemon={POKEMON} />);
        const count = POKEMON.types;
        const types = screen.getAllByTestId('types');
        expect(types.length).toBe(count.length);
    });

    it('Verificando se a função é repassada', () => {
        render(<Card pokemon={POKEMON} action={mockAction} />);
        const expectElement = screen.getByTitle(POKEMON.name);
        fireEvent.click(expectElement);
        const h1Element = screen.queryByText(VALUE_EXPECT);
        expect(h1Element).toBeInTheDocument();
    });

    it('Verificando se é enviado o card de NotFound', () => {
        render(<Card />);
        const expectElement = screen.getByText('#404');
        expect(expectElement).toBeInTheDocument();
    });
})
