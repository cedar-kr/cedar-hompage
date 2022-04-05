import Image from "next/image";
import { Wrapper } from "../styles/PublicStyles";
import styled from "styled-components";

const HeaderLogo = styled(Wrapper)`
  height:80px;
  display:flex;
  align-items:center;
`;


const HeaderSlide = styled(Wrapper)`
  background-image:url('/imgs/header_bg.png');
  height:710px;
`;

export default function Header(params) {

  return (
    <>
      <HeaderLogo width={79}>
        <Image src={'/icons/logo.png'} width={112} height={30}/>
      </HeaderLogo>
      <HeaderSlide width={1860}>
        
      </HeaderSlide>
    </>
  )
}
