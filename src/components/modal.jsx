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
  font-family: 'Noto Sans KR', sans-serif;
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
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight:${props=> props.bold?700:400};
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
  color:${props=> props.color=="true"?'#19B4A2':'#222222'};
`;


const Check = (props)=>{
  return (
    <Td width={props.width}>
      {typeof(props.type)== 'boolean' ? <Image src={props.color=="true"?'/icons/check_color.png':'/icons/check_gray.png'} height={14.72} width={15}/> : <PointText color={props.color} dangerouslySetInnerHTML={{__html:props.type}}></PointText>}
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
            <tr>
              <Th width={100}>기능</Th>
              <Th width={80} bold>Standard</Th>
              <Th width={90} bold>Professional</Th>
              <Th width={80} bold>Enterprise</Th>
            </tr>
          </Thead>
          {
            solutionPkModalData.map((data,idx)=>{
              return (
                <TBody key={idx}>
                  <tr>
                    <Td width={100}>{data.title}</Td>
                    <Check width={80} color={'Standard' === name?"true":"false"} type={data.standard}/>
                    <Check width={90} color={'Professional' === name?"true":"false"} type={data.professional}/>
                    <Check width={80} color={'Enterprise' === name?"true":"false"} type={data.enterprise}/>
                  </tr>
                </TBody>
              )
            })
          }
        </Table>
      </SolutionModalBox>
    </SolutionModalWrapper>
  )
}