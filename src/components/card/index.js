import { Container, Title, Types } from './styles';
import pokeball from '../../assets/img/pokeball-3.png'

const cardNotFount = (
    <Container title='Não encontrado' types='error' className='revealCard'>
        <Title>Ops!</Title>
        <Types>Nada encontrado</Types>
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
        return (
            <Container title={name} types={types} onClick={() => action()} className='revealCard'>
                <Title>{name[0].toUpperCase() + name.substring(1).toLowerCase()}</Title>
                {
                    types.map((type, index) => (
                        <Types key={index} data-testid='types'>{type[0].toUpperCase() + type.substring(1).toLowerCase()}</Types>
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