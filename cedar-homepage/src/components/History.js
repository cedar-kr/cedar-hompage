import styled from 'styled-components'
import Image from 'next/image'
import { Title, Text, LgText } from '../styles/PublicStyles'
import { Center, Wrapper, Row } from '../styles/Layout'
import React, { useEffect, useRef, useState } from 'react'
import { chunk } from '../utils/func'
import { history_data } from '../utils/data'
import useDidMountEffect from '../utils/useDidMountEffect'
import { Default, Mobile } from '../utils/media'
import gsap from 'gsap'
import { fadeInLeft, fadeInRight } from '../styles/keyframe'

const HistoryContainer = styled.section`
  height: 100%;
  padding: 168px 0px 120px;
  width: 100%;
  overflow: hidden;
  ${({theme})=>theme.tablet`
    // height: 768px;
    padding-top: 146px;
    padding-bottom: 91px;
  `};
  ${({theme})=>theme.mobile`
    padding: 30px 0px;
  `};
`;

const HistoryWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({theme})=>theme.mobile`
    display: flex;
    flex-direction: column;
  `};
`;

const HistoryTitle = styled(Title)`
  margin-top: 37px;
  animation : ${fadeInLeft} ease-in 470ms;

  ${({theme})=>theme.tablet`
    margin-top: 102px;
  `};
  ${({theme})=>theme.mobile`
    margin-top: 0px;
  `};
`;

const HistorySlideView = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  animation : ${fadeInRight} ease-in 940ms;
`;

const HistorySlide = styled.div`
  width: 100%;
  padding: 0px 50px;
`;

const SlideView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
`;

const SlideCenter = styled.div`
  max-width: 100%;
  /* overflow: hidden; */
  display: flex;
  justify-content:center;
  z-index:100;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
`;

const SlideItems = styled(Center)`
  padding: 0px 70px;
  align-items: normal;
  align-content: center;
  min-width: 100%;

  ${({theme})=>theme.mobile`
    padding: 0px 70px;
    align-content: center;
  `};
  opacity:${props=> props.test ==="t"?1:0};
`;

const TextPadding = styled(Text)`
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  padding: 10px 0px;
  font-size: calc(1.8rem + (100vw - 1024px) * ((25 - 18) / (1920 - 1024)));
  width: 100%;
  word-break: keep-all;

  ${({theme})=> theme.fk`
    font-size: 2.5rem;
  `}  
  ${({theme})=>theme.tablet`
    padding: 8px 0px;
    font-size: 1.8rem;
  `};
  ${({theme})=>theme.mobile`
    font-size: 1.4rem;
    padding: 5px 0px;
    text-align: center;
  `}

  opacity: 1;
  transition: opacity 350ms ease;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;

  :hover{
    letter-spacing: 0.2rem;
    font-weight:bold;
  }
`;

const CenterPadding = styled(Center)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  text-align: left;
  width: 100%;
  margin: 60px 0px;

  ${({theme})=>theme.mobile`
    align-items: center;
    margin: 30px 0px;
  `};

.list-item {
  display: flex;
  flex-direction: column;
  align-items: left;
  position: relative;
}

.list-item-image_wrapper {
  position: absolute;
  width: 400px;
  height: 250px;
  pointer-events: none;
  opacity: 0;
}

.list-item-image_inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.list-item-image_inner .list-item-image {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: auto;
  object-fit: cover;
}

.list-item-innertext {
  display: inline-block;
  transition: letter-spacing 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

.list:hover .list-item-text {
  opacity: 0.3;
}
.list:hover .list-item-text:hover {
  opacity: 0.8;
  font-weight: bold;
}

.list-item:hover .list-item-text {
  z-index: 100;
}
.list-item:hover .list-item-image_wrapper {
  z-index: 100;
}

.list-item-text {
  position: relative;
  display: block;
  color: #000;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 25px;
  padding: 10px;
}
`;

const YearText = styled(LgText)`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 3.5rem;
  font-weight: bold;
  box-shadow: inset 0 -20px 0 #B0FFE2;
  margin-bottom: 24px;

  ${({theme})=>theme.mobile`
    margin-bottom: 13px;
  `}
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: ${props => props.left && 16}px;
  right: ${props => props.right && 16}px;
  z-index: 100;
  background: #fff;
  border-radius: 50%;
  height: 8vmin;
  width:8vmin;
`;

const SlideButton = styled(Image)`
  height: 8vmin;
  width: 8vmin;
`;

export default function History() {
  const [data, setData] = useState(chunk(history_data,2));
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef();
  const textRef = useRef({});
  const imgRef = useRef({});

  const nextSlide = () => {
    if (currentSlide >= data.length-1) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-100%)`;
      setCurrentSlide(1);
      setCurrentSlide(2);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const prevSlide = () => {
    if (currentSlide == 0) {
      slideRef.current.style.transition = '0s';
      slideRef.current.style.transform = `translateX(-500%)`; 
      setCurrentSlide(5);
      setCurrentSlide(4);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  useDidMountEffect(() => {
    if(slideRef.current){
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
    }
  }, [currentSlide]);

  useEffect(() => { 
    if(slideRef.current){
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  useEffect(()=>{
    gsap.timeline()
    .set(".list", { autoAlpha: 1 })
    .from(".list-item-innertext", {
      delay: 1,
      duration: 0.85,
      yPercent: 125,
      stagger: 0.095,
      skewY: gsap.utils.wrap([-8, 8]),
      ease: "expo.out",
    })
    .set(".list", { pointerEvents: "all" });

    gsap.defaults({
      duration: 0.55,
      ease: "expo.out",
    });

    const menuItems = document.querySelectorAll(".list-item");

    menuItems.forEach((item) => {
      const imageWrapper = item.querySelector(".list-item-image_wrapper");
      let imageWrapperBounds = undefined;
      let itemBounds = undefined;

      const onMouseEnter = () => {
        itemBounds = item.getBoundingClientRect();
        imageWrapperBounds = imageWrapper.getBoundingClientRect();
        gsap.set(imageWrapper, { scale: 0.8, yPercent: 50, rotation: -15 });
        gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: -5, rotation: 0 });
      };
      const onMouseLeave = () => {
        itemBounds = undefined;
        imageWrapperBounds = undefined;
        gsap.to(imageWrapper, { opacity: 0, yPercent: -50, scale: 0.8, rotation: -15 });
      };
      const onMouseMove = ({ x, y }) => {
        let yOffset = itemBounds.top / imageWrapperBounds.height;
        yOffset = gsap.utils.mapRange(0, 1.5, 150, 150, yOffset);
        gsap.to(imageWrapper, {
          duration: 1.25,
          x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
          y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
        });
      };

      item.addEventListener("mouseenter", onMouseEnter);
      item.addEventListener("mouseleave", onMouseLeave);
      item.addEventListener("mousemove", onMouseMove);

      window.addEventListener("resize", () => {
        itemBounds = item.getBoundingClientRect();
      });
    });
  },[])

  useEffect(() => {
    if(data.length < 7) {
      setData(data.unshift([
        {
          year:"2013",
          projects:[
            {
              id:1,
              text: "주식회사 시더(Cedar Inc.) 법인 설립",
              img: '/webp/history/2013-1.webp',
            },
            {
              id:2,
              text: "부경대학교&서울과학기술대학교 계약 체결",
              img: '/webp/history/2013-2.webp',
            },
            {
              id:3,
              text:  "삼성전자 플랫폼 런칭 파트너 선정",
              img: '/webp/history/2013-3.webp',
            },
            {
              id:4,
              text: "제 11회 임베디드 경진대회 스마트챌린지 <br/> 휴맥스분야 최우수상 수상",
              img: '/webp/history/2013-4.webp',
            },
          ]
        }
      ]))
      setData(data.concat([[
        {
          year:"2021",
          projects:[
            {
              id:1,
              text:"청년친화강소기업 3년 연속 선정",
              img:'/webp/history/2021-1.webp',
            },
            {
              id:2,
              text: "미국 특허 등록",
              img:'/webp/history/2021-2.webp',
            },
            {
              id:3,
              text:"MODI GS인증 1등급 획득",
              img:'/webp/history/2021-3.webp',
            },
            {
              id:4,
              text:"세종큐비즈 키오스크 솔루션 개발",
              img:'/webp/history/2021-4.webp',
            },
          ]
        },{
          year:"2020",
          projects:[
            {
              id:1,
              text: "LGU+ 유심 키오스크 계약",
              img:'/webp/history/2020-1.webp',
            },
            {
              id:2,
              text:"서울지방경찰청 디지털 사이니지 공급",
              img:'/webp/history/2020-2.webp',
            },
            {
              id:3,
              text: "청년친화강소기업 첫 선정",
              img:'/webp/history/2020-3.webp',
            },
          ]
        }
      ]]));
    }
  },[data])
  
  return (
    <HistoryContainer >
      <HistoryWrapper>
        <HistoryTitle>
          시더의
          <br />
          즐거운 도전들을
          <br />
          소개합니다.
        </HistoryTitle>
        <Mobile>
          <SlideView>
            <ButtonBox left>
              <SlideButton
                onClick={prevSlide}
                priority
                src="/icons/h_left_arrow.png"
                height={45}
                width={45}
                alt="Left Arrow"
              />
            </ButtonBox>
            <SlideCenter>
              <SlideContainer 
                ref={slideRef}>
              {
                data.map((box,idx)=>{
                  return <SlideItems key={idx}>
                    { 
                      box.map((boxData,idx)=> {
                        return <CenterPadding key={idx} >
                          <YearText>{boxData && boxData.year}</YearText>
                          {
                            boxData.projects && boxData.projects.map((contnet,idx)=> {
                              return <TextPadding key={idx} dangerouslySetInnerHTML={{__html: contnet }}></TextPadding>
                            })
                          }
                        </CenterPadding>
                      })
                    }
                  </SlideItems>
                })
              }
              </SlideContainer>
            </SlideCenter>
            <ButtonBox right>
              <SlideButton
                onClick={nextSlide}
                priority
                src="/icons/h_right_arrow.png"
                height={45}
                width={45}
                alt="Right Arrow"
              />
            </ButtonBox>
          </SlideView>
        </Mobile>
        <Default>
          <HistorySlideView>
          <ButtonBox left>
            <SlideButton
              onClick={prevSlide}
              priority
              src="/icons/h_left_arrow.png"
              height={100}
              width={100}
              alt="Left Arrow"
            />
            </ButtonBox>
            <HistorySlide>
              <SlideCenter>
                <SlideContainer 
                  ref={slideRef}>
                {
                  data.map((box,idx)=>{
                    return <SlideItems key={idx} test={currentSlide ===idx ?"t":"f"}>
                      { 
                        box.map((boxData,idx)=> {
                          return <CenterPadding key={idx}>
                            <YearText>{boxData && boxData.year}</YearText>
                            {
                              boxData.projects && boxData.projects.map((content,idx)=> {
                                return <nav class="list" key={idx}>
                                <a className="list-item">
                                <div className="list-item-image_wrapper">
                                  <div className="list-item-image_inner">
                                    <img className="list-item-image"  src={content.img} alt={content.text} />
                                  </div>
                                </div>
                                <TextPadding className="list-item-innertext" dangerouslySetInnerHTML={{__html:content.text}}/>
                              </a>
                              </nav>
                              })
                            }
                          </CenterPadding>
                        })
                      }
                    </SlideItems>
                  })
                }
                </SlideContainer>
              </SlideCenter>
            </HistorySlide>
            <ButtonBox right >
              <SlideButton
                onClick={nextSlide}
                priority
                src="/icons/h_right_arrow.png"
                height={100}
                width={100}
                alt="Right Arrow"
              />
            </ButtonBox>
          </HistorySlideView>
        </Default>
      </HistoryWrapper>
    </HistoryContainer>
  )
};