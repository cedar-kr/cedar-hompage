import { useEffect, useState } from "react";
import styled from "styled-components";
import { historyData } from "../utils/data";

const HistoryWrapper = styled.div`
  ${props=> props.bg && `
      background-image:url(${props.bg});
      background-size: cover;
      background-repeat: no-repeat;
    `
  }
  height:710px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  overflow:hidden;
`;

const HistoryCards = styled.div`
  display:flex;
  flex-direction: row;
  margin-top:94px;
  /* margin-left:${props=> props.scrollVal ? 4500-props.scrollVal : 4500 }px; */
  margin-left:4500px;

  
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
  margin-right:16px;
  margin-top:${props=> props.t ? -30 :0}px;
  background:${props=> props.point ?  `url('/imgs/historys/background.png')`:'#fff'};
  backdrop-filter: blur(6px);
`;

const HistoryYear = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
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
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  color: ${props => props.point ? '#FFFFFF' : '#000000' };
`;

const HistoryScroll = styled.input`
  margin-top:88px;
  -webkit-appearance: none;
  width: 752px;
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

export default function History(params) {
  const [ scrollVal, setScrollVal ] = useState(30);
  const [ current, setCurrent ] = useState(0);

  const Test = ( ) => {

  }

  return (
    <HistoryWrapper bg={'/imgs/historys/2022.jpg'}>
      <HistoryCards scrollVal={scrollVal*historyData.length*9.5}>
      { historyData.map((data,idx)=>{
        return <HistoryCard key={data.year} point={historyData[0].year === data.year} t={idx%2==0}>
          <HistoryYear point={historyData[0].year === data.year}>{data.year}</HistoryYear>
          {data.content.map((content,idx)=>{
            return <HistorySubs point={historyData[0].year === data.year} key={idx}>{content}</HistorySubs>
          })}
        </HistoryCard>
      })}
      </HistoryCards>
      <HistoryScroll type="range" min="1" max="100" value={scrollVal} onChange={(e)=>setScrollVal(e.target.value)}/>
    </HistoryWrapper>
  )
}
