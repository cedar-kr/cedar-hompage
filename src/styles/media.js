import { css } from 'styled-components'

const mediaQuery = {
  fk: `(min-width: 1921px)`,
  moniter: `(max-width: 1920px) and (min-width: 1441px)`,
  desktop:`(max-width: 1440px) and (min-width: 1281px)`,
  laptop: `(max-width: 1280px) and (min-width: 1025px)`,
  tablet: `(max-width:1024px) and (min-width:768px)`,
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
