import styled from "styled-components";
import React from 'react';
import { solutionData } from "../utils/data";
import Image from "next/image";

const SolutionWrapper = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;

  ${({theme})=>theme.pnt`
  `}
  ${({theme})=>theme.tablet`
      width:92.81%;
     margin:0px auto;
  `}

  ${({theme})=>theme.tnm`
    flex-direction:column;
    background-color:#F6F6F6;
  `}
`;

const SolutionInfo = styled.div`
  height: 100%;
  width: 30.416%;
  position:relative;
  left:10.417%;

  ${({theme})=>theme.pnt`
    left:10.417%;
  `}
  ${({theme})=>theme.tablet`
    left:34px;
  `}
  ${({theme})=>theme.tnm`
    width:100%;
    left:32px;
  `}
`;

const SolutionNumber = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-weight:700;
  font-size:4rem;
  line-height:59.2px;
  margin-top:80px;
  color: #2FCFBE;
  margin-bottom:33px;
  ${({theme})=>theme.pnt`
    font-size: 30px;
    line-height: 44px;
  `}
  ${({theme})=>theme.tablet`
    font-size: 30px;
    line-height: 44px;
  `}
  ${({theme})=>theme.tnm`
    font-size: 20px;
    line-height: 30px;
  `}
`;

const SolutionTitle = styled.div`
  font-family:'SCDream6';
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 60px;
  color:#222222;
  margin-bottom:30px;
  ${({theme})=>theme.pnt`
    font-size: 40px;
    line-height: 48px;
  `}
  ${({theme})=>theme.tablet`
    font-size: 40px;
    line-height: 48px;
  `}
  ${({theme})=>theme.tnm`
    font-size: 30px;
    line-height: 36px;
  `}
`;

const SolutionSubs = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  color: #222222;
  max-width:384px;
  width:60%;
  ${({theme})=>theme.pnt`
    font-size: 17px;
    line-height: 25px;
    width:201px;
  `}
  ${({theme})=>theme.tablet`
    font-size: 17px;
    line-height: 25px;
    width:201px;
  `}
  ${({theme})=>theme.tnm`
    font-size: 15px;
    line-height: 22px;
    width:100%;
  `}
`;

const SolutionContents = styled.div`
  background-color:#F6F6F6;
  width: 69.5%;
  display:flex;
  align-items:center;
  padding: 92px 0px;

  ${({theme})=>theme.pnt`
    width:66.69%;
    gap:12px;
    grid-template-rows: 200px 200px;
    padding: 92.8px 0px;
  `}
  ${({theme})=>theme.tablet`
    width:66.69%;
    gap:12px;
    grid-template-rows: 200px 200px;
    padding: 94px 0px;
  `}
  ${({theme})=>theme.tnm`
    width:100%;
    gap:8px;
    padding-right:0px;
    grid-template-rows: 150px 150px;
  `}
`;

const ContentBox = styled.div`
  margin-left:128px;
  height:616px;
  display: grid;
	grid-template-columns: repeat(8, minmax(60px,112px));
  grid-template-rows: 300px 300px;
  gap:16px;

  ${({theme})=>theme.pnt`
    margin-left:71px;
    gap:12px;
    grid-template-rows: 200px 200px;
  `}
  ${({theme})=>theme.tablet`
    margin-left:71px;
    gap:12px;
    grid-template-rows: 200px 200px;
  `}
    ${({theme})=>theme.tnm`
    margin: 0px 32px;
    gap:8px;
    grid-template-rows: 150px 150px;
  `}
`;

const ContentBlock = styled.div`
  position:relative;
  background: #ffffff;
  border-radius: 30px;
  grid-column-end: span ${props=> props.grid};
  
  ${props => props.bg&&`
    background-image:url(${props.bg});
    background-repeat:no-repeat;
    background-size:cover;
  `};
`;

const ContentBlockTitle = styled.div`
  font-family: 'NotoSansKR-Regular', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  letter-spacing: -0.04em;
  margin:50px;
  color: ${props=>props.color?'#fff':'#232324'};
  text-align:${props=> props.center ? 'center':'left'};
  ${({theme})=>theme.pnt`
    font-size: 24px;
    line-height: 36px;
  `}
  ${({theme})=>theme.tablet`
    font-size: 24px;
    line-height: 36px;
  `}
  ${({theme})=>theme.tnm`
    font-size: 21px;
    line-height: 31px;
  `}
`;

const ContentBlockImg = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  top: ${props=> props.top}px;
  left: ${props=> props.left}px;
`;

export default function Solution(params) {

  return (
    solutionData.map((data)=>{
      return (
        <SolutionWrapper>
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
                  <ContentBlockTitle color={content.type === 'image' && content.name!=="키오스크" && content.name!=="OTP 로그인"} center={content.name=="키오스크"} dangerouslySetInnerHTML={{__html:content.name}}></ContentBlockTitle>
                  {content.type==='defualt' && 
                    <ContentBlockImg top={content.top} left={content.left}>
                      <Image src={content.src} width={content.imgWidth} height={content.imgHeight} />
                    </ContentBlockImg>
                  }
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
