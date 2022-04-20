import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const FooterWrapper = styled.div`
  background:#000000;
  display:flex;
  flex-direction:column;
  padding-top:35px;
  padding-bottom:60px;
  padding-left: 16px;
  padding-right:16px;
  justify-content:left;
  align-items:flex-start;
`;

const FooterMap = styled.iframe`
  margin-top:24px;
  margin-bottom:30px;
`;

const FooterInfo = styled.div`
  display:flex;
  flex-direction:column;
`;

const FooterTexts = styled.div`
  display:flex;
  flex-direction:row;
  margin-top:10px;
  cursor: ${props=> props.call? 'pointer':''};
`;

const FooterText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #FFFFFF;
  margin-left:10px;
`;


export default function Footer(params) {

  return (
    <FooterWrapper>
      <Image src={'/imgs/footer_text_mobile.svg'} width={286} height={88}/>
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
          <Image src={'/icons/adress.svg' } width={10} height={14}/>
          <FooterText>서울특별시 서초구 강남대로 18길 5 (양재동) 3층</FooterText>
        </FooterTexts>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Link href="tel:070-4901-6150">
            <FooterTexts call>
              <Image src={'/icons/call.svg' } width={10} height={10}/>
              <FooterText>070.4901.6150</FooterText>
            </FooterTexts>
          </Link>
          <FooterTexts style={{marginLeft:'20px'}}>
            <Image src={'/icons/mail.svg' } width={10} height={8}/>
            <FooterText>info@cedar.kr</FooterText>
          </FooterTexts>
        </div>
      </FooterInfo>
    </FooterWrapper>
  )
}
