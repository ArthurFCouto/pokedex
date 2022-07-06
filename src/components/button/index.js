import { Container } from './styles';
import pokeball from '../../assets/img/pokeball-2.png'

export default function Button({
    title = 'Ok',
    action = () => { },
    showImg,
    typeButton = 'button' }) {
    return (
        <Container
            title={title}
            onClick={() => action()}
            type={typeButton} >
            {title}
            {
                showImg && (<img src={pokeball} alt={title} />)
            }
        </Container>
    )
}