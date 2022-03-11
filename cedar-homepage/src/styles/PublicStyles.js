import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  line-height: 45px;
  ${({theme})=>theme.pc`
    font-size: 5.5rem;
    font-weight: 900;
    line-height:normal;
    user-select: none;
  `};
   ${({theme})=>theme.tablet`
    font-size: 3.5rem;
    font-weight: 900;
    line-height:normal;
    user-select: none;
  `};

`;

export const LgText = styled.p`
  font-size: 2.5rem;
`;

export const MdText = styled.p`
  font-size: 2rem;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.4rem;
`;

export const NSText = styled(Text)`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
`;

export const MapContact = styled.div`
  display: flex;
  flex-direction: column;
  ${({theme})=> theme.tablet`
    flex-direction: row;
  `}  
`;

export const Mobiles = styled.div`
  display: none;
  ${({theme})=> theme.mobile`
    display: flex;
  `}
`;

export const Defaults = styled.div`
  display: none;
  ${({theme})=> theme.tablet`
    display: flex;
  `}
  ${({theme})=> theme.pc`
    display: flex;
  `}
`;