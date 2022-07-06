import { Container, Title, Types } from './styles';
import pokeball from '../../assets/img/pokeball-3.png'
import { capitalize } from '../../util';

const cardNotFount = (
    <Container
        title='Não encontrado'
        types='error'
        className='revealCard' >
        <Title>Ops!</Title>
        <Types>Tivemos um</Types>
        <Types>probleminha</Types>
        <span className='id'>
            #404
        </span>
        <img
            className='notFound'
            src={pokeball}
            alt='Sem pokemons para exibir' />
    </Container>
)

export default function Card({ pokemon, action = () => { } }) {
    try {
        const { name, types, id, image } = pokemon;
        const backgroundColor = types[0] === 'normal' && types.length > 1 ? types[1] : types[0];
        return (
            <Container
                title={name}
                bgColor={backgroundColor}
                onClick={() => action()}
                className='revealCard' >
                <Title>{capitalize(name)}</Title>
                {
                    types.map((type, index) => (
                        <Types key={index} data-testid='types'>{capitalize(type)}</Types>
                    ))
                }
                <span className='id'>
                    #{id}
                </span>
                <img
                    className='image'
                    src={image}
                    alt={name} />
            </Container>
        )
    } catch {
        return cardNotFount;
    }
}