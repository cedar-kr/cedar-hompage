import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { solutionPkMobileData } from '../utils/data';
import Image from 'next/image';
import SolutionModal from '../components/modal';
import * as ga from '../utils/ga';

const SolutionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
`;

const SolutionPkTitle = styled.div`
  font-family: 'S-CoreDream-6Bold';
  font-weight: bold;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #222222;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const SolutionPkTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SolutionPkLocal = styled.div`
  margin-bottom: 10px;
`;

const SolutionPkName = styled.div`
  background: #19b4a2;
  mix-blend-mode: normal;
  border-radius: 30px 30px 0px 0px;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  height: 40px;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;

  span {
    width: 100%;
  }
`;

const SolutionPkInfo = styled.div`
  background: #ffffff;
  mix-blend-mode: normal;
  border: 1px solid #e0e0e0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.size == 'MODI Cloud' ? 218 : 160)}px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const SolutionPkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SolutionPkType = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  color: #222222;
  margin-top: 10px;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.04em;
  margin-bottom: 8px;
`;

const SolutionPkInfoSubs = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #000000;
  text-align: center;
`;

const SolutionPkDatas = styled.div`
  display: flex;
  flex-direction: column;
`;

const SolutionPkDetailButton = styled.div`
  background: #ffffff;
  border: 1px solid #19b4a2;
  box-sizing: border-box;
  border-radius: 20px;
  height: 38px;
  width: 128px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  cursor: pointer;
`;

const DetailText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #19b4a2;
  margin-right: 10px;
`;

export default function SolutionPackage(params) {
  const [modal, setModal] = useState({
    isOpen: false,
    name: '',
  });

  const modalOpen = (name) => {
    ga.event({
      action: 'Click',
      category: 'SolutionPk',
      label: `${name}-Modal`,
    });
    setModal({
      isOpen: true,
      name,
    });
  };

  const closeModal = () => {
    setModal({ open: false, name: '' });
  };

  useEffect(() => {
    document.body.style.overflow = modal.isOpen ? 'hidden' : null;
    document.body.style.height = modal.isOpen ? '100%' : null;
    document.body.style.touchAction = modal.isOpen ? 'none' : null;
  }, [modal.isOpen]);

  return (
    <SolutionWrapper>
      {modal.isOpen && <SolutionModal closeModal={closeModal} name={modal.name} />}
      <SolutionPkTitle>솔루션 패키지</SolutionPkTitle>
      <SolutionPkTable>
        {solutionPkMobileData.map((data, index) => {
          return (
            <SolutionPkLocal key={index}>
              <SolutionPkName>
                <span>{data.name}</span>
              </SolutionPkName>
              <SolutionPkDatas>
                {data.details.map((detail, idx) => {
                  return (
                    <SolutionPkInfo key={idx} size={data.name}>
                      <SolutionPkIcon>
                        <Image src={detail.icon.src} height={detail.icon.height} width={detail.icon.width} alt={'Solution Package Icon'} />
                        <SolutionPkType>{detail.type}</SolutionPkType>
                      </SolutionPkIcon>
                      <SolutionPkInfoSubs>{detail.subs}</SolutionPkInfoSubs>
                      {data.name === 'MODI Cloud' && (
                        <SolutionPkDetailButton onClick={() => modalOpen(detail.type)}>
                          <DetailText>자세히 보기</DetailText>
                          <Image src={'/icons/greenArrow.png'} height={8.33} width={5} alt={'Read More Icon'} />
                        </SolutionPkDetailButton>
                      )}
                    </SolutionPkInfo>
                  );
                })}
              </SolutionPkDatas>
            </SolutionPkLocal>
          );
        })}
      </SolutionPkTable>
    </SolutionWrapper>
  );
}
