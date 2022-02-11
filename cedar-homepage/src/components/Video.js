import styled from 'styled-components'
import React, { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Center, Wrapper } from '../styles/Layout';
import playIcon from '../../public/imgs/video/playBtn.png';

const VideoContainer = styled.section`
  padding: 30px 0px;
  background-color: #f5f5f5;
  height: 600px;
`;

const VideoTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 3rem;
  line-height: 45px;
  margin: 30px 0px;
  margin-left: 16px;
`;

const VideoBox = styled.div`
  margin-top: 30px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const VideoItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 1050px;
`;

const VideoTest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 222px;
  height: 240px;
`;

const VideoThumnail = styled.div`
  width: 222px;
  height: 240px;
  background: ${props=> `url(${props.src})`};
  display: flex;
  justify-content:center;
  align-items:center;
`;
const VideoPlayBtn = styled(Image)`
  position:absolute;
`;

const VideoItem = styled(Center)`
  border: 1px solid #e0e0e0;
  margin-left: 16px;
  margin-right: ${props=> props.mg ? 16 : 0}px;
  width: 242px;
  height: 310px;
  background: #fff;
  padding: 10px;
`;

const VideoTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

const VideoText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: #333;
  width: 100%;
`;


export default function Video(props) {
  
  const VideoData = useMemo(()=>[
    { 
      name: '#01.', 
      info: '더 나은 삶을 위한 새로운 기술',
      src: '/imgs/video/mobile1.png',
      url: 'https://youtu.be/TFPumoMADGY',
    },
    { 
      name: '#02.', 
      info: '주식회사 시더 홍보영상',
      src: '/imgs/video/mobile2.png',
      url: 'https://youtu.be/tti2L2HrvuY'
    },
    { 
      name: '#03.', 
      info: '모디 소개영상',
      src: '/imgs/video/mobile3.png',
      url: 'https://www.youtube.com/watch?v=FxkvrWnyKYs'
    },
    { 
      name: '#04.', 
      info: 'CEO인터뷰',
      src: '/imgs/video/mobile4.png',
      url: 'https://youtu.be/KahdHPSa3yk'
    },
  ],[])

  return (
    <VideoContainer>
     <VideoTitle>
        더 궁금한 것이
        <br />
        있으세요?
      </VideoTitle>
      <VideoBox>
        <VideoItems>
          {
            VideoData.map((data,idx)=>{
              return (
                <VideoItem key={idx} mg={ idx == VideoData.length-1 ? true : false}>
                  <VideoTest>
                    <Link href={data.url}>
                      <VideoThumnail src={data.src}>
                      <VideoPlayBtn src={playIcon} width={34} height={24} alt='video play btn'/>
                    </VideoThumnail>
                    </Link>
                  </VideoTest>
                  <VideoTexts>
                    <VideoText>{data.name}</VideoText>
                    <VideoText dangerouslySetInnerHTML={{__html: data.info }}></VideoText>
                  </VideoTexts>
                </VideoItem>
              )
            })
          }
        </VideoItems>
      </VideoBox>
      </VideoContainer>
  )
};