import styled from 'styled-components'
import Image from 'next/image'
import { Title, Text, LgText } from "../styles/PublicStyles"
import { Center, Wrapper, Row } from '../styles/Layout'

const MainContainer = styled.section`
  background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%), 
              url(/imgs/reference/1.png);
  background-position: center;
  height: 168.07vw;
  position: relative;
  background-repeat: no-repeat;
  background-size:cover;
`;

const MainText = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 10px;
`;

export const MainLgText = styled(LgText)`
  font-family: 'S-CoreDream-6Bold', sans-serif;
  color: #fff;
`;

const TextWrap = styled.div`
  position: absolute;
  bottom: 66px;
`;

export default function Main() {
  
  return (
    <MainContainer>
      <Wrapper>
        <TextWrap>
          <MainText>판교 ‘테크원’ 빌딩 솔루션 구축 및 하드웨어 납품</MainText>
          <MainLgText>KIOSK</MainLgText>
        </TextWrap>
        
      </Wrapper>
    </MainContainer>
  )
};