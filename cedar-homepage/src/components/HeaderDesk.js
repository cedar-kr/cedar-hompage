import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import { Title } from '../styles/PublicStyles'
import { Wrapper } from '../styles/Layout'
import { useMediaQuery } from 'react-responsive'
import { useState, useEffect, useRef } from 'react'
import { fadeInLeft, fadeInRight, fadeInRightText } from '../styles/keyframe'

const HeaderContainer = styled.header`
  margin: auto 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const HeaderLogo = styled.div`
  padding: 40px 0;
  width: 79.5%;
  margin: 0 auto;

  ${({theme})=>theme.laptop`
    width: 1010px;
  `};
  ${({theme})=>theme.tablet`
    width: 95%;
  `};
`;

const HeaderWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  padding-top: 7vmin;

  ${({theme})=>theme.tablet`
    padding-top: 5.5vmin;
  `};
`;

const HeaderVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
  width: 100%;
  height: auto;
  margin-top: 8vmin;
  animation : ${fadeInRight} ease-in 940ms;

  ${({theme})=>theme.tablet`
    margin-top: 6.5vmin;
  `};
`;

export const HeaderTitle = styled(Title)`
  color: #000;
  user-select: none;
  animation : ${fadeInLeft} ease-in 470ms;
`;

const HighlightAni = keyframes`
  0%{
    width: 0px;
  }
  100%{
    width: fit-content;
  }
`;


export const Highlight = styled.span`
  box-shadow: inset 0 -1.9vw 0 #ffc5c5;
  width: fit-content;
  padding: 0 4px;
  /* transition: box-shadow ${HighlightAni} 300ms ease-in-out; */
  ${({theme})=>theme.fk`
    box-shadow: inset 0 -35px 0 #ffc5c5;
  `};
  ${({theme})=>theme.tablet`
    box-shadow: inset 0 -22px 0 #ffc5c5;
  `};

  :after{
    content:"";
    width: 0;
    height: 10px;
    display: inline-block;
    background: #D9FCDB;
  }
`;

const HeaderText = styled.div`
  margin-top: 30px;
  width: 50%;
  height: 17vmin;
  ${({theme})=>theme.tablet`
    margin-top: 27px;
  `};
  animation : ${fadeInRightText} ease-in 1410ms;
`;

export default function HeaderDesk() {
  const isDesktop = useMediaQuery({ minWidth: 1025 })
  const scrollRef = useRef();
  const [scrollTop,setScrollTop] = useState(null);

  window.onscroll = function () {
    scrollLR();
  };

  function scrollLR() {
    if(scrollRef.current){
      scrollRef.current.style.transform = "translateX(" + -window.pageYOffset + "px)";
      scrollRef.current.style.opacity= 100 - window.pageYOffset/15 + "%";
    }
  }

  return (
    <HeaderContainer>
      <HeaderLogo>
        <Image
          width={isDesktop ? 112 : 90}
          height={isDesktop ? 30 : 23.3}
          src='/imgs/logo_b.png'
          priority
        />
      </HeaderLogo>
      <HeaderWrapper>
        <HeaderTitle draggable={false}>
          더 나은 삶을 위한 새로운 기술,<br/>
          우리는 <Highlight>주식회사 시더</Highlight>입니다.
        </HeaderTitle>
        <HeaderVideo isDesktop={isDesktop}>
            <video 
              onClick={(e)=> e.stopPropagation()} 
              autoPlay="autoplay"
              muted
              playsInline
              width={"62%"}
              height={"auto"}
              loop
              preload="auto"
            >
              {/* <source
              src="https://d1rwo7d37ra2e3.cloudfront.net/video/promo_video.mp4#t=0.2"
              type="video/mp4"
              /> */}
              <source
              src="./videos/promo_video.webm#t=0.2"
              type="video/webm"
              />
            </video>
            <HeaderText isDesktop={isDesktop} ref={scrollRef} onScroll={scrollLR}>
              <Image
                width={isDesktop? 664 : 400}
                height={isDesktop? 172 : 104}
                src='/webp/bg_logo.webp'
              />
            </HeaderText>
        </HeaderVideo>
      </HeaderWrapper>
    </HeaderContainer>     
  )
};