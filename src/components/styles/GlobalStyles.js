import { createGlobalStyle } from 'styled-components';

// https://colorhunt.co/palette/238
const GlobalStyles = createGlobalStyle`
  :root {
    --gray: #5D737E;
    --darkGray: #000000;
    --light: #FFFFFF;
    --dark: #000000;
    --red: #E84545;
    --shadowGray: #BCBCBC;
    --n10: #F2F2F2;
    --n20: #e5e5e5;
    --n30: #BCBCBC;
  }
  html {
    --size: 18px;
    @media(min-width: 600px) {
      --size: 20px;
    }
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
    font-family: 'HCo Operator Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    color: var(--darkGray);
    height: 100%;
  }
  main {display: flex;}
  body {
    font-size: 1.5rem;
    min-height: 100%;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Helvetica-Bold';
  }
  h5{
    font-size: 20px;
    @media(min-width: 600px) {
      font-size: 25px;
    }
  }
  h3{
    font-size: 25px;
    @media(min-width: 600px) {
      font-size: 40px;
    }
  }
  a, li, p {
    font-family: 'Helvetica-Thin';
    text-decoration: none;
    letter-spacing: -1px;
  }
  a{
    font-family: 'Helvetica-Regular';
  },
  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;
