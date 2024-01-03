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


export default function Footer() {

  return (
    <FooterWrapper>
      <Image src={'/imgs/footer_text_mobile.svg'} width={286} height={88} alt={'Footer Text'} />
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
          <Image src={'/icons/adress.svg' } width={10} height={14} alt={'Footer Icon'} />
          <FooterText>경기도 안양시 동안구 동편로20번길 9 스마트넷빌딩 202호</FooterText>
        </FooterTexts>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Link href="tel:070-4901-6150">
            <FooterTexts call>
              <Image src={'/icons/call.svg' } width={10} height={10} alt={'Footer Icon'} />
              <FooterText>070.4901.6150</FooterText>
            </FooterTexts>
          </Link>
          <FooterTexts style={{marginLeft:'20px'}}>
            <Image src={'/icons/mail.svg' } width={10} height={8} alt={'Footer Icon'} />
            <FooterText>info@cedar.kr</FooterText>
          </FooterTexts>
        </div>
      </FooterInfo>
    </FooterWrapper>
  )
}
