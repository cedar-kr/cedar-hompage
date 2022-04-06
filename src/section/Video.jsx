import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import { Wrapper } from '../styles/PublicStyles';

const VideoContainer = styled.section`
  background-color: #19B4A2;
  padding-top: 70px;
  padding-bottom: 67px;
`;

const VideoTextArea = styled.div`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  color: #FFFFFF;
`;

const VideoTitle = styled.p`
  font-size: 30px;
  line-height: 44px;
  display: flex;
  align-items: center;
  margin-bottom: 23px;
`;

const VideoText = styled.p`
  font-size: 18px;
  line-height: 27px;
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
  position: relative; 
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
  left: 0;
  top: 0;
  width: 115px; 
  height: 115px;
  animation: ${Rotate} 12s infinite linear;
`;


export default function Video() {
  return(
    <VideoContainer>
      <Wrapper width={80}>
        <VideoContents>
          <VideoTextArea>
            <VideoTitle>더 자세한 정보가 필요하신가요?</VideoTitle>
            <VideoText>시더 디지털 사이니지의 다양한 정보를 영상으로 만나보세요.</VideoText>
          </VideoTextArea>
          <VideoImgArea>
            <BtnWrapper>
              <PlayBtn>
                <PlayBtnArrow />
              </PlayBtn>
              <TextCircle />
            </BtnWrapper>
            <Image
              src="/imgs/video_banner.png"
              width={621}
              height={150}
              alt="Video Banner"
            />
          </VideoImgArea>
        </VideoContents>
      </Wrapper>
    </VideoContainer>
  )
}