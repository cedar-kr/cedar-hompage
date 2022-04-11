import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const VideoContainer = styled.section`
  background-color: #19B4A2;
  padding-top: 64px;
  padding-bottom: 44px;
  padding-left: 16px;
  padding-right:16px;
`;

const VideoWrapper = styled.div`
  margin: 0 auto; 
`;

const VideoTextArea = styled.div`
  font-family: 'NotoSansKR-Regular';
  font-weight: 400;
  color: #FFFFFF;
  margin-bottom:40px;
`;

const VideoTitle = styled.p`
  width:100%;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.04em;
  color: #FFFFFF;
  margin-bottom:10px;
`;

const VideoText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  color: #FFFFFF;
`;

const VideoContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const VideoImgArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BtnWrapper = styled.div`
  position: absolute; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px; 
  height: 115px;
  margin-right: 13px;
  cursor: pointer;
  z-index:100;
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
    transform: rotate(0); 
  }
  to {
    transform: rotate(-360deg); 
  }
`;

const TextCircle = styled.div`
  position: absolute;
  background: url(/imgs/video_text.svg) no-repeat;
  left: 0;
  top: 0;
  width: 115px; 
  height: 115px;
  animation-name: ${Rotate};
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-timing-function: linier;
  transform-origin: 50% 50%;
  animation-direction: alternate;
`;

const VideoImage = styled.div`
  margin-top:30px;
`;

export default function Video() {
  return(
    <VideoContainer>
      <VideoWrapper width={80}>
        <VideoContents>
          <VideoTextArea>
            <VideoTitle>더 자세한 정보가 필요하신가요?</VideoTitle>
            <VideoText>시더 디지털 사이니지의 다양한 정보를 영상으로 만나보세요.</VideoText>
          </VideoTextArea>
          <VideoImgArea>
            <Link href={'https://www.youtube.com/channel/UCivb3IzyMclwLiXcKOKKTtw'}>
            <BtnWrapper>
              <PlayBtn>
                <PlayBtnArrow />
              </PlayBtn>
              <TextCircle />
            </BtnWrapper>
            </Link>
            <VideoImage>
              <Image
                src="/imgs/video_banner_mobile.png"
                width={360}
                height={100}
                alt="Video Banner"
              />
            </VideoImage>
          </VideoImgArea>
        </VideoContents>
      </VideoWrapper>
    </VideoContainer>
  )
}