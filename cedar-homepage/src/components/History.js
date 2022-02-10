import styled from 'styled-components'
import Image from 'next/image'
import { Title, Text, LgText } from "../styles/PublicStyles"
import { Center, Wrapper, Row } from '../styles/Layout'
// import { history_data } from '../utils/contents'
import React, { useEffect, useRef, useState } from 'react'
import { chunk } from '../utils/func'
import { history_data } from '../utils/data';

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
  height: 414px;
  max-width:100%;
  overflow:hidden;
`;

const SlideContainer = styled.div`
  display:flex;
  flex-direction:row;
  max-width:100%;
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
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SlideButton = styled(Image)`
  height: 45px;
  width: 45px;
`;

export default function History(props) {
  const data = chunk(history_data,2);
  const TOTAL_SLIDES = data.length;  // 전체 슬라이드 개수(총 3개, 배열로 계산)
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();

  const NextSlide = () => {
    if (currentSlide >= data.length-1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if ( currentSlide == 0) {
      setCurrentSlide(TOTAL_SLIDES-1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);
  
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
        <ButtonBox>
          <SlideButton
            onClick={PrevSlide}
            priority
            src="/icons/h_left_arrow.png"
            height={45}
            width={45}
          />
        </ButtonBox>
        <SlideCenter>
          <SlideContainer ref={slideRef}>
          {
            data.map((t,idx)=>{
              return <SlideItems key={idx}>
                { 
                  t.map((tt,idx)=>{
                    return <CenterPadding key={idx}>
                      <YearText>{tt.year}</YearText>
                      {
                        tt.projects.map((ttt,idx)=>{
                          return <TextPadding key={idx}>{ttt}</TextPadding>
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
        <ButtonBox>
          <SlideButton
            onClick={NextSlide}
            src="/icons/h_right_arrow.png"
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