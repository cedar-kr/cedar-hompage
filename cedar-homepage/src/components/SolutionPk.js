import styled from 'styled-components'
import React, { useMemo } from 'react'
import Image from 'next/image'
import MODI_LITE from '../../public/imgs/Solutionpkg/1.png';
import MODI from '../../public/imgs/Solutionpkg/2.png';
import MODI_BROADCAST from '../../public/imgs/Solutionpkg/3.png';
import { Center, Wrapper } from '../styles/Layout';

const SolutionPkContainer = styled.section`
  padding: 30px 0px;
  height: 580px;
`;

const SolutionPkTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 3rem;
  line-height: 45px;
  margin-left: 16px;
  margin-top: 30px;
`;

const TextPoint = styled.span`
  font-weight: 700;
  box-shadow: inset 0 -25px 0 #c6d4ff;
`;

const SolutionPkBox = styled.div`
  margin-top:30px;
  overflow:scroll;
  scroll:none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SolutionPkItems = styled.div`
  display: flex;
  flex-diretion:row;
  width: ${ 242 * 3 }px;
  margin: 0px 16px;
`;

const SolutionPkItem = styled(Center)`
  border:1px solid #e0e0e0;
  margin-right:${props => props.mg ? 0 :16}px;
  width: 242px;
  height: 319px;
  justify-content:center;
`;

const SolutionPkItemName = styled.div`
  font-family: Avenir;
  font-size: 20px;
  font-weight: 500;
  margin-top:20px;
  margin-bottom: 6px;
`;

const SolutionPkItemInfo = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #333;
`;

export default function SolutionPk(props) {
  
  const SolutionPkData = useMemo(()=>[
    { 
      src: MODI_LITE, 
      name:'Modi-Lite', 
      info: '비 인터넷,<br/> 소규모 구축 환경에 최적화된 <br/> 디지털 사이니지 솔루션 '
    },
    { 
      src: MODI, 
      name:'Modi', 
      info:  '하드웨어를 가리지 않고 <br/> 확장이 용이한 웹 기반 디지털 <br/> 사이니지 솔루션' 
    },
    { 
      src: MODI_BROADCAST, 
      name: 'Modi-Broadcast', 
      info: '방송 편성에 맞추어 다량의<br/> 디스플레이와 송수신이 가능한<br/>전문 방송용 솔루션'
    },
  ],[])

  return (
    <SolutionPkContainer>
     <SolutionPkTitle>
        매장에 맞는
        <br />
        <TextPoint>솔루션 패키지</TextPoint>가
        <br />
        준비되어 있습니다.
      </SolutionPkTitle>
      <SolutionPkBox>
        <SolutionPkItems>
          {
            SolutionPkData.map((data,idx)=>{
              return (
                <SolutionPkItem key={idx} mg={ data.name == "Modi-Broadcast"? true : false}>
                  <Image
                    src={data.src}
                    alt={`SolutionPk_pk_${data.name}`}
                    height={147}
                    width={120}
                  />
                  <SolutionPkItemName>{data.name}</SolutionPkItemName>
                  <SolutionPkItemInfo dangerouslySetInnerHTML={{__html: data.info }}></SolutionPkItemInfo>
              </SolutionPkItem>
              )
            })
          }
        </SolutionPkItems>
      </SolutionPkBox>
      </SolutionPkContainer>
  )
};