import styled from "styled-components";
import { Wrapper } from "../styles/PublicStyles";
import React from 'react';
import { solutionData } from "../utils/data";
import Image from "next/image";

const SolutionWrapper = styled(Wrapper)`
  height:800px;
  display:flex;
  flex-direction:row;
`;

const SolutionInfo = styled.div`
  height: 100%;
  width: 30.416%;
  position:relative;
  left:10.417%;
`;

const SolutionNumber = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight:700;
  font-size:4rem;
  line-height:59.2px;
  margin-top:80px;
  color: #2FCFBE;
  margin-bottom:33px;
`;

const SolutionTitle = styled.div`
  font-family:'SCDream6';
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 60px;
  color:#222222;
  margin-bottom:30px;
`;

const SolutionSubs = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  color: #222222;
`;

const SolutionContents = styled.div`
  background-color:#F6F6F6;
  width: 69.5%;
  padding-right:200px;
  display:flex;
  align-items:center;
`;

const ContentBox = styled.div`
  margin-left:128px;
  height:616px;
  display: grid;
	grid-template-columns: repeat(8, 112px);
  grid-template-rows: 300px 300px;
  gap:16px;
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
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  letter-spacing: -0.04em;
  margin:50px;
  color: ${props=>props.color?'#fff':'#232324'};
  text-align:${props=> props.center ? 'center':'left'};
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
            <SolutionSubs dangerouslySetInnerHTML={{__html:data.subs}}></SolutionSubs>
          </SolutionInfo>
          <SolutionContents>
            <ContentBox>
              {
                data.contents.map((content)=>{
                  return <ContentBlock bg={content.type === 'image' ? content.src : null} grid={content.grid}>
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
