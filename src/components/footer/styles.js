import styled from 'styled-components';
import config from '../../config';

const tablet = config.media.tablet.maxWidth;

export const ContainerFooter = styled.footer`
    display: grid;
    place-items: center;
    background-color: var(--color-dark);
    padding: 1rem 1.5rem;
    border-radius: 1rem 1rem 0 0;
    color: var(--color-white);

    img {
        transition: all .2s;
        filter: drop-shadow(var(--shadow-profile));
        
        @media(max-width: ${tablet}) {
            max-width: 50%;
        }
    }

`;

export const Info = styled.aside`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    width: 100%;

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        column-gap: 5px;
    }
`;