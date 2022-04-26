import Image from "next/image";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components'
import { DefaultPlus, Tnm } from "../utils/media";
import { chunk } from "../utils/func";
import { Wrapper } from "../styles/Layout";
import { Title } from "../styles/fontStyles";

const CompanyBannerContainer = styled(Wrapper)`
  padding-bottom:30px;
  padding-top:80px;
`;

const BannerAlign = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width:100%;
  background:white;
  height: 100px;
 `;

const CompanyTitle = styled(Title)`
 font-weight: bold;
  color: #222222;
  text-align: center;
`;

const CompanySubs = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
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

const BannerItem = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;


const CompanyBannerDatas = [
  {id:1, src:'/imgs/companyBanner/companys/1.png',width:120,height:40},
  {id:2, src:'/imgs/companyBanner/companys/2.png',width:150,height:50},
  {id:3, src:'/imgs/companyBanner/companys/3.png',width:150,height:50},
  {id:4, src:'/imgs/companyBanner/companys/4.png',width:150,height:50},
  {id:5, src:'/imgs/companyBanner/companys/5.png',width:150,height:50},
  {id:6, src:'/imgs/companyBanner/companys/6.png',width:150,height:50},
  {id:7, src:'/imgs/companyBanner/companys/7.png',width:120,height:40},
  {id:8, src:'/imgs/companyBanner/companys/8.png',width:150,height:50},
  {id:9, src:'/imgs/companyBanner/companys/9.png',width:150,height:50},
  {id:10, src:'/imgs/companyBanner/companys/10.png',width:150,height:50},
  {id:11, src:'/imgs/companyBanner/companys/11.png',width:150,height:50},
  {id:12, src:'/imgs/companyBanner/companys/12.png',width:150,height:50},
  {id:13, src:'/imgs/companyBanner/companys/13.png',width:120,height:40},
  {id:14, src:'/imgs/companyBanner/companys/14.png',width:150,height:50},
  {id:15, src:'/imgs/companyBanner/companys/15.png',width:150,height:50},
  {id:16, src:'/imgs/companyBanner/companys/16.png',width:150,height:50},
  {id:17, src:'/imgs/companyBanner/companys/17.png',width:150,height:50},
  {id:18, src:'/imgs/companyBanner/companys/18.png',width:150,height:50},
]

export default function CompanyBanner() {
  const datas = chunk(CompanyBannerDatas,CompanyBannerDatas.length/3);

  return (
    <CompanyBannerContainer>
      <CompanyTitle>주요 고객 및 파트너</CompanyTitle>
      <CompanySubs>자사는 고객에게 최상의 디지털사이니지 경험을 제공합니다.</CompanySubs>
        {
          datas.map((data,index)=>{
            return (
              <BannerAlign>
              {
                data.map((img,idx)=>{
                  return(
                    <BannerItem key={idx}>
                      {
                        img.id <= 18 &&
                        <Image src={img.src} height={img.height} width={img.width}  alt={'Comapny Banner'}/>
                      }
                    </BannerItem>
                  )
                })
              }
              </BannerAlign>
            )
          })
        }
    </CompanyBannerContainer>
  )
}
