import styled, { css } from 'styled-components'
import React, {  useState } from 'react'
import { NSText } from '../styles/PublicStyles';
import { Row, Wrapper } from '../styles/Layout';
import Image from 'next/image';
import { Default, Desktop, Tablet } from '../utils/media';

const SolutionContainer = styled.div`
  padding-top:140px;
  padding-bottom:130px;
  display: flex;
  flex-direction:colunm;
  height:768px;
  background:${props => 
    (props.bg == 'red' && '#ffeeee') ||
    (props.bg == 'blue' && '#f2f7fb') ||
    (props.bg == 'puple' && '#f3f2ff')
  };
  margin:0 auto;
  ${({theme})=>theme.pc`
    padding-top:190px;
    padding-bottom:182px;
    height:100vh;
  `}
`;

const SolutionWrapper = styled(Wrapper)`
  width: 70%;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({theme})=>theme.tablet`
    width: 91%;
  `};
`;

const SolutionRow = styled(Row)`
  justify-content:left;
  ${({theme})=>theme.pc`
    justify-content:space-between;
    flex-direction: ${(props) => props.reverse ?'row-reverse':'row'};
  `};
`;

const SolutionImg = styled.div`
  min-widht:500px;
  min-height:500px;
  ${({theme})=>theme.tablet`
    margin-right:56px;
  `}
  ${({theme})=>theme.pc`
    ${props=> props.reverse?
      'margin-left:82px':
      'margin-right:82px'}
    widht:700px;
    height:700px;
  `}
`;

const SolutionSubText = styled(NSText)`
  color: #333;
  font-size:1.8rem;
`;

const SoutionMenus = styled.div`
  margin-top:88px;
  ${({theme})=>theme.pc`
    margin-top:200px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:500px;
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
  font-size:1.8rem;
  font-weight:bold;
  color:${props=> props.select ? "#d74c4b" : "#4f4f4f" };
`;

const SolutionMenuItems = styled(Row)`
  cursor: poiner;
  align-items:center;
  height: 50px;
  ${({theme})=>theme.pc`
    width: 250px;
  `}
  :hover{
    background-color:#fff;
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
            <Tablet>
              <SolutionImg>
                <Image
                  src={getImg(data.imgs)}
                  height={500}
                  width={500}
                />
              </SolutionImg>
            </Tablet>
            <Desktop>
              <SolutionImg reverse={data.id === 1 || data.id === 3 }>
                <Image
                  src={getImg(data.imgs)}
                  height={700}
                  width={700}
                />
              </SolutionImg>
            </Desktop>
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