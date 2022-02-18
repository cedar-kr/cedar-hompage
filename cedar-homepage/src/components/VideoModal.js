import Image from 'next/image';
import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components'

const VideoModalContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

const VideoWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
          autoPlay={"autoplay"}
          muted
          playsInline
          width="100%"
          loop
          controls
          preload="auto"
        >
          <source
           src='./videos/promo_video.mp4#t=0.2' 
           type="video/mp4"
          />
          <source
           src='./videos/promo_video.webm#t=0.2' 
           type="video/webm"
          />
        </VideoView>
        <VideoClose>
          <Image 
            src='/icons/video_close.png'
            onClick={closeVideo}
            width={45}
            height={45}
          />
        </VideoClose>
      </VideoWrapper>
    </VideoModalContainer>
  )
};