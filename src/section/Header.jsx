import Image from "next/image";
import { Wrapper } from "../styles/Layout";
import styled, { keyframes } from "styled-components";
import { Progress } from "../styles/Keyframes";
import { headerData } from "../utils/data";
import { useState } from "react";
import { useInterval } from "../utils/func";

const HeaderLogo = styled(Wrapper)`
  display: flex;
  align-items: center;
  height: 80px;

  ${({theme})=> theme.pnt`
    height: 70px;
  `}
  ${({theme})=> theme.tablet`
    height: 70px;
  `}
  ${({theme})=> theme.tnm`
    height: 60px;
  `}
`;

const HeaderSlide = styled.div`
  display: flex;
  background-image: url('/imgs/headers/header_bg.jpg');
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center center;
  padding-top: 80px;
  padding-bottom: 34px;

  ${({theme})=> theme.pc`
    margin: 0px 30px;
  `}
`;

const HeaderIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderText = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-weight: 700;
  font-size: 7rem;
  color: ${props=> props.point ?'#2FCFBE':'#000'};
  line-height: 104px;
  margin-bottom: ${props => props.point ? 10 : 0}px;

  ${({theme})=> theme.pnt`
    font-size: calc(5rem + (100vw - 1240px) * ((70 - 50) / (1439 - 1240)));
    line-height: 74px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 5rem;
    line-height: 74px;
  `}
  ${({theme})=> theme.tnm`
    font-size: calc(3.5rem + (100vw - 600px) * ((50 - 35) / (904 - 600)));
    line-height: 52px;
  `}
`;

const HeaderEngText = styled.div`
  font-family: 'Quentin';
  font-weight: 400;
  font-size: 10rem;
  line-height: 147px;
  color: #2FCFBE;
  opacity: 0.2;
  margin-top: 15px;
  width: 100%;

  ${({theme})=> theme.pnt`
    font-size: calc(6.5rem + (100vw - 1240px) * ((100 - 65) / (1439 - 1240)));
    line-height: 95px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 6.5rem;
    line-height: 95px;
  `}
  ${({theme})=> theme.tnm`
    font-size: calc(5rem + (100vw - 600px) * ((65 - 50) / (904 - 600)));
    line-height: 73px;
  `}
`;

const HeaderFrame = styled.div`
  width: 40%;
  margin-left: -4%;
`;

const HeaderFrameImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FrameLeft = keyframes`
  0% {
    transform:translate3d(0px, 0px, 0px);
  } 50% {
    transform:translate3d(-15px, -15px, 0px);
  } 100% {
    transform:translate3d(0px, 0px, 0px);
  }
`;

const FrameRight = keyframes`
  0% {
    transform:translate3d(0px, 0px, 0px);
  } 50% {
    transform:translate3d(15px, 15px, 0px);
  } 100% {
    transform:translate3d(0px, 0px, 0px);
  }
`;

const Frame = styled.div`
  display: flex;
  justify-content: ${props => props.left ? "left" : "right"};
  animation: ${props => props.left ? FrameLeft : FrameRight} 2s infinite;
`;

const ImageInfo = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 22px;
  text-align: right;
  color: #8D8D8D;
  margin-top:20px;
`;

const SliderTimerBox = styled.div`
  width: 100%;

  ${({theme}) => theme.pc`
    width: 96.5%;
    max-width: 1930px;
    margin: 0 auto;
  `}
`

const HeaderSlideTimer = styled.progress`
 appearance: none;
 width: 100%;
 border: 0;
 position: relative;
 top: -5px;
 height: 5px;
  ::-webkit-progress-bar {
    background:white;
  }
  ::-webkit-progress-value {
    background:#2FCFBE;
  }
  animation: ${Progress} 7s infinite;
`;

export default function Header(params) {
  const [ slide, setSlide ] = useState(1);

  useInterval(()=>{
    if(slide === headerData.length){
      setSlide(1);
    }else{
      setSlide(slide+1);
    }
  },7000)

  return (
    <>
      <HeaderLogo>
        <Image src={'/icons/logo.png'} width={112} height={30}/>
      </HeaderLogo>
        {
          headerData.map((data,idx)=>{
            return slide == data.id && (
              <HeaderSlide width={100} key={idx}>
                <HeaderIntro>
                  <HeaderText point>{data.text}</HeaderText>
                  <HeaderText>더 쉽고 편리하게.</HeaderText>
                  <HeaderEngText>{data.engText}</HeaderEngText>
                </HeaderIntro>
                <HeaderFrame>
                  <Frame left>
                    <Image src={'/imgs/headers/header_frame_left.svg'} height={76} width={77}/></Frame>
                  <HeaderFrameImg>
                    <Image src={data.imgs[0].src} width={data.imgs[0].width} height={data.imgs[0].height}/>
                    <Image src={data.imgs[1].src} width={data.imgs[1].width} height={data.imgs[1].height}/>
                  </HeaderFrameImg>
                  <Frame>
                    <Image src={'/imgs/headers/header_frame_right.svg'} height={76} width={77}/>
                  </Frame>
                  <ImageInfo>{data.subs}</ImageInfo>
                </HeaderFrame>
              </HeaderSlide>
            )
          })
        }
      <SliderTimerBox>
        <HeaderSlideTimer min="1" max="100" value={100} ></HeaderSlideTimer>
      </SliderTimerBox>
    </>
  )
}
