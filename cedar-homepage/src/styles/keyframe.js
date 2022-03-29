import { keyframes } from "styled-components";

export const fadeInRight = keyframes`
  0%{
    transform: translateX(130px);
    opacity: 0;
  }
  50%{
    transform: translateX(130px);
    opacity: 0;
  }100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;    

export const fadeInRightText = keyframes`
  0%{
    transform: translateX(130px);
    opacity: 0;
  }
  50%{
    transform: translateX(130px);
    opacity: 0;
  }100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;  

export const fadeInLeft = keyframes`
  0%{
    transform: translateX(-130px);
    opacity: 0;
  }100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;    

export const fadeInTop = keyframes`
  0%{
    transform: translateY(-130px);
  }
  100%{
    transform: translateY(0px);
  }
`;
