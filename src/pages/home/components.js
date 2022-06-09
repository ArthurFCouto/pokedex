import { useEffect, useState } from 'react';
import { IoFilterSharp, IoRepeat, IoSearch } from 'react-icons/io5';
import Button from '../../components/button';
import wallpaper from '../../assets/img/wallpaper.png';
import {
    ColumnLeft, ColumnRight, ContainerLanding,
    CardList, HeaderSearch, ContainerSearch
} from './styles';
import { getTypes } from '../../util';

export function Landing({ actionButton = () => { } }) {
    return (
        <ContainerLanding>
            <ColumnLeft>
                <h1>Qual pokemon você quer <span>escolher</span>?</h1>
                <h3>Confira aqui, informações sobre mais de 250 pokemons.</h3>
                <Button
                    title={'Buscar pokemons'}
                    action={actionButton}
                />
            </ColumnLeft>
            <ColumnRight>
                <img src={wallpaper} alt='Pokemons' />
            </ColumnRight>
        </ContainerLanding>
    )
}

export function Search({
    actionSearch = () => { },
    actionNext = () => { },
    actionClear = () => { },
    actionFindType = () => { },
    cards = [],
    researched = false,
    loading = false }) {
    const [value, setValue] = useState('');
    const [types, setTypes] = useState([]);

    function handleActionClear() {
        actionClear()
        setValue('');
    };

    function handleActionType(url) {
        if (url !== 'type') {
            actionFindType(url)
            setValue('');
        }
    };

    async function getAllTypes() {
        await getTypes().then((response) => setTypes(response.data)).catch((error) => console.log(error));
    }

    useEffect(() => {
        getAllTypes();
    })

    return (
        <ContainerSearch>
            <HeaderSearch>
                <h2 className='revealLeft'>São mais de 250 pokemons para você pesquisar e escolher</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    actionSearch(value);
                }} >
                    <input
                        type='text'
                        placeholder='Pesquisar pokemon'
                        value={value}
                        onChange={(e) => { setValue(e.target.value) }} />
                    <button type='submit'>
                        <IoSearch />
                    </button>
                </form>
                <ul className='lineFilter'>
                    <li className='filter'>
                        <IoFilterSharp />
                        <ul>
                            <li>
                                <select onChange={(e) => handleActionType(e.target.value)}>
                                    <option key={'type'} value='type'>Tipo</option>
                                    {
                                        types.map((type) => (
                                            <option key={type.name} value={type.url}>{type.name}</option>
                                        ))
                                    }
                                </select>
                            </li>
                        </ul>
                    </li>
                    <li className='clear'>
                        <IoRepeat onClick={() => handleActionClear()} />
                    </li>
                </ul>
            </HeaderSearch>
            <CardList loading={loading}>
                {cards}
            </CardList>
            {
                !researched && (
                    <Button
                        title={''}
                        action={actionNext}
                        showImg={true}
                    />
                )
            }
        </ContainerSearch>
    )
}