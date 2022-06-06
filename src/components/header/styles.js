import styled from 'styled-components';
import config from '../../config';

const mobile = config.media.mobile.maxWidth;

export const ContainerHeader = styled.header`
    background-color: var(--color-dark);
    padding: 1rem 1.5rem;
    border-radius: 0 0 1rem 1rem;
    box-shadow: var(--shadow-card);
    color: var(--color-white);
`;

export const List = styled.ul`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .profile {
        position: relative;
        margin-right: 2rem;
        transition: all .2s;

        .image {
            width: 110px;
            aspect-ratio: 1;
            box-shadow: var(--shadow-profile);
            border-radius: 1rem;
            display: grid;
            place-items: center;
            overflow: hidden;

            img {
                max-height: 100%;
                max-width: 100%;
                z-index: 10;
            }            
        }
    }

    @media(max-width: ${mobile}) {
        .profile{
            margin-right: 0;
        }

        .profile .image {
            width: 70px;
        }
    }
`;

export const Name = styled.h1`
    margin: 1rem 0;
    font-weight: 400;

    @media(max-width: ${mobile}) {
        font-size: 1.5rem;
    }
`;

export const Label = styled.h3`
    margin: 0.5rem 0;
    font-weight: 400;
    
    @media(max-width: ${mobile}) {
        font-size: 0.8rem;
    }
`;

export const Ball = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.5);

    div {
        background-color: var(--color-white-15);
        border-radius: 100px 100px 0 0;
        height: calc(50% - 5px);
        width: 100%;
    }

    div:nth-child(2) {
        margin-top: 10px;
        transform: rotateX(180deg);
    }

    div:nth-child(3) {
        position: absolute;
        top: 30%;
        left: 30%;
        background-color: var(--color-dark);
        width: 40%;
        height: 40%;
        border-radius: 100px;
        z-index: 5;
    }
`;
