import styled from 'styled-components'
import React, { useMemo } from 'react'
import Image from 'next/image'
import { Center, Wrapper } from '../styles/Layout';
import Slide_Display from '../../public/imgs/solution/solution_slide1.png';
import Slide_Device from '../../public/imgs/solution/solution_slide2.png';
import Slide_Admin from '../../public/imgs/solution/solution_slide3.png';

const SolutionContainer = styled.section`
  padding: 30px 0px;
  background:${props=> 
    (props.bg == 'red' && '#ffeeee') ||
    (props.bg == 'blue' && '#f2f7fb') ||
    (props.bg == 'puple' && '#f3f2ff')
  };
`;

const SolutionTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 3rem;
  line-height: 45px;
  margin-left: 16px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const TextPoint = styled.span`
  font-weight: ${props => props.bold ? 700 : 500 };
  box-shadow: ${props => props.line ? 'inset 0 -25px 0 #f8ffac' : 'none' };
  padding-right: ${props => props.line && 8}px;
`;

const SolutionSubText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  color: #333;
  margin:0px 16px;xa
`;

const SolutionBox = styled.div`
  margin-top:30px;
  overflow:scroll;
  scroll:none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SolutionItems = styled.div`
  display: flex;
  flex-diretion:row;
  width: ${props=> props.width}px;
  height: 303px;
  margin: 0px 16px;
  margin-bottom:30px;
`;

export default function Solution(props) {

  const solutionData = useMemo(()=>[
    { 
      title:
      <SolutionTitle>
        디스플레이를
        <br />
        <TextPoint bold line>한번에 관리</TextPoint>하는
        <br />
        쉽고 간편한 솔루션
      </SolutionTitle>, 
      text:'하드웨어를 가리지 않고 확장이 용이한 <br/> 웹 기반 디지털 사이니지 솔루션입니다.',
      src: Slide_Display,
      bg:'blue',
      width:1008
    },
    { 
      title:<SolutionTitle>
      <TextPoint bold line>다양한 디바이스</TextPoint>로
      <br />
      매장을 돋보이게
    </SolutionTitle>, 
      text:'디바이스의 종류에 구애받지 않고 <br/> 어디서든 관리할 수 있습니다.',
      src: Slide_Device,
      bg:'puple',
      width:1268
    },
    { 
      title:<SolutionTitle>
         <TextPoint bold>효율성을 극대화</TextPoint>한
        <br />
        <TextPoint line>관리페이지까지</TextPoint>
      </SolutionTitle>, 
      text:'그룹 편성 부터 원격 모니터링, 오류 상황 <br/> 감지 기능을 통해 효율성을 극대화합니다.',
      src: Slide_Admin,
      bg:'red',
      width:1008
    },
  ],[])

  return (
    <div>
      { 
        solutionData.map((data, idx)=>{
          return (
            <SolutionContainer key={idx} bg={data.bg}>
              {data.title}
              <SolutionSubText dangerouslySetInnerHTML={{__html: data.text }}></SolutionSubText>
              <SolutionBox>
                <SolutionItems width={data.width}>
                  <Image src={data.src} alt="solution slideImg"/>
                </SolutionItems>
              </SolutionBox>
            </SolutionContainer>
          )
        })
      }
    </div>
   
  )
};