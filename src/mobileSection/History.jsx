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
  display:flex;
  flex-direction:column;
  padding-top:40px;
`

const HistoryTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #222222;
  font-family:'SCDream6';
`

const HistoryCard = styled.div`
  display:flex;
  flex-direction:row;
  justify-contents:space-between;
  padding:30px 16px;
`;

const HistoryYear = styled.div`
  font-family: 'NotoSansKR-Black', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 44px;
  width:33%;
  opacity:1;
  margin-bottom:25px;
  z-index:1;
`;

const HistorySubs = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align:left
`;

const HistoryOpen = styled.div`
  width: 120.33px;
  height: 42px;
  left: 120px;
  top: 532px;
  background: #2FCFBE;
  border-radius: 30px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:33%;

  span{
    color:#fff;
    font-family: 'NotoSansKR-Regular';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    color: #FFFFFF;
    text-align:center;
    justify-content: center;
  }
`;


export default function History(params) {
  const [ open, setOpen ] = useState(false);

  return (
    <HistorySection>
      <HistoryTitle>주요연혁</HistoryTitle>
      {
        historyData.map((slideContent, idx) => {
          return  (
            !open ? ( idx <3 && <HistoryCard>
              <HistoryYear>{slideContent.year}</HistoryYear>
              <div>
                {slideContent.content.map((content,idx)=>{
                  return <HistorySubs point={historyData[0].year === slideContent.year} key={idx}>{content}</HistorySubs>
                })}
              </div>
            </HistoryCard>)
           :<HistoryCard>
              <HistoryYear>{slideContent.year}</HistoryYear>
              <div>
                {slideContent.content.map((content,idx)=>{
                  return <HistorySubs point={historyData[0].year === slideContent.year} key={idx}>{content}</HistorySubs>
                })}
              </div>
            </HistoryCard>
          )}
        )
      }
      <HistoryOpen onClick={()=>setOpen(!open)}><span>더보기</span></HistoryOpen>
    </HistorySection>
  )
}
