import styled from 'styled-components'
import React, {  useState } from 'react'
import { NSText } from '../styles/PublicStyles'
import { Row, Wrapper } from '../styles/Layout'
import Image from 'next/image';
import { Default, Desktop, Tablet } from '../utils/media'

const SolutionContainer = styled.div`
  padding-top: 190px;
  padding-bottom: 182px;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  background:${props => 
    (props.bg == 'red' && '#ffeeee') ||
    (props.bg == 'blue' && '#f2f7fb') ||
    (props.bg == 'puple' && '#f3f2ff')
  };
  margin: 0 auto;

  ${({theme})=>theme.mobile`
    padding-top: 140px;
    padding-bottom: 130px;
  `}
`;

const SolutionWrapper = styled(Wrapper)`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SolutionRow = styled(Row)`
  justify-content: space-between;
  flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
  align-items: center;

  ${({theme})=>theme.tablet`
    justify-content: left;
    flex-direction: row;
  `};
`;

const SolutionImg = styled.div`
  margin-left: ${props=> props.reverse ? '82px': '0px'};
  margin-right: ${props=> props.reverse ? '0px': '82px'};

  ${({theme})=>theme.tablet`
    margin-right: 56px;
    min-width: 240px;
    min-height: 240px;
  `}
`;

const SolutionSubText = styled(NSText)`
  color: #333;
  font-size: 1.8rem;
  white-space: nowrap;
`;

const SoutionMenus = styled.div`
  margin-top:10.417vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 740px;
  min-width: 500px;

  ${({theme})=>theme.tablet`
    margin-top: 88px;
    flex-direction: column;
    min-width: 100%;
  `}
`;

const SoutionMenuIcon = styled.div`
  width: 10px;
  height: 10px;
  flex-grow: 0;
  transform: rotate(-315deg);
  margin: 0 10px;
  background-color: ${props=> props.select && '#d74c4b'};
`;

const SoutionMenusText = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props=> props.select ? "#d74c4b" : "#4f4f4f"};
`;

const SolutionMenuItems = styled(Row)`
  cursor: poiner;
  align-items: center;
  height: 50px;
  width: 250px;
  :hover{
    background-color: #fff;
    transition: 0.3s ease in;
  }
`;

export default function SolutionDesk(props) {
  const { data } = props;
  const [ select, setSelect ] = useState({id:1});

  const getImg = (imgs)=> {
    const data = imgs.filter(data=> data.id === select.id);
    return data[0].src_d;
  }

  return (
    <Default>
      <SolutionContainer bg={data.bg} >
        <SolutionWrapper>
          <SolutionRow reverse={data.id === 1 || data.id === 3}>
              <SolutionImg reverse={data.id === 1 || data.id === 3 }>
                <Image
                  alt="solution"
                  src={getImg(data.imgs)}
                  height={700}
                  width={700}
                  layout="intrinsic"
                />
              </SolutionImg>
            <div>
              {data.title}
              <Desktop>
                <SolutionSubText dangerouslySetInnerHTML={{__html:data.id ===1 || data.id ===2 ? data.text: data.text_d}}></SolutionSubText>
              </Desktop>
              <Tablet>
                <SolutionSubText dangerouslySetInnerHTML={{__html:data.text}}></SolutionSubText>
              </Tablet>
              <SoutionMenus>
                {
                  data.menus.map((data, idx)=>{
                    return <SolutionMenuItems key={idx} onClick={()=>setSelect(data)}>
                      <SoutionMenuIcon select={select.id === data.id}></SoutionMenuIcon>
                      <SoutionMenusText select={select.id === data.id}>{data.name}</SoutionMenusText>
                    </SolutionMenuItems>
                  })
                }
              </SoutionMenus>
            </div>
          </SolutionRow>
        </SolutionWrapper>
      </SolutionContainer>
    </Default>
  )
};