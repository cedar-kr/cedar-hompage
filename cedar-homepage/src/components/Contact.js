import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Row, Wrapper } from '../styles/Layout'
import { Title, NSText } from '../styles/PublicStyles'
import { Default, Desktop, Mobile, Tablet } from '../utils/media'
import * as ga from '../utils/ga';
import { Fade } from 'react-awesome-reveal'

const ContactContainer = styled.section`
  padding-top: 128px;
  padding-bottom: 86px;
  background-color: #dce1ed;
  width: 100%;

  ${({theme})=> theme.tablet`
    width: 43.85%;
    padding-top: 110px;
  `};
  ${({theme})=> theme.mobile`
    padding-top: 60px;
    padding-bottom: 35px;
  `};
`;

export const ContactTitle = styled(Title)`
  font-weight: 500;
`;

export const PaddingTextInfo = styled.div`
  padding-top: 57px;

  ${({theme})=> theme.tablet`
    padding: 60px 0px;
  `};
  ${({theme})=> theme.mobile`
    padding: 25px 0px;
  `};
`;

export const ContactInfo = styled(Row)`
  justify-content: flex-start;
  margin: 5px 0px;
`;

export const TextInfo = styled(NSText)`
  margin-left: 10px;
`;

export const PContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props=> props.idx == 0 ? 'flex-start' : 'center'};
  margin-bottom: 10px;
`;

export const PTextInfo = styled.div`
  font-size: 1.8rem;
  font-family: 'Noto Sans KR', sans-serif;
  color: #000;
`;

export default function Contact() {
  const contact_data = [
    {
      img: "/icons/location.png",
      content: "서울특별시 서초구 강남대로 18길 5 (양재동) 3층",
      content_t: "서울특별시 서초구 강남대로 18길 5<br/> (양재동) 3층",
      link: "/"
    },{
      img: "/icons/phone.png",
      content: "070.4901.6150",
      content_t: "070.4901.6150",
      link: "tel:070-4901-6150"
    },{
      img: "/icons/email.png",
      content: "info@cedar.kr",
      content_t: "info@cedar.kr",
      link: "/"
    }
  ];

  const getGa=()=>{
    ga.event({
      action: "contact call",
      params: {}
    })
  }

  return (
    <ContactContainer>
      <Wrapper>
        <ContactTitle>
          <Mobile>
            시더가 전하는
            <br />
            특별한 가치들을
            <br />
            만나보세요.
          </Mobile>
          <Fade direction="left" triggerOnce>
          <Default>
            시더가 전하는 
            <br />
            특별한 가치들을 만나보세요.
          </Default>
          </Fade>
        </ContactTitle>
        <PaddingTextInfo>
          <Mobile>
          {contact_data.map((data,idx) => {
            return (
              <Link href={data.link} passHref key={idx} scroll={false} onClick={getGa}>
                <PContactInfo idx={idx}>
                    <Image
                      priority
                      src={data.img}
                      height={30}
                      width={30}
                      alt="Contact Icons"
                    />
                    <TextInfo>{data.content}</TextInfo>
                </PContactInfo>
              </Link>
            )
          })}
          </Mobile>
          <Default>
          {contact_data.map((data,idx) => {
            return (
              <Link href={data.link} passHref key={idx} scroll={false}>
                <Fade direction="left" cascade triggerOnce>
                <PContactInfo idx={idx}>
                    <Image
                      priority
                      src={data.img}
                      height={35}
                      width={35}
                      alt="Contact Icons"
                    />
                    <Desktop>
                      <PTextInfo dangerouslySetInnerHTML={{__html: data.content}}></PTextInfo>
                    </Desktop>
                    <Tablet>
                      <PTextInfo dangerouslySetInnerHTML={{__html: data.content_t}}></PTextInfo>
                    </Tablet>
                </PContactInfo>
                </Fade>
              </Link>
            )
          })}
          </Default>
        </PaddingTextInfo>
      </Wrapper>
    </ContactContainer>
  )
};