import { useEffect, useState } from 'react';
import { ContainerHome } from './styles';
import { findAll, findByName, findNaxtPage } from '../../util';
import Card from '../../components/card';
import Header from '../../components/header';
import Footer from '../../components/footer';

import { ModalPokemon } from '../../components/modal';
import { Landing, Search } from './components';

export default function Home() {
    const [card, setCard] = useState([<></>]);
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
        const listPokemons = await findAll(0, 8).catch((error) => error);
        const { results } = listPokemons;
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
        const listPokemons = await findNaxtPage(next).catch((error) => error);
        const { results } = listPokemons;
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
        const result = await findByName(name).catch((error) => error);
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

    useEffect(() => {
        // alert('Largura da tela: ' + window.innerWidth);
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
                    cards={card}
                    actionNext={handleFindNext}
                    actionClear={handleFindAll}
                    researched={researched}
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