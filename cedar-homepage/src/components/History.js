import styled from 'styled-components'
import Image from 'next/image'
import { Title, Text, LgText } from "../styles/PublicStyles"
import { Center, Wrapper, Row } from '../styles/Layout'

const HistoryContainer = styled.section`
  padding: 30px 0px;
`;

const TextPadding = styled(Text)`
  padding: 5px 0px;
`;

const CenterPadding = styled(Center)`
  margin: 30px 0px;
`;

const YearText = styled(LgText)`
  box-shadow: inset 0 -20px 0 #B0FFE2;
  color: #000;
  margin-bottom: 13px;
`;

const SlideCenter = styled(Center)`
  height: 414px;
`;

export default function History(props) {
  const history_data = [
    {
      year:"2021",
      projects:[
        "청년친화강소기업 3년 연속 선정",
        "미국 특허 등록",
        "MODI GS인증 1등급 획득",
        "세종큐비즈 키오스크 솔루션 개발"
      ]
    },{
      year:"2020",
      projects:[
        "LGU+ 유심 키오스크 계약",
        "김포국제공항 키오스크 솔루션 개발",
        "판교 알파돔시티 빌딩안내 설비공사 계약"
      ]
    } 
  ]
  
  return (
    <HistoryContainer>
      <Wrapper>
        <Title>
          시더의
          <br />
          즐거운 도전들을
          <br />
          소개합니다.
        </Title>
        <Row>
          <Image
            priority
            src="/icons/h_left_arrow.png"
            height={45}
            width={45}
            alt="left arrow"
          />
          <SlideCenter>
            {history_data.map((data,idx) => {
              return (
                <CenterPadding key={idx}> 
                  <YearText>
                    {data.year}
                  </YearText>
                  {data.projects.map((data,idx) => {
                    return (
                    <TextPadding key={idx}>{data}</TextPadding>
                    )
                  })}  
                </CenterPadding>
              )
            })}
          </SlideCenter>
          <Image
            priority
            src="/icons/h_right_arrow.png"
            height={45}
            width={45}
            alt="right arrow"
          />
        </Row>
      </Wrapper>
    </HistoryContainer>
  )
};