import styled, { keyframes } from 'styled-components'
import React, {  useRef, useState } from 'react'
import { NSText } from '../styles/PublicStyles'
import { Row, Wrapper } from '../styles/Layout'
import Image from 'next/image';
import { Default, Desktop, Tablet } from '../utils/media'
import { fadeInLeft, fadeInRight } from '../styles/keyframe';
import { useEffect } from 'react/cjs/react.development';
import useDidMountEffect from '../utils/useDidMountEffect';

const SolutionContainer = styled.div`
  padding-top: 190px;
  padding-bottom: 182px;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  background:${props => 
    (props.bg == 'red' && '#ffeeee') ||
    (props.bg == 'blue' && '#f2f7fb') ||
    (props.bg == 'puple' && '#f3f2ff')
  };
  margin: 0 auto;

  ${({theme})=>theme.mobile`
    padding-top: 140px;
    padding-bottom: 130px;
  `}
`;

const SolutionWrapper = styled(Wrapper)`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SolutionRow = styled(Row)`
  justify-content: space-between;
  flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
  align-items: center;

  ${({theme})=>theme.tablet`
    justify-content: left;
    flex-direction: row;
  `};
`;

const SolutionImg = styled.div`
  margin-left: ${props=> props.reverse ? '82px': '0px'};
  margin-right: ${props=> props.reverse ? '0px': '82px'};

  ${({theme})=>theme.tablet`
    margin-right: 56px;
    min-width: 240px;
    min-height: 240px;
  `}
  animation: ${props=> props.reverse ? fadeInRight : fadeInLeft} 470ms;
`;

const SolutionSubText = styled(NSText)`
  color: #333;
  font-size: 1.8rem;
  white-space: nowrap;
  animation:  ${props=> props.reverse ? fadeInLeft : fadeInRight} 470ms;
`;


const fadeInTop = keyframes`
  0%{
    transform: translateY(-130px);
  }
  100%{
    transform: translateY(0px);
  }
`;


const SoutionMenus = styled.div`
  margin-top:10.417vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 740px;
  min-width: 500px;
  animation:  ${props=> props.reverse ? fadeInLeft :fadeInRight } 470ms;
  ${({theme})=>theme.tablet`
    margin-top: 88px;
    flex-direction: column;
    min-width: 100%;
  `}
`;


const SoutionMenuIcon = styled.div`
  width: 10px;
  height: 10px;
  flex-grow: 0;
  transform: rotate(-315deg);
  margin: 0 10px;
  background-color: ${props=> props.select && '#d74c4b'};
`;

const SoutionMenusText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props=> props.select ? "#d74c4b" : "#4f4f4f"};
`;

const SolutionMenuItems = styled(Row)`  
  display: flex;
  align-items: center;
  height: 50px;
  width: 250px;
  z-index: 2;
  cursor: pointer;

  & + .hover-slider {
    width: 250px;
    position: absolute;
    z-index: 1;
    transition: all 200ms, background-color 200ms;
  }
  :nth-child(1):hover ~ .hover-slider {
    transform: translateX(0);
    background-color: #fff;
  }
  :nth-child(2):hover ~ .hover-slider {
    transform: translateX(100%);
    background-color: #fff;

  }
  :nth-child(3):hover ~ .hover-slider {
    transform: translateY(100%);
    background-color: #fff;

  }
  :nth-child(4):hover ~ .hover-slider {
    transform: translate3d(100%, 100%, 0);
    background-color: #fff;
  }
  :nth-child(5):hover ~ .hover-slider {
    transform: translateY(200%);
    background-color: #fff;
  }
`;


export default function SolutionDesk(props) {
  const { data } = props;
  const [ select, setSelect ] = useState({id:1});
  const solutionRef = useRef(null);

  const getImg = (imgs)=> {
    const data = imgs.filter(data=> data.id === select.id);
    return data[0].src_d;
  }

  useDidMountEffect(()=>{
    solutionRef.current.style.animation = 'fadeInTop 470ms';
  },[select])

  return (
    <Default>
      <SolutionContainer bg={data.bg} >
        <SolutionWrapper>
          <SolutionRow reverse={data.id === 1 || data.id === 3}>
              <SolutionImg reverse={data.id === 1 || data.id === 3 } ref={solutionRef}>
                <Image
                  alt="solution"
                  src={getImg(data.imgs)}
                  height={700}
                  width={700}
                  layout="intrinsic"
                />
              </SolutionImg>
            <div>
              {data.title}
              <Desktop>
                <SolutionSubText reverse={data.id === 1 || data.id === 3 } dangerouslySetInnerHTML={{__html:data.id ===1 || data.id ===2 ? data.text: data.text_d}}></SolutionSubText>
              </Desktop>
              <Tablet>
                <SolutionSubText reverse={data.id === 1 || data.id === 3 } dangerouslySetInnerHTML={{__html:data.text}}></SolutionSubText>
              </Tablet>
              <SoutionMenus  reverse={data.id === 1 || data.id === 3 }>
                {
                  data.menus.map((data, idx)=>{
                    return <SolutionMenuItems key={idx} onClick={()=>setSelect(data)}>
                      <SoutionMenuIcon select={select.id === data.id}></SoutionMenuIcon>
                      <SoutionMenusText select={select.id === data.id}>{data.name}</SoutionMenusText>
                    </SolutionMenuItems>
                  })
                }
                <SolutionMenuItems className="menu hover-slider">
                </SolutionMenuItems>
              </SoutionMenus>
            </div>
          </SolutionRow>
        </SolutionWrapper>
      </SolutionContainer>
    </Default>
  )
};
