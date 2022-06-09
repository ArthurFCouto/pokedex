import { createGlobalStyle } from 'styled-components';
import config from './index';

const mobile = config.media.mobile.maxWidth;

const GlobalStyle = createGlobalStyle`
    :root {
        --font-body:  'Roboto', 'Lato', 'Poppins', 'Montserrat', sans-serif;
        --color-primary: #efefef;
        --color-button: #48d0b0;
        --color-button-hover: #3ba58c;
        --color-black-50: rgba(0, 0, 0, 0.25);
        --color-white: #ffffff;
        --color-white-15: rgba(255, 255, 255, 0.15);
        --color-white-50: rgba(255, 255, 255, 0.5);
        --color-dark: #424242;
        --maxWidth-card: 250px;
        --minWidth-card: 160px;
        --shadow-card: 0 0.3rem 0.5rem #424242;
        --shadow-profile: 0 0 0.3rem #ffffff;
        --shadow-input: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.25);
        --border-radius: 1rem;
        --weight-bold: bold;
        --padding-default: 1rem 1.5rem;
        --lt-spacing: 0.2rem;
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

    h1, h2, h3, h4, h5 {
        font-weight: 400;
    }

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
    
    @media(max-width: ${mobile}) {
        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1rem;
        }
    }
`;

export default GlobalStyle;