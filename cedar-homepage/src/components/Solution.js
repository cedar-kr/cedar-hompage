import styled, { css } from 'styled-components'
import Image from 'next/image';
import { NSText } from '../styles/PublicStyles';
import React, { useEffect, useRef, useState } from 'react'
import { touchEnd, touchStart } from '../utils/func';
import useDidMountEffect from '../utils/useDidMountEffect';
import { Center, Row } from '../styles/Layout';
import * as ga from '../utils/ga';

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
  margin-bottom: 22px;
`;

const SolutionImgBox = styled(Row)`
  position: relative;
  width: ${props=> 248 * props.data}px;
  left: 50%;
  margin-bottom: 36px;
`;

const SolutionImg = styled(Image)`
  width: 240px;
  height: 240px;
  margin: 0 8px;
`;

const SolutionSlider = styled.div`
  overflow: hidden;
`;

const SlideButtons = styled(Row)`
  justify-content: space-between;
`;

const SlideButton = styled(Center)`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 250px;
  width: 15%;
  left: ${props => props.left && 0}px;
  right: ${props => props.right && 0}px;
  z-index: 100;
`;

const SolutionMenus = styled(Center)`
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
  width: 100%;
`;

const SolutionMenuBox = styled(Row)`
  position: relative;
  width: ${props => props.scroll ? "calc(100%)" : "150px"};
  margin: 10px;
  ${props => props.scroll && css`
    height: 30px;
    overflow-y: hidden;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
  `}
`;

const defaultLeft = 25;

const Pointer = styled.div`
  width: 1px;
  height: 1px;
  position: absolute;
  z-index: 1;
`;

const SolutionMenu = styled(Row)`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: max-content;
  ${props => props.width && css`
    width: calc(100% + 400px);
  `}
  top: 0px;
  left: ${defaultLeft}px;
  transition: left ease 0.5s 0s;
`;

const MenuText = styled.div`
  width: max-content;
  color: ${props => props.select? '#d74c4b' : '#4f4f4f'};
  font-family:  'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  transform: translateX(${props => props.left}px);
  transition: transform ease 0.3s 0s;
  margin: 0 8px;
`;

const Menu = React.forwardRef((props, ref) => {
  const { menu } = props;

  useEffect(() => {
    if(ref?.current) {
      props.setTextLeft((props.pointerLeft - ref.current.offsetLeft) - (ref.current.offsetWidth / 2));
    }
  },[ref, props]);

  return (
    <MenuText {...props} ref={ref}>
      {menu}
    </MenuText>
  );
});

Menu.displayName = "Menu";

export default function SolutionT(props) {
  const { data } = props;
  const slideRef = useRef();
  const currentTextRef = useRef();
  const pointerRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(2);
  const [eventTouch , setEventTouch] = useState({ x: '', y: '' });
  const [textLeft, setTextLeft] = useState(0);
  const [pointerLeft, setPointerLeft] = useState(0);
  const scrollRef = useRef();

  useEffect(() => {
    if (pointerRef?.current) {
      setPointerLeft(pointerRef.current.offsetLeft);
    }
  }, [pointerRef]);

  useEffect(() => {
    if (currentTextRef.current) {
      document.getElementById(`scroll-${data.id}`).scrollLeft = -(textLeft - defaultLeft);
      document.getElementById(`scroll-${data.id}`).style.scrollBehavior = 'smooth';
    }
  }, [textLeft, data]);

  const getCurrent = (id) => {
    const imgs = data.imgs.map((img, idx)=>{
      return img.id === id && idx;
    });

    const imgCurrent = imgs.filter(img => img !== false);
    if(imgCurrent[0] === 0){
      return data.imgs.length-3;
    }else if( imgCurrent[0] ===1){
      return data.imgs.length-2;
    }
    return imgCurrent[0];
  }

  const clickMenus = (menu) => { 
    ga.event({
      action: `solution slide menuClick-${menu.name}`,
    })
    if(currentSlide == data.imgs.length-2 && menu.id == 1) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-${360}px)`; 
      setCurrentSlide(1);
      setCurrentSlide(2);
    }
    if(currentSlide == 2 && menu.id == data.imgs.length-3) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-${((data.imgs.length-1)*240)+120}px)`; 
      setCurrentSlide(data.imgs.length-1);
      setCurrentSlide(data.imgs.length-2);
    }
    setCurrentSlide(getCurrent(menu.id));
  }

  const nextSlide = ()=> {
    ga.event({
      action: "solution slide next btn",
    })
    if (currentSlide == data.imgs.length-2) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-${360}px)`; 
      setCurrentSlide(1);
      setCurrentSlide(2);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    ga.event({
      action: "solution slide prev btn",
    })
    if ( currentSlide == 1) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-${((data.imgs.length-2)*240)+120}px)`; 
      setCurrentSlide(data.imgs.length-2);
      setCurrentSlide(data.imgs.length-3);
    } else {
      setCurrentSlide(currentSlide - 1);
    }  
  }

  useDidMountEffect(() => {
    slideRef.current.style.transition = 'all 0.2s ease-in-out';
  }, [currentSlide]);

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${(currentSlide*240)+120}px)`;
  }, [currentSlide, data]);

  return (
    <SolutionContainer bg={data.bg}>
      {data.title}
      <SolutionSubText dangerouslySetInnerHTML={{__html: data.text}}></SolutionSubText>
      <SolutionSlider>
        <SlideButtons >
          <SlideButton left onClick={prevSlide}/>
          <SlideButton right onClick={nextSlide} />
        </SlideButtons>
        <SolutionImgBox 
          ref={slideRef}
          onTouchStart={(e)=>setEventTouch(touchStart(e))}
          onTouchEnd={(e)=>touchEnd(e, eventTouch, prevSlide, nextSlide)}
          data={data.imgs.length}
        >
          {
            data.imgs.map((img,idx) => {
              return (
                <SolutionImg key={idx} alt={`solution-img-${idx}`} src={img.src} width={240} height={240} />
              )
            })
          }
        </SolutionImgBox>
      </SolutionSlider>
        <SolutionMenus>
          <Pointer ref={pointerRef} />
          <SolutionMenuBox scroll id={`scroll-${data.id}`}>
            <SolutionMenu ref={scrollRef} left={textLeft} width="true">
              {data.menus.map((menu) => {
                return (
                  <Menu 
                    pointerLeft={pointerLeft} 
                    setTextLeft={setTextLeft} 
                    ref={menu.id === data.imgs[currentSlide].id ? currentTextRef :  null} 
                    onClick={() => clickMenus(menu)} 
                    key={menu.id} 
                    select={menu.id === data.imgs[currentSlide].id} 
                    menu={menu.name} 
                    currentSlide={currentSlide}
                  />
                )}
              )}
            </SolutionMenu>
          </SolutionMenuBox>
        </SolutionMenus>
    </SolutionContainer>
  )
};