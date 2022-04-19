import styled, { keyframes } from "styled-components";
import React, { useRef, useState } from 'react';
import { referanceData } from "../utils/data";
import Image from "next/image";
import SwiperCore, { Scrollbar, EffectFade, Pagination} from 'swiper';
import { SwiperSlide, Swiper } from "swiper/react";
import * as ga from '../utils/ga';
import { useMediaQuery } from "react-responsive";

SwiperCore.use([ Scrollbar,EffectFade]);

const ReferanceWrapper = styled.div`
  display:flex;
  flex-direction:row;
  overflow:hidden;
  width:100%;

  ${({theme})=> theme.pc`
    height:1000px;
  `}
  ${({theme})=> theme.pnt`
    height:645px;
  `}
  ${({theme})=> theme.tablet`
    height:645px;
  `}
  ${({theme})=> theme.tnm`
    height:600px;
  `}
`;

const BgSlide = styled(Swiper)`
  width:49.58%;
  z-index:1;
`;

const ReferImage = styled.div`
  height:100%;
  width:100%;
  z-index:1;
  ${props=> props.bg && `
    background-image:url(${props.bg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  `}
  z-index:1;

  ${({theme})=> theme.pnt`
    height:645px;
  `}
  ${({theme})=> theme.tablet`
    height:645px;
  `}
  ${({theme})=> theme.tnm`
    height:600px;
  `}
`;

const ReferVideo = styled.video`
  height:100%;
  /* width:100%; */
  z-index:1;
  ${({theme})=> theme.pnt`
    height:645px;
  `}
  ${({theme})=> theme.tablet`
      height:645px;
  `}
  ${({theme})=> theme.tnm`
      height:100vmin;
  `}
`;

const ReferContent = styled.div`
  z-index:1;
  width:50.4%;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const ReferTitle = styled.div`
  margin-top:81px;
  text-align:left;
  font-family:'SCDream6';
  font-size:5rem;
  font-weight:bold;
  color: #222222;
  line-height: 60px;
  margin-bottom:30px;
  width:70%;
  text-align:left;
  ${({theme})=> theme.pnt`
    margin-top:49px;
    margin-bottom:20px;
    font-size: calc(5rem + (100vw - 1240px) * ((40 - 40) / (1439 - 1240)));
    line-height: 48px;
 
  `}
  ${({theme})=> theme.tablet`
    margin-top:50px;
    margin-bottom:20px;
    font-size: 4rem;
    line-height: 48px;
  `}
  ${({theme})=> theme.tnm`
    margin-top:40px;
    margin-bottom:15px;
    font-size: 30px;
    line-height: 36px;
    width:80%;
  `}
`;

const ReferSubs = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  font-family: 'NotoSansKR-Regular', sans-serif;
  color: #222222;
  width:70%;
  text-align:left;

  ${({theme})=> theme.pnt`
    font-size: calc(2rem + (100vw - 1240px) * ((17 - 17) / (1439 - 1240)));
    line-height: 25px;
    width:70%;
    text-align:left;
  `}
  ${({theme})=> theme.tablet`
    font-size: 1.7rem;
    line-height: 25px;
    width:70%;
    text-align:left;
  `}
  ${({theme})=> theme.tnm`
    font-size: calc(1.7rem + (100vw - 600px) * ((17 - 15) / (904 - 600)));
    line-height: 22px;
    width:75%;
    text-align:left;
  `}
`;

const Slide = styled.div`
  margin-top:54px;

  ${({theme})=> theme.pnt`
    margin-top:57px;
  `}
  ${({theme})=> theme.tablet`
    margin-top:57px;
  `}
  ${({theme})=> theme.tnm`
    margin-top:28px;
  `}
`;

const SlideAbsolute = styled.div`
  position:absolute;
  width:58%;
  overflow:hidden;
  right:0px;
`;

const SlideItems = styled(Swiper)`
  display:flex;
  flex-direction:row;

  .swiper-slide{
    max-height: 600px;
    max-width: 368px;
    margin-bottom:65px;
    cursor: pointer;
  }

  .swiper-pagination {
    width: 70%;
    margin-left:23%;
    cursor: pointer;
    position: absolute;
    bottom: 0;
  }

  .swiper-pagination-bullet {
    margin: 0px !important;
	  border-radius: 0;
	  width: 20%;
	  height: 5px;
    background:#F6F6F6;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
	  background: #2FCFBE;
  }

  ${({theme})=> theme.pnt`
    .swiper-slide{
      max-height: 340.17px;
      max-width: 201px;
      margin-bottom:40px;
    }
    .swiper-scrollbar{
      width: 70%;
      height: 5px;
      margin-left:20%;
    }
    .swiper-scrollbar-drag{
      width: 109.94px;
      height: 5px;
    }
  `}
  ${({theme})=> theme.tablet`
    .swiper-slide{
      max-height: 340.17px;
      max-width: 201px;
      margin-bottom:40px;
    }
    .swiper-scrollbar{
      width: 70%;
      height: 5px;
      margin-left:23%;
    }
    .swiper-scrollbar-drag{
      width: 109.94px;
      height: 5px;
    }
  `}
  ${({theme})=> theme.tnm`
    .swiper-slide{
      max-height: 320px;
      max-width: 196px;
      margin-bottom:65px;
    }
    .swiper-scrollbar{
      width: 70%;
      height: 5px;
      margin-left:23%;

    }
    .swiper-scrollbar-drag{
      width: 62.82px;
      height: 5px;
    }
  `}
`;

const SlideItem = styled.div`
  background:#F6F6F6;
  border-radius: 30px;
  height:600px;
  width: 368px;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:space-between;
  padding:40px;
  z-index:101;

  ${({theme})=> theme.pnt`
      height: 340.17px;
      width: 201px;
      padding:20px;
  `}
  ${({theme})=> theme.tablet`
      height: 340.17px;
      width: 201px;
      padding:20px;
  `}
  ${({theme})=> theme.tnm`
      height: 320px;
      width: 196px;
      padding: 15px;
  `}
`;

const ItemTitle = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  text-align: left;
  width:100%;

  ${({theme})=> theme.pnt`
   font-size: 1.7rem;
    line-height: 25px;

  `}
  ${({theme})=> theme.tablet`
    font-size: 1.7rem;
    line-height: 25px;
  `}
  ${({theme})=> theme.tnm`
    font-size: 1.5rem;
    line-height: 22px;
  `}
`;

const ItemImage = styled.div`
    width: 80%;
    height: 100%;
    position: relative;

  ${({theme})=> theme.pnt`
    width: 80%;
  `}
  ${({theme})=> theme.tablet`
    width: 80%;
  `}
  ${({theme})=> theme.tnm`
    width: 70%;
  `}
`;

const ItemSubs = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  text-align: right;
  width:100%;
  line-height:29.6px;

  ${({theme})=> theme.pnt`
    font-size: 1.7rem;
    line-height: 25px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 1.7rem;
    line-height: 25px;
  `}
  ${({theme})=> theme.tnm`
    font-size: 1.5rem;
    line-height: 22px;
  `}
`;


export default function Referance(params) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef();
  const isDesktop = useMediaQuery({ minWidth: 1440 })

  return (
    <ReferanceWrapper>
        <BgSlide 
          slidesPerView={1}
          centeredSlides={true}
          initialSlide={0}
          effect={"fade"}
          loop={true}
          modules={[EffectFade]}
          ref={swiperRef}
        >
        {referanceData.map((bg,idx) => {
          return (<SwiperSlide key={idx} virtualIndex={activeIndex}>
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
      <ReferContent>
        <ReferTitle>주요 레퍼런스</ReferTitle>
        <ReferSubs>다양한 디스플레이 통합 솔루션을 기반으로 여러 분야에서 차별화된 레퍼런스를 보유합니다.</ReferSubs>
          <Slide>
            <SlideAbsolute>
              <SlideItems 
                slidesPerView={'auto'} 
                spaceBetween={16} 
                initialSlide={5}
                loop={true}
                pagination={{
                  clickable: true
                }}
                onSwiper={(s) => setSwiper(s)}
                onSlideChange={(e)=> {
                  setActiveIndex(e.activeIndex); 
                  swiperRef.current.swiper.slideTo(e.realIndex+1,300,false);
                }}
                modules={[EffectFade, Pagination]}
                slideToClickedSlide
                onClick={(e) => {
                  swiperRef.current.swiper.slideTo(e.realIndex+1,300,false);
                  ga.event({
                    action:'Click',
                    category:'Referance',
                    label:'Slide',
                  })
                }}
                allowTouchMove={false}
                breakpoints={{
                  1440:{
                    spaceBetween:16,
                  },
                  1240:{
                    spaceBetween:12,
                  },
                  905:{
                    spaceBetween:12,
                  },
                  600:{
                    spaceBetween:8,
                  },
                }}
              >
                {
                  referanceData.map((data,idx)=>{
                    return (<SwiperSlide key={idx} >
                       <SlideItem key={idx}>
                    <ItemTitle>{data.title}</ItemTitle>
                      <ItemImage width={data.imgSize.width} height={data.imgSize.height}>
                        <Image src={data.src} layout='fill' objectFit="contain"/>
                      </ItemImage>
                    {!isDesktop && data.subsEnter ? <ItemSubs dangerouslySetInnerHTML={{__html:data.subsEnter}}></ItemSubs> : <ItemSubs>{data.subs}</ItemSubs>}
                  </SlideItem>
                  </SwiperSlide>)
                  })
                }
              </SlideItems>
            </SlideAbsolute>
          </Slide>
      </ReferContent>
    </ReferanceWrapper>
  )
}