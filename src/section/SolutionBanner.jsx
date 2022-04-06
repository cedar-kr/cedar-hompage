import styled from "styled-components";
import { Wrapper } from "../styles/PublicStyles";
import React, { useState } from 'react';
import Image from "next/image";

const SolutionWrapper = styled(Wrapper)`
  height:300px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`;

const SolutionBannerInfo = styled.div`
   font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 44px;
  color: #2FCFBE;
`;

const SolutionBannerTitle= styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 44px;
  color: #2FCFBE;
  margin-bottom:30px;
`;

const SolutionBannerSubs= styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
`;

const SolutionBannerImage = styled.div``;

export default function Solution(params) {

  return (
    <SolutionWrapper width={80}>
      <SolutionBannerInfo>
        <SolutionBannerTitle>New Digital Signage Solution</SolutionBannerTitle>
        <SolutionBannerSubs>자사는 다양한 모듈 연동과 기술 확대로 신개념 디지털 사이니지 생태계를 구축합니다.</SolutionBannerSubs>
      </SolutionBannerInfo>
      <SolutionBannerImage>
        <Image src={'/imgs/solutions/Banner.jpg'} height={150} width={624}/>
      </SolutionBannerImage>
    </SolutionWrapper>
  )
}
