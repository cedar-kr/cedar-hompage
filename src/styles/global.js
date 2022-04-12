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

  @font-face { 
    font-family: 'SCDream6'; 
    src: url("/fonts/SCDream6.otf"); 
    font-weight: normal;
    font-style: normal;
  }

  @font-face { 
    font-family: 'NotoSansKR-Black'; 
    src: url("/fonts/NotoSansKR-Black.otf"); 
    font-weight: normal;
    font-style: normal;
  }

  @font-face { 
    font-family: 'NotoSansKR-Bold'; 
    src: url("/fonts/NotoSansKR-Bold.otf"); 
    font-weight: normal;
    font-style: normal;
  }

  @font-face { 
    font-family: 'NotoSansKR-Regular'; 
    src: url("/fonts/NotoSansKR-Regular.otf"); 
    font-weight: normal;
    font-style: normal;
  }

  @font-face { 
    font-family: 'NotoSansKR-Medium'; 
    src: url("/fonts/NotoSansKR-Medium.otf"); 
    font-weight: normal;
    font-style: normal;
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
