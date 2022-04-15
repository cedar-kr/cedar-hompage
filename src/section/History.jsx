import styled, { keyframes } from "styled-components";
import { historyData } from "../utils/data";
import SwiperCore, { Virtual, Navigation,Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from "react";
import * as ga from '../utils/ga';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Virtual, Navigation, Scrollbar]);

const HistorySection = styled.section`
  ${props=> props.bg && `
      background-image:url(${props.bg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position:center center;
  `}
  height: 710px;
  transition: all 0.5s ease-in;

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

const HistoryBg = styled.div`
  position:relative;
  ${props=> props.bg && `
      background-image:url(${props.bg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position:center center;
  `}
  height: 710px;
  z-index:100;
  /* background:red; */
  top:-93%;
  z-index:1;
  opacity:0.5;
  
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
    margin-top:88px;
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
  background:${props=> props.point?"rgba(47, 207, 190, 0.4)":'#fff'};
  backdrop-filter:blur(20px);
  transition: all ease-in-out 0.5s;
  cursor: pointer;

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


const HistoryYear = styled.span`
  font-family: 'NotoSansKR-Black', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 9rem;
  line-height: 133px;
  color: ${props=> props.point ?'#FFFFFF':'transparent'};
  margin-bottom:25px;
  z-index:5;

  ${props=> !props.point && `
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: url(${props.bg});
    overflow:hidden;
    background-repeat: no-repeat;
  `};
`;

const HistorySubs = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
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


export default function History(params) {
  const [swiper, setSwiper] = useState(null);
  const [ activeIndex, setActiveIndex ] = useState(0);
  const [hj, setHj] = useState('h');
  const [ clickIndex, setClickIndex ] = useState(0);

  return (
    <HistorySection bg={historyData[activeIndex].img}>
     <HistoryWrapper 
        initialSlide={0}
        slidesPerView={'auto'}
        spaceBetween={16}
        centeredSlides={true}
        onSwiper={(s) => setSwiper(s)}
        scrollbar={{ draggable: true, dragSize: 200 }}
        modules={[Scrollbar]}
        onSlideChange={(e)=> setActiveIndex(e.activeIndex)}
        onClick={(e) => {
          if(clickIndex == e.clickedIndex){
            return;
          }else{
            swiper.slideTo(e.clickedIndex, 500, false);
            setClickIndex(e.clickedIndex);
            if(hj=='h'){setHj('j')};
            if(hj=='j'){setHj('h')};
            ga.event({
              action:'Click',
              category:'History',
              label:'Slide',
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
          <SwiperSlide key={index} virtualIndex={index} >
            <HistoryCard hj={hj =='h' && index % 2 ==0 || hj=='j' && index%2 !=0} point={historyData[0].year === slideContent.year}>
              <HistoryYear bg={historyData[activeIndex].bg} point={historyData[0].year === slideContent.year}>{slideContent.year}</HistoryYear>
              {slideContent.content.map((content,idx)=>{
                return <HistorySubs point={historyData[0].year === slideContent.year} key={idx}>{content}</HistorySubs>
              })}
            </HistoryCard>
          </SwiperSlide>
        )} )}
        </HistoryWrapper>
    </HistorySection>
  )
}
