import styled from 'styled-components'
import Image from 'next/image'
import { NSText, Title } from '../styles/PublicStyles'
import React, { useMemo } from 'react'
import Slide_Display from '../../public/imgs/solution/solution_slide1.png'
import Slide_Device from '../../public/imgs/solution/solution_slide2.png'
import Slide_Admin from '../../public/imgs/solution/solution_slide3.png'

const SolutionContainer = styled.section`
  padding: 30px 0px;
  background:${props=> 
    (props.bg == 'red' && '#ffeeee') ||
    (props.bg == 'blue' && '#f2f7fb') ||
    (props.bg == 'puple' && '#f3f2ff')
  };
`;

const SolutionTitle = styled(Title)`
  font-weight: 500;
  margin-left: 16px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const TextPoint = styled.span`
  font-weight: 700;
  box-shadow: inset 0 -25px 0 #f8ffac;
  padding-right: 2px;
`;

const SolutionSubText = styled(NSText)`
  color: #333;
  margin: 0px 16px;
`;

const SolutionBox = styled.div`
  margin-top: 30px;
  overflow: scroll;
  scroll: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SolutionItems = styled.div`
  display: flex;
  width: ${props=> props.width}px;
  height: 303px;
  margin: 0px 16px;
  margin-bottom: 30px;
`;

export default function Solution() {
  const solutionData = useMemo(() => [
    { 
      title:
      <SolutionTitle>
        디스플레이를
        <br />
        <TextPoint>한번에 관리</TextPoint>하는
        <br />
        쉽고 간편한 솔루션
      </SolutionTitle>, 
      text: '하드웨어를 가리지 않고 확장이 용이한 <br/> 웹 기반 디지털 사이니지 솔루션입니다.',
      src: Slide_Display,
      bg: 'blue',
      width: 1008
    },
    { 
      title:<SolutionTitle>
      <TextPoint>다양한 디바이스</TextPoint>로
      <br />
      매장을 돋보이게
    </SolutionTitle>, 
      text: '디바이스의 종류에 구애받지 않고 <br/> 어디서든 관리할 수 있습니다.',
      src: Slide_Device,
      bg: 'puple',
      width: 1268
    },
    { 
      title:<SolutionTitle>
         <TextPoint>효율성을 극대화</TextPoint>한
        <br />
        관리페이지까지
      </SolutionTitle>, 
      text: '그룹 편성 부터 원격 모니터링, 오류 상황 <br/> 감지 기능을 통해 효율성을 극대화합니다.',
      src: Slide_Admin,
      bg: 'red',
      width: 1008
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
                  <Image src={data.src} alt="Solution SlideImg"/>
                </SolutionItems>
              </SolutionBox>
            </SolutionContainer>
          )
        })
      }
    </div>
   
  )
};