import React from 'react'
import { Default, Mobile } from '../utils/media'
import Main from './Main'
import MainDesk from './MainDesk'

export default function Mains() {
  const mainData = [
    { 
      src: "/imgs/main/bg_main_KIOSK.png",
      title: "KIOSK",
      subTitle: "판교 테크원 길찾기 키오스크",
      src_d:"/imgs/reference/1.png"
    },{ 
      src: "/imgs/main/bg_main_LED.png",
      title: "LED",
      subTitle: "판교 테크원 LED",
      src_d:"/imgs/reference/2.png"

    },{ 
      src: "/imgs/main/bg_main_Signage.png",
      title: "DIGITAL SIGNAGE",
      subTitle: "판교 테크원 디지털 사이니지",
      src_d:"/imgs/reference/3.png"
    },{ 
      src: "/imgs/main/bg_main_EVSignage.png",
      title: "E/V SIGNAGE",
      subTitle: "판교 테크원 엘리베이터 사이니지",
      src_d:"/imgs/reference/4.png"
    },
  ];

  return (
    <>
      <Mobile>
        <Main mainData={mainData}/>
      </Mobile>
      <Default>
        <MainDesk mainData={mainData}/>
      </Default>
    </>
  )
};