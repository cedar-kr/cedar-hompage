import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import { touchEnd, touchStart } from '../utils/func';
import useDidMountEffect from '../utils/useDidMountEffect';
import Image from 'next/image';
import { NSText } from '../styles/PublicStyles';

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

const SolutionImgBox = styled.div`
  display: flex;
  flex-direction:row;
  width: ${props=> 248 * props.data}px;
  position: relative;
  left: 50%;
  margin-bottom: 36px;
`;

const SolutionImg = styled(Image)`
  width: 248px;
  height: 248px;
  margin: 0 8px;
`;

const SolutionSlider = styled.div`
  overflow: hidden;
`;

const SolutionMenus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom:40px;
`;

const SolutionMenuBox = styled.div`
  white-space: nowrap;
  width: 100%;
  padding: 0 10px;
`;

const Pointer = styled.div`
  width: 1px;
  height: 1px;
  position: absolute;
  z-index: 1;
`;

const SolutionMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
`;

const MenuText = styled.div`
  width: max-content;
  color:${props => props.select? '#d74c4b' : '#4f4f4f'};
  font-family: NotoSansKR;
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
    if (ref?.current) {
      props.setTextLeft((props.pointerLeft - ref.current.offsetLeft) - (ref.current.offsetWidth / 2));
    }
  }, [ref, props]);

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
  const [ currentSlide, setCurrentSlide ] = useState(2);
  const [ eventTouch , setEventTouch ] = useState({ x: '', y: '' });
  const [textLeft, setTextLeft] = useState(0);
  const [pointerLeft, setPointerLeft] = useState(0);

  useEffect(() => {
    if (pointerRef?.current) {
      setPointerLeft(pointerRef.current.offsetLeft);
    }
  }, [pointerRef]);

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

  const clickMenus = (id) => { 
    if(currentSlide == data.imgs.length-2 && id == 1){
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-${(100/data.imgs.length)*(1.5)}%)`; 
      setCurrentSlide(1);
      setCurrentSlide(2);
    }
    if(currentSlide == 2 && id == data.imgs.length-3){
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-${(100/data.imgs.length)*(data.imgs.length-1 + 0.5)}%)`; 
      setCurrentSlide(data.imgs.length-1);
      setCurrentSlide(data.imgs.length-2);
    }
    setCurrentSlide(getCurrent(id));
  }

  const nextSlide = ()=> {
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
    slideRef.current.style.transform = `translateX(-${(100/data.imgs.length)*(currentSlide + 0.5)}%)`;
  },[currentSlide, data]);

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
                <SolutionImg key={idx} alt={`solution-img-${idx}`} src={img.src} width={248} height={248} />
              )
            })
          }
        </SolutionImgBox>
      </SolutionSlider>
        <SolutionMenus>
          <Pointer ref={pointerRef} />
          <SolutionMenuBox>
            <SolutionMenu>
              {data.menus.map((menu)=> {
                return (
                  <Menu 
                    left={textLeft} 
                    pointerLeft={pointerLeft} 
                    setTextLeft={setTextLeft} 
                    ref={menu.id === data.imgs[currentSlide].id ? currentTextRef :  null} 
                    onClick={() => clickMenus(menu.id)} 
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