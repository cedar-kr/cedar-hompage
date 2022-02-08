import styled from 'styled-components'
import Image from 'next/image'
import { Wrapper } from '../styles/Layout'

const HeaderContainer = styled.header`
  padding: 20px 0px;
  background-color: red;
`;

export default function Header(){
  return (
    <HeaderContainer>
      <Wrapper>
        <Image
          priority
          src="/imgs/logo_w.png"
          height={18}
          width={70}
          alt="Cedar Logo"
        />
      </Wrapper>
    </HeaderContainer>
  )
}