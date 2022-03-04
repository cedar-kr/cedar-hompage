import { Default, Mobile } from '../utils/media';
import Video from './Video';
import VideoDesk from './VideoDesk';
import { useMemo } from 'react';

export default function Videos() {
  const VideoData = useMemo(()=> [
    { 
      name: '#01.', 
      info: '더 나은 삶을 위한 새로운 기술',
      title: '더 궁금한 것이<br/> 있으세요?',
      subTitle_d: '더 나은 삶을 위한<br/>새로운 기술',
      subTitle: '더 나은 삶을 위한 새로운 기술',
      src: '/imgs/video/mobile1.png',
      src_d: '/imgs/video/1.png',
      url: 'https://youtu.be/TFPumoMADGY',
    },
    { 
      name: '#02.', 
      info: '주식회사 시더 홍보영상',
      title: '시더는 <br/> 이런곳이에요!',
      subTitle_d: '주식회사 시더<br/>홍보영상',
      subTitle: '주식회사 시더 홍보영상',
      src: '/imgs/video/mobile2.png',
      src_d: '/imgs/video/2.png',
      url: 'https://youtu.be/tti2L2HrvuY'
    },
    { 
      name: '#03.', 
      info: '모디 소개영상',
      title: '모디를 <br/> 소개할게요',
      subTitle_d: '모디<br/>소개영상',
      subTitle: '모디 소개영상',
      src: '/imgs/video/mobile3.png',
      src_d: '/imgs/video/3.png',
      url: 'https://www.youtube.com/watch?v=FxkvrWnyKYs'
    },
    { 
      name: '#04.', 
      info: 'CEO인터뷰',
      title: 'CEO 인터뷰 <br/> 영상입니다',
      subTitle_d: 'CEO<br/>인터뷰',
      subTitle: 'CEO 인터뷰',
      src: '/imgs/video/mobile4.png',
      src_d: '/imgs/video/4.png',
      url: 'https://youtu.be/KahdHPSa3yk'
    },
  ], [])

  return (
    <>
      <Mobile>
        <Video VideoData={VideoData}/>
      </Mobile>
      <Default>
        <VideoDesk VideoData={VideoData}/>
      </Default>
    </>
  )
};