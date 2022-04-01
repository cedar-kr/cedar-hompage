import styled, { keyframes } from 'styled-components'
import { Title } from '../styles/PublicStyles'
import React, { useEffect, useState } from 'react'
import { Row, Wrapper } from '../styles/Layout'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { Desktop } from '../utils/media'
import Link from 'next/link'
import { fadeInLeft, fadeInRight, fadeInTop } from '../styles/keyframe'
import Fade from 'react-reveal/Fade';
import * as ga from '../utils/ga';

const VideoContainer = styled.section`
  padding: 146px 0px;
  background-color: #f5f5f5;
  height: 100%;

  ${({theme})=>theme.tablet`
    height: 768px;
  `}
`;

const VideoWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  font-size: calc(2.5rem + (100vw - 1024px) * ((40 - 25) / (1920 - 1024)));
  word-break: keep-all;
  margin-top: ${props => props.first && 30}px;
  margin-bottom: ${props => !props.first && 40}px;

  ${({theme})=> theme.fk`
    font-size: 4rem;
  `}  
  ${({theme})=> theme.tablet`
    font-size: 2.5rem;
  `}  
  
  animation-name: ${props => props.first ? topFristFadeOut : topFadeOut};
  animation-duration: 1s;
`;

const VideoSlideBtns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
`;

const VideoImg = styled.div`
  display: flex;
  position: relative;
  /* width: 70vw;
  height: 70vw; */
  /* animation : ${fadeInTop} ease-in 1410ms; */
`;

const VideoIcons = styled(Row)`
  margin-top: 23px;
  margin-bottom: 16px;
`;

const VideoIcon = styled.div`
  width: 14px;
  height: 14px;
  flex-grow: 0;
  transform: rotate(-315deg);
  margin-right: 10px;
  background-color: ${props=> props.select ? "#d74c4b" : "#e0e0e0"};
  cursor: pointer;
`;

const VideoAlign = styled.div`
  width: 35%;
  height: 460px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({theme})=>theme.tablet`
    width: 26.8%;
  `}
  /* animation : ${props=> props.left ? fadeInLeft: fadeInRight} ease-in 470ms; */
`;

const VideoBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  /* height: 200px; */
`;

const VideoText = styled.div`
  font-size: calc(1.6rem + (100vw - 1024px) * ((25 - 16) / (1920 - 1024)));
  color: #000;
  text-align: left;
  font-family: 'Noto Sans KR', sans-serif;
  word-break: keep-all;

  ${({theme})=> theme.fk`
    font-size: 2.5rem;
  `}  
  ${({theme})=> theme.tablet`
    font-size: 1.6rem;
  `}  

  /* animation-name: ${props => props.first ? topFristFadeOut : topFadeOut}; */
  /* animation-duration: 1s; */
`;

const VideoImgText = styled.div`
  font-size: 1.8rem;
  word-break: keep-all;
  color: #d74c4b;
  text-align: left;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 30px 0px;
  /* animation-name: ${fadeOut}; */
  /* animation-duration: 1s; */
`;

const VideoPlayIcon = styled.div`
  background: ${props=> `url(${props.src})`};
  background-size: cover;
  position: absolute; 
  left: ${props => props.isDesktop? '43%': '40%'};
  top: ${props=> props.isDesktop? '43%': '40%'};
  z-index: 100;
  width: 84px;
  height: 84px;
  cursor: pointer;
  :hover {
    transform: scale(110); -webkit-transform: scale(1.5);
    transition: transform 0.5s; 
    -webkit-transition: -webkit-transform 0.5s
  }
`;

const VideoSub = styled.div`
  display: flex;
  align-items: center;
  height: 460px;
  padding-left: 96px;

  ${({theme})=> theme.tablet`
    align-items: flex-end;
    padding-left: 24px;
  `}
`;

const VideoArrow = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  background: ${props=> `url(${props.src})`};
  :hover {
    background: ${props=> `url(${props.src_h})`};
  }
`;

export default function VideoDesk(props) {
  const { VideoData } = props;
  const [ select, setSelect ] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const [ first, setFirst] = useState(true);

  const prevVideo = () => {
    ga.event({
      action: `video slide prev btn click `,
      params: {}
    })
    if(select === 0 ){
      setSelect(3);
    }else{
      setSelect(select-1);
    }
  }

  const nextVideo = () => {
    ga.event({
      action: `video slide next btn click `,
      params: {}
    })
    if(select === VideoData.length-1){
      setSelect(0);
    }else{
      setSelect(select+1);
    }
  }

  const clickPage = (e) => {
    setSelect(e);
    ga.event({
      action: `video pagenation #0${e+1} btn click `,
      params: {}
    })
  }

  useEffect(()=>{
    setTimeout(() => {
      setFirst(false)
    }, 1000);
  },[]);

  const videoPlay = (data,idx)=>{
    setSelect(idx);
    ga.event({action: `video ${data.name} click`})
  }

  return (
    <VideoContainer>
      {VideoData && VideoData.map((data,idx)=> {
       return select === idx && (
       <VideoWrapper key={idx}> 
          <VideoAlign left>
       <Fade left appear distance={'130px'} duration={470} easing spy={false} >
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
        </Fade>
        </VideoAlign>
        <Fade top delay={1140} distance={'130px'} duration={470} easing>
        <VideoImg>
          <Image
            src={data.src_d}
            width={700}
            height={700}
          />
          <Link href={data.url} passHref>
            <VideoPlayIcon
              isDesktop={isDesktop}
              src="/icons/video_btn_b.png"
              onClick={()=>videoPlay(data,idx)}
            />
          </Link>
        </VideoImg>
        </Fade>
        <VideoAlign>
          <VideoSub>
            <VideoBtns>
              <Fade right delay={740} distance={'130px'} duration={470} easing >
              <VideoText first>{data.name}</VideoText>
              <VideoText dangerouslySetInnerHTML={{__html: isDesktop? data.subTitle_d: data.subTitle}}></VideoText>
              <Desktop>
                <VideoImgText>이미지를 눌러보세요</VideoImgText>
              </Desktop>
              <VideoIcons>
                {VideoData.map((v,idx)=>{
                  return <VideoIcon key={idx} select={select===idx} onClick={()=>clickPage(idx)}/>
                })}
              </VideoIcons>
              </Fade>
            </VideoBtns>
          </VideoSub>
        </VideoAlign>
        </VideoWrapper>)
      })}
  </VideoContainer>
  )
};