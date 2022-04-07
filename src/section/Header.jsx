import Image from "next/image";
import { Wrapper } from "../styles/Layout";
import styled, { keyframes } from "styled-components";
import { Progress } from "../styles/Keyframes";
import { headerData } from "../utils/data";
import { useEffect, useState } from "react";
import { useInterval } from "../utils/func";

const HeaderLogo = styled(Wrapper)`
  height: 80px;
  display: flex;
  align-items :center;
`;

const HeaderSlide = styled.div`
  display:flex;
  background-image:url('/imgs/headers/header_bg.jpg');
  height: 65.472vh;
  justify-content:center;
  align-items:center;
  background-repeat: no-repeat;
  background-size: 97%;
  background-position: center center;
`;
const HeaderIntro = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  width: 33%;
`;

const HeaderText = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-weight:700;
  font-size:7rem;
  color:${props=> props.point ?'#2FCFBE':'#000'};
  line-height:103.6px;
  margin-bottom:${props=> props.point ?10:0}px;
`;

const HeaderEngText = styled.div`
  height: 100px;
  width: 710px;
  margin-top:15px;
`;

const HeaderFrame = styled.div`
  width: 40%;
  margin-left:-4%;
`;

const HeaderFrameImg = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;

const FrameLeft = keyframes`
  0%{
    transform:translate3d(0px, 0px,0px);
  }50%{
    transform:translate3d(-15px, -15px,0px);
  }100%{
    transform:translate3d(0px, 0px,0px);
  }
`;

const FrameRight = keyframes`
  0%{
    transform:translate3d(0px, 0px,0px);
  }50%{
    transform:translate3d(15px, 15px,0px);
  }100%{
    transform:translate3d(0px, 0px,0px);
  }
`;

const Frame = styled.div`
  display:flex;
  justify-content:${props=> props.left ?"left":"right"};
  animation: ${props=> props.left?FrameLeft:FrameRight} 2s infinite;
`;

const ImageInfo = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 22px;
  text-align: right;
  color: #8D8D8D;
  margin-top:20px;
`;
const SliderTimerBox = styled.div`
  width:97%;
  margin: 0 auto;
`

const HeaderSlideTimer = styled.progress`
 appearance: none;
 width:100%;
 border:0;
 position:relative;
 top:-5px;
 height:5px;
  ::-webkit-progress-bar{
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
              <HeaderSlide width={97} key={idx}>
                <HeaderIntro>
                  <HeaderText point>{data.text}</HeaderText>
                  <HeaderText>더 쉽고 편리하게.</HeaderText>
                  <HeaderEngText>
                    <Image src={data.src} width={710} height={107}/>
                  </HeaderEngText>
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
