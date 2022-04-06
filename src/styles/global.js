import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Quentin";
    src: url("/fonts/Quentin.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face { 
    font-family: 'SCDream6'; 
    src: url("/fonts/SCDream6.otf"); 
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle
