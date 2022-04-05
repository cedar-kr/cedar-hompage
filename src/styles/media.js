import { css } from 'styled-components'

const mediaQuery = {
  fk: `(min-width: 1920px)`,
  tv: `(min-width: 1440px) and (max-width: 1919px)`,
  desktop: `(min-width: 1280px) and (max-width: 1439px)`,
  laptop: `(min-width: 1024px) and (max-width: 1279px)`,
  tablet: `(min-width:768px) and (max-width:1023px)`,
  mobile: `(max-width: 767px)`,
}

const media = Object.keys(mediaQuery).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media ${mediaQuery[label]} {
      ${css(...args)}
    }
  `
  return acc
}, {})

export { media }
