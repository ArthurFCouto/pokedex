import styled from 'styled-components';
import config from '../../config';

const mobile = config.media.mobile.maxWidth;

export const Container = styled.div`
    width: 100%;
    min-width: var(--minWidth-card);
    max-width: var(--maxWidth-card);
    aspect-ratio: 13/9;
    border-radius: var(--border-radius);
    padding: 1rem;
    color: var(--color-white);
    background-color: ${(props) => props.theme.colors.backgroundCard[props.types] || 'var(--color-dark)'};
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    align-items: baseline;
    overflow: hidden;
    transition: box-shadow .2s;
    animation: fadeIn 1s;

    .id {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: initial;
        opacity: 0.3;
        font-weight: var(--weight-bold);
        cursor: default;
    }

    .image {
        position: absolute;
        bottom: .5rem;
        right: .5rem;
        width: 50%;
        height: 50%;
        z-index: 15;
    }

    .notFound {
        position: absolute;
        bottom: .5rem;
        right: .5rem;
        max-width: 40%;
        max-height: 40%;
    }

    :hover {
        box-shadow: var(--shadow-card);
    }

    p {
        width: 60%;
    }

    @media(max-width: ${mobile}) {
        width: auto;

        .image {
            width: 40%;
            height: 40%;
        }
    }
`;

export const Title = styled.h3`
    margin-top: 1rem;
    letter-spacing: var(--lt-spacing);
    cursor: pointer;

    @media(min-width: ${mobile}) {
        font-weight: var(--weight-bold);
    }

    @media(max-width: ${mobile}) {
        margin-top: 0.5rem;
        letter-spacing: 0;
    }
`;

export const Types = styled.h5`
    background-color: var(--color-white-15);
    padding: 0.3rem 0.7rem;
    border-radius: 0.5rem;
    cursor: default;
`;