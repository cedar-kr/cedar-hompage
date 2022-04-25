import Image from "next/image";
import styled from "styled-components";

const CompanyBannerWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  /* height:206px; */
  /* padding-top: 23.57px; */
  /* padding-left: 16px; */
  /* padding-right:16px; */
`;

export default function CompanyBanner() {

  return (
    <CompanyBannerWrapper>
      <Image src={'/imgs/companyBanner/mobile.png'} height={250} width={360} alt={'Company Banner'} />
    </CompanyBannerWrapper>
  )
}
