import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import playIcon from '../../public/imgs/video/playBtn.png'
import { Center, Row } from '../styles/Layout'
import { NSText, Title } from '../styles/PublicStyles'
import React, { useMemo } from 'react'
import * as ga from '../utils/ga';

const VideoContainer = styled.section`
  padding: 30px 0px;
  background-color: #f5f5f5;
  height: 600px;
`;

const VideoTitle = styled(Title)`
  font-weight: 500;
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

const VideoItems = styled(Row)`
  width: 1050px;
`;

const VideoThumnailBox = styled(Center)`
  justify-content: center;
  width: 222px;
  height: 240px;
`;

const VideoThumnail = styled.div`
  width: 222px;
  height: 240px;
  background: ${props=> `url(${props.src})`};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoPlayBtn = styled(Image)`
  position: absolute;
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

const VideoText = styled(NSText)`
  color: #333;
  width: 100%;
`;

export default function Video(props) {
  const {VideoData} = props;

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
            VideoData && VideoData.map((data,idx)=> {
              return (
                <VideoItem key={idx} mg={ idx == VideoData.length-1 ? true : false}>
                  <VideoThumnailBox>
                    <Link href={data.url} passHref >
                      <VideoThumnail src={data.src} onClick={()=>ga.event({action: `mobile video ${data.name} click `})}>
                        <VideoPlayBtn src={playIcon} width={34} height={24} alt='Video Play Button'/>
                      </VideoThumnail>
                    </Link>
                  </VideoThumnailBox>
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