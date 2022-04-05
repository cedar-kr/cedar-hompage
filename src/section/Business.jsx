import styled from 'styled-components'
import { Title } from '../styles/fontStyles'
import Image from 'next/image';
import { business_data } from '../utils/data';


const BusinessContainer = styled.section`
  padding-top: 80px;
  padding-bottom: 140px;
`;

const BusinessTitle = styled(Title)`
  margin-bottom: 80px;
`;

const BusinessContents = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
  border-right: 1px solid #E0E0E0;
  word-break: keep-all;
  
  &:last-child {
    border-right: none;
  }
`;

const BoxItemIcon = styled(Image)`
  width: 100%;
  height: 100%;
`;

const BoxItemTitle = styled.p`
  margin: 30px 0px;
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 3rem;
  line-height: 44px;
  color: #000;
  text-align: center;
  // white-space: nowrap;
`;

const BoxItemText = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  color: #222;
  padding-bottom: 36px;
`;


export default function Business(props) {
  return (
    <BusinessContainer>
      <BusinessTitle>사업분야</BusinessTitle>
      <BusinessContents>
        {business_data.map((data,idx) => {
          return (
            <Box key={idx}> 
              <BoxItemIcon
                src={data.icon}
                height={50}
                width={50}
                alt="Business Icons"
              />
              <BoxItemTitle>{data.title}</BoxItemTitle>
              <BoxItemText>
                {data.content}
              </BoxItemText>
            </Box>
          )
        })}
      </BusinessContents>
    </BusinessContainer>
  )
}