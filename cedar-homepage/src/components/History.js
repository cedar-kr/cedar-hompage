import styled from 'styled-components'
import Image from 'next/image'
import { Title, Text, LgText } from "../styles/PublicStyles"
import { Center, Wrapper, Row } from '../styles/Layout'
import { history_data } from '../utils/contents'
import React, { useEffect, useRef, useState } from 'react'

const HistoryContainer = styled.section`
  padding: 30px 0px;
`;

// const HistoryTitle = styled(Title)`
//   margin-bottom: 22px;
// `;

const TextPadding = styled(Text)`
  padding: 5px 0px;
`;

const CenterPadding = styled(Center)`
  margin: 30px 0px;
`;

const YearText = styled(LgText)`
  box-shadow: inset 0 -20px 0 #B0FFE2;
  color: #000;
  margin-bottom: 13px;
`;

const TOTAL_SLIDES = 2;  // 전체 슬라이드 개수(총 3개, 배열로 계산)

export default function History(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dataNum, setDataNum] = useState({start: 0, end: 2});
  const slideRef = useRef(null);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 1번째 사진으로 넘어감
      setCurrentSlide(0);
      setDataNum({start: 0, end: 2});
    } else {
      setCurrentSlide(currentSlide + 1);
      setDataNum({start: dataNum.start + 1, end: dataNum.end + 1});
    }
    console.log(currentSlide);
    console.log(dataNum);
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
       // 마지막 사진으로 넘어감
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
    console.log(currentSlide);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide*150}%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
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
        <Row>
          <Image
            onClick={PrevSlide}
            priority
            src="/icons/h_left_arrow.png"
            height={45}
            width={45}
            alt="left arrow"
          />
          <Center ref={slideRef}>
            {history_data.map((data,idx) => {
              return (
                <CenterPadding key={idx}> 
                  <YearText>
                    {data.year}
                  </YearText>
                  {data.projects.map((data,idx) => {
                    return (
                    <TextPadding key={idx}>{data}</TextPadding>
                    )
                  })}  
                </CenterPadding>
              )
            }).slice(dataNum.start,dataNum.end)}
          </Center>
          <Image
            onClick={NextSlide}
            priority
            src="/icons/h_right_arrow.png"
            height={45}
            width={45}
            alt="right arrow"
          />
        </Row>
      </Wrapper>
    </HistoryContainer>
  )
}
