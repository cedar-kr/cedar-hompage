import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import styled, { keyframes } from 'styled-components'
import { DefaultPlus, Tnm } from "../utils/media";
import { chunk } from "../utils/func";

const CompanyBannerContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  .swiper{
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

const BannerAlign = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`;

const BannerItem = styled.div`
  margin:20px 0px;
  /* background: gray; */
  width:200px;
  height:80px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const CompanyBannerDatas = [
  {id:1, src:'/imgs/companyBanner/companys/1.png'},
  {id:2, src:'/imgs/companyBanner/companys/2.png'},
  {id:3, src:'/imgs/companyBanner/companys/3.png'},
  {id:4, src:'/imgs/companyBanner/companys/4.png'},
  {id:5, src:'/imgs/companyBanner/companys/5.png'},
  {id:6, src:'/imgs/companyBanner/companys/6.png'},
  {id:7, src:'/imgs/companyBanner/companys/7.png'},
  {id:8, src:'/imgs/companyBanner/companys/8.png'},
  {id:9, src:'/imgs/companyBanner/companys/9.png'},
  {id:10, src:'/imgs/companyBanner/companys/10.png'},
  {id:11, src:'/imgs/companyBanner/companys/11.png'},
  {id:12, src:'/imgs/companyBanner/companys/12.png'},
  {id:13, src:'/imgs/companyBanner/companys/13.png'},
  {id:14, src:'/imgs/companyBanner/companys/14.png'},
  {id:15, src:'/imgs/companyBanner/companys/15.png'},
  {id:16, src:'/imgs/companyBanner/companys/16.png'},
  {id:17, src:'/imgs/companyBanner/companys/17.png'},
  {id:18, src:'/imgs/companyBanner/companys/18.png'},
  {id:19, src:'/imgs/companyBanner/companys/'},
  {id:20, src:'/imgs/companyBanner/companys/'},
]

export default function CompanyBanner(params) {
  const datas = chunk(CompanyBannerDatas,CompanyBannerDatas.length/5);

  return (
    <CompanyBannerContainer>
      <DefaultPlus>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
          <SwiperSlide>
            <Image src={`/imgs/companyBanner/1.png`} height={200} width={1920}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={`/imgs/companyBanner/2.png`} height={200} width={1920}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={`/imgs/companyBanner/3.png`} height={200} width={1920}/>
          </SwiperSlide>
        </Swiper>
      </DefaultPlus>
      <Tnm>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
          {
            datas.map((data,index)=>{
              return (
                <SwiperSlide key={index} >
                  <BannerAlign>
                  {
                    data.map((img,idx)=>{
                      return(
                        <BannerItem key={idx} align={data.length-1 === idx}>
                          <Image src={img.src} height={50} width={120}/>
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
