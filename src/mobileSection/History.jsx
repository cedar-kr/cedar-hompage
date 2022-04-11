import styled from "styled-components";
import { historyData } from "../utils/data";
import SwiperCore, { Virtual, Navigation,Scrollbar } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import React, { useState } from "react";
import Image from 'next/image';

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
const HistoryCards = styled.div`
  margin-top:20px;
  z-index:1;
`;

const HistoryCard = styled.div`
  display:flex;
  flex-direction:row;
  justify-contents:space-between;
  align-items:center;
  padding:0px 16px;
  ${props=> props.bg &&`
    background:url(${props.bg});
    background-size:cover;
  `};
`;

const HistoryYear = styled.div`
  font-family: 'NotoSansKR-Black', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 44px;
  width:33%;
  opacity:1;
  z-index:1;  
  color:#fff;
  margin: 40px 0px;
`;

const YearLine = styled.div`
  border: 1px solid #FFFFFF;
  transform: rotate(90deg);
  width:70.5px;
`;

const HistorySubs = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  color:#fff;
`;

const HistoryOpen = styled.div`
  width: 120.33px;
  height: 42px;
  background: #2FCFBE;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 105;
  margin:0px auto;
  cursor: pointer;
  margin-top:-21px;

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
    margin-right:10px;
    zIndex:105;
  }
`;

const LayerImg = styled.div`
  z-index:99;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
  height:47px;
  margin-top:-47px;
`;


export default function History(params) {
  const [ open, setOpen ] = useState(false);

  return (
    <HistorySection>
      <HistoryTitle>주요연혁</HistoryTitle>
      <HistoryCards>
      {
        historyData.map((slideContent, idx) => {
          return  (
            !open ? ( idx <3 &&<div key={idx}> <HistoryCard bg={slideContent.bg}>
              <div>
                {idx !== 0 && <YearLine />}
                  <HistoryYear>{slideContent.year}</HistoryYear>
                {idx !== 2 &&  <YearLine />}
              </div>
              <div style={{padding:'30px 0px', marginLeft:'16px', width:'100%'}}>
                {slideContent.content.map((content,idx)=>{
                  return <HistorySubs point={historyData[0].year === slideContent.year} key={idx}>- {content}</HistorySubs>
                })}
              </div>
            </HistoryCard>
            </div>)
           :<HistoryCard bg={slideContent.bg} key={idx}>
              <div>
                {idx !== 0 && <YearLine />}
                  <HistoryYear>{slideContent.year}</HistoryYear>
                {idx !== historyData.length-1 &&  <YearLine />}
              </div>
              <div style={{padding:'30px 16px'}}>
                {slideContent.content.map((content,idx)=>{
                  return <HistorySubs point={historyData[0].year === slideContent.year} key={idx}>- {content}</HistorySubs>
                })}
              </div>
            </HistoryCard>
          )}
        )
      }
      </HistoryCards>
      {!open && <LayerImg></LayerImg>}
      <HistoryOpen onClick={()=>setOpen(!open)}>
        <span>{open?'접기':'더보기'}</span>
        <Image src={open?'/icons/white_top_arrow.png':'/icons/white_bottom_arrow.png'} width={8.33} height={5}/>
      </HistoryOpen>
    </HistorySection>
  )
}
