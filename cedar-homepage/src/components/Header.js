import styled from 'styled-components'
import Image from 'next/image'
import { Title } from '../styles/PublicStyles'
import { Wrapper } from '../styles/Layout'

const HeaderContainer = styled.header`
  padding: 20px 0px;
  background: url(/imgs/bg_header.png);
  background-position: center center;
  height: 100vh;
  max-height: 500px;
`;

export const HeaderTitle = styled(Title)`
  padding-top: 61.9px;
  color: #fff;
`;

export const Highlight = styled.div`
  box-shadow: inset 0 -25px 0 #d74c4b;
  width: fit-content;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
      <Image
          priority
          src="/imgs/logo_w.png"
          height={18}
          width={70}
          alt="Cedar Logo White"
        />
        <HeaderTitle>
          더 나은 삶을 위한
          <br />
          새로운 기술,
          <br />
          <Highlight>주식회사 시더</Highlight>
        </HeaderTitle>
      </Wrapper>
    </HeaderContainer>
  )
};