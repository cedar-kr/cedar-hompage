import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 45px;
`;

export const Text = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${props => props.color==="gray" ? "#000" : "#fff"};
`;