import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import profile from '../../../assets/img/profile.png';
import Header from '../../header';

const NAME_DEFAULT = 'Ash Ketchum';
const NAME = 'Pikachu';

describe('Testando o component Header', () => {

    it('Verifica se a imagem é exibida', () => {
        render(<Header />);
        const imageElement = screen.queryByAltText(NAME_DEFAULT);
        expect(imageElement).toBeInTheDocument();
    });

    it('Verifica se a url enviada na props é exibida', () => {
        render(<Header name={NAME} urlImage={profile} />);
        const imageElement = screen.queryByAltText(NAME);
        expect(imageElement).toBeInTheDocument();
    });

    it('Verifica se exibe o nome default', () => {
        render(<Header />);
        const strongElement = screen.getByText(NAME_DEFAULT);
        expect(strongElement).toBeInTheDocument();
    });

    it('Verifica se o nome enviado na props é exibido', () => {
        render(<Header name={NAME} />);
        const strongElement = screen.getByText(NAME);
        expect(strongElement).toBeInTheDocument();
    });
})
