import styled from 'styled-components'
import Image from 'next/image'
import { NSText } from '../styles/PublicStyles'
import { Row } from '../styles/Layout'
import React, { useEffect, useRef, useState } from 'react'
import { touchEnd, touchStart } from '../utils/func'
import useDidMountEffect from '../utils/useDidMountEffect'

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

const SolutionBox = styled(Row)`
  width: 100%;
  height: 280px;
`;

const SolutionSlideRow = styled(Row)`
  position: absolute;
  height: 240px;
  width: 100%;
  overflow: hidden;
`;

const SolutionSlideView = styled(Row)`
  position: absolute;
`;

const SlideImg = styled.div`
  width: 248px;
  height: 248px;
`;

const SlideRow = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  padding:0px 33%;
`;

const SlideMenus = styled(Row)`
  width: 580px;
  scroll-snap-type: x mandatory;
`;

const SlideMenu = styled(NSText)`
  font-weight: 700;
  margin: 0px 8px;
  color:${props => props.select? '#d74c4b' : '#4f4f4f'};
  scroll-snap-align: center;
`;

export default function SolutionT(props) {
  const slideRef = useRef();
  const [ currentSlide, setCurrentSlide ] = useState(2);
  const [ eventTouch , setEventTouch ] = useState({ x: '', y: '' });
  const { data } = props;
  const menuRef = useRef();
  
  const nextSlide = ()=> {
    if(currentSlide == data.imgs.length - 2) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-${(100/data.imgs.length)-4}%)`; 
      setTimeout(() => {
        setCurrentSlide(1);
        setCurrentSlide(2);
      }, 50);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const getCurrent = (id) => {
    const imgs = data.imgs.map((img, idx) => {
      return img.id === id && idx;
    })
    const imgCurrent = imgs.filter(img => img !== false);
    if(imgCurrent[0] === 0) {
      return data.imgs.length - 3;
    } else if (imgCurrent[0] === 1) {
      return data.imgs.length - 2;
    }
    return imgCurrent[0];
  }

  const clickMenus = (id) => { 
    if(currentSlide == data.imgs.length-2 && id == 1){
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-${(100/data.imgs.length)-4}%)`; 
      setCurrentSlide(1);
      setCurrentSlide(2);
    }
    if(currentSlide == 2 && id == data.imgs.length-3){
      console.log("맨앞에서 뒤로");
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-${((data.imgs.length-1)*100/data.imgs.length)-4}%)`; 
      setCurrentSlide(data.imgs.length-1);
      setCurrentSlide(data.imgs.length-2);  
    }
    setCurrentSlide(getCurrent(id));
  }

  const prevSlide = () => {
    if ( currentSlide == 1) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-${((data.imgs.length-2)*100/data.imgs.length)-4}%)`; 
      setTimeout(() => {
        setCurrentSlide(data.imgs.length-2);
        setCurrentSlide(data.imgs.length-3);
      }, 50);
    } else {
      setCurrentSlide(currentSlide - 1);
    }  
  }

  useDidMountEffect(() => {
    menuRef.current.scrollLeft = currentSlide * 50;
    slideRef.current.style.transition = 'all 0.3s ease-in-out';
  }, [currentSlide]);

  useEffect(() => {
    menuRef.current.style.transition = 'all 0.1s ease-in-out';
    menuRef.current.style.transform = `translateX(-${((currentSlide*-100)/data.imgs.length)+4}%)`;
    slideRef.current.style.transform = `translateX(-${((currentSlide*100)/data.imgs.length)-4}%)`;
  }, [currentSlide]);

  return (
    <SolutionContainer bg={data.bg}>
      {data.title}
      <SolutionSubText dangerouslySetInnerHTML={{__html: data.text}}></SolutionSubText>
      <SolutionBox>
        <SolutionSlideRow>
          <SolutionSlideView 
            ref={slideRef} 
            onTouchStart={(e)=>setEventTouch(touchStart(e))}
            onTouchEnd={(e)=>touchEnd(e, eventTouch, prevSlide, nextSlide)}
            currentSlide={currentSlide}>
            {
              data.imgs.map((data,idx) => {
                return (
                  <SlideImg key={idx}>
                    <Image src={data.src} height={240} width={240} alt="Solution Images" />
                  </SlideImg>
                )
              })
            }
          </SolutionSlideView>
        </SolutionSlideRow>
      </SolutionBox>
      <SlideRow ref={menuRef}>
        <SlideMenus>
          {
            data.menus.map((menu,idx) => {
              return (
                <SlideMenu key={idx} select={data.imgs[currentSlide].id === menu.id} onClick={()=>clickMenus(menu.id)}>{menu.name}</SlideMenu>
              )
            }) 
          }
        </SlideMenus>
      </SlideRow>
    </SolutionContainer>
  )
};