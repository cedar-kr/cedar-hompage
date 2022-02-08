import styled from 'styled-components'
import Image from 'next/image'
import { Title, Text, LgText } from "../styles/PublicStyles"
import { Center, Wrapper, Row } from '../styles/Layout'

const MainContainer = styled.section`
  background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%), 
              url(/imgs/reference/1.png);
  background-position: center center;
  height: 100vh;
  max-height: 600px;
`;

export default function Main() {
  
  return (
    <MainContainer>
      <Wrapper>
        <Row>
          <Image
            priority
            src="/icons/h_left_arrow.png"
            height={45}
            width={45}
            alt="left arrow"
          />
        </Row>
      </Wrapper>
    </MainContainer>
  )
}