import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'S-CoreDream-6Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
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
`;

export default GlobalStyle;