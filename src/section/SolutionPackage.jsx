import styled from "styled-components";
import React from 'react';
import { solutionPkData } from "../utils/data";
import Image from "next/image";
import { Wrapper } from '../styles/Layout';
import { useMediaQuery } from "react-responsive";
import { Title } from "../styles/fontStyles";

const SolutionWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;

  ${({theme})=> theme.tablet`
    padding: 40px 0px;
  `}
  ${({theme})=> theme.tnm`
    padding: 40px 0px;
  `}
`;

const SolutionPkTitle = styled(Title)`
  font-weight: bold;
  color: #222222;
  text-align: center;
`;

const SolutionPkSubs = styled.div`
  font-family: 'NotoSansKR-Regular';
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin-top: 30px;
  margin-bottom: 54px;

  ${({theme})=> theme.pnt`
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: calc(1.7rem + (100vw - 1240px) * ((20 - 17) / (1439 - 1240)));
    line-height: 25px;
  `}
  ${({theme})=> theme.tablet`
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 1.7rem;
    line-height: 25px;
  `}
  ${({theme})=> theme.tnm`
    margin-top: 10px;
    margin-bottom: 40px;
    font-size: calc(1.5rem + (100vw - 600px) * ((17 - 15) / (904 - 600)));
    line-height: 22px;
  `}
`;

const SolutionPkSubsBox = styled.div`
  background: #F6F6F6;
  height:${ props => props.name =="true" ? '350px' : '100%'};
  ${({theme})=> theme.tnm`
    padding: 10px 2px;
  `}
`;

const SolutionPkTable = styled.div`
  display: flex;
  flex-direction: row;
  word-break: keep-all;
  width: 100%;
`;

const SolutionPkLocal = styled.div`
  width: ${props=> props.id === 1 ? 25 : 75}%;
  margin: 0px 8px;

  ${({theme})=> theme.pnt`
    margin: 0px 6px;
  `}
  ${({theme})=> theme.tablet`
    margin: 0px 6px;
  `}
  ${({theme})=> theme.tnm`
    margin: 0px 4px;
  `}
`;

const SolutionPkName = styled.div`
  background: #19B4A2;
  mix-blend-mode: normal;
  border-radius: 30px 30px 0px 0px;
  height: 79px;
  color:#fff;
  font-family: 'NotoSansKR-Bold'; 
  font-size: 3rem;
  margin-bottom: 5px;
  display: flex;
  text-align: center;
  align-items: center;
  span {
    width:100%;
  }

  ${({theme})=> theme.pnt`
    height: 60px;
    font-size: calc(2.2rem + (100vw - 1240px) * ((30 - 22) / (1439 - 1240)));
    line-height: 33px;
    letter-spacing: -0.04em;
    margin-bottom: 5px;
  `}
  ${({theme})=> theme.tablet`
    height: 60px;
    font-size: 2.2rem;
    line-height: 33px;
    letter-spacing: -0.04em;
    margin-bottom: 5px;
  `}
  ${({theme})=> theme.tnm`
    height: 50px;
    font-size: 2.1rem;
    line-height: 31px;
    letter-spacing: -0.04em;
    margin-bottom: 5px;
  `}
`;

const SolutionPkInfo = styled.div`
  background: #FFFFFF;
  mix-blend-mode: normal;
  border: 1px solid #E0E0E0;
  margin-bottom: 17px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: ${props=> props.id === 1 ? 0 : 16}px;
  &:last-child {
    margin-right: 0px;
  }

  ${({theme})=> theme.pnt`
    margin-right: ${props=> props.id === 1 ? 0 : 12}px;
    margin-bottom: 17px;
  `}
  ${({theme})=> theme.tablet`
    margin-right: ${props=> props.id === 1 ? 0 : 12}px;
    margin-bottom: 17px;
  `}
  ${({theme})=> theme.tnm`
    margin-right: ${props=> props.id === 1 ? 0 : 8}px;
    margin-bottom: 8px;
  `}
`;

const SolutionPkIcon = styled.div`
  display: flex;
  height:${props => props.type=="true" ? 181 : 210 }px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;

  ${({theme})=> theme.pnt`
    padding: 20px;
  `}
  ${({theme})=> theme.tablet`
    padding: 20px;
  `}
  ${({theme})=> theme.tnm`
    height: 116px;
    padding: 10px;
  `}
`;

const SolutionPkType = styled.div`
  font-family: 'NotoSansKR-Bold';
  font-weight: 700;
  font-size: 3rem;
  line-height: 44px;
  text-align: center;
  color: #222222;
  margin-top: 10px;

  ${({theme})=> theme.pnt`
    font-size: font-size: calc(2.4rem + (100vw - 1240px) * ((30 - 24) / (1439 - 1240)))
    line-height: 36px;
    letter-spacing: -0.04em;
  `}
  ${({theme})=> theme.tablet`
    font-size: 2.4rem;
    line-height: 36px;
    letter-spacing: -0.04em;
  `}
  ${({theme})=> theme.tnm`
    font-size: calc(2.1rem + (100vw - 600px) * ((24 - 21) / (904 - 600)));
    line-height: 31px;
    letter-spacing: -0.04em;
  `}
`;

const SolutionPkInfoSubs= styled.div`
  height: 50px; 
  mix-blend-mode: normal;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items:center;
  font-family: ${props=> props.point ? 'NotoSansKR-Medium;':'NotoSansKR-Regular'};
  font-style: normal;
  font-weight: ${props=> props.point ? 'medium' :400};
  font-size: 1.8rem;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props=> props.point ? '#19B4A2;':'#222222'};

  ${({theme})=> theme.pnt`
    font-size: calc(1.5rem + (100vw - 1240px) * ((18 - 15) / (1439 - 1240)));
    line-height: 22px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 1.5rem;
    line-height: 22px;
  `}
  ${({theme})=> theme.tnm`
    font-size: calc(1.2rem + (100vw - 600px) * ((15 - 12) / (904 - 600)));
    line-height: 18px;
    height: 36px;
  `}
`;

const SolutionPkDatas = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
`;

const CheckIcon = styled.div`
  margin-left:10px;
`;

export default function SolutionPackage(params) {
  const isTnm = useMediaQuery({ minWidth: 600, maxWidth: 904 })

  return (
    <SolutionWrapper>
      <SolutionPkTitle>솔루션 패키지</SolutionPkTitle>
      <SolutionPkSubs>자사의 디지털사이니지 솔루션은 외부 인터넷 방식인 클라우드 라인과<br/>
        인터넷이 없는 환경의 로컬 라인으로 나누어집니다.</SolutionPkSubs>
      <SolutionPkTable>
        { solutionPkData.map((data,index)=>{
          return (
            <SolutionPkLocal key={index} id={data.id}>
              <SolutionPkName ><span>{data.name}</span></SolutionPkName>
              <SolutionPkDatas direction={data.name=='MODI Local'?'column':'row'}>
                {
                  data.details.map((detail,idx)=>{
                   return <SolutionPkInfo key={idx}>
                      <SolutionPkIcon type={detail.type == 'Intra'?"true":"false"}>
                        <Image src={detail.icon.src} height={detail.icon.height} width={detail.icon.width}/>
                        <SolutionPkType>
                          {detail.type}
                        </SolutionPkType>
                      </SolutionPkIcon>
                      <SolutionPkSubsBox height={data.name=='MODI Local'?"true":"false"}>
                        {
                          detail.subs.map((subs,id)=>{
                            return (
                              <SolutionPkInfoSubs key={id} point={subs.point}>
                                {subs.text}
                                { !isTnm && <CheckIcon>
                                    <Image src={'/icons/check.svg'} width={15} height={14.72}/>
                                  </CheckIcon>
                                }
                              </SolutionPkInfoSubs>
                            )
                          })
                        }
                      </SolutionPkSubsBox>
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
