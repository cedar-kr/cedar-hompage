import styled from "styled-components";
import React, { useState } from 'react';
import Image from "next/image";
import { Wrapper } from "../styles/Layout";

const SolutionWrapper = styled(Wrapper)`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding: 75px 0px;

  ${({theme})=> theme.pnt`
    padding: 65px 0px;
  `}
  ${({theme})=> theme.tablet`
    padding: 65px 0px;
  `}
  ${({theme})=> theme.tnm`
    padding: 40px 0px;
  `}
`;

const SolutionBannerInfo = styled.div`
  font-family: 'NotoSansKR', sans-serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 44px;
  color: #2FCFBE;
  width: 100%;
`;

const SolutionBannerTitle= styled.div`
  font-family: 'NotoSansKR', sans-serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 44px;
  color: #2FCFBE;
  margin-bottom:30px;

  ${({theme})=> theme.pnt`
    font-size: calc(2.4rem + (100vw - 1240px) * ((30 - 24) / (1439 - 1240)));
    lline-height: 36px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 2.4rem;
    line-height: 36px;
  `}
  ${({theme})=> theme.tnm`
    font-size: calc(2.1rem + (100vw - 600px) * ((24 - 21) / (904 - 600)));
    line-height: 31px;
  `}
`;

const SolutionBannerSubs= styled.div`
  font-family: 'NotoSansKR', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  color: #222222;
  width: 78%;

  ${({theme})=> theme.pnt`
    font-size: calc(1.7rem + (100vw - 1240px) * ((20 - 17) / (1439 - 1240)));
    lline-height: 25px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 1.7rem;
    line-height: 25px;
  `}
  ${({theme})=> theme.tnm`
    font-size: calc(1.5rem + (100vw - 600px) * ((17 - 15) / (904 - 600)));
    line-height: 22px;
  `}
`;

const SolutionBannerImage = styled.div`
  ${({theme})=> theme.pnt`
    // width: 50%
  `}
  ${({theme})=> theme.tablet`
    
  `}
  ${({theme})=> theme.tnm`
    
  `}
`;

export default function Solution(params) {

  return (
    <SolutionWrapper>
      <SolutionBannerInfo>
        <SolutionBannerTitle>New Digital Signage Solution</SolutionBannerTitle>
        <SolutionBannerSubs>자사는 다양한 모듈 연동과 기술 확대로 신개념 디지털 사이니지 생태계를 구축합니다.</SolutionBannerSubs>
      </SolutionBannerInfo>
      <SolutionBannerImage>
        <Image src={'/imgs/solutions/Banner.png'} height={150} width={624}/>
      </SolutionBannerImage>
    </SolutionWrapper>
  )
}
