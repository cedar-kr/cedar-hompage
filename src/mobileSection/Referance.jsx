import styled, { keyframes } from "styled-components";
import React, { useRef, useState } from 'react';
import { referanceData, referanceMobileData } from "../utils/data";
import SwiperCore, { Virtual,Scrollbar, Pagination, Autoplay, Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Image from "next/image";

SwiperCore.use([Virtual, Scrollbar, Autoplay,Navigation, EffectFade]);
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

const SlideItem = styled(SwiperSlide)`
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
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  width:100%;
  color: #222222;
`;


const ItemSubs = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: flex-end;
  justify-content:right;
  text-align: right;
  color: #222222;
  width:100%;
`;


export default function Referance(params) {
  const swiperRef = useRef();
  const [ activeIndex, setActiveIndex ] = useState(0);

  return (
    <ReferanceWrapper>
      <ReferTitle>주요 레퍼런스</ReferTitle>
        <BgSlide 
          slidesPerView={1}
          centeredSlides={true}
          initialSlide={0}
          effect={"fade"}
          spaceBetween={16}
          loopFillGroupWithBlank={true}
          loop={true}
          modules={[ Autoplay,EffectFade]}
          ref={swiperRef}
        >
        {referanceMobileData.map((bg,idx) => {
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
      <Slide 
        slidesPerView={2.1}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        initialSlide={0}
        autoplay={{
          delay: 3000,
        }}
        loopFillGroupWithBlank={true}
        slidesPerGroup={1}
        navigation={true}
        loop={true}
        modules={[Pagination,Autoplay,Navigation]}
        className="mySwiper"
        onSlideChange={(e)=> {
          swiperRef.current.swiper.slideTo(e.activeIndex-2);
        }}
        breakpoints={{
          380:{
            slidesPerView:2.2
          },
          400:{
            slidesPerView:2.3
          },
          420:{
            slidesPerView:2.4
          },
          450:{
            slidesPerView:2.5
          },
          470:{
            slidesPerView:2.6
          },
          500:{
            slidesPerView:2.7
          },
          520:{
            slidesPerView:2.8
          },
          550:{
            slidesPerView:2.9
          },
        }}
      >
        {referanceMobileData.map((data, index) => {
          return (<SwiperSlide key={index} virtualIndex={index}>
            <SlideItem >
              <ItemTitle>{data.title}</ItemTitle>
              <Image src={data.src} width={data.imgSize.width} height={data.imgSize.height}/>
              <ItemSubs><div dangerouslySetInnerHTML={{__html:data.subs}}></div></ItemSubs>
            </SlideItem>
          </SwiperSlide>)
        })}
        </Slide>
    </ReferanceWrapper>
  )
}
