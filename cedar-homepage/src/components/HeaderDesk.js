import styled from 'styled-components'
import Image from 'next/image'
import { Title } from '../styles/PublicStyles'
import { Wrapper } from '../styles/Layout'
import { useMediaQuery } from 'react-responsive'

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
  padding-top: 160px;

  ${({theme})=>theme.tablet`
    padding-top: 116px;
  `};
`;

const HeaderVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
  width: 100%;
  height: auto;
  margin-top: 80px;

  ${({theme})=>theme.tablet`
    margin-top: 63px;
  `};
`;

export const HeaderTitle = styled(Title)`
  color: #000;
  user-select: none;
`;

export const Highlight = styled.span`
  box-shadow: inset 0 -1.9vw 0 #ffc5c5;
  width: fit-content;
  padding: 0 4px;

  ${({theme})=>theme.fk`
    box-shadow: inset 0 -35px 0 #ffc5c5;
  `};
  ${({theme})=>theme.tablet`
    box-shadow: inset 0 -22px 0 #ffc5c5;
  `};
`;

const HeaderText = styled.div`
  margin-top: 30px;

  ${({theme})=>theme.tablet`
    margin-top: 27px;
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