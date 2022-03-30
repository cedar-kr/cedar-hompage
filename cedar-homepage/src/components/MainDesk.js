import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { keyframes } from 'styled-components'
import { Row, Wrapper } from '../styles/Layout'
import useDidMountEffect from '../utils/useDidMountEffect'
import Fade from 'react-reveal/Fade';

const slideFwdCenter = keyframes`
  0% {
    transform:scale(0.8);
    opacity: 0;
  }
  100% {
    transform:scale(1);
    opacity: 1;
  }
`; 

const MainContainer = styled.section`
  background-color: #fff;
  position: relative;
  background-image: url(./webp/bg_main.webp);
  background-size: cover;
  background-position: center center;
  background-color: rgba(43, 43, 43, 0.6);
  background-attachment: fixed;
  height: 100%;
  padding-top: 198px;
  padding-bottom: 76px;
  overflow: hidden;

  ${({theme})=>theme.tablet`
    padding-top: 168px;
  `};
`;

const MainWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 78%;

  ${({theme})=>theme.tablet`
    width: 87%;
    justify-content: space-between;
  `};
`

const MainTitles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 44px;

  ${({theme})=>theme.tablet`
    margin-bottom: 48px;
  `};
`;

const MainTitleNew = styled.div`
  font-family: 'S-CoreDream-3Light', sans-serif;
  font-size: 2rem;
  color: #fff;
  font-weight: 300;
  margin-right: 2vmin;

  ${({theme})=>theme.tablet`
    font-size: 1.6rem;
  `};
`;

const MainTitle = styled.div`
  font-family: 'S-CoreDream-5Medium';
  font-size: calc(2.5rem + (100vw - 1024px) * ((35 - 25) / (1920 - 1024)));
  font-weight: 500;
  color: #fff;

  ${({theme})=> theme.fk`
    font-size: 3.5rem;
  `} 
  ${({theme})=>theme.tablet`
    font-size: 2.5rem;
  `};
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${({theme})=>theme.tablet`
    flex-direction: row-reverse;
    justify-content: flex-end;
  `};
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  ${({theme})=>theme.tablet`
    width: 35vmin;
    justify-content: flex-start;
    margin-left: 6%;
    margin-bottom: 0px;
  `};
`;

const MainInfoSlider = styled.div`
  height: 237px;
  overflow: hidden;

  ${({theme})=>theme.desktop`
    height: 187px;
  `};
  ${({theme})=>theme.laptop`
    height: 166px;
  `};
  ${({theme})=>theme.tablet`
    height: 146px;
    margin-top: 2.930vw;
  `};
`;

const MainInfoSliderItems = styled.div`
  ${({theme})=>theme.tablet`
    width: 100%;
    height: 100%;
  `}
`

const MainInfoTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: calc(4rem + (100vw - 1024px) * ((80 - 40) / (1920 - 1024)));
  font-weight: 100;
  letter-spacing: 4px;
  color: #fff;
  height: 180px;
  display: flex;
  align-items: flex-end;
  text-align: left;
  margin-bottom: 27px;

  ${({theme})=> theme.fk`
    font-size: 8rem;
  `}
  ${({theme})=>theme.desktop`
    height: 136px;
  `};
  ${({theme})=>theme.laptop`
    height: 117px;
  `};
  ${({theme})=>theme.tablet`
    font-size: 4rem;
    height: 95px;
    margin-bottom: 30px;
  `}; 
`;


const MainInfoSubTitle = styled.div`
  font-family: 'S-CoreDream-5Medium';
  font-size: calc(1.6rem + (100vw - 1024px) * ((25 - 16) / (1920 - 1024)));
  color:#fff;
  font-weight: 500;
  text-align:left;
  margin-bottom: 27px;
  white-space: nowrap;

  ${({theme})=> theme.fk`
    font-size: 2.5rem;
  `} 
  ${({theme})=>theme.tablet`
    font-size: 1.6rem;
  `};
`;

const MainSlider = styled.div`
  width: 100vmin;
  position: relative;
  margin-left: 7%;


  ${({theme})=>theme.tablet`
    width: 58vw;
    position: relative;
    margin-left: 0px;
  `};
`;

const MainInfoSliderImgs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;

  ${({theme})=>theme.tablet`
    position: static;
    width: 100%;
    height: 100%;
  `};
`;

const slideChange = keyframes`
  0% {
  }
  50% {
    transform: translateX(-20%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const MainInfoSliderImg = styled.div`
  width:${props=> props.main ? 100 : 80}vw;
  height: ${props=> props.main ? 34 : 28}vw;
  background: gray;
  background: ${props=> `url(${props.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  filter: ${props=> !props.main && 'grayscale(95%)'};
  margin-right: 57px;
  animation: ${slideChange} 0.5s;

  ${({theme})=>theme.tablet`
    width: 100vw;
    height: 36vw;
    margin-right: 0px;
    display:${props=> props.main ? 'flex' : 'none'};
    animation: ${slideFwdCenter} 0.5s;
  `};
`;

const MainReferanceDown = styled.div`
  margin-top: 27px;
  background: url('./icons/download_btn_w.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 254px;
  height: 50px;
  cursor: pointer;

  ${({theme})=>theme.moniter`
    width: 244px;
    height: 48px;
  `}
  ${({theme})=>theme.desktop`
    width: 224px;
    height: 44px;
  `}
  ${({theme})=>theme.laptop`
    width: 214px;
    height: 42px;
  `}
  ${({theme})=>theme.tablet`
    width: 204px;
    height: 40px;
  `}
  :hover {
    background: url('./icons/download_btn_r.png');
    background-size: contain;
    background-repeat: no-repeat;

    ${({theme})=>theme.moniter`
      width: 244px;
      height: 48px;
    `}
    ${({theme})=>theme.desktop`
      width: 224px;
      height: 44px;
    `}
    ${({theme})=>theme.laptop`
      width: 214px;
      height: 42px;
    `}
    ${({theme})=>theme.tablet`
      width: 204px;
      height: 40px;
    `}
  }
`;

const SlideRow = styled(Row)`
  margin-top: 50px;

  ${({theme})=>theme.tablet`
    margin-top: 40px;
  `}
`;

const MainSlideArrow = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  background: ${props=> `url(${props.src})`};
  :hover{
    background: ${props=> `url(${props.src_h})`};
  }
`;

export default function MainDesk(props) {
  const { mainData } = props;
  const [ select, setSelect ] = useState(0);
  const slideRef = useRef();
  const isFourK = useMediaQuery({ minWidth: 1921 })
  const isMoniter = useMediaQuery({ minWidth: 1441, maxWidth: 1920 })
  const isDesktop= useMediaQuery({ minWidth: 1281, maxWidth: 1440 })
  const isLaptop= useMediaQuery({ minWidth: 1025, maxWidth: 1280 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const prevMain = () => {
    if(select === 0 ){
      setSelect(3);
    }else{
      setSelect(select-1);
    }
  }

  const nextMain = () => {
    if(select === mainData.length-1){
      setSelect(0);
    }else{
      setSelect(select+1);
    }
  }

  useDidMountEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
  }, [select]);

  useEffect(() => {
    if(isFourK) {
      slideRef.current.style.transform = `translateY(-${267*select}px)`;
    }
    if(isMoniter) {
      slideRef.current.style.transform = `translateY(-${267*select}px)`;
    }
    if(isDesktop) {
      slideRef.current.style.transform = `translateY(-${217*select}px)`;
    }
    if(isLaptop) {
      slideRef.current.style.transform = `translateY(-${194*select}px)`;
    }
    if(isTablet) {
      slideRef.current.style.transform = `translateY(-${170*select}px)`;
    }
  }, [select]);


  return (
    <MainContainer>
      <MainWrapper>
        <MainTitles>
          <Fade top>
            <MainTitleNew>New.</MainTitleNew>
            <MainTitle>판교 '테크원' 빌딩 솔루션 구축 및 하드웨어 납품</MainTitle>
          </Fade>
        </MainTitles>
        <Fade>
        <MainContent>
          <MainInfo>
            <MainInfoSlider>
              <MainInfoSliderItems ref={slideRef}>
              {
                mainData.map((data, idx)=>{
                  return <div key={idx}>
                    <MainInfoTitle>{data.title}</MainInfoTitle>
                    <MainInfoSubTitle>{data.subTitle}</MainInfoSubTitle>
                  </div>
                })
              }
              </MainInfoSliderItems>
            </MainInfoSlider>
            <MainReferanceDown></MainReferanceDown>
          </MainInfo>
          <MainSlider>
            <MainInfoSliderImgs>
              {
                mainData.map((data,idx)=>{
                  return select===idx && ( 
                    <MainInfoSliderImg key={idx} main src={data.src_d} />
                  )
                })
              }
              <MainInfoSliderImg src={select+1 >= mainData.length ? mainData[0].src_d :  mainData[select+1].src_d} />
            </MainInfoSliderImgs>
          </MainSlider>
        </MainContent>
        <SlideRow>
          <MainSlideArrow 
            src="/icons/left_arrow_w.png"
            src_h="/icons/left_arrow_r.png"
            onClick={prevMain}
            />
          <MainSlideArrow
            src="/icons/right_arrow_w.png"
            src_h="/icons/right_arrow_r.png"
            onClick={nextMain}
          />
        </SlideRow>
        </Fade>
      </MainWrapper>
    </MainContainer>
  )
};