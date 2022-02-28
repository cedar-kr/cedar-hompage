import styled from 'styled-components'
import Image from 'next/image'
import { Center } from '../styles/Layout'

const VideoModalContainer = styled(Center)`
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

const VideoWrapper = styled(Center)`
  height: 100%;
  justify-content: center;
`;

const VideoView = styled.video`
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  z-index: 105;
  display: block;
`;

const VideoClose = styled.div`
  margin-top: 50px;
  z-index: 102;
`;

export default function VideoModal(props) {
  const {closeVideo} = props;

  return (  
    <VideoModalContainer onClick={closeVideo}>
      <VideoWrapper>
        <VideoView 
          onClick={(e)=> e.stopPropagation()} 
          autoPlay="autoplay"
          muted
          playsInline
          width="100%"
          loop
          controls
          preload="auto"
        >
          <source
           src="https://d1rwo7d37ra2e3.cloudfront.net/video/promo_video.mp4#t=0.2"
           type="video/mp4"
          />
          <source
           src="./videos/promo_video.webm#t=0.2"
           type="video/webm"
          />
        </VideoView>
        <VideoClose>
          <Image 
            onClick={closeVideo}
            src="/icons/video_close.png"
            width={45}
            height={45}
            alt="Video Close Button"
          />
        </VideoClose>
      </VideoWrapper>
    </VideoModalContainer>
  )
};