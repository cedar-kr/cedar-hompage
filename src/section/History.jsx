import styled from "styled-components";
import { historyData } from "../utils/data";
import SwiperCore, { Virtual, Navigation,Scrollbar } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import React, { useState } from "react";

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
  `}
  height: 65.472vh;
`

const HistoryWrapper = styled(Swiper)`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin:0px auto;
  height: 63vh;

  .swiper-slide {
    margin-top:134px;
    height: 413px;
    max-width:496px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }

  .swiper-scrollbar{
    background:white;
    width: 752px;
    height: 5px;
    margin-left:30%;
    cursor: pointer;
    margin-top:88px;
  }
  .swiper-scrollbar-drag{
    background: #2FCFBE;
    width: 200px;
    height: 5px;
    cursor: pointer;
  }
`;

const HistoryCard = styled.div`
  border-radius: 30px;
  height: 413px;
  width: 496px;
  display:flex;
  flex-direction:column;
  justify-content:top;
  align-items:center;
  text-align:center;
  padding: 20px;
  margin-top:${props=> props.t ? 0 :30}px;
  background:${props=> props.point ?  `url('/imgs/historys/background.png')`:'#fff'};
  background-repeat:no-repeat;
  background-position:center center;
  background-size:cover;
  backdrop-filter: blur(6px);
  cursor: pointer;
`;

const HistoryYear = styled.div`
  font-family: 'NotoSansKR-Black', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 9rem;
  line-height: 133px;
  opacity:1;
  color: ${props => props.point ? '#FFFFFF' : '#000000' };
  margin-bottom:25px;
  /* mix-blend-mode: screen; */
  z-index:1;
`;

const HistorySubs = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  text-align:center;
  color: ${props => props.point ? '#FFFFFF' : '#000000' };
`;


export default function History(params) {
  const [swiper, setSwiper] = useState(null);
  const [ activeIndex, setActiveIndex ] = useState(0);

  return (
    <HistorySection bg={historyData[activeIndex].img}>
     <HistoryWrapper 
        slidesPerView={3.8}
        spaceBetween={16}
        centeredSlides={true}
        virtual
        onSwiper={(s) => setSwiper(s)}
        scrollbar={{ draggable: true, dragSize: 200 }}
        modules={[Scrollbar]}
        onSlideChange={(e)=> setActiveIndex(e.activeIndex)}
        onClick={(e) => swiper.slideTo(e.clickedIndex, 500, false)}
      >
        {historyData.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index} >
            <HistoryCard point={historyData[0].year === slideContent.year} t={index%2==0} >
              <HistoryYear point={historyData[0].year === slideContent.year}>{slideContent.year}</HistoryYear>
              {slideContent.content.map((content,idx)=>{
                return <HistorySubs point={historyData[0].year === slideContent.year} key={idx}>{content}</HistorySubs>
              })}
            </HistoryCard>
          </SwiperSlide>
        ))}
        </HistoryWrapper>
    </HistorySection>
  )
}
