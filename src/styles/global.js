import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Quentin";
    src: url("/fonts/Quentin.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  ${reset}

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
