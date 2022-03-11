import styled from 'styled-components'
import Image from 'next/image'
import VideoModal from './VideoModal'
import { Title } from '../styles/PublicStyles'
import { Center, Wrapper } from '../styles/Layout'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

const HeaderContainer = styled.header`
  margin: auto 0px;
  display: flex;
  flex-direction:column;
  align-items:center;
  height: 768px;
  ${({theme})=>theme.pc`
    height:100vh;
  `}
`;

const HeaderLogo = styled.div`
  padding: 40px 0;
  width: 95%;
  ${({theme})=>theme.pc`
    width: 80%;
  `};
`;

const HeaderWrapper = styled(Wrapper)`
  display: flex
  flex-direction:row;

  ${({theme})=>theme.pc`
    margin-top: 160px;
  `};

  ${({theme})=>theme.tablet`
    margin-top: 140px;
  `};
`;

const HeaderVideo = styled.div`
  display : flex ;
  flex-direction:column;
  justify-content:right;
  align-items:flex-end;

  ${({theme})=>theme.pc`
    margin-top: 83px;
    height: 360px;
  `};

  ${({theme})=>theme.tablet`
    margin-top: 63px;
    height: 250px;
  `};
`;

export const HeaderTitle = styled(Title)`
  color:#000;
  user-select: none;
`;

export const Highlight = styled.span`
  box-shadow: inset 0 -40px 0 #ffc5c5;
  width: fit-content;
  padding:0 4px;
`;

const HeaderText = styled.div`
  ${({theme})=>theme.pc`
    margin-top: 32px;
  `};
`;

export default function HeaderDesk() {
  const isDesktop = useMediaQuery({ minWidth: 1025 })

  return (
    <HeaderContainer>
      <HeaderLogo>
        <Image
          width={isDesktop ? 112 : 90}
          height={isDesktop ? 30 : 23.3}
          src='/imgs/logo_b.png'
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
            width={isDesktop? 810: 562}
            height={isDesktop? 360: 250}
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
          <HeaderText isDesktop={isDesktop}>
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