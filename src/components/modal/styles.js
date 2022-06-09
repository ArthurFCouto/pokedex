import styled from 'styled-components';
import config from '../../config';

const mobile = config.media.mobile.maxWidth;
const tablet = config.media.tablet.maxWidth;
const calcWidth = (value) => `${value * 100 / 200}%`;
const backgroundColor = (value) => {
    let color;
    switch (value) {
        case 'hp':
            color = '#fb6c6c';
            break;
        case 'defense':
            color = '#4bc07a';
            break;
        default:
            color = '#48d0b0';
    }
    return color;
};

export const ContainerModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: var(--color-black-50);
    z-index: 15;
`;

export const BodyModal = styled.div`
    position: relative;
    display: inline-flex;
    width: 100%;
    max-width: ${tablet};
    background-color: var(--color-white);
    border-radius: var(--border-radius);
    transition: all .2s;

    .close {
        position: absolute;
        top: -3rem;
        right: 0;
        cursor: pointer;

        @media(max-width: ${mobile}) {
            top: 0;
            z-index: 20;
            color: var(--color-white);
        }
    }

    @media(max-width: ${mobile}) {
        display: block;
        height: 100%;
        border-radius: 0;
    }
`;

export const ColumnImage = styled.section`
    width: 50%;
    background-color: ${(props) => props.theme.colors.backgroundCard[props.types] || 'var(--color-primary)'};
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-input);
    color: var(--color-white);

    div {
        position: relative;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${(props) => props.backgroundImage});

        ul {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            display: inline-flex;
            column-gap: 5px;

            li {
                background-color: var(--color-white-15);
                padding: 0.3rem 0.7rem;
                border-radius: 0.5rem;
                cursor: default;
            }
        }
    }

    @media(max-width: ${mobile}) {
        width: 100%;
        height: 50%;
        border-radius: 0 0 1rem 1rem;
    }

`;

export const ColumnDetails = styled.div`
    position: relative;
    width: 50%;
    padding: 1rem;

    .id {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: initial;
        opacity: 0.3;
        font-weight: var(--weight-bold);
        cursor: default;
    }

    h2 {
        margin: 1rem 0;
    }

    p {
        font-size: 0.8rem;
        margin: 0.8rem 0;
        line-height: 1.1rem;
        text-align: center;
    }

    @media(max-width: ${mobile}) {
        width: 100%;
        height: 50%;
        overflow-y: auto;
    }
`;

export const InfoPokemon = styled.ul`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    margin: 1rem 0;

    li {
        text-align: center;

        div {
            display: flex;
            align-items: center;
            justify-content: space-around;
            column-gap: 5px;
        }

        h4 {
            margin: 0.5rem 0;
        }
    }

    li:nth-child(2) {
        padding-left: 0.5rem;
        border-left: 1px solid var(--color-dark);
        padding-right: 0.5rem;
        border-right: 1px solid var(--color-dark);
    }

    @media(max-width: ${mobile}) {
        justify-content: space-around;
    }
`;

export const StatsPokemon = styled.ul`
    display: block;
    width: 100%;
    
    li {
        display: grid;
        grid-template-columns: 35% 15% 1fr;
        align-items: center;
        column-gap: 5px;
        margin: 0.8rem 0;

        div {
            width: 100%;
        }
    }
`;

export const Line = styled.hr`
    width: ${(props) => calcWidth(props.value)};
    height: 2px;
    border-radius: var(--border-radius);
    background-color: ${(props) => backgroundColor(props.stat)};
`;