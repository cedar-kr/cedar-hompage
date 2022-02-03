import styled from 'styled-components'
import { Title, Text } from "../styles/PublicStyles"
import { Center, Wrapper } from '../styles/Layout'

const BusinessContainer = styled.section`
  padding: 60px 0px;
`;

const BusinessTitle = styled(Title)`
  margin-bottom: 22px;
`;

const Box = styled(Center)`
  justify-content: center;
  width: 71.7%;
  height: 105px;
  min-width: 258px;
  margin: 8px 0px;
  text-align: center;
  background-color: ${props => 
    (props.color === "blue" && "#74ccff")|| 
    (props.color === "gray" && "#ededed") ||
    "#6e92ff"
  };
`;

const BusinessItemTitle = styled.p`
  padding-bottom: 10px;
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.color === "gray" ? "#000" : "#fff"};
`;

export default function Business(props) {
  const business_data = [
    {
      title: "Digital signage Solution",
      title_exp: "Experience Optimization",
      title_exp_1: "Management System",
    },{
      title: "Hardware & Product",
      title_exp: "AD Monitor Production",
      title_exp_1: "PCB Production",
      color: "blue"
    },{
      title: "Customer Service center",
      title_exp: "Customized Consulting",
      color: "gray"
    }
  ]

  return (
    <BusinessContainer>
      <Wrapper>
        <BusinessTitle>
          시더는 다양한
          <br />
          사업분야를
          <br />
          구축하고 있습니다.
        </BusinessTitle>
        <Center>
          {business_data.map((data,idx) => {
            return (
              <Box key={idx} color={data.color}> 
                <BusinessItemTitle color={data.color}>{data.title}</BusinessItemTitle>
                <Text color={data.color}>
                  {data.title_exp}
                  <br />
                  {data.title_exp_1}
                </Text>
              </Box>
            )
          })}
        </Center>
      </Wrapper>
    </BusinessContainer>
  )
}