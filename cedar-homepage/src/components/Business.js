import styled from 'styled-components'
import { Title, NSText, MdText } from '../styles/PublicStyles'
import { Center, Wrapper } from '../styles/Layout'
import { Default, Mobile } from '../utils/media';
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';

const BusinessContainer = styled.section`
    padding: 60px 0px;
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

const BusinessTitle = styled(Title)`
  margin-bottom: 22px;
  ${({theme})=>theme.pc`
    font-size: 5.5rem;
    font-weight: 900;
    line-height:normal;
    margin-top: 108px;
  `};
  ${({theme})=>theme.tablet`
    font-size: 3.5rem;
    font-weight: 900;
    line-height:normal;
    padding-top:102px;
  `};
`;

const BusinessWrapper = styled(Wrapper)`
  ${({theme})=>theme.pc`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  `};
  ${({theme})=>theme.tablet`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  `};
`;


const Box = styled(Center)`
  justify-content: center;
  height: 105px;
  min-width: 258px;
  margin: 8px 0px;
  text-align: center;
  background-color: ${props => 
    (props.color === "blue" && "#74ccff")|| 
    (props.color === "gray" && "#ededed") ||
    "#6e92ff"
  };
`;

const BusinessView = styled.div`
  width: 55%;
  display: flex;
  justify-content:space-between;
  align-items:center;

`;

const BoxItemTitle = styled(MdText)`
  font-family: 'Roboto', sans-serif;
  padding-bottom: 10px;
  font-weight: 700;
  color: ${props => props.color === "gray" ? "#4f4f4f" : "#fff"};
`;

const BoxItemText = styled(NSText)`
  color: ${props => props.color==="gray" ? "#4f4f4f" : "#fff"};
  text-align: center;
`;

const MovingBall = styled.div`
  margin: 100px 0px;
  position: relative;

`;

const MovingBallWrap = styled.div`
  position: absolute;
  .s-text {
    position: absolute;
    width: 85px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    align-items: center;
    color: #4f4f4f;
    z-index:103;
  }

  .s-text.m {
    left: -20%;
    bottom: 12%;
  }

  .s-text.p {
    right: -92%;
    top: -48%;
  }

  .s-text.c {
    right: -68%;
    bottom: -54%;
  }

  .s-text.e {
    left: 48%;
    bottom: -20%;
  }

  .s-text.a {
    right: 30%;
    top: -20%;
  }

  .s-text.v {
    right: -115%;
    top: 37%;
  }
`;

const MovingBallStroke = styled.div`
  position: absolute;
  border: 2px solid #fff;
  box-sizing: border-box;
  border-radius: 100%;
  width: 40vmin;
  height: 40vmin;
  ${({theme})=>theme.tablet`
    width: 25.3vmin;
    height: 25.3vmin;
  `}
  z-index:101;
  ${(props)=>
    props.id == 1 && `left: 16px; top: 0px;` ||
    props.id == 2 && `left: 75%; top: -50%;` ||
    props.id == 3 && `left: 95%; top: 25%;` 
  }

  .text {
    position: absolute;
    width: 269px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 4rem;
    line-height: normal;
    align-items: center;
    text-align: center;
    color: ${props=> props.id===3 ? '#4F4F4F' :'#FFFFFF'};
    ${({theme})=>theme.tablet`
      width: 269px;
      font-size: 3rem;
      text-align: center;
    `}
  }
`;

const MovingBallItem = styled.div`
  border-radius: 100%;
  width: 40vmin;
  height: 40vmin;
  ${({theme})=>theme.tablet`
    width: 25.3vmin;
    height: 25.3vmin;
   
  `}

  ${(props)=>
    props.id == 1 && `
      position: relative;
      background: #6E92FF;
      box-shadow: 0px 15px 25px rgba(101, 131, 254, 0.4);
      left: 0px;
      top: 0px;
      z-index:100;
      ` ||
    props.id ==2 && ` 
      position: absolute;
      background: #74CCFF;
      box-shadow: 0px 15px 25px rgba(116, 204, 255, 0.4);
      left: 80%;
      top: -50%;
      z-index:99;
      ` ||
    props.id ==3 && ` 
      position: absolute;
      background: #EDEDED;
      box-shadow: 0px 15px 25px rgba(228, 228, 228, 0.4);
      left: 95%;
      top: 35%;
      z-index:99;
    ` 
  };
`;

export default function Business() {
  const ballRef = useRef();

  const business_data = [
    {
      title: "Digital signage Solution",
      title_exp: "Experience Optimization",
      title_exp_1: "Management System",
    },{
      title: "Hardware & Product",
      title_exp: "AD Monitor Production",
      title_exp_1: "PCB Production",
      color: "blue"
    },{
      title: "Customer Service center",
      title_exp: "Customized Consulting",
      color: "gray"
    }
  ]

  const test = (e) => {
    let winPercent = { x:e.clientX/window.innerWidth, y:e.clientY/window.innerHeight },
        distFromCenter = 1 - Math.abs((e.clientX - window.innerWidth/2)/window.innerWidth*2);
      gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.ball_1',          {x:200-200*winPercent.x, y:30-60*winPercent.y}, 0) 
    gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.ball_2',          {x:200-250*winPercent.x, y:30-50*winPercent.y}, 0) 
    gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.ball_3',          {x:200-300*winPercent.x, y:30-100*winPercent.y}, 0) 
    
    gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.stroke_1',          {x:200-200*winPercent.x, y:50-80*winPercent.y}, 0.05) 
    gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.stroke_2',          {x:200-250*winPercent.x, y:50-80*winPercent.y}, 0.05) 
    gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.stroke_3',          {x:200-300*winPercent.x, y:50-100*winPercent.y}, 0.05) 
  
    gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.s-text.m',          {x:200-200*winPercent.x, y:50-80*winPercent.y}, 0.05) 
    gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.s-text.p',          {x:200-250*winPercent.x, y:50-80*winPercent.y}, 0.05) 
    gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.s-text.c',          {x:200-300*winPercent.x, y:50-100*winPercent.y}, 0.05) 
  
    gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.s-text.e',          {x:200-200*winPercent.x, y:50-80*winPercent.y}, 0.05) 
    gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.s-text.a',          {x:200-250*winPercent.x, y:50-80*winPercent.y}, 0.05) 
    gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.s-text.v',          {x:200-300*winPercent.x, y:50-100*winPercent.y}, 0.05) 
  }

  return (
    <BusinessContainer>
      <BusinessWrapper>
        <BusinessTitle>
          시더는 다양한
          <br />
          사업분야를
          <br />
          구축하고 있습니다.
        </BusinessTitle>
        <Mobile>
          <Center>
            {business_data.map((data,idx) => {
              return (
                <Box key={idx} color={data.color}> 
                  <BoxItemTitle color={data.color}>{data.title}</BoxItemTitle>
                  <BoxItemText color={data.color}>
                    {data.title_exp}
                    <br />
                    {data.title_exp_1}
                  </BoxItemText>
                </Box>
              )
            })}
          </Center>
        </Mobile>
        <Default>
          <BusinessView>
          <MovingBall onMouseMove={test} ref={ballRef}>
              <MovingBallWrap>
                <div class="ball">
                  <MovingBallItem className="ball_1" id={1}></MovingBallItem>
                  <MovingBallItem className="ball_2" id={2}></MovingBallItem>
                  <MovingBallItem className="ball_3"id={3}></MovingBallItem>
                </div>
                <div class="stroke">
                  <MovingBallStroke className="stroke_1" id={1}>
                    <div class="text">
                      Digital signage<br/>
                      Solution
                    </div>
                  </MovingBallStroke>
                  <MovingBallStroke className="stroke_2"  id={2}>
                    <div class="text">
                      Hardware<br/>
                      & Product
                    </div>
                  </MovingBallStroke>
                  <MovingBallStroke className="stroke_3"  id={3}>
                    <div class="text" id="black">
                      Customer<br/>
                      Service center
                    </div>
                  </MovingBallStroke>
                </div>
                <div class="sub-text">
                  <div class="s-text m">
                    Management<br/>
                    System
                  </div>
                  <div class="s-text p">
                    PCB<br/>
                    Production
                  </div>
                  <div class="s-text c">
                    Customized<br/>
                    Consulting
                  </div>
                </div>
                <div class="sub-text">
                  <div class="s-text e">
                    Experience<br/>
                    Optimization
                  </div>
                  <div class="s-text a">
                    AD Monitor<br/>
                    Production
                  </div>
                  <div class="s-text v">
                    Various<br/>
                    digital<br/>
                    signage
                  </div>
                </div>
              </MovingBallWrap>
            </MovingBall>
          </BusinessView>
        </Default>
      </BusinessWrapper>
    </BusinessContainer>
  )
};