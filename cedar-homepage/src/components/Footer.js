import styled from 'styled-components'
import Image from 'next/image'
import { Wrapper } from '../styles/Layout'

const FooterContainer = styled.footer`
  padding: 30px 0px;
`;

const Info = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 20px;
  color: "#333";
`;

export default function Footer(){
  return (
    <FooterContainer>
      <Wrapper>
        <Image
          priority
          src="/imgs/logo_r.png"
          height={18}
          width={70}
          alt="Cedar Logo"
        />
        <br />
        <Info>
          대표자 정택성 / 이메일 info@cedar.kr / 
          <br />
          대표 전화 070.4901.6150 / 주소 서울특별시 서초구 강남대로 18길 5(양재동) 3층 
          <br />
          사업자등록번호 134-87-08645
        </Info>
      </Wrapper>
    </FooterContainer>
  )
}