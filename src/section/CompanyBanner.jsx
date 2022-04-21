import Image from "next/image";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components'
import { DefaultPlus, Tnm } from "../utils/media";
import { chunk } from "../utils/func";

const CompanyBannerContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  .swiper{
    display:flex;
    justify-content:center;
    align-items:center;
    .swiper-slide{
      display:flex;
      justify-content:center;
      align-items:center;
    }
  }
`;

const BannerAlign = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding:0px 50px;
  width:100%;
  background:white;
`;

const BannerItem = styled.div`
  margin:20px 0px;
  width: 95.9px;
  height: 60px;
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

  {id:19, src:'/imgs/companyBanner/companys/',width:150,height:50},
  {id:20, src:'/imgs/companyBanner/companys/',width:150,height:50},
]

export default function CompanyBanner() {
  const datas = chunk(CompanyBannerDatas,CompanyBannerDatas.length/5);

  return (
    <CompanyBannerContainer>
      <DefaultPlus>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
        }}
        effect={'fade'}
        loop={true}
        modules={[Autoplay,EffectFade]}
      >
          <SwiperSlide>
            <Image src={`/imgs/companyBanner/1.png`} height={200} width={1920} alt={'Comapny Banner'} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={`/imgs/companyBanner/2.png`} height={200} width={1920} alt={'Comapny Banner'} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={`/imgs/companyBanner/3.png`} height={200} width={1920} alt={'Comapny Banner'} />
          </SwiperSlide>
        </Swiper>
      </DefaultPlus>
      <Tnm>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        effect={'fade'}
        loop={true}
        modules={[Autoplay,EffectFade]}
      >
          {
            datas.map((data,index)=>{
              return (
                <SwiperSlide key={index}  >
                  <BannerAlign>
                  {
                    data.map((img,idx)=>{
                      return(
                        <BannerItem key={idx} align={data.length-1 === idx}>
                          {
                            img.id <= 18 &&
                            <Image src={img.src} height={img.height} width={img.width}  alt={'Comapny Banner'}/>
                          }
                        </BannerItem>
                      )
                    })
                  }
                  </BannerAlign>
                </SwiperSlide>
              )
            })
          }
          </Swiper>
        </Tnm>
    </CompanyBannerContainer>
  )
}
