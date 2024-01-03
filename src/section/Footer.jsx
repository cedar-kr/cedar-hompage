import styled from "styled-components";
import Image from "next/image";
import { Wrapper } from "../styles/Layout";

const FooterContainer = styled.div`
  width: 100%;
  background:#000000;
  height: 665px;
  padding: 75px 0px;
`

const FooterWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FooterMap = styled.iframe`
  margin-top: 75px;
  margin-bottom: 30px;
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterTexts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.div`
  color:#fff;
  margin-left: 19px;
  margin-right: 38px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 35px;
  display: flex;
  align-items: flex-end;
  color: #FFFFFF;

  ${({ theme }) => theme.pnt` 
    margin-left: 9px;
    margin-right: 30px;
    font-size: calc(1.5rem + (100vw - 1240px) * ((18 - 15) / (1439 - 1240)));
  `};
  ${({ theme }) => theme.tablet` 
    margin-left: 9px;
    margin-right: 30px;
    font-size: 1.5rem;
  `};
  ${({ theme }) => theme.tnm` 
    margin-left: 5px;
    margin-right: 10px;
    font-size: calc(1.2rem + (100vw - 600px) * ((15 - 12) / (904 - 600)));
  `};
`;


export default function Footer() {

  return (
    <FooterContainer>
      <FooterWrapper>
        <Image src={'/imgs/footer_text.svg'} width={790} height={60} alt={'Footer Text'} />
        <FooterMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.323242790212!2d126.9693828252228!3d37.40583398332774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5f3fa1dc9711%3A0x64a306a8e1d882a9!2z7Iqk66eI7Yq464S367mM65Sp!5e0!3m2!1sko!2skr!4v1704179042335!5m2!1sko!2skr"
          title="(주)시더 위치 정보" 
          width="100%"
          height="300px"
          frameBorder="0"
          allowFullScreen={false}
          loading="lazy" /> 
        <FooterInfo>
          <FooterTexts>
            <Image src={'/icons/adress.svg'} width={16} height={22} alt={'Footer Icon'}/>
            <FooterText>경기도 안양시 동안구 동편로20번길 9 스마트넷빌딩 202호</FooterText>
          </FooterTexts>
          <FooterTexts>
            <Image src={'/icons/call.svg'} width={20} height={20} alt={'Footer Icon'} />
            <FooterText>070.4901.6150</FooterText>
          </FooterTexts>
          <FooterTexts>
            <Image src={'/icons/mail.svg'} width={20} height={16} alt={'Footer Icon'} />
            <FooterText>info@cedar.kr</FooterText>
          </FooterTexts>
        </FooterInfo>
      </FooterWrapper>
    </FooterContainer>
  )
}
