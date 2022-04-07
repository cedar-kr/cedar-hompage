import styled from "styled-components";
import Image from "next/image";

const FooterWrapper = styled.div`
  width:100%;
  background:#000000;
  height:665px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:75px;
`

const FooterMap = styled.iframe`
  margin-top:75px;
  margin-bottom:30px;
`;

const FooterInfo = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;

const FooterTexts = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-right:${props => props.last ?0:38}px;
`;

const FooterText = styled.div`
  color:#fff;
  margin-left:19px;

  font-family: 'NotoSansKR-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
  display: flex;
  align-items: flex-end;
  color: #FFFFFF;
`;


export default function Footer(params) {

  return (
    <FooterWrapper>
      <Image src={'/imgs/footer_text.svg'} width={790} height={60}/>
      <FooterMap
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.5215064453173!2d127.036959515309!3d37.47201807981576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca132c4ce0d31%3A0x552c6f04ec65d82a!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iOq1rCDqsJXrgqjrjIDroZwxOOq4uCA1IDPsuLU!5e0!3m2!1sko!2skr!4v1639369444913!5m2!1sko!2skr"
        title="(주)시더 위치 정보" 
        width="80%"
        height="300px"
        frameBorder="0"
        allowFullScreen={false}
        loading="lazy" /> 
      <FooterInfo>
        <FooterTexts>
          <Image src={'/icons/adress.svg' } width={16} height={22}/>
          <FooterText>서울특별시 서초구 강남대로 18길 5 (양재동) 3층</FooterText>
        </FooterTexts>
        <FooterTexts>
          <Image src={'/icons/call.svg' } width={20} height={20}/>
          <FooterText>070.4901.6150</FooterText>
        </FooterTexts>
        <FooterTexts>
          <Image src={'/icons/mail.svg' } width={20} height={16} last/>
          <FooterText>info@cedar.kr</FooterText>
        </FooterTexts>
      </FooterInfo>
    </FooterWrapper>
  )
}
