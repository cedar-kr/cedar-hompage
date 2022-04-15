import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import styled, { keyframes } from 'styled-components'

const CompanyBannerContainer = styled.section`
  max-width: 1920px;
  margin: 0 auto;
`;

export default function CompanyBanner(params) {

  return (
    <CompanyBannerContainer>
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
    </CompanyBannerContainer>
  )
}
