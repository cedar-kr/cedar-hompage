import styled from "styled-components";
import React from 'react';
import { solutionPkData } from "../utils/data";
import Image from "next/image";
import { Wrapper } from '../styles/Layout';
import { useMediaQuery } from "react-responsive";

const SolutionWrapper = styled(Wrapper)`
  height:1017px;
  width:80%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin: 0px auto;

  ${({theme})=> theme.pnt`
    height: 802px;
    width:80%;
  `}
  ${({theme})=> theme.tablet`
    height: 802px;
    width:92.81%;
  `}
  ${({theme})=> theme.tnm`
    height: 607px;
    width:92.81%;
  `}
`;

const SolutionPkTitle = styled.div`
  font-family:'SCDream6';
  font-size:5rem;
  font-weight:bold;
  color:#222222;
  text-align:center;
  line-height: 60px;
  ${({theme})=> theme.pnt`
    font-size: 40px;
    line-height: 48px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 40px;
    line-height: 48px;
  `}
  ${({theme})=> theme.tnm`
    font-size: 30px;
    line-height: 36px;
  `}
`;

const SolutionPkSubs = styled.div`
  font-family: 'NotoSansKR-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin-top: 30px;
  margin-bottom: 54px;
  ${({theme})=> theme.pnt`
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 17px;
    line-height: 25px;
  `}
  ${({theme})=> theme.tablet`
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 17px;
    line-height: 25px;
  `}
  ${({theme})=> theme.tnm`
    margin-top: 10px;
    margin-bottom: 40px;
    font-size: 15px;
    line-height: 22px;
  `}
`;

const SolutionPkSubsBox = styled.div`
  background: #F6F6F6;
  height:${ props => props.name ? '350px' : '100%'};
`;

const SolutionPkTable = styled.div`
  display:flex;
  flex-direction:row;
`;

const SolutionPkLocal = styled.div``;

const SolutionPkName = styled.div`
  background: #19B4A2;
  mix-blend-mode: normal;
  border-radius: 30px 30px 0px 0px;
  width: ${props=> props.width ? 368 : 1136}px;
  height: 79px;
  color:#fff;
  font-family: 'NotoSansKR-Bold'; 
  font-size:3rem;
  margin-bottom:5px;
  margin-right:16px;
  display:flex;
  text-align:center;
  align-items:center;
  span{
    width:100%;
  }

  ${({theme})=> theme.pnt`
    width: ${props=> props.width ? 201 : 627}px;
    height: 60px;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: -0.04em;
  `}
  ${({theme})=> theme.tablet`
    width: ${props=> props.width ? 201 : 627}px;
    height: 60px;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: -0.04em;
  `}
  ${({theme})=> theme.tnm`
    width: ${props=> props.width ? 128 : 399}px;
    height: 50px;
    font-size: 21px;
    line-height: 31px;
    letter-spacing: -0.04em;
  `}
`;

const SolutionPkInfo = styled.div`
  background: #FFFFFF;
  mix-blend-mode: normal;
  border: 1px solid #E0E0E0;
  margin-bottom: 17px;
  margin-right:16px;
  display:flex;
  flex-direction:column;
  width: 368px;

  ${({theme})=> theme.pnt`
    width: 201px;
    margin-right:12px;
  `}
  ${({theme})=> theme.tablet`
    width: 201px;
    margin-right:12px;
  `}
  ${({theme})=> theme.tnm`
    width: 128px;
    margin-right:8px;
  `}
`;

const SolutionPkIcon = styled.div`
  display:flex;
  height:${props => props.type ? 181 : 210 }px;
  width:100%;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding:30px;

  ${({theme})=> theme.pnt`

  `}
  ${({theme})=> theme.tablet`

  `}
  ${({theme})=> theme.tnm`
    height:116px;
  `}
`;

const SolutionPkType = styled.div`
  font-family: 'NotoSansKR-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  text-align: center;
  color: #222222;
  margin-top:10px;

  ${({theme})=> theme.pnt`
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.04em;
  `}
  ${({theme})=> theme.tablet`
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.04em;
  `}
  ${({theme})=> theme.tnm`
    font-size: 21px;
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
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props=> props.point ? '#19B4A2;':'#222222'};

  ${({theme})=> theme.pnt`
    font-size: 15px;
    line-height: 22px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 15px;
    line-height: 22px;
  `}
  ${({theme})=> theme.tnm`
    font-size: 12px;
    line-height: 18px;
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
            <SolutionPkLocal key={index}>
              <SolutionPkName width={data.name=='MODI Local'}><span>{data.name}</span></SolutionPkName>
              <SolutionPkDatas direction={data.name=='MODI Local'?'column':'row'}>
                {
                  data.details.map((detail,idx)=>{
                   return <SolutionPkInfo key={idx}>
                      <SolutionPkIcon type={detail.type == 'Intra'}>
                        <Image src={detail.icon.src} height={detail.icon.height} width={detail.icon.width}/>
                        <SolutionPkType>
                          {detail.type}
                        </SolutionPkType>
                      </SolutionPkIcon>
                      <SolutionPkSubsBox height={data.name=='MODI Local'}>
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
