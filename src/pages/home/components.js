import { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import Button from '../../components/button';
import wallpaper from '../../assets/img/wallpaper.png'
import {
    ColumnLeft, ColumnRight, ContainerLanding,
    CardList, Menu, ContainerSearch
} from './styles';

export function Landing({ actionButton = () => { } }) {
    return (
        <ContainerLanding>
            <ColumnLeft className='revealLeft'>
                <h1>Qual pokemon você quer <span>escolher</span>?</h1>
                <h3>Confira aqui, informações sobre mais de 250 pokemons.</h3>
                <Button
                    title={'Buscar pokemons'}
                    action={actionButton}
                />
            </ColumnLeft>
            <ColumnRight className='revealRight'>
                <img src={wallpaper} alt='Pokemons' />
            </ColumnRight>
        </ContainerLanding>
    )
}

export function Search({ actionSearch = () => { }, cards = [], actionNext = () => { } }) {
    const [value, setValue] = useState('');

    return (
        <ContainerSearch>
            <Menu>
                <h1>São mais de 250 pokemons para você pesquisar e escolher</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    actionSearch(value);
                }} >
                    <input
                        type='text'
                        placeholder='Bulbasaur'
                        value={value}
                        onChange={(e) => { setValue(e.target.value) }} />
                    <button type='submit'>
                        <FaSearch />
                    </button>
                </form>
                <div>
                    <FaFilter />
                    <ul>
                        <li>
                            <select>
                                <option value='type'>Tipo</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option value='order'>Ordem</option>
                                <option value='toDown'>Crescente</option>
                                <option value='toUp'>Decrescente</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </Menu>
            <CardList>
                {cards}
            </CardList>
            <Button
                title={'Carregar mais'}
                action={actionNext}
                showImg={true}
            />
        </ContainerSearch>
    )
}