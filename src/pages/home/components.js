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
    actionPagination = () => { },
    cards = [],
    researched = false,
    loading = false }) {
    const [value, setValue] = useState('');
    const [selected, setSelected] = useState(8);
    const [types, setTypes] = useState([]);

    function handleActionClear() {
        actionClear()
        setValue('');
        setSelected(8);
    };

    function handleActionType(url) {
        if (url !== 'type') {
            actionFindType(url)
            setValue('');
        }
    };

    function handleActionPagination(count) {
        setSelected(count);
        actionPagination(count);
    }

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
                                        Array.isArray(types) &&
                                        types.map((type) => (
                                            <option key={type.name} value={type.url}>{type.name}</option>
                                        ))
                                    }
                                </select>
                                <select onChange={(e) => handleActionPagination(e.target.value)} value={selected}>
                                    <option key={8} value={8}>8</option>
                                    <option key={12} value={12}>12</option>
                                    <option key={16} value={16}>16</option>
                                    <option key={20} value={20}>20</option>
                                </select>
                            </li>
                        </ul>
                    </li>
                    <li className='clear' onClick={() => handleActionClear()} >
                        <IoRepeat />
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
