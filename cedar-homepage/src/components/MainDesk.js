import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { Row, Wrapper } from '../styles/Layout';
import useDidMountEffect from '../utils/useDidMountEffect';

const MainContainer = styled.section`
  background-color: #fff;
  position: relative;
  background-image: url(./webp/bg_main.webp);
  background-size: cover;
  background-position: center center;
  background-color: rgba(43, 43, 43, 0.6);
  background-attachment: fixed;
  height: 100vh;
  overflow: hidden;
  ${({theme})=>theme.tablet`
      height: 768px;
  `};
`;

const MainWrapper = styled(Wrapper)`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height: 100%;
  width: 80%;
  ${({theme})=>theme.tablet`
    width: 87%;
    padding-top:9.2vmin;
  `};
`

const MainTitles = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`;

const MainTitleNew = styled.div`
  font-family: 'S-CoreDream-3 300', sans-serif;
  font-size: 2rem;
  color:#fff;
  font-weight: 300;
  margin-right:2vmin;
  ${({theme})=>theme.tablet`
    font-size: 1.6rem;
  `};
`;

const MainTitle = styled.div`
  font-family: 'S-CoreDream-5 500', sans-serif;
  font-size: 3.5rem;
  font-weight: 500;
  color:#fff;
  ${({theme})=>theme.tablet`
    font-size: 2.5rem;
  `};
`;

const MainContent = styled.div`
  display: flex;
  flex-direction:row;
  width: 100%;
  margin-top:4.4vmin;
  margin-bottom:5vmin;

  ${({theme})=>theme.tablet`
    margin-bottom:4vmin;
    flex-direction: row-reverse;
    margin-top:4.8vmin;
    justify-content:space-between;
  `};
`;


const MainInfo = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-item:left;
  width: 41vmin;
  margin-bottom:150px;
  ${({theme})=>theme.tablet`
    width: 25vmin;
    margin-left:50px;
    justify-content:flex-start;
    margin-bottom:0px;
  `};
`;

const MainInfoSlider = styled.div`
  height: 280px;
  overflow: hidden;
  ${({theme})=>theme.tablet`
     height: 145px;
     margin-top:14px;
  `};
`;

const MainInfoSliderItems = styled.div`
  margin-bottom:5px;
  ${({theme})=>theme.tablet`
    width: 100%;
    height: 100%;
  `}
`

const MainInfoTitle = styled.div`
  font-family: 'Roboto 100', sans-serif;
  font-size: 8rem;
  font-weight: 100;
  letter-spacing: 4px;
  color:#fff;
  height: 220px;
  display: flex;
  align-items:flex-end;
  text-align:left;
  margin-bottom:27px;
  ${({theme})=>theme.tablet`
    font-size: 4rem;
    height: 95px;
    margin-bottom:30px;
  `};
`;

const MainInfoSubTitle = styled.div`
  font-family: 'S-CoreDream-5 Bold', sans-serif;
  font-size: 2.5rem;
  color:#fff;
  font-weight: 500;
  text-align:left;
  margin-bottom:27px;
  ${({theme})=>theme.tablet`
    font-size: 1.6rem;
  `};
`;

const MainSlider = styled.div`
  width: 100vmin;
  height: 62vmin;
  position: relative;
  margin-left:130px;
  ${({theme})=>theme.tablet`
    width: 57.6vmin;
    height: 35.6vmin;
    position: relative;
    margin-left:0px;
  `};
`;

const MainInfoSliderImgs = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  position: absolute;
  width: 100vw;
  ${({theme})=>theme.tablet`
    position: static;
    width: 100%;
  `};
`;

const MainInfoSliderImg = styled.div`
  width:${props=> props.main ? 100 : 80}vmin;
  height: ${props=> props.main ? 64 : 50}vmin;
  background: gray;
  background: ${props=> `url(${props.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  filter: ${props=> !props.main && 'grayscale(95%)'};

  ${({theme})=>theme.pc`
    margin-right: 56.8px;
  `};

  ${({theme})=>theme.tablet`
    width: 576px;
    height: 356px;
    display:${props=> props.main ? 'flex' : 'none'};
  `};
`;

const MainReferanceDown = styled.div`
  margin-top:27px;
  background: url('./icons/download_btn_w.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 254px;
  height: 50px;
  cursor: pointer;
  ${({theme})=>theme.tablet`
    width: 176px;
    height: 40px;
  `}
  :hover{
    background: url('./icons/download_btn_r.png');
    ${({theme})=>theme.tablet`
    width: 176px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
  `}
  }
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
  const isDesktop = useMediaQuery({ minWidth: 1025 })
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
    if(isDesktop){
      slideRef.current.style.transform = `translateY(-${305*select}px)`;
    }
    if(isTablet){
      slideRef.current.style.transform = `translateY(-${145*select}px)`;
    }
  }, [select]);


  return (
    <MainContainer>
      <MainWrapper>
        <MainTitles>
          <MainTitleNew>New.</MainTitleNew>
          <MainTitle>판교 '테크원' 빌딩 솔루션 구축 및 하드웨어 납품</MainTitle>
        </MainTitles>
        <MainContent>
          <MainInfo>
            <MainInfoSlider >
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
        <Row>
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
        </Row>
      </MainWrapper>
    </MainContainer>
  )
};