import { Ball, ContainerHeader, Label, List, Name } from './styles';
import { IoLogoGithub } from 'react-icons/io5';

const ballBackground = (< Ball >
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
</Ball >);

export default function Header({ name, urlImage, actionLogin }) {
    return (
        <ContainerHeader>
            <List>
                <li className='name'>
                    <Name  onClick={() => actionLogin()} title='Alterar com usuário do Git'>
                        <h2>Olá, <strong>{name}</strong></h2><IoLogoGithub />
                    </Name>
                    <Label>Que bom você por aqui!</Label>
                </li>
                <li className='profile'>
                    <div className='image'>
                        <img src={urlImage} alt={name} />
                        {ballBackground}
                    </div>
                </li>
            </List>
        </ContainerHeader>
    )
}