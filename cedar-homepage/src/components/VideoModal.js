import Image from 'next/image';
import styled from 'styled-components'

const VideoModalContainer = styled.div`
  background: rgba(0,0,0,0.7);
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
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
          autoplay
          muted
          loop
          playsInline
          width="100%"
          controls
          preload="auto"
        >
          <source
           src='./videos/promo_video.webm' 
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