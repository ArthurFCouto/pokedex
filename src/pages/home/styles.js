import styled from 'styled-components';
import config from '../../config';

const tablet = config.media.tablet.maxWidth;
const mobile = config.media.mobile.maxWidth;
const largScreen = config.media.largScreen.maxWidth;

export const ContainerHome = styled.div`
    height: 100%;
    width: 100%;
    max-width: ${largScreen};
    margin: 0 auto;
    background-color: var(--color-white);

    .body {
        padding: var(--padding-default);
    }
`;

export const ContainerSearch = styled.section`
    min-height: calc(100vh - 160px);

    button {
        margin: 1rem auto;
    }
`;

export const HeaderSearch = styled.div`
    padding: 1rem 0;

    h2 {
        font-weight: var(--weight-bold);
    }

    form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 1rem 0;
        border-radius: 100px;
        box-shadow: var(--shadow-input);
    }

    input {
        width: 80%;
        font-size: 1rem;
        background-color: transparent;
        outline: 0;
        padding-left: 1rem;
    }

    button {
        margin: 0.5rem 1rem;
        font-size: 1.5rem;
        background-color: transparent;
        color: var(--color-dark);
        cursor: pointer;
    }

    .lineFilter {
        display: grid;
        grid-template-columns: 1fr 3rem;
        color: var(--color-dark);

        .filter {
            display: grid;
            grid-template-columns: 3rem 1fr;
            align-items: center;
            height: 3rem;
            width: 95%;
            margin: 1rem 0;
            padding: 0 1rem;
            border-radius: 100px;
            overflow: hidden;
            box-shadow: var(--shadow-input);
            transition: width .5s;

            select {
                margin: 0 0.5rem;
                padding: 0.5rem 0;
                width: 4rem;
                text-align: end;
                background-color: var(--color-primary);
                border-radius: var(--border-radius);
            }

            @media(max-width: ${mobile}) {
                width: 3rem;
                
                :hover {
                    width: 95%;
                }
            }

            ul {
                display: inline-flex;
                justify-content: flex-end;
                column-gap: 5px;
                width: 100%;
            }
        }

        .clear {
            display: grid;
            place-items: center;
            height: 3rem;
            width: 3rem;
            margin: 1rem 0;
            padding: 0 1rem;
            border-radius: 100px;
            box-shadow: var(--shadow-input);
            cursor: pointer;
        }
    }
`;

export const CardList = styled.nav`
    display: flex;
    flex-flow: row wrap;
    column-gap: 10px;
    row-gap: 25px;
    justify-content: space-around;
    opacity: ${(props) => props.loading ? 0.5 : 1};
    pointer-events: ${(props) => props.loading ? 'none' : 'alto'};

    @media(max-width: ${mobile}) {
        column-gap: 5px;
        row-gap: 15px;
    }
`;

export const ContainerLanding = styled.section`
    display: grid;
    grid-template-columns: 55% 45%;
    height: calc(100vh - 160px);
    
    @media(max-width: ${tablet}) {
        display: block;
    }
`;

export const ColumnLeft = styled.div`
    margin: auto 0;
    animation: slideLeft 2s;

    h1 {
        letter-spacing: var(--lt-spacing);
        font-weight: var(--weight-bold);
    }

    h3 {
        margin: 1.5rem 0;
    }

    button {
        margin-left: 0;
    }

    @media(max-width: ${mobile}) {
        margin: 1.5rem 0;

        h1 {
            margin: 1rem 0;
            letter-spacing: 0;
        }
    }
`;

export const ColumnRight = styled.div`
    margin: auto 0;
    animation: slideRight 2s;

    img {
        max-width: 90%;
        max-height: 90%;
    }

    @media(max-width: ${tablet}) {
        display: contents;
        position: relative;

        img {
            position: absolute;
            bottom: 0;
            right: 0;
            max-height: 60%;
            max-width: 60%;
            animation: slideRight 2s;
        }
    }
`;
