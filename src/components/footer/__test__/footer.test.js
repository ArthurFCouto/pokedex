import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Footer from '../../footer';

describe('Testando o component Footer', () => {
    
    it('Verifica se a imagem é exibida', () => {
        render(<Footer />);
        const imageElement = screen.queryByAltText('Pokemon');
        expect(imageElement).toBeInTheDocument();
    });

    it('Verificando se o aside é exibido', () => {
        render(<Footer />);
        const asideElement = screen.getByTestId('aside');
        expect(asideElement).toBeInTheDocument();
    });

    it('Verificando se são exibidas três <li>', () => {
        render(<Footer />);
        const liElement = screen.getAllByTestId('li');
        expect(liElement.length).toBe(3);
    });
})
