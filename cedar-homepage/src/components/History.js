import styled from 'styled-components'
import Image from 'next/image'
import { Title, Text, LgText } from '../styles/PublicStyles'
import { Center, Wrapper, Row } from '../styles/Layout'
import React, { useEffect, useRef, useState } from 'react'
import { chunk } from '../utils/func'
import { history_data } from '../utils/data';
import useDidMountEffect from '../utils/useDidMountEffect'
import { Default, Mobile } from '../utils/media';

const HistoryContainer = styled.section`
  padding: 30px 0px;
  ${({theme})=>theme.pc`
    height:100vh;
    padding: 168px 0px;
  `};
  ${({theme})=>theme.tablet`
    height:768px;
    padding-top: 146px;
    padding-bottom:91px;
  `};
`;

const HistoryWrapper = styled(Wrapper)`
  ${({theme})=>theme.pc`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    height: 100%;
  `};
  ${({theme})=>theme.tablet`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  `};
`;

const HistoryTitle = styled(Title)`
  ${({theme})=>theme.pc`
    margin-top: 37px;
    word-break: keep-all;
  `};
   ${({theme})=>theme.tablet`
    padding-top:102px;
  `};
`;

const HistorySlideView = styled.div`
  width: 70%;
  display: flex;
  justify-content:space-between;
  align-items:center;
  position: relative;
  ${({theme})=>theme.tablet`
    width: 68%;
  `};
`;

const HistorySlide = styled.div`
  width: 100%;
  padding:0 79px;
`;

const SlideView = styled(Row)`
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
`;

const SlideCenter = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

const SlideContainer = styled(Row)`
  max-width: 100%;
`;

const SlideItems = styled(Center)`
  min-width: 100%;
  ${({theme})=>theme.pc`
    padding: 0px 70px;
  `};
`;

const TextPadding = styled(Text)`
  padding: 5px 0px;
  text-align: center;
  ${({theme})=>theme.pc`
    text-align: left;
    padding: 10px 0px;
    font-size:2.5rem;
    width:100%
  `};

  ${({theme})=>theme.tablet`
    text-align: left;
    padding: 8px 0px;
    font-size:1.8rem;
    width:100%
  `};
`;

const CenterPadding = styled(Center)`
  margin: 30px 0px;
  ${({theme})=>theme.pc`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:left;
    text-align:left;
    width:100%;
  `};
  ${({theme})=>theme.tablet`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:left;
    text-align:left;
    width:70%;
  `};
`;

const YearText = styled(LgText)`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  box-shadow: inset 0 -20px 0 #B0FFE2;
  margin-bottom: 13px;
  
  ${({theme})=>theme.pc`
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 24px;
  `}
  ${({theme})=>theme.tablet`
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 24px;
  `}
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