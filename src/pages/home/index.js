import { useEffect, useState } from 'react';
import { ContainerHome } from './styles';
import { findAll, findByName, findByTypes, findNaxtPage, getTypes } from '../../util';
import Card from '../../components/card';
import Header from '../../components/header';
import Footer from '../../components/footer';

import { ModalPokemon } from '../../components/modal';
import { Landing, Search } from './components';

export default function Home() {
    const [card, setCard] = useState([<></>]);
    const [loading, setLoading] = useState(false);
    const [next, setNext] = useState('');
    const [researched, setResearched] = useState(false);
    const [showModalPokemon, setShowModalPokemon] = useState(false);
    const [pokemon, setPokemon] = useState({});

    function linkToSearch() {
        window.scrollTo({
            top: window.innerHeight
        })
    }

    async function handleFindAll() {
        setLoading(true);
        const listPokemons = await findAll(8, 0).catch((error) => error);
        const { results } = listPokemons;
        setLoading(false);
        if (results && results.length > 0) {
            const pokemons = results.map((pokemon) => (
                <Card
                    pokemon={pokemon}
                    action={() => {
                        setPokemon(pokemon);
                        setShowModalPokemon(true)
                    }}
                />));
            setResearched(false);
            setNext(listPokemons.next);
            setCard(pokemons);
            return;
        }
        setCard(<Card />);
    }

    async function handleFindNext() {
        setLoading(true);
        const listPokemons = await findNaxtPage(next).catch((error) => error);
        const { results } = listPokemons;
        setLoading(false);
        if (results && results.length > 0) {
            const pokemons = results.map((pokemon) => (
                <Card
                    pokemon={pokemon}
                    action={() => {
                        setPokemon(pokemon);
                        setShowModalPokemon(true)
                    }}
                />));
            setNext(listPokemons.next);
            setCard([...card, pokemons]);
            return;
        }
        setCard(<Card />);
    }

    async function handleFindName(name) {
        setResearched(true);
        setLoading(true);
        name = name.toLowerCase();
        const result = await findByName(name).catch((error) => error);
        setLoading(false);
        if (result.status === 404) {
            setCard(<Card />);
            return;
        }
        const details = (
            <Card
                pokemon={result}
                action={() => {
                    setPokemon(result);
                    setShowModalPokemon(true)
                }}
            />);
        setCard([details]);
        return;
    }

    async function handleFindType(url) {
        setResearched(true);
        setLoading(true);
        const listPokemons = await findByTypes(url).then((response) => response.results).catch((error) => error);
        setLoading(false);
        if (listPokemons.status === 404) {
            setCard(<Card />);
            return;
        }
        if (listPokemons && listPokemons.length > 0) {
            const pokemons = listPokemons.map((pokemon) => (
                <Card
                    pokemon={pokemon}
                    action={() => {
                        setPokemon(pokemon);
                        setShowModalPokemon(true)
                    }}
                />));
            setCard(pokemons);
            return;
        }
        setCard(<Card />);
        return;
    }

    useEffect(() => {
        handleFindAll();
    }, []);

    return (
        <ContainerHome>
            <Header />
            <div className='body'>
                <Landing
                    actionButton={linkToSearch}
                />
                <Search
                    actionSearch={(name) => handleFindName(name)}
                    actionNext={handleFindNext}
                    actionClear={handleFindAll}
                    actionFindType={(url) => handleFindType(url)}
                    cards={card}
                    researched={researched}
                    loading={loading}
                />
            </div>
            <Footer />
            <ModalPokemon
                show={showModalPokemon}
                close={(() => setShowModalPokemon(false))}
                pokemon={pokemon}
            />
        </ContainerHome>
    )
}