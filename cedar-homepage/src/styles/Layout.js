import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  
  ${({theme})=> theme.laptop`
    width: 950px;
  `};
  ${({theme})=> theme.tablet`
    width: 95%;
  `};
  ${({theme})=> theme.mobile`
    width: 91.11%;
  `}
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;