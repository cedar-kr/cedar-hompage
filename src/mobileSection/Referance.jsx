import styled from "styled-components";
import React, { useRef, useState } from 'react';
import { referanceMobileData } from "../utils/data";
import {Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import * as ga from '../utils/ga';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ReferanceWrapper = styled.div`
  display:flex;
  flex-direction:column;
  height:680px;
`;

const ReferImage = styled.div`
  min-height:310px;
  ${props=> props.bg && `
    background-image: url(${props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
  `}
  width:100%;
`;

const ReferVideo = styled.video`
  min-height:310px;
  width:100vw;
`;

const ReferTitle = styled.div`
  text-align:left;
  font-family:'SCDream6';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #222222;
  padding-top:40px;
  padding-bottom:20px;
`;

const BgSlide = styled(Swiper)`
  height:290px;
  width:100vw;
`;

const Slide = styled(Swiper)`
  height:290px;
  width:100vw;
  margin-top:-50px;

  .swiper-slide {
    height: 250px;
    width: 160px;
  }

  .swiper-pagination-bullet {
    width:5px;
    height:5px;
    background: #C4C4C4;
    opacity:1;
    cursor: pointer;
  }
  .swiper-pagination-bullet-active{
    background: #2FCFBE;
    cursor: pointer;
  }
  .swiper-button-prev{
    position:absolute;
    width:90px;
    height: 250px;
    background:red;
    top:0;
    left:0;
    opacity:0;
    cursor: pointer;
  }
  .swiper-button-next{
    position:absolute;
    width:100px;
    background:red;
    height: 250px;
    top:0;
    right:0;
    opacity:0;
    cursor: pointer;
  }
`;

const SlideItem = styled.div`
  background: #F6F6F6;
  border-radius: 20px;
  height: 250px;
  width: 160px;
  margin-right:1.2vmin;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:15px;
  cursor: pointer;
`;

const ItemTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  width:100%;
  color: #222222;
`;


const ItemSubs = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  position:relative;
  text-align: right;
  color: #222222;
  width:100%;
`;


export default function Referance(params) {
  const swiperRef = useRef();

  return (
    <ReferanceWrapper>
      <ReferTitle>주요 레퍼런스</ReferTitle>
        <BgSlide 
          slidesPerView={1}
          centeredSlides={true}
          initialSlide={0}
          effect={"fade"}
          loopFillGroupWithBlank={true}
          loop={true}
          modules={[EffectFade]}
          ref={swiperRef}
        >
        {referanceMobileData.map((bg,idx) => {
          return (<SwiperSlide key={idx}>
           {bg.bg ?<ReferImage bg={bg.bg}/>:<ReferVideo 
            onClick={(e)=> e.stopPropagation()} 
            autoPlay muted playsInline loop preload="auto">            
              <source
              src={bg.video}
              type="video/mp4"
              />
          </ReferVideo> }
          </SwiperSlide>
          )})
        }
      </BgSlide>
      <Slide 
        slidesPerView={'auto'}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        initialSlide={0}
        modules={[Autoplay,Pagination]}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={8}
        loopFillGroupWithBlank={true}
        slidesPerGroup={1}
        loop={true}
        className="mySwiper"
        onSlideChange={(e)=> {
          swiperRef.current.swiper.slideTo(e.realIndex+1);
        }}
        slideToClickedSlide
        onClick={(e)=>{
          ga.event({
            action:'Click',
            category:'Referance',
            label:`Slide`,
          })
        }}
      >
        {referanceMobileData.map((data, index) => {
          return (<SwiperSlide key={index}>
            <SlideItem >
              <ItemTitle>{data.title}</ItemTitle>
              <Image src={data.src} width={data.imgSize.width} height={data.imgSize.height} alt={'Reference Menu'} />
              <ItemSubs dangerouslySetInnerHTML={{__html:data.subs}}></ItemSubs>
            </SlideItem>
          </SwiperSlide>)
        })}
        </Slide>
    </ReferanceWrapper>
  )
}
