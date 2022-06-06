import styled from 'styled-components';
import config from '../../config';

const tablet = config.media.tablet.maxWidth;
const mobile = config.media.mobile.maxWidth;
const largScreen = config.media.largScreen.maxWidth;

export const ContainerHome = styled.main`
    display: block;
    height: 100%;
    width: 100%;
    max-width: ${largScreen};
    margin: 0 auto;
    background-color: var(--color-white);

    .body {
        padding: 1rem 1.5rem;
    }
`;

export const ContainerSearch = styled.section`
    button {
        margin: 1rem auto;
    }
`;

export const Menu = styled.div`
    padding: 1rem 0;

    h1 {
        font-size: 2rem;
        letter-spacing: 0.2rem;

        @media(max-width: ${mobile}) {
            font-size: 1.5rem;
            letter-spacing: 0;
        }   
    }

    form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 1rem 0;
        padding: 1rem;
        border-radius: 100px;
        box-shadow: var(--shadow-input);
    }

    div {
        display: grid;
        grid-template-columns: 3rem 1fr;
        align-items: center;
        height: 3rem;
        width: 3rem;
        margin: 1rem 0;
        padding: 0 1rem;
        border-radius: 100px;
        overflow: hidden;
        box-shadow: var(--shadow-input);
        transition: all .5s;

        :hover {
            width: 100%;
        }

        ul {
            display: inline-flex;
            justify-content: flex-end;
            width: 100%;
            column-gap: 2rem;
        }
    }

    input {
        background-color: transparent;
        width: 80%;
        font-size: 1rem;
        outline: 0;
    }

    button {
        margin: 0.5rem;
        font-size: 1.5rem;
        background-color: transparent;
        color: var(--color-dark);
    }
`;

export const CardList = styled.nav`
    display: flex;
    flex-flow: row wrap;
    column-gap: 10px;
    row-gap: 25px;
    justify-content: space-around;

    @media(max-width: ${mobile}) {
        column-gap: 5px;
    }
`;

export const ContainerLanding = styled.section`
    display: flex;
    flex-flow: row nowrap;
    height: calc(100vh - 160px);
    
    @media(max-width: ${tablet}) {
        display: block;
    }
`;

export const ColumnLeft = styled.div`
    width: 55%;
    margin: auto 0;
    visibility: hidden;

    h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
    }

    h3 {
        margin: 1.5rem 0;
        font-weight: 400;
    }

    button {
        margin-left: 0;
    }

    @media(max-width: ${tablet}) {
        width: auto;
    }

    @media(max-width: ${mobile}) {
        margin: 1.2rem 0;

        h1 {
            margin: 1rem 0;
            font-size: 2rem;
            letter-spacing: 0;
        }

        h3 {
            font-size: 1rem;
        }
    }
`;

export const ColumnRight = styled.div`
    width: 45%;
    margin: auto 0;
    visibility: hidden;

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
            width: 60%;
        }
    }
`;

/*
    // Mobile
    @media only screen and(max-widht: 600px) {
        max-width: 600px;
    }

    // Tablet
    @media only screen and(max-widht: 768px) {
        max-width: 768px;
    }

    // Laptop
    @media only screen and(max-widht: 992px) {
        max-width: 992px;
    }

    // LargScreen
    @media only screen and(max-widht: 1200px) {
        
    } */