import Image from 'next/image';
import styled from 'styled-components'
import { solutionPkModalData } from '../utils/data';

const SolutionModalWrapper = styled.div`
  background:#00000037;
  height:100%;
  width:100%;
  z-index:100;
  display:flex;
  justify-content:center;
  align-items:center;
  position: fixed;
  top: 0;
  left: 0;

`;

const SolutionModalBox = styled.div`
  width:93%;
  height:398px;
  background:white;

`;

const ModalTitle = styled.div`
  font-family: 'NotoSansKR-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #000000;
  padding:15px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`;

const ModalClose = styled(Image)`
`;

const Table = styled.table`
  width:100%;
  table-layout: fixed;

`;

const Thead = styled.thead`
  height:34px;
  width:100%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  background: #F6F6F6;
  border-bottom:1px solid #E0E0E0;
`;

const Th = styled.th`
  font-weight:${props=> props.bold?'bold':400};
  font-family: 'NotoSansKR-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #19B4A2;
`;

const TBody = styled.tbody`
  height:34px;
  width:100%;
  border-bottom:1px solid #E0E0E0;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`;

const Td = styled.td`
  font-weight:400;
  font-style: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  vertical-align:middle;
  color: #222222;
`;

const PointText = styled.span`
  color:${props=> props.color?'#19B4A2':'#222222'};
`;


const Check = (props)=>{
  return (
    <Td width={props.width}>
      {typeof(props.type)== 'boolean' ? <Image src={props.color?'/icons/check_color.png':'/icons/check_gray.png'} height={14.72} width={15}/> : <PointText color={props.color} dangerouslySetInnerHTML={{__html:props.type}}></PointText>}
    </Td>
  )
}

export default function SolutionModal(props) {
  const { name, closeModal } = props;

  return (
    <SolutionModalWrapper onClick={closeModal}>
      <SolutionModalBox onClick={(e)=> e.stopPropagation()} >
        <ModalTitle>
          MODI Original Line 비교표
          <ModalClose onClick={closeModal } src={'/icons/close.png'} height={15} width={15} />
        </ModalTitle>
        <Table >
          <Thead>
            <Th width={100}>기능</Th>
            <Th width={80} bold>Standard</Th>
            <Th width={90} bold>Professional</Th>
            <Th width={80} bold>Enterprise</Th>
          </Thead>
          {
            solutionPkModalData.map((data,idx)=>{
              return (
                <TBody key={idx}>
                  <Td width={100}>{data.title}</Td>
                  <Check width={80} color={'Standard' === name} type={data.standard}/>
                  <Check width={90} color={'Professional' === name} type={data.professional}/>
                  <Check width={80} color={'Enterprise' === name} type={data.enterprise}/>
                </TBody>
              )
            })
          }
          {/* <TBody>
            <Td>콘텐츠 클라우드 저장</Td>
            <Check/>
            <Check/>
            <Check/>
          </TBody>
          <TBody>
            <Td>실시간 원격 모니터링</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </TBody>
          <TBody>
            <Td>지원 OS</Td>
            <Td>안드로이드STB</Td>
            <Td dangerouslySetInnerHTML={{__html:'Window,Linux<br/>호환가능'}}></Td>
            <Td  dangerouslySetInnerHTML={{__html:'모든 OS 호환<br/> 가능'}}></Td>
          </TBody>
          <TBody>
            <Td>디자인 템플릿 사용</Td>
            <Td>ㅋㅋ</Td>
            <Td>ㅋㅌㅋㅋ</Td>
            <Td></Td>
          </TBody>
          <TBody>
            <Td>그룹편성</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </TBody>
          <TBody>
            <Td>스마트폰 제어</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </TBody>
          <TBody>
            <Td>생방송 지원</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </TBody> */}
        </Table>
      </SolutionModalBox>
    </SolutionModalWrapper>
  )
}