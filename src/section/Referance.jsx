import styled, { keyframes } from "styled-components";
import React, { useRef, useState } from 'react';
import { referanceData } from "../utils/data";
import Image from "next/image";
import SwiperCore, { Scrollbar, EffectFade } from 'swiper';
import { SwiperSlide, Swiper } from "swiper/react";
import * as ga from '../utils/ga';

SwiperCore.use([ Scrollbar,EffectFade]);

const ReferanceWrapper = styled.div`
  height:1000px;
  display:flex;
  flex-direction:row;
  overflow:hidden;
`;

const BgSlide = styled(Swiper)`
  height:1000px;
  width:49.58%;
  z-index:1;
`;

const ReferImage = styled.div`
  height:1000px;
  ${props=> props.bg && `
    background-image:url(${props.bg});
    background-repeat: no-repeat;
    background-size:cover;
  `}
  z-index:1;
`;

const ReferVideo = styled.video`
  height:1000px;
  z-index:1;
`;

const ReferContent = styled.div`
  z-index:1;
  width:50.4%;
`;

const ReferTitle = styled.div`
  margin-top:80px;
  text-align:left;
  font-family:'SCDream6';
  font-size:5rem;
  font-weight:bold;
  color: #222222;
  line-height: 60px;
  margin-bottom:30px;
  padding: 0px 200px 0px 147px;

  ${({theme})=> theme.pnt`
    font-size: calc(5rem + (100vw - 1240px) * ((50 - 40) / (1439 - 1240)));
    line-height: 48px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 4rem;
    line-height: 48px;
  `}
  ${({theme})=> theme.tnm`
    font-size: calc(4rem + (100vw - 600px) * ((40 - 30) / (904 - 600)));
    line-height: 36px;
  `}
`;

const ReferSubs = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  font-family: 'NotoSansKR-Regular', sans-serif;
  color: #222222;
  padding: 0px 200px 0px 147px;

  ${({theme})=> theme.pnt`
    font-size: calc(2rem + (100vw - 1240px) * ((20 - 17) / (1439 - 1240)));
    line-height: 25px;
    padding: 0px 83px 0px 200px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 1.7rem;
    line-height: 25px;
    padding: 0px 83px 0px 83px;
  `}
  ${({theme})=> theme.tnm`
    font-size: calc(1.7rem + (100vw - 600px) * ((17 - 15) / (904 - 600)));
    line-height: 22px;
    padding: 0px 77px 0px 32px;
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
  .swiper-scrollbar{
    background:white;
    width: 752px;
    height: 5px;
    margin-left:30%;
    cursor: pointer;
    background:#F6F6F6;
    cursor: pointer;

  }
  .swiper-scrollbar-drag{
    background: #2FCFBE;
    width: 200px;
    height: 5px;
    cursor: pointer;
  }
`;

const SlideItem = styled.div`
  background:#F6F6F6;
  border-radius: 30px;
  height: 600px;
  width: 368px;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:space-between;
  padding:40px 0px;
  z-index:101;
`;

const ItemTitle = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  text-align: left;
  width:100%;
  padding:0px 40px;
`;

const ItemImage = styled.div`
  width:${props=> props.width}px;
  height:${props=> props.height}px;
`;

const ItemSubs = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  text-align: right;
  width:100%;
  line-height:29.6px;
  padding:0px 40px;
`;


export default function Referance(params) {
  const [swiper, setSwiper] = useState(null);
  const [ activeIndex, setActiveIndex ] = useState(0);
  const swiperRef = useRef();

  return (
    <ReferanceWrapper>
        <BgSlide 
          slidesPerView={1}
          centeredSlides={true}
          initialSlide={0}
          effect={"fade"}
          spaceBetween={16}
          loopFillGroupWithBlank={true}
          loop={true}
          modules={[ EffectFade]}
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
                slidesPerView={3} 
                spaceBetween={16} 
                initialSlide={0}
                scrollbar={{ draggable: true, dragSize: 200 }}
                onSwiper={(s) => setSwiper(s)}
                onSlideChange={(e)=> {
                  setActiveIndex(e.activeIndex); 
                  swiperRef.current.swiper.slideTo(e.activeIndex+1,300,false);
                }}
                modules={[EffectFade,Scrollbar]}
                onClick={(e) => {
                  swiper.slideTo(e.clickedIndex, 300, false);
                  swiperRef.current.swiper.slideTo(e.clickedIndex+1,300,false);
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
                    slidesPerView:'auto'
                  },
                  905:{
                    spaceBetween:12,
                    slidesPerView:'auto'
                  },
                  600:{
                    spaceBetween:8,
                    slidesPerView:'auto'

                  },
                }}
              >
                {
                  referanceData.map((data,idx)=>{
                    return (<SwiperSlide key={idx}>
                       <SlideItem key={idx}>
                    <ItemTitle>{data.title}</ItemTitle>
                    <ItemImage width={data.imgSize.width} height={data.imgSize.height}>
                      <Image src={data.src} width={data.imgSize.width} height={data.imgSize.height}/>
                    </ItemImage>
                    <ItemSubs>{data.subs}</ItemSubs>
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
