import styled, { keyframes } from 'styled-components'
import { NSText, Title } from '../styles/PublicStyles'
import React, { useMemo, useState } from 'react'
import { Center, Row, Wrapper } from '../styles/Layout';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive'
import { Desktop } from '../utils/media';
import Link from 'next/link';

const VideoContainer = styled.section`
  padding: 146px 0px;
  background-color: #f5f5f5;
  height:768px;

  ${({theme})=>theme.pc`
    height:100vh;
  `}
`;

const VideoWrapper = styled(Wrapper)`
  display: flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:row;
`;

const topFristFadeOut = keyframes`
  0% {
    position: relative;
    top:-20%;
    opacity: 0;
  }
  20% {
    position: relative;
    top:-10%;
    opacity: 0;
  }
  100% {
    position: relative;
    top:0%;
    opacity: 1;
  }
`;

const topFadeOut = keyframes`
  0% {
    position: relative;
    top:-10%;
    opacity: 0;
  }
  100% {
    position: relative;
    top:0%;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const VideoTitle = styled(Title)`
  font-weight: 500;
  margin-top: ${props => props.first && 30}px;
  margin-bottom: ${props => !props.first && 40}px;
  ${({theme})=>theme.pc`
    font-size:4rem;
  `}
  animation-name: ${props => props.first ? topFristFadeOut : topFadeOut };
  animation-duration: 1s;
`;

const VideoSlideBtns = styled.div`
  display: flex;
  flex-direction:row;
  align-items:left;
`;

const VideoImg = styled.div`
  display: flex;
  position: relative;
`;

const VideoIcons = styled(Row)`
  margin-top:23px;
  margin-bottom:16px;
`;

const VideoIcon = styled.div`
  width: 14px;
  height: 14px;
  flex-grow: 0;
  transform: rotate(-315deg);
  margin-right: 10px;
  background-color: ${props=> props.select ? "#d74c4b" : "#e0e0e0" };
  cursor: pointer;
`;

const VideoAlign = styled.div`
  width: 26.8%;
  ${({theme})=>theme.pc`
    width:31.6%;
  `}
  position: relative;
  height: 460px;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

const VideoBtns = styled.div`
  display: flex ;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  height: 200px;
`;

const VideoText = styled.div`
  font-size:1.6rem;
  color:#000;
  text-align:left;
  font-family: 'Noto Sans KR', sans-serif;
  ${({theme})=>theme.pc`
   font-size:2.5rem;
  `}
  animation-name: ${props => props.first ? topFristFadeOut : topFadeOut };
  animation-duration: 1s;
`;

const VideoImgText = styled.div`
  font-size:1.8rem;
  color:#d74c4b;
  text-align:left;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 30px 0px;
  animation-name: ${fadeOut};
  animation-duration: 1s;
`;

const VideoPlayIcon = styled.div`
  background: ${props=> `url(${props.src})`};
  background-size:cover;
  position: absolute; 
  left: ${props => props.isDesktop? '43%': '40%'};
  top: ${props=> props.isDesktop? '43%': '40%'};
  z-index: 100;
  width: 84px;
  height: 84px;
  cursor: pointer;
  :hover{
    transform: scale(110); -webkit-transform: scale(1.5);
    transition: transform 0.5s; 
    -webkit-transition: -webkit-transform 0.5s
  }
`;

const VideoSub = styled.div`
  height: 460px;
  padding-left:24px;
  display: flex;
  align-items:flex-end;
  ${({theme})=> theme.pc`
    align-items:center;
    padding-left:96px;
  `}
`;

const VideoArrow = styled.div`
  cursor: pointer;
  width:50px;
  height: 50px;
  background: ${props=> `url(${props.src})`};
  :hover{
    background: ${props=> `url(${props.src_h})`};
  }
`;


export default function VideoDesk(props) {
  const { VideoData } = props;
  const [ select, setSelect ] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const prevVideo = () => {
    if(select === 0 ){
      setSelect(3);
    }else{
      setSelect(select-1);
    }
  }

  const nextVideo = () => {
    if(select === VideoData.length-1){
      setSelect(0);
    }else{
      setSelect(select+1);
    }
  }

  return (
    <VideoContainer>
      {VideoData && VideoData.map((data,idx)=> {
       return select === idx && (
       <VideoWrapper> 
          <VideoAlign >
          {data.title.split('<br/>').map((data,idx)=>{
              return <VideoTitle key={idx} first={idx==0 ? true : false}>
                {data}
              </VideoTitle>
          })}
          <VideoSlideBtns>
            <VideoArrow 
              src="/icons/left_arrow_b.png"
              src_h="/icons/left_arrow_r.png"
              onClick={prevVideo}
              />
            <VideoArrow
              src="/icons/right_arrow_b.png"
              src_h="/icons/right_arrow_r.png"
              onClick={nextVideo}
            />
          </VideoSlideBtns>
        </VideoAlign>
        <VideoImg>
          <Image
            src={data.src_d}
            width={isDesktop ? 707 : 467}
            height={isDesktop ? 720 : 467}
          />
          <Link href={data.url} passHref>
            <VideoPlayIcon
              isDesktop={isDesktop}
              src="/icons/video_btn_b.png"
              onClick={()=>setSelect(idx)}
            />
          </Link>
        </VideoImg>
        <VideoAlign>
          <VideoSub>
            <VideoBtns>
              <VideoText first>{data.name}</VideoText>
              <VideoText dangerouslySetInnerHTML={{__html: isDesktop? data.subTitle_d: data.subTitle}}></VideoText>
              <Desktop>
                <VideoImgText>이미지를 눌러보세요</VideoImgText>
              </Desktop>
              <VideoIcons>
                {VideoData.map((v,idx)=>{
                  return <VideoIcon key={idx} select={select===idx} onClick={()=>setSelect(idx)}/>
                })}
              </VideoIcons>
            </VideoBtns>
          </VideoSub>
        </VideoAlign>
        </VideoWrapper>)
      })}
  </VideoContainer>
  )
};