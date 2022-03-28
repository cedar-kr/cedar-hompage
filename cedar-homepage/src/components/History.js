import styled from 'styled-components'
import Image from 'next/image'
import { Title, Text, LgText } from '../styles/PublicStyles'
import { Center, Wrapper, Row } from '../styles/Layout'
import React, { useEffect, useRef, useState } from 'react'
import { chunk } from '../utils/func'
import { history_data } from '../utils/data'
import useDidMountEffect from '../utils/useDidMountEffect'
import { Default, Mobile } from '../utils/media'

const HistoryContainer = styled.section`
  height: 100%;
  padding: 168px 0px 120px;

  ${({theme})=>theme.tablet`
    // height: 768px;
    padding-top: 146px;
    padding-bottom: 91px;
  `};
  ${({theme})=>theme.mobile`
    padding: 30px 0px;
  `};
`;

const HistoryWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({theme})=>theme.mobile`
    display: flex;
    flex-direction: column;
  `};
`;

const HistoryTitle = styled(Title)`
  margin-top: 37px;

  ${({theme})=>theme.tablet`
    margin-top: 102px;
  `};
  ${({theme})=>theme.mobile`
    margin-top: 0px;
  `};
`;

const HistorySlideView = styled.div`
  width: 66%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const HistorySlide = styled.div`
  width: 100%;
  padding: 0px 79px;
`;

const SlideView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
`;

const SlideCenter = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
`;

const SlideItems = styled(Center)`
  padding: 0px 70px;
  align-items: normal;
  align-content: center;
  min-width: 100%;

  ${({theme})=>theme.mobile`
    padding: 0px 70px;
    align-content: center;
  `};
`;

const TextPadding = styled(Text)`
  text-align: left;
  padding: 10px 0px;
  font-size: calc(1.8rem + (100vw - 1024px) * ((25 - 18) / (1920 - 1024)));
  width: 100%;
  word-break: keep-all;

  ${({theme})=> theme.fk`
    font-size: 2.5rem;
  `}  
  ${({theme})=>theme.tablet`
    padding: 8px 0px;
    font-size: 1.8rem;
  `};
  ${({theme})=>theme.mobile`
    font-size: 1.4rem;
    padding: 5px 0px;
    text-align: center;
  `}
`;

const CenterPadding = styled(Center)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  text-align: left;
  width: 100%;
  margin: 60px 0px;

  ${({theme})=>theme.mobile`
    align-items: center;
    margin: 30px 0px;
  `};
`;

const YearText = styled(LgText)`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 3.5rem;
  font-weight: bold;
  box-shadow: inset 0 -20px 0 #B0FFE2;
  margin-bottom: 24px;

  ${({theme})=>theme.mobile`
    margin-bottom: 13px;
  `}
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: ${props => props.left && 16}px;
  right: ${props => props.right && 16}px;
  z-index: 100;
  background: #fff;
  border-radius: 50%;
`;

const SlideButton = styled(Image)`
  height: 45px;
  width: 45px;
  
`;

export default function History() {
  const [data, setData] = useState(chunk(history_data,2));
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef();

  const nextSlide = () => {
    if (currentSlide >= data.length-1) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-100%)`;
      setCurrentSlide(1);
      setCurrentSlide(2);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const prevSlide = () => {
    if (currentSlide == 0) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-500%)`; 
      setCurrentSlide(5);
      setCurrentSlide(4);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  useDidMountEffect(() => {
    if(slideRef.current){
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
    }
  }, [currentSlide]);

  useEffect(() => { 
    if(slideRef.current){
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    if(data.length < 7) {
      setData(data.unshift([
        {
          year:"2013",
          projects:[
            "주식회사 시더(Cedar Inc.) 법인 설립",
            "부경대학교&서울과학기술대학교 계약 체결",
            "삼성전자 플랫폼 런칭 파트너 선정",
            "제 11회 임베디드 경진대회 스마트챌린지 <br/> 휴맥스분야 최우수상 수상"
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
  },[data])
  
  return (
    <HistoryContainer>
      <HistoryWrapper>
        <HistoryTitle>
          시더의
          <br />
          즐거운 도전들을
          <br />
          소개합니다.
        </HistoryTitle>
        <Mobile>
          <SlideView>
            <ButtonBox left>
              <SlideButton
                onClick={prevSlide}
                priority
                src="/icons/h_left_arrow.png"
                height={45}
                width={45}
                alt="Left Arrow"
              />
            </ButtonBox>
            <SlideCenter>
              <SlideContainer 
                ref={slideRef}>
              {
                data.map((box,idx)=>{
                  return <SlideItems key={idx}>
                    { 
                      box.map((boxData,idx)=> {
                        return <CenterPadding key={idx}>
                          <YearText>{boxData && boxData.year}</YearText>
                          {
                            boxData.projects && boxData.projects.map((contnet,idx)=> {
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
                onClick={nextSlide}
                priority
                src="/icons/h_right_arrow.png"
                height={45}
                width={45}
                alt="Right Arrow"
              />
            </ButtonBox>
          </SlideView>
        </Mobile>
        <Default>
          <HistorySlideView>
          <ButtonBox left>
            <SlideButton
              onClick={prevSlide}
              priority
              src="/icons/h_left_arrow.png"
              height={100}
              width={100}
              alt="Left Arrow"
            />
            </ButtonBox>
            <HistorySlide>
              <SlideCenter>
                <SlideContainer 
                  ref={slideRef}>
                {
                  data.map((box,idx)=>{
                    return <SlideItems key={idx}>
                      { 
                        box.map((boxData,idx)=> {
                          return <CenterPadding key={idx}>
                            <YearText>{boxData && boxData.year}</YearText>
                            {
                              boxData.projects && boxData.projects.map((contnet,idx)=> {
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
            </HistorySlide>
            <ButtonBox right >
              <SlideButton
                onClick={nextSlide}
                priority
                src="/icons/h_right_arrow.png"
                height={100}
                width={100}
                alt="Right Arrow"
              />
            </ButtonBox>
          </HistorySlideView>
        </Default>
      </HistoryWrapper>
    </HistoryContainer>
  )
};