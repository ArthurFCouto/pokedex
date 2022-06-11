import { useEffect, useReducer, useState } from 'react';
import { ContainerHome } from './styles';
import { Landing, Search } from './components';
import { findAll, findByName, findByTypes } from '../../util';
import { ModalLogin, ModalPokemon } from '../../components/modal';
import Header from '../../components/header';
import Card from '../../components/card';
import Footer from '../../components/footer';
import profile from '../../assets/img/profile.png';

export default function Home() {
    const [card, setCard] = useState([<></>]);
    const [loading, setLoading] = useState(true);
    const [researched, setResearched] = useState(false);
    const [showModalPokemon, setShowModalPokemon] = useState(false);
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [pokemon, setPokemon] = useState({});
    const [pagination, dispatchPagination] = useReducer(Pagination, {
        limit: 8,
        offSet: 0
    });

    function Pagination(state, action) {
        const { actionType, limit, offSet } = action;
        switch (actionType) {
            case 'next':
                return {
                    ...state,
                    offSet,
                }
            case 'alter':
                return {
                    ...state,
                    limit
                }
            default:
                return {
                    limit: 8,
                    offSet: 0
                };
        }
    }

    const [user, dispatchUser] = useReducer(User, {
        name: 'Ash Ketchum',
        image: profile
    });

    function User(state, action) {
        const { data } = action;
        return {
            name: data.name,
            image: data.image,
        };
    }

    function handlePagination(count) {
        const limit = {
            '8': 8,
            '12': 12,
            '16': 16,
            '20': 20
        }
        dispatchPagination({ actionType: 'alter', limit: limit[count] || 8 })
    }

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
                />)
            );
            setCard(pokemons);
            setResearched(false);
            dispatchPagination({ actionType: 'next', offSet: 8 });
            return;
        }
        setCard(<Card />);
    }

    async function handleFindNext() {
        if (loading) {
            return;
        }
        setLoading(true);
        const listPokemons = await findAll(pagination.limit, pagination.offSet).catch((error) => error);
        const { results } = listPokemons;
        dispatchPagination({ actionType: 'next', offSet: pagination.offSet + pagination.limit })
        setLoading(false);
        if (results && results.length > 0) {
            const pokemons = results.map((pokemon) => (
                <Card
                    pokemon={pokemon}
                    action={() => {
                        setPokemon(pokemon);
                        setShowModalPokemon(true)
                    }}
                />)
            );
            setCard([...card, pokemons]);
            return;
        }
        setCard(<Card />);
    }

    async function handleFindName(name) {
        setResearched(true);
        setLoading(true);
        name = name.toLowerCase();
        const pokemon = await findByName(name).catch((error) => error);
        setLoading(false);
        if (pokemon.status === 404) {
            setCard(<Card />);
            return;
        }
        const details = (
            <Card
                pokemon={pokemon}
                action={() => {
                    setPokemon(pokemon);
                    setShowModalPokemon(true)
                }}
            />);
        setCard([details]);
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
                />)
            );
            setCard(pokemons);
            return;
        }
        setCard(<Card />);
    }

    useEffect(() => {
        handleFindAll();
    }, []);

    return (
        <ContainerHome>
            <Header
                name={user.name}
                urlImage={user.image}
                actionLogin={() => setShowModalLogin(true)}
            />
            <div className='body'>
                <Landing
                    actionButton={linkToSearch}
                />
                <Search
                    actionSearch={(name) => handleFindName(name)}
                    actionNext={handleFindNext}
                    actionClear={handleFindAll}
                    actionFindType={(url) => handleFindType(url)}
                    actionPagination={(count)=> handlePagination(count)}
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
            <ModalLogin
                show={showModalLogin}
                close={(() => setShowModalLogin(false))}
                alterUser={(data) => dispatchUser({ data })}
            />
        </ContainerHome>
    )
}