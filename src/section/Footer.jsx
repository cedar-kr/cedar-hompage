import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
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
  font-family: 'NotoSansKR-Regular';
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


export default function Footer(params) {

  return (
    <FooterContainer>
      <FooterWrapper>
        <Image src={'/imgs/footer_text.svg'} width={790} height={60} />
        <FooterMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.5215064453173!2d127.036959515309!3d37.47201807981576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca132c4ce0d31%3A0x552c6f04ec65d82a!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iOq1rCDqsJXrgqjrjIDroZwxOOq4uCA1IDPsuLU!5e0!3m2!1sko!2skr!4v1639369444913!5m2!1sko!2skr"
          title="(주)시더 위치 정보" 
          width="100%"
          height="300px"
          frameBorder="0"
          allowFullScreen={false}
          loading="lazy" /> 
        <FooterInfo>
          <FooterTexts>
            <Image src={'/icons/adress.svg'} width={16} height={22}/>
            <FooterText>서울특별시 서초구 강남대로 18길 5 (양재동) 3층</FooterText>
          </FooterTexts>
          <Link href="tel:070-4901-6150">
            <FooterTexts>
              <Image src={'/icons/call.svg'} width={20} height={20}/>
              <FooterText>070.4901.6150</FooterText>
            </FooterTexts>
          </Link>
          <FooterTexts>
            <Image src={'/icons/mail.svg'} width={20} height={16}/>
            <FooterText>info@cedar.kr</FooterText>
          </FooterTexts>
        </FooterInfo>
      </FooterWrapper>
    </FooterContainer>
  )
}
