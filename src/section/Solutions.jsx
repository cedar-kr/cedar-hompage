import styled from "styled-components";
import React from 'react';
import { solutionData } from "../utils/data";
import Image from "next/image";
import { Title } from '../styles/fontStyles';

const SolutionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100%;
  ${({theme})=>theme.fnp`
    justify-content:center;
  `}

  ${({theme})=>theme.tnm`
    flex-direction: column;
    background-color: #F6F6F6;
  `}
`;

const SolutionInfo = styled.div`
  height: 100%;
  position: relative;
  margin-left: 200px;
  ${({theme})=>theme.pc`
    padding-right:10px;

  `}

  ${({theme})=>theme.fnp`
    width: 60%;
    margin: 0px;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    padding-right:10px;
  `}
  ${({theme})=>theme.pnt`
    width:30%;
  `}
  ${({theme})=>theme.tablet`
    margin-left: 34px;
  `}
  ${({theme})=>theme.tnm`
    margin-left: 32px;
  `}
`;

const SolutionNumber = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 4rem;
  line-height: 60px;
  margin-top: 80px;
  color: #2FCFBE;
  margin-bottom: 33px;
  ${({theme})=>theme.fnp`
   width: 384px;
  `}

  ${({theme})=>theme.pnt`
    font-size: calc(3rem + (100vw - 1240px) * ((40 - 30) / (1439 - 1240)));
    line-height: 44px;
  `}
  ${({theme})=>theme.tablet`
    font-size: 3rem;
    line-height: 44px;
  `}
  ${({theme})=>theme.tnm`
    font-size: calc(2rem + (100vw - 600px) * ((30 - 20) / (904 - 600)));
    line-height: 30px;
  `}
`;

const SolutionTitle = styled(Title)`
  color:#222222;
  margin-bottom: 30px;
  text-align:left;
  ${({theme})=>theme.fnp`
    width: 384px;
  `}
`;

const SolutionSubs = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  color: #222222;
  max-width: 384px;

  ${({theme})=>theme.fnp`
    width: 384px;
  `}

  ${({theme})=>theme.pnt`
    font-size: calc(1.7rem + (100vw - 1240px) * ((20 - 17) / (1439 - 1240)));
    line-height: 25px;
    width: 201px;
  `}
  ${({theme})=>theme.tablet`
    font-size: 1.7rem;
    line-height: 25px;
    width: 201px;
  `}
  ${({theme})=>theme.tnm`
    font-size: calc(1.5rem + (100vw - 600px) * ((17 - 15) / (904 - 600)));
    line-height: 22px;
    width:100%;
  `}
`;

const SolutionContents = styled.div`
  background-color:#F6F6F6;
  width: 100%;
  display:flex;
  align-items:center;
  padding: 92px 0px;

  ${({theme})=>theme.pnt`
    gap:12px;
    padding: 93px 0px;
  `}
  ${({theme})=>theme.tablet`
    gap:12px;
    padding: 94px 0px;
  `}
  ${({theme})=>theme.tnm`
    gap:8px;
    padding: 50px 0px;
  `}
`;

const ContentBox = styled.div`
  width: calc(100% - 328px);
  margin-left: 128px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 16px;

  ${({theme})=>theme.fnp`
    width: 1105px;
  `}
  ${({theme})=>theme.pnt`
    width: calc(100% - 270px);
    gap: 12px;
    margin-left: 70px;
  `}
  ${({theme})=>theme.tablet`
    gap: 12px;
    margin-left: 70px;
    width: calc(100% - 116px);
  `}
    ${({theme})=>theme.tnm`
    margin: 0px 32px;
    width: 100%;
    gap: 8px;
  `}
`;

const ContentBlock = styled.div`
  position:relative;
  border-radius: 30px;
  background: ${props=> props.type === 'image' ? content.src : '#ffffff'};
  grid-column-end: span ${props=> props.grid};
  
  ${props => props.bg&&`
    background-image:url(${props.bg});
    background-repeat:no-repeat;
    background-size:cover;
  `};
`;

const ContentBlockTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 44px;
  letter-spacing: -0.04em;
  margin: 50px;
  color: ${props=>props.color=="true"?'#fff':'#232324'};
  text-align:${props=> props.center ? 'center':'left'};
  position: absolute;
  top: 0;
  left: 0;

  ${({theme})=>theme.pnt`
    font-size: calc(2.4rem + (100vw - 1240px) * ((30 - 24) / (1439 - 1240)));
    line-height: 36px;
    margin: 30px;
  `}
  ${({theme})=>theme.tablet`
    font-size: 2.4rem;
    line-height: 36px;
    margin: 30px;
  `}
  ${({theme})=>theme.tnm`
    font-size: calc(2.1rem + (100vw - 600px) * ((24 - 21) / (904 - 600)));
    line-height: 31px;
    margin: 20px;
  `}
`;

const ContentBlockImg = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${props=> props.top}px;
  left: ${props=> props.left}px;
`;

export default function Solution() {

  return (
    solutionData.map((data, index)=>{
      return (
        <SolutionWrapper key={index}>
          <SolutionInfo>
            <SolutionNumber>0{data.id}.</SolutionNumber>
            <SolutionTitle>{data.title}</SolutionTitle>
            <SolutionSubs>{data.subs}</SolutionSubs>
          </SolutionInfo>
          <SolutionContents>
            <ContentBox>
              {
                data.contents.map((content,idx)=>{
                  return <ContentBlock key={idx} bg={content.type === 'image' ? content.src : null} grid={content.grid}>
                  {content.type==='defualt' && 
                    <ContentBlockImg top={content.top} left={content.left}>
                      <Image src={content.src} width={content.imgWidth} height={content.imgHeight} alt={'Solution Type'} />
                    </ContentBlockImg>
                  }
                   <ContentBlockTitle color={(content.type === 'image') && (content.name!=="키오스크") && (content.name!=="OTP 로그인")?"true":"false"} center={content.name=="키오스크"} dangerouslySetInnerHTML={{__html:content.name}}></ContentBlockTitle>
                </ContentBlock>
                })
              }
            </ContentBox>
          </SolutionContents>
        </SolutionWrapper>
      )
    })
  )
}
