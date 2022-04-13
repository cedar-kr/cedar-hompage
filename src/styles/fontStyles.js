import styled from 'styled-components'

export const Title = styled.h1`
  font-family:'SCDream6';
  font-size: 5rem;
  font-weight: 600;
  line-height: 60px;

  ${({ theme }) => theme.pnt` 
    font-size: calc(4rem + (100vw - 1240px) * ((50 - 40) / (1439 - 1240)));
    line-height: 48px;
  `};
  ${({ theme }) => theme.tablet` 
    font-size: 4rem;
    line-height: 48px;
  `};
  ${({ theme }) => theme.tnm` 
    font-size: calc(3rem + (100vw - 600px) * ((40 - 30) / (904 - 600)));
    line-height: 36px;
  `};
  ${({ theme }) => theme.mobile` 
    font-size: 3rem;
    line-height: 36px;
  `};
`;