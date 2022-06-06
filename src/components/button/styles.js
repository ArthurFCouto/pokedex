import styled from 'styled-components';

export const Container = styled.button`
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    background-color: var(--color-button);
    color: var(--color-white);
    cursor: pointer;
    transition: all .2s;
    font-size: 1.2rem;

    :hover {
        background-color: var(--color-button-hover);
    }
    
    img {
        max-width: 2.5rem;
        max-height: 2.5rem;
    }

    @media(max-width: 600px) {
        font-size: 0.8rem;
        padding: 0.8rem 1.3rem;
    }
`;