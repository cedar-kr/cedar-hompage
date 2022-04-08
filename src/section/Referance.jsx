import styled, { keyframes } from "styled-components";
import React, { useState } from 'react';
import { referanceData } from "../utils/data";
import Image from "next/image";

const ReferanceWrapper = styled.div`
  height:1000px;
  display:flex;
  flex-direction:row;
  overflow:hidden;
`;

const testst = keyframes`
  to{
    opacity:0;
  }from{opacity:1}
`;

const ReferImage = styled.div`
  height:100%;
  ${props=> props.bg && `
    background-image:url(${props.bg});
    background-repeat: no-repeat;
    background-size:cover;
  `}
  width:49.58%;
  z-index:1;
  animation:${testst} 0.5s ease-in-out;
`;

const ReferVideo = styled.video`
  height:100%;
  width:49.58%;
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
`;

const ReferSubs = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  font-family: 'NotoSansKR-Regular', sans-serif;
  color: #222222;
  padding: 0px 200px 0px 147px;
`;

const Slide = styled.div`
  margin-top:54px;
`;

const SlideAbsolute = styled.div`
  position:absolute;
  width:56.5%;
  overflow:hidden;
  right:0px;
`;

const SlideItems = styled.div`
  display:flex;
  flex-direction:row;
  width:${368*5}px;
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
  margin-right:16px;

${props=> props.select &&`
    transform: translateX(-${(100 * (props.select-1) )}%);
    transition: transform 0.5s ease-in-out;
  `}
${props=> props.scrollVal &&`
    transform: translateX(-${props.scrollVal}px);
    transition: transform 0.5s ease-in-out;
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

const SlideScrollBox = styled.div`
  position:relative;
  top:60%;
  padding: 0px 200px 0px 147px;
`;

const SlideScroll = styled.input`
  margin-top:60px;
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: #F6F6F6;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 200px;
    height: 5px;
    background: #2FCFBE;
    cursor: pointer;
  }
    ::-moz-range-thumb {
    width: 200px;
    height: 5px;
    background: #2FCFBE;
    cursor: pointer;
  }
`;

export default function Referance(params) {
  const [ scrollVal, setScrollVal ] = useState(0);
  const [ data, setData ] = useState(referanceData?referanceData:[]);
  const [ select, setSelect ] = useState(referanceData?referanceData[0]:{});
  const [ length, setLength] = useState(referanceData.length);

  const ClickItems = () => {
    if(length==0){
      setScrollVal(0);
      setLength(referanceData.length);
    }else{
      setScrollVal(100/(length-1));
      setLength(length-1);
    }
    const test = data.shift();
    let dta = data.filter(data=> data.id!=test.id);
    // dta.push(test);
    setData(dta);
    setSelect(dta[0]);
  }


  return (
    <ReferanceWrapper>
      {
        select.bg ? <ReferImage bg={select.bg}/> : 
      <ReferVideo 
        onClick={(e)=> e.stopPropagation()} 
        autoPlay muted playsInline loop preload="auto">            
          <source
          src={select.video}
          type="video/mp4"
          />
      </ReferVideo>
      }
      <ReferContent>
        <ReferTitle>주요 레퍼런스</ReferTitle>
        <ReferSubs>다양한 디스플레이 통합 솔루션을 기반으로 여러 분야에서 차별화된 레퍼런스를 보유합니다.</ReferSubs>
          <Slide>
            <SlideAbsolute>
              <SlideItems >
                {
                  data.map((data,idx)=>{
                    return <SlideItem select={data.id == select.id} key={idx} onClick={ClickItems}>
                    <ItemTitle>{data.title}</ItemTitle>
                    <ItemImage width={data.imgSize.width} height={data.imgSize.height}>
                      <Image src={data.src} width={data.imgSize.width} height={data.imgSize.height}/>
                    </ItemImage>
                    <ItemSubs>{data.subs}</ItemSubs>
                  </SlideItem>
                  })
                }
              </SlideItems>
            </SlideAbsolute>
          </Slide>
          <SlideScrollBox>
            <SlideScroll type="range" min="1" max="100" value={scrollVal} onChange={(e)=>setScrollVal(e.target.value)}/>
          </SlideScrollBox>
      </ReferContent>
    </ReferanceWrapper>
  )
}
