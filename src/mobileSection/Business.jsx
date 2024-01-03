import styled from 'styled-components';
import Image from 'next/image';
import { businessData } from '../utils/data';
import { Wrapper } from '../styles/Layout';

const BusinessContainer = styled.section`
  padding-top: 40px;
  padding-bottom: 20px;
  background: #f6f6f6;
`;

const BusinessTitle = styled.div`
  margin-bottom: 34px;
  font-family: 'S-CoreDream-6Bold';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #222222;
`;

const BusinessContents = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
  word-break: keep-all;

  &:last-child {
    border-right: none;
  }
`;

const BoxBorder = styled.div`
  height: 1px;
  background: #e0e0e0;
  margin: 20px 16px;
`;

const BoxItemIcon = styled(Image)`
  width: 100%;
  height: 100%;
`;

const BoxItemTitle = styled.p`
  margin: 10px 0px;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #000000;
`;

const BoxItemText = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  text-align: left;
  color: #222222;
`;

export default function Business() {
  return (
    <BusinessContainer>
      <Wrapper>
        <BusinessTitle>사업분야</BusinessTitle>
        <BusinessContents>
          {businessData.map((data, idx) => {
            return (
              <div key={idx}>
                <Box>
                  <BoxItemIcon src={data.icon_m} height={70} width={70} alt="Business Icons" />
                  <BoxItemTitle>{data.title}</BoxItemTitle>
                  <BoxItemText idx={idx}>{data.content}</BoxItemText>
                </Box>
                {businessData.length !== idx + 1 && <BoxBorder />}
              </div>
            );
          })}
        </BusinessContents>
      </Wrapper>
    </BusinessContainer>
  );
}
