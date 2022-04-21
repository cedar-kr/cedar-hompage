import styled from "styled-components";
import React from 'react';
import { solutionMobileData } from "../utils/data";
import Image from "next/image";

const SolutionWrapper = styled.div`
  height:${props => props.admin ? 711 : 841}px;
  width:100%;
  background:#F6F6F6;
  padding-top:40px;
  padding-left:16px;
  padding-right:16px;
`;

const SolutionBox = styled.div`
  display:flex;
  flex-direction:column;
`;

const SolutionNumber = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #2FCFBE;
  margin-bottom:5px;
`;

const SolutionTitle = styled.div`
  font-family:'SCDream6';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #222222;
  margin-bottom:20px;
`;

const SolutionContents = styled.div`
  display: grid;
	grid-template-columns: repeat(4,minmax(66px, 1fr));
  grid-template-rows: ${props=> props.rowHeight};
  gap:8px;
`;

const ContentBlock = styled.div`
  position:relative;
  background: #ffffff;
  border-radius: 30px;
  grid-column-end: span ${props=> props.grid};
  
  ${props => props.bg&&`
    background-image:url(${props.bg});
    background-repeat:no-repeat;
    background-size: cover;
    background-position: center center;
  `};
`;

const ContentBlockTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.04em;
  color: #232324;
  margin:30px;
  color: ${props=>props.color=="true"?'#fff':'#232324'};
  text-align:${props=> props.center ? 'center':'left'};
`;

const ContentBlockImg = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  top: ${props=> props.top}px;
  left: ${props=> props.left}px;
`;

export default function Solution(params) {

  return (
    solutionMobileData.map((data, id)=>{
      return (
        <SolutionWrapper admin={data.id==3} key={id}>
          <SolutionBox>
            <SolutionNumber>0{data.id}.</SolutionNumber>
            <SolutionTitle dangerouslySetInnerHTML={{__html:data.title}}></SolutionTitle>
            <SolutionContents rowHeight={data.rowHeight} >
                {
                  data.contents.map((content,idx)=>{
                    return <ContentBlock key={idx} bg={content.type === 'image' ? content.src : null} grid={content.grid}>
                    <ContentBlockTitle color={(content.type === 'image') && (content.name!=="키오스크") && (content.name!=="OTP 로그인") && (content.name!=="그룹관리")?"true":"false" } center={content.name=="키오스크"} dangerouslySetInnerHTML={{__html:content.name}}></ContentBlockTitle>
                    {content.type==='defualt' && 
                      <ContentBlockImg top={content.top} left={content.left}>
                        <Image src={content.src} width={content.imgWidth} height={content.imgHeight} alt={'Solution Type'} />
                      </ContentBlockImg>
                    }
                  </ContentBlock>
                  })
                }
            </SolutionContents>
          </SolutionBox>
        </SolutionWrapper>
      )
    })
  )
}
