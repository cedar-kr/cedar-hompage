import styled from 'styled-components'
import Image from 'next/image'
import VideoModal from './VideoModal'
import { Title } from '../styles/PublicStyles'
import { Center, Wrapper } from '../styles/Layout'
import { useState, useEffect } from 'react'

const HeaderContainer = styled.header`
  padding: 20px 0px;
  /* background: url(/imgs/bg_header.png); */
  background: url(/webp/bg_header.webp);
  background-repeat: no-repeat;
  height: 138.89vw;
  background-size: cover;
  background-position: center;
`;

export const HeaderTitle = styled(Title)`
  padding-top: 61.9px;
  color: #fff;
`;

export const Highlight = styled.div`
  box-shadow: inset 0 -25px 0 #d74c4b;
  width: fit-content;
`;

const HeaderPlayBtnBox = styled(Center)`
  justify-content: center;
  margin-top: 120px;   
  width: 100%;
`;

const HeaderPlayBtn = styled.div`
  width: 45px;
  height: 45px;
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
  }

  const closeVideo = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : null;
    document.body.style.height = isOpen ? "100%" : null;
    document.body.style.touchAction = isOpen ? "none" : null;
  },[isOpen]);

  return (
    <>
    {isOpen && <VideoModal closeVideo={closeVideo} />}
    <HeaderContainer>
      <Wrapper>
      <Image
          src="/imgs/logo_w.png"
          height={18}
          width={70}
          alt="Cedar Logo White"
          priority
        />
        <HeaderTitle>
          더 나은 삶을 위한
          <br />
          새로운 기술,
          <br />
          <Highlight>주식회사 시더</Highlight>
        </HeaderTitle>
        <HeaderPlayBtnBox>
          <HeaderPlayBtn>
            <Image
              src="/webp/icons/play.webp"
              onClick={openVideo}
              height={45}
              width={45}
              alt="Video Play Button"
              priority
            />
          </HeaderPlayBtn>
        </HeaderPlayBtnBox>
      </Wrapper>
    </HeaderContainer>
    </>
  )
};