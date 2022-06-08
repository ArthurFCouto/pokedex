import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { capitalize } from '../../../util';
import { ModalPokemon } from '../../modal';

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
const VALUE_EXPECT = 'Hello World!';
const mockAction = () => {
    const h1 = document.createElement('h1');
    const text = document.createTextNode(VALUE_EXPECT);
    h1.appendChild(text);
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(h1);
};

describe('Testando o component Modal', () => {

    it('Verificando se as informações do pokemon são repassadas via props', () => {
        render(<ModalPokemon pokemon={POKEMON} show={true} />);
        const expectElement = screen.getByText(capitalize(POKEMON.name));
        expect(expectElement).toBeInTheDocument();
    });

    it('Verificando se é retirado do DOM quando solicitado', () => {
        render(<ModalPokemon pokemon={POKEMON} show={false} />);
        const expectElement = screen.queryByText(capitalize(POKEMON.name));
        expect(expectElement).not.toBeInTheDocument();
    });

    it('Verificando se é feito o map no types', () => {
        render(<ModalPokemon pokemon={POKEMON} show={true} />);
        const [, text] = POKEMON.types;
        const expectElement = screen.getByText(capitalize(text));
        expect(expectElement).toBeInTheDocument();
    });

    it('Verificando se é feito o map no stats', () => {
        render(<ModalPokemon pokemon={POKEMON} show={true} />);
        const [{name}] = POKEMON.stats;
        const expectElement = screen.getByText(name);
        expect(expectElement).toBeInTheDocument();
    });

    it('Verificando se a função é repassada o onClose', () => {
        render(<ModalPokemon pokemon={POKEMON} show={true} close={mockAction} />);
        const buttonElement = screen.getByTestId('close');
        fireEvent.click(buttonElement);
        const h1Element = screen.queryByText(VALUE_EXPECT);
        expect(h1Element).toBeInTheDocument();
    });
})
