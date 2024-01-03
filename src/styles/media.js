import { css } from 'styled-components';

const mediaQuery = {
  fnp: `(min-width: 1921px)`,
  pc: `(min-width: 1440px) and (max-width: 1920px)`,
  pnt: `(min-width: 1240px) and (max-width: 1439px)`,
  tablet: `(min-width: 905px) and (max-width: 1239px)`,
  tnm: `(min-width: 600px) and (max-width: 904px)`,
  mobile: `(min-width: 0px) and (max-width: 599px)`,
};

const media = Object.keys(mediaQuery).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media ${mediaQuery[label]} {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export { media };
