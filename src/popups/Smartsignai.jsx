import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  max-width: 80%;
  max-height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 10000;

  ${({ theme }) => theme.mobile`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

const Image = styled.img`
  max-height: calc(100vh - 48px);
  object-fit: contain;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #000;

  > span {
    color: #fff;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;

const SMARTSIGNAI_POPUP_KEY = "SMARTSIGNAI_POPUP_KEY";

const SmartSignAi = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const savedDate = localStorage.getItem(SMARTSIGNAI_POPUP_KEY);
    const nowDate = new Date().toLocaleDateString("ko-KR");
    if (savedDate !== nowDate) {
      localStorage.removeItem(SMARTSIGNAI_POPUP_KEY);
      setShow(true);
    }
  }, []);

  if (!show) {
    return null;
  }

  return (
    <Container>
      <Image src="/imgs/popup/smartsignai.jpg" />
      <Footer>
        <span
          onClick={() => {
            const nowDate = new Date().toLocaleDateString("ko-KR");
            localStorage.setItem(SMARTSIGNAI_POPUP_KEY, nowDate);
            setShow(false);
          }}
        >오늘하루동안보지않기</span>
        <span onClick={() => setShow(false)} style={{ color: "#ff0" }}>{`[닫기]`}</span>
      </Footer>
    </Container>
  )
}

export default SmartSignAi;