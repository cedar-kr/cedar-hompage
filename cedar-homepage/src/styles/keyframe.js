import { keyframes } from "@emotion/react";

export const fadeInRightDefualt = keyframes`
  0%{
    transform: translateX(130px);
    opacity: 0;
    transition: ease-in;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
    transition: ease-in;
  }
`; 

export const fadeInRightBusiness = keyframes`
  0%{
    transform: translateX(0px);
    opacity: 0;
    transition: ease-in-out;
  }
  100%{
    transform: translateX(-250px);
    opacity: 1;
    transition: ease-in-out;
  }
`;  

export const fadeInLeftDefualt = keyframes`
  0%{
    transform: translateX(-130px);
    opacity: 0;
    transition: ease-in;
  }100%{
    transform: translateX(0px);
    opacity: 1;
    transition: ease-in;
  }
`;    

export const fadeInTopDefualt = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-130px);
  }
  100%{
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const fadeDefualt = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

