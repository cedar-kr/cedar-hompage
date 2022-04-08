import Image from "next/image";
import { Wrapper } from "../styles/Layout";
import styled, { keyframes } from "styled-components";
import { Progress } from "../styles/Keyframes";
import { headerData } from "../utils/data";
import { useEffect, useState } from "react";
import { useInterval } from "../utils/func";

const HeaderLogo = styled(Wrapper)`
  height: 40px;
  display: flex;
  align-items :center;
  padding: 16px 12.62px;
`;

const HeaderSlide = styled.div`
  display:flex;
  background-image:url('/imgs/headers/header_bg_mobile.png');
  /* height: 84.355vmax; */
  width:100%;
  height: 640px;
  flex-direction:column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 0px 12.62px;
`;
const HeaderIntro = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  width: 100%;
  padding-top: 60px;
`;

const HeaderText = styled.div`
  font-family: 'NotoSansKR-Bold', sans-serif;
  color:${props=> props.point ?'#2FCFBE':'#000'};
  font-weight: 700;
  font-size: 35px;
  line-height: 52px;
`;

const HeaderEngText = styled.div`
  font-family: 'Quentin';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 66px;
  color: #2FCFBE;
  opacity: 0.2;
`;

const HeaderFrame = styled.div`
  width: 100%;
`;

const HeaderFrameImg = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  height:280px;
`;

const FrameLeft = keyframes`
  0%{
    transform:translate3d(0px, 0px,0px);
  }50%{
    transform:translate3d(10px, 10px,0px);
  }100%{
    transform:translate3d(0px, 0px,0px);
  }
`;

const FrameRight = keyframes`
  0%{
    transform:translate3d(0px, 0px,0px);
  }50%{
    transform:translate3d(-10px, -10px,0px);
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
  font-size: 12px;
  line-height: 17.76px;
  text-align: left;
  color: #8D8D8D;
  margin-top:38px;
`;
const SliderTimerBox = styled.div`
  width:100%;
  height:5px;
`

const HeaderSlideTimer = styled.progress`
 appearance: none;
 width:100%;
 border:0;
 position:relative;
 top:-4px;
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

  // useInterval(()=>{
  //   if(slide === headerData.length){
  //     setSlide(1);
  //   }else{
  //     setSlide(slide+1);
  //   }
  // },7000)

  return (
    <>
      <HeaderLogo>
        <Image src={'/icons/logo.png'} width={67.2} height={18}/>
      </HeaderLogo>
        {
          headerData.map((data,idx)=>{
            return slide == data.id && (
              <HeaderSlide width={97} key={idx}>
                <HeaderIntro>
                  <HeaderText point>{data.text}</HeaderText>
                  <HeaderText>더 쉽고 편리하게.</HeaderText>
                  <HeaderEngText>
                    Digital Signage
                  </HeaderEngText>
                </HeaderIntro>
                <HeaderFrame>
                  <Frame left>
                    <Image src={'/imgs/headers/header_frame_left.svg'} height={33.27} width={33.71}/></Frame>
                  <HeaderFrameImg>
                    <Image src={data.imgs[0].src} width={33.71} height={33.27}/>
                    <Image src={data.imgs[1].src} width={33.71} height={33.27}/>
                  </HeaderFrameImg>
                  <Frame>
                    <Image src={'/imgs/headers/header_frame_right.svg'} height={33.27} width={33.71}/>
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
