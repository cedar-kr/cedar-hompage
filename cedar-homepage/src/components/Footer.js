import styled from 'styled-components'
import Image from 'next/image'
import { Wrapper } from '../styles/Layout'
import { Default, Mobile } from '../utils/media'

const FooterContainer = styled.footer`
  padding-top: 70px;
  padding-bottom: 60px;
  
  ${({theme})=> theme.tablet`
    padding-top: 24px;
    padding-bottom: 59px;
  `};
  ${({theme})=> theme.mobile`
    padding-top: 30px;
    padding-bottom: 30px;
  `};
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 29.4px;
  white-space: nowrap;

  ${({theme})=> theme.tablet`
    margin-top: 21px;
  `};
  ${({theme})=> theme.mobile`
    margin-top: 10px;
  `};
`;

const Info = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  margin-right: 24px;
  color: #333;
  ${({theme})=> theme.mobile`
    font-weight: 400;
    line-height: 20px;
    margin-right: 0px;
  `};
`;

const CopyRight = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: #333;
  margin-top: 10px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <Mobile>
          <Image
            priority
            src="/imgs/logo_r.png"
            height={18}
            width={70}
            alt="Cedar Logo Red"
          />
          <TextWrap>
            <Info>
              대표자 정택성 / 이메일 info@cedar.kr / 
              <br />
              대표 전화 070.4901.6150 / 주소 서울특별시 서초구 강남대로 18길 5(양재동) 3층 
              <br />
              사업자등록번호 134-87-08645
            </Info>
          </TextWrap>
        </Mobile>
        <Default>
          <Image
            priority
            src="/imgs/logo_r.png"
            height={27.4}
            width={101}
            alt="Cedar Logo Red"
          />
          <TextWrap>
            <Info>대표자 정택성</Info>
            <Info>이메일 info@cedar.kr</Info>
            <Info>대표 전화 070.4901.6150</Info>
            <Info>서울특별시 서초구 강남대로 18길5(양재동) 3층</Info>
            <Info>사업자등록번호 134-87-08645</Info>
          </TextWrap>
          <CopyRight>
            COPYRIGHT© CEDAR. ALL RIGHTS RESERVED.
          </CopyRight>
        </Default>
      </Wrapper>
    </FooterContainer>
  )
};