import { Container } from './styles';
import pokeball from '../../assets/img/pokeball-2.png'

export default function Button({ title = 'Ok', action = () => { }, showImg }) {

    return (
        <Container
            title={title}
            onClick={() => action()}
        >
            {title}
            {
                showImg && (<img src={pokeball} alt={title} />)
            }
        </Container>
    )
}