import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../button';

const TITLE_DEFAULT = 'Ok';
const TITLE = 'Execute';
const VALUE_EXPECT = 'Hello World!';
const mockAction = () => {
    const h1 = document.createElement('h1');
    const text = document.createTextNode(VALUE_EXPECT);
    h1.appendChild(text);
    const div = document.getElementsByTagName('div')[0];
    div.appendChild(h1);
};

describe('Testando o component Button', () => {

    it('Verificando o valor default para title', () => {
        render(<Button />);
        const buttonElement = screen.getByText(TITLE_DEFAULT);
        expect(buttonElement).toBeInTheDocument();
    });

    it('Verificando se o valor é repassado ao title', () => {
        render(<Button title={TITLE} />);
        const buttonElement = screen.getByText(TITLE);
        expect(buttonElement).toBeInTheDocument();
    });

    it('Verificando se a imagem é ocultada por default', () => {
        render(<Button />);
        const imageElement = screen.queryByAltText(TITLE_DEFAULT);
        expect(imageElement).not.toBeInTheDocument();
    });

    it('Verificando se a imagem é exibida', () => {
        render(<Button showImg={true} />);
        const imageElement = screen.getByAltText(TITLE_DEFAULT);
        expect(imageElement).toBeInTheDocument();
    });

    it('Verificando se a função é repassada', () => {
        render(<Button action={mockAction} />);
        const buttonElement = screen.getByText(TITLE_DEFAULT);
        fireEvent.click(buttonElement);
        const h1Element = screen.queryByText(VALUE_EXPECT);
        expect(h1Element).toBeInTheDocument();
    });
})
