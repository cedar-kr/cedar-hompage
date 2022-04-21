import styled from 'styled-components'
import Image from 'next/image'
import { businessData } from '../utils/data'
import { Wrapper } from '../styles/Layout';
import { Title } from '../styles/fontStyles';

const BusinessContainer = styled.section`
  padding-top: 80px;
  padding-bottom: 140px;

  ${({theme})=> theme.pnt`
    padding-top: 50px;
    padding-bottom: 85px;
  `}
  ${({theme})=> theme.tablet`
    padding-top: 50px;
    padding-bottom: 85px;
  `}
  ${({theme})=> theme.tnm`
    padding-top: 40px;
    padding-bottom: 40px;
  `}
`;

const BusinessTitle = styled(Title)`
  margin-bottom: 80px;
  text-align: center;
  color: #222222;

  ${({theme})=> theme.pnt`
    font-size: 4.5rem;
  `}
`;

const BusinessContents = styled.div`
  display: flex;
  justify-content: center;

  ${({theme})=> theme.tnm`
    flex-wrap: wrap;
  `}
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
  
  ${({theme})=> theme.pc`
    border-right: 1px solid #E0E0E0;

    &:last-child {
    border-right: none;
    }
  `}
  ${({theme})=> theme.pnt`
    padding: 0px 21px;
  `}
  ${({theme})=> theme.tablet`
    padding: 0px 21px;
  `}
  ${({theme})=> theme.tnm`
    width: 50%;
  `}
`;

const BoxItemIcon = styled(Image)`
  width: 100%;
  height: 100%;
`;

const BoxItemTitle = styled.p`
  margin: 30px 0px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 44px;
  color: #000;
  text-align: center;
  width: 100%;

  ${({theme})=> theme.pnt`
    font-size: calc(2.7rem + (100vw - 1240px) * ((30 - 27) / (1439 - 1240)));
    line-height: 40px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 2.7rem;
    line-height: 40px;
  `}
  ${({theme})=> theme.tnm`
    font-size: calc(2rem + (100vw - 600px) * ((27 - 20) / (904 - 600)));
    line-height: 30px;
  `}
`;

const BoxItemText = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  color: #222;
  padding-bottom: 36px;
  width:${props => 
    props.idx==2 && 95 ||
    props.idx==1 && 86.8||
    props.idx==0 && 86 }%;

  ${({theme})=> theme.pnt`
    font-size: calc(1.7rem + (100vw - 1240px) * ((20 - 17) / (1439 - 1240)));
    line-height: 25px;
  `}
  ${({theme})=> theme.tablet`
    font-size: 1.7rem;
    line-height: 25px;
  `}
  ${({theme})=> theme.tnm`
    font-size: calc(1.5rem + (100vw - 600px) * ((17 - 15) / (904 - 600)));
    line-height: 22px;
  `}
`;


export default function Business() {
  return (
    <BusinessContainer>
      <Wrapper>
      <BusinessTitle>사업분야</BusinessTitle>
      <BusinessContents>
        {businessData.map((data,idx) => {
          return (
            <Box key={idx}> 
              <BoxItemIcon
                src={data.icon}
                height={50}
                width={50}
                alt="Business Icons"
              />
              <BoxItemTitle>{data.title}</BoxItemTitle>
              <BoxItemText idx={idx}>
                {data.content}
              </BoxItemText>
            </Box>
          )
        })}
      </BusinessContents>
      </Wrapper>
    </BusinessContainer>
  )
}