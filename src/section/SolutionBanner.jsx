import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import { Wrapper } from '../styles/Layout';

const SolutionWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 75px 0px;

  ${({ theme }) => theme.pnt`
    padding: 65px 0px;
  `}
  ${({ theme }) => theme.tablet`
    padding: 65px 0px;
  `}
  ${({ theme }) => theme.tnm`
    padding: 40px 0px;
  `}
`;

const SolutionBannerInfo = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 44px;
  color: #2fcfbe;
  width: 100%;
`;

const SolutionBannerTitle = styled.h6`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 44px;
  color: #2fcfbe;
  margin-bottom: 30px;

  ${({ theme }) => theme.pnt`
    font-size: calc(2.4rem + (100vw - 1240px) * ((30 - 24) / (1439 - 1240)));
    lline-height: 36px;
  `}
  ${({ theme }) => theme.tablet`
    font-size: 2.4rem;
    line-height: 36px;
  `}
  ${({ theme }) => theme.tnm`
    font-size: calc(2.1rem + (100vw - 600px) * ((24 - 21) / (904 - 600)));
    line-height: 31px;
  `}
`;

const SolutionBannerSubs = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  color: #222222;
  width: 78%;

  ${({ theme }) => theme.pnt`
    font-size: calc(1.7rem + (100vw - 1240px) * ((20 - 17) / (1439 - 1240)));
    lline-height: 25px;
  `}
  ${({ theme }) => theme.tablet`
    font-size: 1.7rem;
    line-height: 25px;
  `}
  ${({ theme }) => theme.tnm`
    font-size: calc(1.5rem + (100vw - 600px) * ((17 - 15) / (904 - 600)));
    line-height: 22px;
  `}
`;

export default function Solution() {
  return (
    <SolutionWrapper>
      <SolutionBannerInfo>
        <SolutionBannerTitle>New Digital Signage Solution</SolutionBannerTitle>
        <SolutionBannerSubs>자사는 다양한 모듈 연동과 기술 확대로 신개념 디지털 사이니지 생태계를 구축합니다.</SolutionBannerSubs>
      </SolutionBannerInfo>
      <div>
        <Image src={'/imgs/solutions/Banner.png'} height={150} width={624} alt={'Solution Banner'} />
      </div>
    </SolutionWrapper>
  );
}
