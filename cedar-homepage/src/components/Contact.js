import styled from 'styled-components'
import Image from 'next/image'
import { Row, Wrapper } from '../styles/Layout'
import { Title, Text } from '../styles/PublicStyles'
import Link from 'next/link'

const ContactContainer = styled.section`
  padding-top: 60px;
  background-color: #dce1ed;
`;

export const ContactTitle = styled(Title)`
  font-weight: 500;
`;

export const PaddingTextInfo = styled.div`
  padding: 25px 0px;
`;

export const ContactInfo = styled(Row)`
  justify-content: flex-start;
  margin: 5px 0px;
`;

export const TextInfo = styled(Text)`
  margin-left: 10px;
`;

export default function Contact() {

const contact_data = [
{
  img: "/icons/location.png",
  content: "서울특별시 서초구 강남대로 18길 5 (양재동) 3층",
  link: "/"
},{
  img: "/icons/phone.png",
  content: "070.4901.6150",
  link: "tel:070-4901-6150"
},{
img: "/icons/email.png",
content: "info@cedar.kr",
link: "/"
}

];

return (

<ContactContainer>

<Wrapper>

<ContactTitle>

시더가 전하는

<br />

특별한 가치들을

<br />

만나보세요.

</ContactTitle>

<PaddingTextInfo>

{contact_data.map((data,idx) => {

return (

<Link href={data.link} key={idx} scroll={false}>

<ContactInfo>

<Image

priority

src={data.img}

height={30}

width={30}

alt="Contact Icons"

/>

<TextInfo>{data.content}</TextInfo>

</ContactInfo>

</Link>

)

})}

</PaddingTextInfo>

</Wrapper>

</ContactContainer>

)

};