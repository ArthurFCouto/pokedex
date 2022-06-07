import { createGlobalStyle } from 'styled-components';
import config from './index';

const mobile = config.media.mobile.maxWidth;
const tablet = config.media.tablet.maxWidth;
const largScreen = config.media.largScreen.maxWidth;

const GlobalStyle = createGlobalStyle`
    :root {
        --font-body:  'Lato', 'Poppins', 'Roboto', 'Montserrat', sans-serif;
        --color-primary: #efefef;
        --color-black-50: rgba(0, 0, 0, 0.25);
        --color-button: #48d0b0;
        --color-button-hover: #3ba58c;
        --color-white: #ffffff;
        --color-white-50: rgba(255, 255, 255, 0.5);
        --color-white-15: rgba(255, 255, 255, 0.15);
        --color-dark: #424242;
        --shadow-card: 0 0.3rem 0.5rem #424242;
        --shadow-profile: 0 0 0.3rem #ffffff;
        --shadow-input: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.25);
    }

    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body, #root {
        background-color: var(--color-primary);
    }

    body {
        font-family: var(--font-body);
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }
  
    a {
        color: inherit;
        text-decoration: none;
    }

    @media(max-width: ${largScreen}) {
        h1 {
            font-size: 3rem;
        }

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        h4 {
            font-size: 1rem;
        }

        h5 {
            font-size: 0.75rem;
        }
    }

    @media(max-width: ${tablet}) {
        h3 {
            font-size: 1.2rem;
        }
    }
    
    @media(max-width: ${mobile}) {
        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.2rem;
        }

        h4 {
            font-size: 0.75rem;
        }

        h5 {
            font-size: 0.5rem;
        }
    }
`;

export default GlobalStyle;