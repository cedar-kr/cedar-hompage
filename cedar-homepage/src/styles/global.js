import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 10px;
    overflow: hidden;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;