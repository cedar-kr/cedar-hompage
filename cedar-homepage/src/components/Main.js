import styled from 'styled-components'
import Image from 'next/image'
import { LgText, Text } from "../styles/PublicStyles"
import React, { useEffect, useRef, useState } from 'react'
import { Row, Wrapper } from '../styles/Layout'
import useDidMountEffect from '../utils/useDidMountEffect'
import { touchEnd, touchStart, useInterval } from '../utils/func'

const MainContainer = styled.section`
  background-color: #fff;
`;

const SlideView = styled(Row)`
  justify-content: space-between;
  align-items:center;
  min-width: 100%;
`;

const SlideCenter = styled.div`
  max-width:100%;
  overflow:hidden;
  position: relative;
`;

const SlideContainer = styled(Row)`
  max-width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: ${props => props.left && 16}px;
  right: ${props => props.right && 16}px;
  z-index:100;
  border-radius:50%;
`;

const SlideButton = styled(Image)`
  height: 45px;
  width: 45px;
`;

const BackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  height: 168.07vw;
  background: linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,0.8) 100%), ${props=> `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const BackgroundItem = styled.div`
  width: 100%;
  height: 168.07vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextWrap = styled(Wrapper)`
  position: absolute;
  bottom: 66px;
`;

const MainText = styled(Text)`
  font-family: 'Noto Sans KR', sans-serif;
  color: #fff;
  margin-bottom: 10px;
`;

const MainLgText = styled(LgText)`
  font-family: 'S-CoreDream-6Bold', sans-serif;
  color: #fff;
`;

const SlideWrap = styled(Wrapper)`  
  position: absolute;
  left: 4.722vw;
  display: flex;
  align-items: flex-end;
  bottom: 31px;
`;

const SlideCount = styled(Text)`  
  font-family: 'S-CoreDream-3Light';
  margin-right: 10px;
  color: #fff;
`;

const Slash = styled.span`  
  margin: 0px 2px;
`;

const SlideBtn = styled(Image)`  
  height: 20px;
  width: 20px;
`;

export default function Main() {
  const main_data = [
    { 
      src: "/webp/reference/1.webp",
      title: "KIOSK"
    },{ 
      src: "/webp/reference/2.webp",
      title: "LED"
    },{ 
      src: "/webp/reference/3.webp",
      title: "DIGITAL SIGNAGE"
    },{ 
      src: "/webp/reference/4.webp",
      title: "E/V SIGNAGE"
    },
  ];

  const [totalSlide, setTotalSlide] = useState(main_data);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isRunning, setIsRunning] = useState(true);
  const [eventTouch, setEventTouch] = useState({ x: '', y: '' });
  const slideRef = useRef();

  const nextSlide = () => {
    if(currentSlide >= totalSlide.length - 2) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(0%)`;
      setCurrentSlide(0);
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if(currentSlide == 1) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-500%)`; 
      setCurrentSlide(5);
      setCurrentSlide(4);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  useDidMountEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
  }, [currentSlide]);

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  useInterval(() => {
    if(currentSlide >= totalSlide.length - 2) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(0%)`;
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }, isRunning ? 4000 : null);

  function handleIsRunningChange() {
    if(isRunning == true) {
      setIsRunning(false)
    } else {
      setIsRunning(true)
    }
  }

  useEffect(()=> {
    if(totalSlide.length < 6) {
      setTotalSlide(totalSlide.unshift(
        {
          src: "/webp/reference/4.webp",
          title: "E/V SIGNAGE"
        }
      ));
      setTotalSlide(totalSlide.concat(
        {
          src: "/webp/reference/1.webp",
          title: "KIOSK"
        }
      ));
    }
  }, [totalSlide])

  return (
    <MainContainer>
      <SlideView>
        <ButtonBox left>
          <SlideButton
            onClick={prevSlide}
            src="/webp/icons/prev.webp"
            height={45}
            width={45}
            alt="Left Arrow"
            priority
          />
        </ButtonBox>
        <SlideCenter>
          <SlideContainer 
            ref={slideRef} 
            onTouchStart={(e)=>setEventTouch(touchStart(e))}
            onTouchEnd={(e)=>touchEnd(e, eventTouch, prevSlide, nextSlide)}
          >
            {
              totalSlide.map((data,idx) => {
                return (
                  <BackgroundItem key={idx}>
                    <BackgroundImage src={data.src} />
                    <TextWrap>
                      <MainText>판교 ‘테크원’ 빌딩 솔루션 구축 및 하드웨어 납품</MainText>
                      <MainLgText>{data.title}</MainLgText>
                    </TextWrap>
                  </BackgroundItem>
                )
              })
            }
          </SlideContainer>
          <SlideWrap left>
            <SlideCount>
              {currentSlide}
              <Slash>/</Slash>
              {main_data.length}
            </SlideCount>
            <SlideBtn 
              onClick={handleIsRunningChange}
              src={isRunning ?  "/webp/icons/main_play.webp" :"/webp/icons/main_stop.webp"}
              alt="Slider Control Button"
              height={20}
              width={20}
              priority
            />
          </SlideWrap>
        </SlideCenter>
        <ButtonBox right>
          <SlideButton
            onClick={nextSlide}
            src="/webp/icons/next.webp"
            alt="Right Arrow"
            height={45}
            width={45}
            priority
          />
        </ButtonBox>
      </SlideView>
    </MainContainer>
  )
};