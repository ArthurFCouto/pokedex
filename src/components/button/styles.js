import styled from 'styled-components';
import config from '../../config';

const mobile = config.media.mobile.maxWidth;

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--padding-default);
    border-radius: 0.5rem;
    background-color: var(--color-button);
    font-size: 1.2rem;
    color: var(--color-white);
    transition: background-color .2s;
    cursor: pointer;

    :hover {
        background-color: var(--color-button-hover);
    }
    
    img {
        max-width: 1rem;
        max-height: 1rem;
    }

    @media(max-width: ${mobile}) {
        font-size: 0.8rem;
        padding: 0.8rem 1.3rem;
    }
`;