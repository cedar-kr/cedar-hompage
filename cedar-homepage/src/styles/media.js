import { css } from "styled-components";

const mediaQuery = {
  pc: `(min-width: 1025px)`,
  tablet: `(max-width:1024px) and (min-width:768px)`,
  mobile: `(max-width: 767px)`,
};

const media = Object.keys(mediaQuery).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media ${mediaQuery[label]} {
        ${css(...args)}
      }
    `
    return acc;
}, {});

export { media };