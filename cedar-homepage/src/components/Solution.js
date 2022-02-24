import styled from 'styled-components'
import React, { useEffect, useRef, useState, useMemo } from 'react'
import { touchEnd, touchStart } from '../utils/func';
import useDidMountEffect from '../utils/useDidMountEffect';
import Image from 'next/image';
import Menus from './menus';

const SolutionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 0px;
  background:${props => 
    (props.bg == 'red' && '#ffeeee') ||
    (props.bg == 'blue' && '#f2f7fb') ||
    (props.bg == 'puple' && '#f3f2ff')
  };
`;

const SolutionSubText = styled(NSText)`
  color: #333;
  margin: 0px 16px;
  margin-bottom: 50px;
`;

const SolutionImgBox = styled.div`
  display: flex;
  flex-direction:row;
  width: ${props=> 248 * props.data}px;
  position: relative;
  left: 50%;
  margin-bottom:20px;
`;

const SolutionImg = styled(Image)`
  width: 248px;
  height: 248px;
  margin: 0 8px;
`;

const SolutionSlider = styled.div`
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function SolutionT(props) {
  const { data } = props;
  const slideRef = useRef();
  const [ currentSlide, setCurrentSlide ] = useState(2);
  const [ eventTouch , setEventTouch ] = useState({ x: '', y: '' });

  const nextSlide = ()=> {
    console.log("이후");
    if (currentSlide == data.imgs.length-2) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-${(100/data.imgs.length)*(1.5)}%)`; 
      setCurrentSlide(1);
      setCurrentSlide(2);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    console.log("이전")
    if ( currentSlide == 1) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-${(100/data.imgs.length)*(data.imgs.length-2 + 0.5)}%)`; 
      setCurrentSlide(data.imgs.length-2);
      setCurrentSlide(data.imgs.length-3);
    } else {
      setCurrentSlide(currentSlide - 1);
    }  
  }

  useDidMountEffect(() => {
    slideRef.current.style.transition = 'all 0.2s ease-in-out';
  }, [currentSlide]);

  useEffect(()=>{
    slideRef.current.style.transform = `translateX(-${(100/data.imgs.length)*(currentSlide + 0.5)}%)`
  },[currentSlide])

  return (
    <SolutionContainer bg={data.bg}>
      {data.title}
      <SolutionSubText dangerouslySetInnerHTML={{__html: data.text}}></SolutionSubText>
      <SolutionSlider>
        <SolutionImgBox 
          ref={slideRef}
          onTouchStart={(e)=>setEventTouch(touchStart(e))}
          onTouchEnd={(e)=>touchEnd(e, eventTouch, prevSlide, nextSlide)}
          data={data.imgs.length}
        >
          {
            data.imgs.map((img,idx)=>{
              return (
                <SolutionImg key={idx} alt={`solution-img-${idx}`} src={img.src} width={248} height={248}/>
              )
            })
          }
        </SolutionImgBox>
      </SolutionSlider>
      <Menus data={data} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} slideRef={slideRef}/>
    </SolutionContainer>
  )
};