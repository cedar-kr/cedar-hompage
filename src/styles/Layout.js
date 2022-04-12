import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 79.17%;
  ${({ theme }) => theme.pc` 
  `};
  ${({ theme }) => theme.pnt` 
  `};
  ${({ theme }) => theme.tablet` 
  `};
  ${({ theme }) => theme.tnm` 
  `};
`;