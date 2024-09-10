import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import * as ga from '../utils/ga';
import { Wrapper } from '../styles/Layout';

const VideoContainer = styled.section`
  background-color: #19b4a2;
  padding-top: 70px;
  padding-bottom: 67px;
`;

const VideoTextArea = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  color: #ffffff;
  margin-right: 10px;
`;

const VideoTitle = styled.h4`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 44px;
  display: flex;
  align-items: center;
  margin-bottom: 23px;

  ${({ theme }) => theme.pnt`
    font-size: calc(2.4rem + (100vw - 1240px) * ((30 - 24) / (1439 - 1240)));
    line-height: 36px;
    letter-spacing: -0.04em;
  `}
  ${({ theme }) => theme.tablet`
    font-size: 2.4rem;
    line-height: 31px;
    letter-spacing: -0.04em;
  `}
  ${({ theme }) => theme.tnm`
    font-size: calc(2.1rem + (100vw - 600px) * ((24 - 21) / (904 - 600)));
    line-height: 31px;
  `}
`;

const VideoText = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 27px;

  ${({ theme }) => theme.pnt`
    font-size: calc(1.7rem + (100vw - 1240px) * ((18 - 17) / (1439 - 1240)));
    line-height: 25px;
  `}
  ${({ theme }) => theme.tablet`
    font-size: 1.7rem;
    line-height: 25px;
  `}
  ${({ theme }) => theme.tnm`
    font-size: calc(1.5rem + (100vw - 600px) * ((17 - 15) / (904 - 600)));
    line-height: 22px;
  `}
`;

const VideoContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const VideoImgArea = styled.div`
  display: flex;
  align-items: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 115px;
  margin-right: 13px;
  cursor: pointer;
`;

const PlayBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 3px solid #fff;
  border-radius: 100%;
`;

const PlayBtnArrow = styled.div`
  background: url(../icons/play_btn.png) no-repeat;
  background-position: center center;
  width: 27px;
  height: 28px;
`;

const Rotate = keyframes`
  from { 
    transform: rotate(360deg); 
  }
  to {
    transform: rotate(0); 
  }
`;

const TextCircle = styled.div`
  position: absolute;
  background: url(../icons/video_circle.svg) no-repeat;
  width: 115px;
  height: 115px;
  animation: ${Rotate} 12s infinite linear;
`;

export default function Video() {
  return (
    <VideoContainer>
      <Wrapper>
        <VideoContents>
          <VideoTextArea>
            <VideoTitle>더 자세한 정보가 필요하신가요?</VideoTitle>
            <VideoText>시더 디지털 사이니지의 다양한 정보를 영상으로 만나보세요.</VideoText>
          </VideoTextArea>
          <VideoImgArea>
            <Link href={'https://www.youtube.com/channel/UCivb3IzyMclwLiXcKOKKTtw'}>
              <a target="_blank">
                <BtnWrapper
                  onClick={() =>
                    ga.event({
                      action: 'click',
                      category: 'YoutubeVideo',
                      label: 'link'
                    })
                  }
                >
                  <PlayBtn>
                    <PlayBtnArrow />
                  </PlayBtn>
                  <TextCircle />
                </BtnWrapper>
              </a>
            </Link>
            <Image src="/imgs/video_banner.png" width={624} height={150} alt="Video Banner" />
          </VideoImgArea>
        </VideoContents>
      </Wrapper>
    </VideoContainer>
  );
}
