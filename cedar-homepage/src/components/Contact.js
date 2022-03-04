import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Row, Wrapper } from '../styles/Layout'
import { Title, NSText } from '../styles/PublicStyles'
import { Default, Desktop, Mobile, Tablet } from '../utils/media'

const ContactContainer = styled.section`
  padding-top: 60px;
  background-color: #dce1ed;
  width: 100%;
  ${({theme})=> theme.tablet`
    width:43.8%;
    padding-top: 110px;
  `};
  ${({theme})=> theme.pc`
    padding-top: 128px;
    padding-bottom: 86px;
  `};
`;

export const ContactTitle = styled(Title)`
  font-weight: 500;
  ${({theme})=> theme.pc`
    font-weight: 500;
    font-size:5.5rem;
    line-height:80px;
  `};
`;

export const PaddingTextInfo = styled.div`
  ${({theme})=> theme.mobile`
    padding: 25px 0px;
  `};
  ${({theme})=> theme.tablet`
    padding: 60px 0px;
  `};
  ${({theme})=> theme.pc`
    padding-top: 57px;
  `};
`;

export const ContactInfo = styled(Row)`
  justify-content: flex-start;
  margin: 5px 0px;
`;

export const TextInfo = styled(NSText)`
  margin-left: 10px;

${({theme})=> theme.pc`
    height: 556px;
  `};
`;

export const PContactInfo = styled.div`
  display: flex;
  flex-direction:row;
  align-items: ${props=> props.idx == 0 ? 'flex-start' : 'center' };
  margin-bottom:10px;
`;

export const PTextInfo = styled.div`
  font-size: 1.8rem;
  font-family: 'Noto Sans KR', sans-serif;
  color:#000;
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
          <Default>
            시더가 전하는 
            <br />
            특별한 가치들을 만나보세요.
          </Default>
        </ContactTitle>
        <PaddingTextInfo>
          {contact_data.map((data,idx) => {
            return (
              <Link href={data.link} passHref key={idx} scroll={false}>
                <PContactInfo idx={idx}>
                  <Mobile> 
                    <Image
                      priority
                      src={data.img}
                      height={30}
                      width={30}
                      alt="Contact Icons"
                    />
                    <TextInfo>{data.content}</TextInfo>
                  </Mobile>
                  <Default>
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
                  </Default>
                </PContactInfo>
              </Link>
            )
          })}
        </PaddingTextInfo>
      </Wrapper>
    </ContactContainer>
  )
};