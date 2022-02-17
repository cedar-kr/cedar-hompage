import styled from 'styled-components'
import Image from 'next/image'
import { LgText } from "../styles/PublicStyles"
import React, { useEffect, useRef, useState } from 'react'
import { Wrapper } from '../styles/Layout'

const MainContainer = styled.section`
  background-color: #fff;
`;

const SlideView = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items:center;
  min-width: 100%;
`;

const SlideCenter = styled.div`
  max-width:100%;
  overflow:hidden;
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction :row;
  max-width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
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

const MainText = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.4rem;
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

const SlideCount = styled.span`  
  font-family: 'S-CoreDream-3Light';
  margin-right: 10px;
  font-size: 1.4rem;
  color: #fff;
`;

const Slash = styled.span`  
  margin: 0px 2px;
`;

const SlideBtn = styled(Image)`  
  height: 20px;
  width: 20px;
`;

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function Main() {
  const main_data = [
    { 
      src: "/imgs/main/bg_main_KIOSK.png",
      title: "KIOSK"
    },{ 
      src: "/imgs/main/bg_main_LED.png",
      title: "LED"
    },{ 
      src: "/imgs/main/bg_main_Signage.png",
      title: "DIGITAL SIGNAGE"
    },{ 
      src: "/imgs/main/bg_main_EVSignage.png",
      title: "E/V SIGNAGE"
    },
  ];

  const [totalSlide, setTotalSlide] = useState(main_data);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isRunning, setIsRunning] = useState(true);
  const [eventTouch, setEventTouch] = useState({ x: '', y: '' });
  const slideRef = useRef();

  const NextSlide = () => {
    if(currentSlide >= totalSlide.length - 2) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(0%)`;
      setCurrentSlide(0);
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if(currentSlide == 1) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-500%)`; 
      setCurrentSlide(5);
      setCurrentSlide(4);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const touchEnd = (e) => {
    const distanceX = Math.abs(eventTouch.x - e.changedTouches[0].pageX);
    const distanceY = Math.abs(eventTouch.y - e.changedTouches[0].pageY);

    if((distanceY + distanceX > 30) && (distanceX > distanceY)) {
      if(eventTouch.x - e.changedTouches[0].pageX < 0 ) {
        PrevSlide();
      }
      else if(eventTouch.x - e.changedTouches[0].pageX > 0 ) {
        NextSlide();
      }
    }
  }

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
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
          src: "/imgs/main/bg_main_EVSignage.png",
          title: "E/V SIGNAGE"
        }
      ));
      setTotalSlide(totalSlide.concat(
        {
          src: "/imgs/main/bg_main_KIOSK.png",
          title: "KIOSK"
        }
      ));
    }
  },[])

  return (
    <MainContainer>
      <SlideView>
        <ButtonBox left>
          <SlideButton
            onClick={PrevSlide}
            priority
            src="/icons/m_left_arrow.png"
            height={45}
            width={45}
            alt="left arrow"
          />
        </ButtonBox>
        <SlideCenter>
          <SlideContainer 
            onTouchStart={ 
              (e) => setEventTouch({ 
                x: e.changedTouches[0].pageX, 
                y: e.changedTouches[0].pageY
              })
            }
            onTouchEnd={touchEnd} ref={slideRef}>
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
              src={isRunning ? "/icons/pause_btn.png" : "/icons/play_btn.png"}
              priority
              alt="slider button"
              height={20}
              width={20}
            />
          </SlideWrap>
        </SlideCenter>
        <ButtonBox right>
          <SlideButton
            onClick={NextSlide}
            src="/icons/m_right_arrow.png"
            priority
            alt="right arrow"
            height={45}
            width={45}
          />
        </ButtonBox>
      </SlideView>
    </MainContainer>
  )
};