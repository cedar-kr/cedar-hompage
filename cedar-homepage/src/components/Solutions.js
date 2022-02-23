import styled from 'styled-components'
import React, { useMemo } from 'react'
import SolutionT from './Solution';

const SolutionTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 3rem;
  line-height: 45px;
  margin-left: 16px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const TextPoint = styled.span`
  font-weight: 700;
  box-shadow: inset 0 -25px 0 #f8ffac;
  padding-right: 2px;
`;

export default function Solution(props) {

  const solutionData = useMemo(()=>[
    { 
      title:
      <SolutionTitle>
        디스플레이를
        <br />
        <TextPoint>한번에 관리</TextPoint>하는
        <br />
        쉽고 간편한 솔루션
      </SolutionTitle>, 
      text:'하드웨어를 가리지 않고 확장이 용이한 <br/> 웹 기반 디지털 사이니지 솔루션입니다.',
      imgs: [
        {
          id:3,
          src:'/imgs/solution/device/design.png',
        },
        {
          id:4,
          src:'/imgs/solution/device/sensor.png',
        },
        {
          id:1,
          src:'/imgs/solution/device/multi.png',
        },
        {
          id:2,
          src:'/imgs/solution/device/group.png',
        },
        {
          id:3,
          src:'/imgs/solution/device/design.png',
        },
        {
          id:4,
          src:'/imgs/solution/device/sensor.png',
        },
        {
          id:1,
          src:'/imgs/solution/device/multi.png',
        },
      ],
      menus: [
        {
          id:1,
          name:'원격 멀티 디바이스 관리',
        },
        {
          id:2,
          name:'그룹 관리',
        },
        {
          id:3,
          name:'디자인 템플릿',
        },
        {
          id:4,
          name:'다양한 센서 연동',
        },
      ],
      bg:'blue',
    },
    { 
      title:<SolutionTitle>
      <TextPoint>다양한 디바이스</TextPoint>로
      <br />
      매장을 돋보이게
    </SolutionTitle>, 
      text:'디바이스의 종류에 구애받지 않고 <br/> 어디서든 관리할 수 있습니다.',
      imgs: [
        {
          id:4,
          src:'/imgs/solution/display/display.png',
        },
        {
          id:5,
          src:'/imgs/solution/display/led.png',
        },
        {
          id:1,
          src:'/imgs/solution/display/oled.png',
        },
        {
          id:2,
          src:'/imgs/solution/display/multivision.png',
        },
        {
          id:3,
          src:'/imgs/solution/display/kiosk.png',
        },
        {
          id:4,
          src:'/imgs/solution/display/display.png',
        },
        {
          id:5,
          src:'/imgs/solution/display/led.png',
        },
        {
          id:1,
          src:'/imgs/solution/display/oled.png',
        },
      ],
      bg:'puple',
      menus: [
        {
          id:1,
          name:'투명OLED터치 디스플레이',
        },
        {
          id:2,
          name:'멀티비전',
        },
        {
          id:3,
          name:'키오스크',
        },
        {
          id:4,
          name:'일반 디스플레이',
        },
        {
          id:5,
          name:'LED',
        },
      ],
    },
    { 
      title:<SolutionTitle>
         <TextPoint>효율성을 극대화</TextPoint>한
        <br />
        관리페이지까지
      </SolutionTitle>, 
      text:'그룹 편성 부터 원격 모니터링, 오류 상황 <br/> 감지 기능을 통해 효율성을 극대화합니다.',
      imgs: [
        {
          id:3,
          src:'/imgs/solution/admin/error.png',
        },
        {
          id:4,
          src:'/imgs/solution/admin/otp.png',
        },
        {
          id:1,
          src:'/imgs/solution/admin/statistics.png',
        },
        {
          id:2,
          src:'/imgs/solution/admin/remote.png',
        },
        {
          id:3,
          src:'/imgs/solution/admin/error.png',
        },
        {
          id:4,
          src:'/imgs/solution/admin/otp.png',
        },
        {
          id:1,
          src:'/imgs/solution/admin/statistics.png',
        },
      ],
      bg:'red',
      menus: [
        {
          id:1,
          name:'통계관리',
        },
        {
          id:2,
          name:'원격 모니터링',
        },
        {
          id:3,
          name:'오류감지',
        },
        {
          id:4,
          name:'OTP 로그인',
        }
      ],
    },
  ],[])

  return (
    solutionData.map((data,idx)=>{
      return(
        <SolutionT key={idx} data={data}/>
      )
    })
  )
};