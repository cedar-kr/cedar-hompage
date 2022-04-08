import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";


export default function CompanyBanner(params) {

  return (
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
        <Image src={`/imgs/companyBanner/1.svg`} height={200} width={1920}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={`/imgs/companyBanner/2.svg`} height={200} width={1920}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={`/imgs/companyBanner/3.svg`} height={200} width={1920}/>
      </SwiperSlide>
    </Swiper>
  )
}
