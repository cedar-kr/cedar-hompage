import styled from 'styled-components'
import Image from 'next/image'
import { Title, Text, LgText } from "../styles/PublicStyles"
import { Center, Wrapper, Row } from '../styles/Layout'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { chunk } from '../utils/func'
import { history_data } from '../utils/data';
import useDidMountEffect from '../utils/useDidMountEffect'

const HistoryContainer = styled.section`
  padding: 30px 0px;
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
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction :row;
  max-width: 100%;
`;

const SlideItems = styled.div`
  display: flex;
  flex-direction:column;
  min-width: 100%;
`;

const TextPadding = styled(Text)`
  padding: 5px 0px;
  text-align:center;
`;

const CenterPadding = styled(Center)`
  margin: 30px 0px;
`;

const YearText = styled(LgText)`
  box-shadow: inset 0 -20px 0 #B0FFE2;
  color: #000;
  margin-bottom: 13px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  position: absolute;
  left: ${props => props.left && 16}px;
  right: ${props => props.right && 16}px;
  z-index:100;
  background:#fff;
  border-radius:50%;
`;

const SlideButton = styled(Image)`
  height: 45px;
  width: 45px;
`;

export default function History(props) {
  const [ data, setData] = useState(chunk(history_data,2));
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef();
  const [ eventTouch , setEventTouch ] = useState({ x: '', y: '' });

  const NextSlide = () => {
    if (currentSlide >= data.length-1) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-100%)`;
      setCurrentSlide(1);
      setCurrentSlide(2);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if ( currentSlide == 0) {
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

  useDidMountEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
  }, [currentSlide]);

  useEffect(() => {
    // slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  useEffect(()=> {
    if(data.length < 7){
      setData(data.unshift([
        {
          year:"2013",
          projects:[
            "주식회사 시더(Cedar Inc.) 법인 설립",
            "부경대학교&서울과학기술대학교 계약 체결",
            "삼성전자 플랫폼 런칭 파트너 선정",
            "제 11회 임베디드 경진대회 스마트챌린지 휴맥스분야 최우수상 수상"
          ]
        }
      ]))
      setData(data.concat([[
        {
          year:"2021",
          projects:[
            "청년친화강소기업 3년 연속 선정",
            "미국 특허 등록",
            "MODI GS인증 1등급 획득",
            "세종큐비즈 키오스크 솔루션 개발"
          ]
        },{
          year:"2020",
          projects:[
            "LGU+ 유심 키오스크 계약",
            "서울지방경찰청 디지털 사이니지 공급",
            "청년친화강소기업 첫 선정"
          ]
        }
      ]]));
    }
  },[])
  
  return (
    <HistoryContainer>
      <Wrapper>
      <Title>
        시더의
        <br />
        즐거운 도전들을
        <br />
        소개합니다.
      </Title>
      <SlideView>
        <ButtonBox left>
          <SlideButton
            onClick={PrevSlide}
            priority
            src="/icons/h_left_arrow.png"
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
            onTouchEnd={touchEnd}  
            ref={slideRef}>
          {
            data.map((box,idx)=>{
              return <SlideItems key={idx}>
                { 
                  box.map((boxData,idx)=>{
                    return <CenterPadding key={idx}>
                      <YearText>{boxData && boxData.year}</YearText>
                      {
                        boxData.projects && boxData.projects.map((contnet,idx)=>{
                          return <TextPadding key={idx} dangerouslySetInnerHTML={{__html: contnet }}></TextPadding>
                        })
                      }
                    </CenterPadding>
                  })
                }
              </SlideItems>
            })
          }
          </SlideContainer>
        </SlideCenter>
        <ButtonBox right>
          <SlideButton
            onClick={NextSlide}
            src="/icons/h_right_arrow.png"
            priority
            alt="right arrow"
            height={45}
            width={45}
          />
        </ButtonBox>
      </SlideView>
      </Wrapper>
      </HistoryContainer>
  )
};