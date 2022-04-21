import { useState } from "react";
import { useInterval } from "../utils/func";
import Image from "next/image";
import { Wrapper } from "../styles/Layout";
import styled, { keyframes } from "styled-components";
import { Progress } from "../styles/Keyframes";
import { headerData } from "../utils/data";

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

const HeaderWrapper = styled.div`
  ${({theme})=> theme.tnm`
    height: 630px;
    overflow:hidden;
  `}
`;

const HeaderSlide = styled.div`
  display: flex;
  background-image: url('/imgs/headers/header_bg.jpg');
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  padding-top: 80px;
  padding-bottom: 99px;
  overflow: hidden;
  transition:all ease-in-out;

  ${({theme})=> theme.pnt`
    padding-top: 70px;
    padding-bottom: 84px;
  `}
  ${({theme})=> theme.tnm`
    max-height: 560px;
  `}
`;

const HeaderIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
  width: 30%;
  margin-right:50px;
  ${({theme})=> theme.fnp`
    width: 22%;
  `}

  ${({theme})=> theme.pnt`
    width: 29%;
  `}
  ${({theme})=> theme.tablet`
    width: 45%;
  `}
  ${({theme})=> theme.tnm`
    width: 45%;
  `}
`;

const HeaderText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
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
  width: 45%;
  margin-left: -4%;
  position: relative;
  ${({theme})=> theme.fnp`
    width: 25%;
  `}

${({theme})=> theme.tablet`
    height:559px;
  `}
`;

const HeaderFrameImg = styled.div`
  width: 100%;
  min-width: 100%;
  text-align: center;
  position: relative;
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
  position: absolute;
  right: ${props => !props.left && 0};
  bottom: ${props => !props.left && 0};
  top: ${props => props.left ? "0" : ""};
`;

const ImageInfo = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 22px;
  text-align: right;
  color: #8D8D8D;
  position: absolute;
  margin-top:20px;
  bottom: -50px;
  right: 0;
`;

const SliderTimerBox = styled.div`
  width: 100%;
`

const HeaderSlideTimer = styled.progress`
 appearance: none;
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
  animation: ${Progress} 5s infinite;
`;

const MainImageAni = keyframes`
  0%{
    transform:translateX(100%);
  }
  100%{
    transform:translateX(0);
  }
`;

const SubImageAni = keyframes`
  0%{
    
    transform:translateX(100%);
  }
  30%{
    transform:translateX(100%);
  }
  100%{
    transform:translateX(0);
  }
`;

const SubImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: ${props => props.id === 1 ? '-200px': '-290px'};
  right: ${props => props.id === 1 ? '-170px': '-170px'};
  animation:${SubImageAni} 1s ease-in-out;
  transition: animation 1s ease-in-out; 

  ${({theme})=> theme.pnt`
    bottom: ${props => props.id === 1 ? '-190px': '-290px'};
    right: ${props => props.id === 1 ? '-160px': '-170px'};
  `}
  ${({theme})=> theme.tablet`
    bottom: ${props => props.id === 1 ? '-160px': '-240px'};
    right: ${props => props.id === 1 ? '-130px': '-160px'};
  `}
  ${({theme})=> theme.tnm`
    bottom: ${props => props.id === 1 ? '-127px': '-150px'};
    right: ${props => props.id === 1 ? '-70px': '-130px'};
  `}
`;

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: ${props => props.id === 1 ? '118px': '0px'};

  ${({theme})=> theme.tablet`
    margin-bottom: ${props => props.id === 1 ? '45px': '0px'};
  `}
  ${({theme})=> theme.tnm`
    width: ${props => props.id === 1 ? '60': '100'}%;
    height: ${props => props.id === 1 ? '60': '100'}%;
    margin: 0 auto;
    margin-bottom: ${props => props.id === 1 ? '50px': '0px'};
  `}
  animation:${MainImageAni} 1s ease-in-out;
`;

const HeaderSlideBox = styled.div`
  ${({theme})=> theme.fnp`
    padding: 0px 30px;
  `}
  ${({theme}) => theme.pc`
    padding: 0px 30px;
  `}
`;

export default function Header() {
  const [ slide, setSlide ] = useState(1);
  
  useInterval(()=>{
    if(slide === headerData.length){
      setSlide(1);
    }else{
      setSlide(slide+1);
    }
  },5000)

  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Image src={'/icons/logo.png'} width={112} height={30} alt={'Cedar Logo'} priority />
      </HeaderLogo>
      <HeaderSlideBox>
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
                    <Image src={'/imgs/headers/header_frame_left.svg'} height={76} width={77} alt={'Left Frame'} />
                  </Frame>
                  <HeaderFrameImg>
                    <MainImage id={data.id}> 
                      <Image src={data.imgs[0].src} width={data.imgs[0].width} height={data.imgs[0].height} alt={'Header Main Image'} priority/>
                    </MainImage>
                    <SubImage id={data.id} bottom={data.bottom} right={data.right}> 
                      <Image src={data.imgs[1].src} width={data.imgs[1].width} height={data.imgs[1].height} priority alt={'Header Sub Image'} />
                    </SubImage>
                  </HeaderFrameImg>
                  <Frame>
                    <Image src={'/imgs/headers/header_frame_right.svg'} height={76} width={77} alt={'Right Frame'} />
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
      </HeaderSlideBox>
    </HeaderWrapper>
  )
}