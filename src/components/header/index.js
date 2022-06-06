import { Ball, ContainerHeader, Label, List, Name } from './styles';
import profile from '../../assets/img/profile.png';

const background = (
    <Ball>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
    </Ball>
);

export default function Header({ name = 'Ash Ketchum', urlImage }) {
    return (
        <ContainerHeader>
            <List>
                <li>
                    <Name>Olá, <strong>{ name }</strong></Name>
                    <Label>Bem vindo! </Label>
                </li>
                <li className='profile'>
                    <div className='image'>
                        <img src={urlImage || profile} alt={name} />
                        {background}
                    </div>
                </li>
            </List>
        </ContainerHeader>
    )
}