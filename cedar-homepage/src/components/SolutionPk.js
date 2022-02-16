import styled from 'styled-components'
import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import { Center } from '../styles/Layout';
import { useEffect, useRef } from 'react/cjs/react.development';

const SolutionPkContainer = styled.section`
  padding: 30px 0px;
`;

const SolutionPkTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 3rem;
  line-height: 45px;
  margin-left: 16px;
  margin-top: 30px;
`;

const TextPoint = styled.span`
  font-weight: 700;
  box-shadow: inset 0 -25px 0 #c6d4ff;
`;

const SolutionPkBox = styled.div`
  margin-top:30px;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SolutionPkItems = styled.div`
  display: flex;
  flex-diretion:row;
  width: 726px;
`;

const SolutionPkItem = styled(Center)`
  border:1px solid #e0e0e0;
  width: 242px;
  height: 319px;
  justify-content:center;
  margin-left:16px;
  margin-right: ${props=> props.mg && 16 }px;
`;

const SolutionPkItemName = styled.div`
  font-family: Avenir;
  font-size: 20px;
  font-weight: 500;
  margin-top:20px;
  margin-bottom: 6px;
`;

const SolutionPkItemInfo = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #333;
`;

const SolutionPkBtns = styled.div`
  display: flex;
  flex-direction:row;
  margin-left:16px;
  margin-top:30px;
`;

const SolutionPkBtn = styled.button`
  padding: 0px 16px;
  height: 40px;
  margin-right: 14px;
  border-radius: 10px;
  background-color: ${ props => props.select ? '#000' : '#fff' };
  color: ${ props => props.select ? '#ffffff' : '#828282' };
  border:1px solid ${ props => props.select ?  '#000' : '#828282' };
`;

export default function SolutionPk(props) {
  const [ select, setSelect ] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();
  const [ eventTouch , setEventTouch ] = useState({ x: '', y: '' });
  


  const changePackage = (num) => {
    setSelect(num);
    setCurrentSlide(num);
  }

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.3s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 32.55}%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  const touchEnd = (e) => {
    const distanceX = Math.abs(eventTouch.x - e.changedTouches[0].pageX);
    const distanceY = Math.abs(eventTouch.y - e.changedTouches[0].pageY);

    if((distanceY + distanceX > 30) && (distanceX > distanceY)) {
      if(eventTouch.x - e.changedTouches[0].pageX < 0 ) {
        if(currentSlide == 0){
          return;
        } 
        setCurrentSlide(currentSlide-1);
        setSelect(currentSlide-1);
      }
      else if(eventTouch.x - e.changedTouches[0].pageX > 0 ) {
        if(currentSlide == SolutionPkData.length-1){
          return;
        } 
        setCurrentSlide(currentSlide+1);
        setSelect(currentSlide+1);
      }
    }
  }

  const SolutionPkData = useMemo(()=>[
     { 
    src: '/imgs/solutionpkg/1.png', 
    name:'Modi-Lite', 
    info: '비 인터넷,<br/> 소규모 구축 환경에 최적화된 <br/> 디지털 사이니지 솔루션 '
  },
  { 
    src: '/imgs/solutionpkg/2.png', 
    name:'Modi', 
    info:  '하드웨어를 가리지 않고 <br/> 확장이 용이한 웹 기반 디지털 <br/> 사이니지 솔루션' 
  },
  { 
    src: '/imgs/solutionpkg/3.png', 
    name: 'Modi-Broadcast', 
    info: '방송 편성에 맞추어 다량의<br/> 디스플레이와 송수신이 가능한<br/>전문 방송용 솔루션'
  },
  ],[])


  return (
    <SolutionPkContainer>
     <SolutionPkTitle>
        매장에 맞는
        <br />
        <TextPoint>솔루션 패키지</TextPoint>가
        <br />
        준비되어 있습니다.
      </SolutionPkTitle>
      <SolutionPkBtns>
        <SolutionPkBtn select={select === 0 ? true: false} onClick={()=>changePackage(0)}>Modi-Lite</SolutionPkBtn>
        <SolutionPkBtn select={select === 1 ? true: false} onClick={()=>changePackage(1)}>Modi</SolutionPkBtn>
        <SolutionPkBtn select={select === 2 ? true: false} onClick={()=>changePackage(2)}>Modi-Broadcast</SolutionPkBtn>
      </SolutionPkBtns>
      <SolutionPkBox>
        <SolutionPkItems 
          ref={slideRef}
          onTouchStart={ 
            (e) => setEventTouch({ 
              x: e.changedTouches[0].pageX, 
              y: e.changedTouches[0].pageY
            })
          }
          onTouchEnd={touchEnd}>
          {
            SolutionPkData.map((data,idx)=>{
              return (
                <SolutionPkItem key={idx} mg={ idx == SolutionPkData.length-1}>
                  <Image
                    src={data.src}
                    alt={`SolutionPk_${data.name}`}
                    height={147}
                    width={120}
                  />
                  <SolutionPkItemName>{data.name}</SolutionPkItemName>
                  <SolutionPkItemInfo dangerouslySetInnerHTML={{__html: data.info}}></SolutionPkItemInfo>
              </SolutionPkItem>
              )
            })
          }
        </SolutionPkItems>
      </SolutionPkBox>
      </SolutionPkContainer>
  )
};