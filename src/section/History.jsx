import styled from "styled-components";
import { historyData } from "../utils/data";
import SwiperCore, { Virtual,Scrollbar, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useLayoutEffect, useRef, useState } from "react";
import * as ga from '../utils/ga';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";

SwiperCore.use([ Scrollbar]);

const HistorySection = styled.section`
  height: 710px;
  position:relative;

  ${({theme})=> theme.pnt`
    height: 610px;
  `}
  ${({theme})=> theme.tablet`
    height: 610px;
  `}
  ${({theme})=> theme.tnm`
    height: 600px;
  `}
`;

const HistoryBgWrapper = styled(Swiper)`
  height: 710px;
  width:100%;
  position:absolute;

  ${({theme})=> theme.pnt`
    height: 610px;
  `}
  ${({theme})=> theme.tablet`
    height: 610px;
  `}
  ${({theme})=> theme.tnm`
    height: 600px;
  `}
`;

const HistoryBackground = styled(Image)`
  object-fit:cover;
  height: 100%;
  width:100%;
`;

const HistoryWrapper = styled(Swiper)`
  height: 660px;
  width:100%;

  .swiper-slide {
    margin-top:134px;
    height: 413px;
    max-width:496px;
    width:496px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }

  .swiper-scrollbar{
    background:white;
    width: 752px;
    height: 5px;
    cursor: pointer;
    margin-top: 88px;
    position:absolute;
    left:50%;
    transform:translateX(-50%);
  }
  .swiper-scrollbar-drag{
    background: #2FCFBE;
    width: 200px;
    height: 5px;
    cursor: pointer;
  }

  ${({theme})=> theme.pnt`
    height: 560px;
    .swiper-slide {
      margin-top:84px;
      width: 414px;
      height: 413.2px;
    }
    .swiper-scrollbar{
      width: 414px;
      margin-top:48px;
    }
    .swiper-scrollbar-drag{
      width: 109px;
    }
  `}
  ${({theme})=> theme.tablet`
      height: 560px;
     .swiper-slide {
      margin-top:84px;
      width: 414px;
      height: 413.2px;
    }
    .swiper-scrollbar{
      width: 414px;
      margin-top:48px;
    }
    .swiper-scrollbar-drag{
      width: 109px;
    }
  `}
  ${({theme})=> theme.tnm`
    height: 550px;
    .swiper-slide {
      margin-top:80px;
      width: 400px;
      height: 350px;
    }
    .swiper-scrollbar{
      width: 400px;
      margin-top:60px;
    }
    .swiper-scrollbar-drag{
      width: 105px;
    }
  `}
`;

const HistoryCard = styled.div`
  border-radius: 30px;
  min-height: 443px;
  min-width: 496px;
  width:496px;
  height:443px;
  display:flex;
  flex-direction:column;
  justify-content:top;
  align-items:center;
  text-align:center;
  padding: 20px;
  margin-top:${props=> props.hj ? 0 : 35}px;
  cursor: pointer;
  padding-top:160px;
  backdrop-filter:${props=> props.point && `blur(20px)`};
  transition: all 0.3s ease-in;
  
  ${props=> props.cardBg && `
    background-image:url(${props.cardBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center center;
  `}

  ${({theme})=> theme.pnt`
    min-height: 414px;
    min-width: 413.2px;
    width: 414px;
    height: 413.2px;
  `}
  ${({theme})=> theme.tablet`
    min-height: 414px;
    min-width: 413.2px;
    width: 414px;
    height: 413.2px;
  `}
  ${({theme})=> theme.tnm`
    min-height: 400px;
    min-width: 350px;
    width: 400px;
    height: 350px;
    margin-top:${props=> props.hj ? 0 :30}px;
  `}
`;

const HistorySubs = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  text-align:center;
  color: ${props => props.point ? '#FFFFFF' : '#000000' };

  ${({theme})=> theme.pnt`
    font-size: 1.8rem;
    line-height: 27px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 1.8rem;
    line-height: 27px;
  `}
  ${({theme})=> theme.tnm`
    font-size: 16px;
    line-height: 24px;
  `}
`;

export default function History() {
  const [swiper, setSwiper] = useState(null);
  const [hj, setHj] = useState('h');
  const [clickIndex, setClickIndex ] = useState(0);
  const swiperRef = useRef();
  
  return (
    <HistorySection onClick={(e)=> e.stopPropagation()}>
    <HistoryBgWrapper
      initialSlide={0}
      effect={"fade"}
      slidesPerView={1}
      modules={[EffectFade]}
      ref={swiperRef}
      centeredSlides
    >
    {
      historyData.map((data,idx)=>{
        return (<SwiperSlide key={idx}>
          <HistoryBackground src={data.img} layout="fill" alt={'History Background'} priority/> 
          </SwiperSlide>
        )
      })
    }
    </HistoryBgWrapper>
     <HistoryWrapper 
        initialSlide={0}
        slidesPerView={'auto'}
        spaceBetween={16}
        centeredSlides={true}
        cssMode={true}
        onSwiper={(s) => setSwiper(s)}
        scrollbar={{ draggable: true }}
        modules={[Scrollbar]}
        onInit ={(e)=> {
          swiperRef.current.swiper.slideTo(0);
        }}
        onSlideChange={(e)=> {
          swiperRef.current.swiper.slideTo(e.realIndex,300,false);
        }}
        style={{position:'absolute', top:0}}
        onClick={(e) => {
          if(clickIndex == e.clickedIndex){
            return;
          }else{
            if(hj=='h'){
              setHj('j')
            };
            if(hj=='j'){
              setHj('h')
            };
            swiper.slideTo(e.clickedIndex,300,false);
            setClickIndex(e.clickedIndex);
           
            ga.event({
              action:'click',
              category:'History',
              label:'slide',
            })
          }
        }}
        breakpoints={{
          1440:{
            spaceBetween:16
          },
          1240:{
            spaceBetween:12
          },
          905:{
            spaceBetween:12
          },
          600:{
            spaceBetween:8
          },
        }}
      >
        {historyData.map((slideContent, index) => {
          return(
          <SwiperSlide key={index} >
            <HistoryCard hj={hj =='h' && index % 2 ==0 || hj=='j' && index%2 !=0} point={historyData[0].year === slideContent.year} cardBg={slideContent.cardBg}>
              {slideContent.content.map((content,idx)=>{
                return <HistorySubs point={historyData[0].year === slideContent.year} key={idx}>{content}</HistorySubs>
              })}
            </HistoryCard>
          </SwiperSlide>
          )}
        )}
        </HistoryWrapper>
      </HistorySection>
  )
}
