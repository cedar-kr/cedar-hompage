import Image from "next/image";
import styled from "styled-components";

const CompanyBannerWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  height:206px;
  padding-top: 23.57px;
  padding-left: 16px;
  padding-right:16px;
`;

const NewBannerWrapper = styled.div`
  width: 100%;
`;

export default function CompanyBanner() {

  return (
    <CompanyBannerWrapper>
      <Image src={'/imgs/companyBanner/1_mobile.png'} height={33.33} width={360} alt={'Company Banner'} />
      <Image src={'/imgs/companyBanner/2_mobile.png'} height={33.33} width={360} alt={'Company Banner'} />
      <Image src={'/imgs/companyBanner/3_mobile.png'} height={33.33} width={360} alt={'Company Banner'} />
      <Image src={'/imgs/companyBanner/4_mobile.png'} height={33.33} width={360} alt={'Company Banner'} />
      <NewBannerWrapper>
        <Image src={'/imgs/companyBanner/5_mobile.png'} height={33.33} width={192} alt={'Company Banner'} />
      </NewBannerWrapper>
    </CompanyBannerWrapper>
  )
}
