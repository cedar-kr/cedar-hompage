import styled from 'styled-components'
import Image from 'next/image'
import { MdText, NSText, Title } from '../styles/PublicStyles'
import { Center } from '../styles/Layout'
import React, { useMemo, useState, useRef, useEffect } from 'react'
import { Mobile, Default } from'../utils/media'
import { useMediaQuery } from 'react-responsive'
import Fade from 'react-reveal/Fade';

const SolutionPkContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px 0px;
  /* width: 80%; */
  margin: 0 auto;
  overflow: hidden;

  ${({theme})=>theme.tablet`
    padding: 110px 0px;
    height: 768px;
  `};
  ${({theme})=> theme.mobile`
    padding: 30px 0px;
    align-items: flex-start;
  `};
`;

const SolutionPkTitle = styled(Title)`
  font-weight: 500;

  ${({theme})=> theme.tablet`
    font-size: 3.5rem;
  `};
  ${({theme})=> theme.mobile`
    margin-left: 16px;
    margin-top: 30px;
  `};
`;

const TextPoint = styled.span`
  box-shadow: inset 0 -1.9vw 0 #c6d4ff;
  font-weight: 900;
  
  ${({theme})=>theme.fk`
    box-shadow: inset 0 -35px 0 #c6d4ff;
  `};
  ${({theme})=>theme.tablet`
    box-shadow: inset 0 -22px 0 #c6d4ff;
  `};

  ${({theme})=> theme.mobile`
    font-weight: 700;
    box-shadow: inset 0 -20px 0 #c6d4ff;
  `};
`;

const SolutionContact = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.8rem;
  text-align: center;
  color: #333;
  margin-top: 20px;
  margin-bottom: 102px;

  ${({theme})=>theme.tablet`
    margin-top: 10px;
    margin-bottom: 30px;
  `};
  ${({theme})=>theme.mobile`
    margin-top: 10px;
    margin-bottom: 74px;
  `};
`;

const SolutionPkBox = styled.div`
  ${({theme})=> theme.mobile`
    margin-top: 30px;
    overflow: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
  `};
`;

const SolutionPkItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 1152px;
  padding: 70px;
  justify-content: space-around;
  border: 1px solid #e0e0e0;

  ${({theme})=> theme.moniter`
    width: 1052px;
  `};
  ${({theme})=> theme.desktop`
    width: 950px;
  `};
  ${({theme})=> theme.laptop`
    width: 850px;
  `};
  ${({theme})=> theme.tablet`
    width: 750px;
    padding-top: 70px;
    padding-bottom: 30px;
    justify-content: space-between;
    border: none;
  `};
  ${({theme})=> theme.mobile`
    width: 726px;
    padding: 0px;
    border: none;
  `};
`;

const SolutionPkItem = styled(Center)`
  ${({theme})=> theme.mobile`
    border: 1px solid #e0e0e0;
    width: 242px;
    height: 319px;
    justify-content: center;
    margin-left: 16px;
    margin-right: ${props=> props.mg && 16}px;
  `};
`;

const SolutionPkItemName = styled(MdText)`
  font-family: "Avenir-Heavy";
  font-weight: 900;
  color: #000;
  font-size: 2.5rem;
  margin-top: 30px;
  margin-bottom: 10px;

  ${({theme})=> theme.tablet`
    font-size: 2rem;
    margin-top: 40px;
  `};
  ${({theme})=> theme.mobile`
    font-size: 2rem;
    margin-top: 20px;
    margin-bottom: 6px;
  `};
`;

const SolutionPkItemInfo = styled(NSText)`
  text-align: center;
  color: #333;
`;

const SolutionPkBtns = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  margin-top: 30px;
`;

const SolutionPkBtn = styled.button`
  font-family: "Avenir-Heavy";
  font-size: 1.4rem;
  padding: 0px 15px;
  height: 40px;
  margin-right: ${props=> !props.mg && 14}px;
  border-radius: 10px;
  font-weight: 900;
  background-color: ${props => props.select ? '#000' : '#fff'};
  color: ${props => props.select ? '#ffffff' : '#828282'};
  border: 1px solid ${props => props.select ? '#000' : '#828282'};
`;

export default function SolutionPk() {
  const [select, setSelect] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();
  const [eventTouch , setEventTouch] = useState({ x: '', y: '' });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const changePackage = (num) => {
    setSelect(num);
    setCurrentSlide(num);
  }

  useEffect(() => {
    if(slideRef.current){
      slideRef.current.style.transition = 'all 0.2s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide * 32.55}%)`; 
    }
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
        if(currentSlide == SolutionPkData.length-1) {
          return;
        } 
        setCurrentSlide(currentSlide+1);
        setSelect(currentSlide+1);
      }
    }
  }

  const SolutionPkData = useMemo(() => [
    { 
      src: '/imgs/solutionpkg/1.png', 
      name:'Modi-Lite', 
      info: '비 인터넷,<br/> 소규모 구축 환경에 최적화된 <br/> 디지털 사이니지 솔루션 ',
      width: '120',
      height: '147',
      d_width: '182',
      d_height: '224',
      t_width: '138',
      t_height: '169',
    },
    { 
      src: '/imgs/solutionpkg/2.png', 
      name:'Modi', 
      info:  '하드웨어를 가리지 않고 <br/> 확장이 용이한 웹 기반 디지털 <br/> 사이니지 솔루션',
      width: '114',
      height: '160',
      d_width: '156',
      d_height: '225',
      t_width: '117',
      t_height: '169',
    },
    { 
      src: '/imgs/solutionpkg/3.png', 
      name: 'Modi-Broadcast', 
      info: '방송 편성에 맞추어 다량의<br/> 디스플레이와 송수신이 가능한<br/>전문 방송용 솔루션',
      width: '112',
      height: '160',
      d_width: '155',
      d_height: '225',
      t_width: '118',
      t_height: '169',
    },
  ],[])

  return (
    <SolutionPkContainer>
      <Mobile>
        <SolutionPkTitle>
          매장에 맞는
          <br />
          <TextPoint>솔루션 패키지</TextPoint>가
          <br />
          준비되어 있습니다.
        </SolutionPkTitle>
        <SolutionPkBtns>
          {
            SolutionPkData.map((data, idx)=>{
              return <SolutionPkBtn key={idx} select={select === idx ? true: false} mg={idx == data.length-1} onClick={()=>changePackage(idx)}>{data.name}</SolutionPkBtn>
            })
          }
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
            SolutionPkData.map((data,idx) => {
              return (
                <SolutionPkItem key={idx} mg={idx == SolutionPkData.length-1}>
                  <Image
                    src={data.src}
                    alt={`SolutionPk_${data.name}`}
                    height={data.height}
                    width={data.width}
                  />
                  <SolutionPkItemName>{data.name}</SolutionPkItemName>
                  <SolutionPkItemInfo dangerouslySetInnerHTML={{__html: data.info}}></SolutionPkItemInfo>
              </SolutionPkItem>
              )
            })
          }
        </SolutionPkItems>
        </SolutionPkBox>
      </Mobile>
      <Default>
        <Fade>
        <SolutionPkTitle>
          매장에 맞는 <TextPoint>솔루션 패키지</TextPoint>를 선택해보세요.
          <SolutionContact>(더 자세한 상담을 원한다면 문의주세요.)</SolutionContact>
        </SolutionPkTitle>
        </Fade>
        <Fade>
        <SolutionPkBox>
          <SolutionPkItems>
            {
              SolutionPkData.map((data,idx) => {
                return (
                  <SolutionPkItem key={idx}>
                    <Image
                      src={data.src}
                      alt={`SolutionPk_${data.name}`}
                      height={isDesktop ? data.d_height: data.t_height}
                      width={isDesktop ? data.d_width: data.t_width}
                    />
                    <SolutionPkItemName>{data.name}</SolutionPkItemName>
                    <SolutionPkItemInfo dangerouslySetInnerHTML={{__html: data.type =='desk' ? data.info : data.info}}></SolutionPkItemInfo>
                </SolutionPkItem>
                )
              })
            }
          </SolutionPkItems>
        </SolutionPkBox>
        </Fade>
      </Default>
    </SolutionPkContainer>
  )
};