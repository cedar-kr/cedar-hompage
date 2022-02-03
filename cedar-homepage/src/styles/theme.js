const size = {
  mobile: '360px',
  tablet: '768px',
  desktop: '1920px',
}

 const theme = {
   color: {
    main: "",
    sub: ""
   },
   device : {
    mobile: `screen and (max-width: ${size.mobile})`,
    tablet: `screen and (max-width: ${size.tablet})`,
    desktop: `screen and (min-width: ${size.desktop})`,
  }
 };

export { theme };
  