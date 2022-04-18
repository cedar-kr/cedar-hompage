import { useMediaQuery } from 'react-responsive'

export const Pc = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 })
  return isDesktop ? children : null
}

export const Pnt = ({ children }) => {
  const isPnt = useMediaQuery({ minWidth: 1240, maxWidth: 1439 })
  return isPnt ? children : null
}

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 905, maxWidth: 1239 })
  return isTablet ? children : null
}

export const Tnm = ({ children }) => {
  const isTnm = useMediaQuery({ minWidth: 600, maxWidth: 904 })
  return isTnm ? children : null
}

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 599 })
  return isMobile ? children : null
}

export const DefaultPlus = ({ children }) => {
  const isPcTablet = useMediaQuery({ minWidth: 905 })
  return isPcTablet ? children : null
}

export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 599 })
  return isNotMobile ? children : null
}