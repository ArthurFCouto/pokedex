import styled from 'styled-components';
import config from '../../config';
import { getBackgroundColor } from '../../util';

const mobile = config.media.mobile.maxWidth;

export const Container = styled.div`
    width: 100%;
    min-width: 160px;
    max-width: 250px;
    aspect-ratio: 13/9;
    background-color: ${(props) => getBackgroundColor(props.types)};
    border-radius: 1rem;
    padding: 1rem;
    position: relative;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: baseline;
    overflow: hidden;
    transition: box-shadow .2s;

    .id {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: initial;
        opacity: 0.3;
        font-weight: bold;
        cursor: default;
    }

    .notFound, .image {
        position: absolute;
        bottom: .5rem;
        right: .5rem;
        max-width: 50%;
        max-height: 50%;
    }

    :hover {
        box-shadow: var(--shadow-card);
    }

    p {
        width: 60%;
    }

    @media(max-width: ${mobile}) {
        width: auto;

        .notFound, .image {
            max-width: 40%;
            max-height: 40%;
        }
    }
`;

export const Title = styled.h2`
    margin-top: 1rem;
    letter-spacing: 0.2rem;
    cursor: pointer;

    @media(max-width: ${mobile}) {
        margin-top: 0.7rem;
        letter-spacing: 0;
        font-size: 1rem;
    }
`;

export const Types = styled.h5`
    font-weight: 400;
    background-color: var(--color-white-15);
    padding: 0.3rem 0.7rem;
    border-radius: 0.5rem;
    cursor: default;

    @media(max-width: ${mobile}) {
        font-size: 0.6rem;
    }
`;