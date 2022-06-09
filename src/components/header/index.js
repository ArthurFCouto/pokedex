import { Ball, ContainerHeader, Label, List, Name } from './styles';
import profile from '../../assets/img/profile.png';

const ballBackground = (< Ball >
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
</Ball >);

export default function Header({ name, urlImage }) {
    return (
        <ContainerHeader>
            <List>
                <li>
                    <Name>Olá, <strong>{name || 'Ash Ketchum'}</strong></Name>
                    <Label>Que bom você por aqui!</Label>
                </li>
                <li className='profile'>
                    <div className='image'>
                        <img src={urlImage || profile} alt={name || 'Ash Ketchum'} />
                        {ballBackground}
                    </div>
                </li>
            </List>
        </ContainerHeader>
    )
}