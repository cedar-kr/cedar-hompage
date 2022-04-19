import styled from 'styled-components'

export const Wrapper = styled.div`
  width: calc(100vw - 400px);
  margin: 0 auto;

  ${({ theme }) => theme.fnp` 
    width: 1520px;
  `};
  ${({ theme }) => theme.pnt` 
    width: calc(100vw - 400px);
  `};
  ${({ theme }) => theme.tablet` 
    width: calc(100vw - 66px);
  `};
  ${({ theme }) => theme.tnm` 
    width: calc(100vw - 64px);
  `};
  ${({ theme }) => theme.mobile` 
    width: calc(100vw - 32px);
  `};
`;