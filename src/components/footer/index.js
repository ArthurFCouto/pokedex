import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ContainerFooter, Info } from './styles';
import pokemon from '../../assets/img/pokemon.png';

export default function Footer() {
    return (
        <ContainerFooter>
            <img src={pokemon} alt='Pokemon' />
            <Info data-testid='aside'>
                <div>© 2022 Developed and created by Arthur Couto</div>
                <ul>
                    <li data-testid='li'>
                        <a href='https://github.com/ArthurFCouto/'><FaGithub /></a>
                    </li>
                    <li data-testid='li'>
                        <a href='https://www.instagram.com/arthur_fcouto/'><FaInstagram /></a>
                    </li>
                    <li data-testid='li'>
                        <a href='https://www.linkedin.com/in/arthur-couto-b8181743/'><FaLinkedin /></a>
                    </li>
                </ul>
            </Info>
        </ContainerFooter>
    )
}