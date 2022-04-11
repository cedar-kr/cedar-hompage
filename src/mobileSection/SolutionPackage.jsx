import styled from "styled-components";
import React from 'react';
import { solutionPkData, solutionPkMobileData } from "../utils/data";
import Image from "next/image";
import { Wrapper } from '../styles/Layout';

const SolutionWrapper = styled(Wrapper)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const SolutionPkTitle = styled.div`
  font-family:'SCDream6';
  font-weight:bold;
  text-align:center;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #222222;
  margin-top:40px;
  margin-bottom:20px;
`;

const SolutionPkTable = styled.div`
  display:flex;
  flex-direction:column;
  width:91.1%;
`;

const SolutionPkLocal = styled.div`
  margin-bottom:10px;
`;

const SolutionPkName = styled.div`
  background: #19B4A2;
  mix-blend-mode: normal;
  border-radius: 30px 30px 0px 0px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: 'NotoSansKR-Bold'; 
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-bottom:5px;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;
  height:40px;
`;

const SolutionPkInfo = styled.div`
  background: #FFFFFF;
  mix-blend-mode: normal;
  border: 1px solid #E0E0E0;
  margin-bottom: 10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:${props=> props.size == "MODI Cloud"? 218 : 160 }px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const SolutionPkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;
`;

const SolutionPkType = styled.div`
  font-family: 'NotoSansKR-Bold';
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

const SolutionPkInfoSubs= styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #000000;
  text-align:center;
`;

const SolutionPkDatas = styled.div`
  display: flex;
  flex-direction: column;
`;

const SolutionPkDetailButton = styled.div`
  background: #FFFFFF;
  border: 1px solid #19B4A2;
  box-sizing: border-box;
  border-radius: 20px;
  height: 38px;
  width: 128px;
  margin-top:20px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  padding: 8px 0px;
  cursor: pointer;
`;

const DetailText = styled.div`
  font-family: 'NotoSansKR-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #19B4A2;
  margin-right:10px;
`;

export default function SolutionPackage(params) {

  return (
    <SolutionWrapper>
      <SolutionPkTitle>솔루션 패키지</SolutionPkTitle>
      <SolutionPkTable>
        { solutionPkMobileData.map((data,index)=>{
          return (
            <SolutionPkLocal key={index}>
              <SolutionPkName>{data.name}</SolutionPkName>
              <SolutionPkDatas>
                {
                  data.details.map((detail,idx)=>{
                   return <SolutionPkInfo key={idx} size={data.name}>
                      <SolutionPkIcon>
                        <Image src={detail.icon.src} height={detail.icon.height} width={detail.icon.width}/>
                        <SolutionPkType>
                          {detail.type}
                        </SolutionPkType>
                      </SolutionPkIcon>
                      <SolutionPkInfoSubs>
                        {detail.subs}
                      </SolutionPkInfoSubs>
                      {
                        data.name==='MODI Cloud' && 
                          <SolutionPkDetailButton>
                            <DetailText>자세히 보기</DetailText>
                            <Image src={'/icons/greenArrow.png'} height={8.33} width={5}/>
                          </SolutionPkDetailButton>
                      }
                    </SolutionPkInfo>
                  })
                }
              </SolutionPkDatas>
            </SolutionPkLocal>
            )
          }
        )}
      </SolutionPkTable>
    </SolutionWrapper>
  )
}
