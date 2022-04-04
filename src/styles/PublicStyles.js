import styled from 'styled-components'
import Image from 'next/image'

export const Wrapper = styled.div`
  margin: 0 auto;
  font-size: 25rem;
  /* ${({ theme }) => theme.fk` 
    width:70%; 
    height:100vh; 
    background:red;
  `};
  ${({ theme }) => theme.moniter` 
    width:75%; 
    height:100vh; 
    background:orange;
  `};
  ${({ theme }) => theme.desktop` 
    width:80%; 
    height:100vh; 
    background:yellow;
  `};
  ${({ theme }) => theme.laptop` 
    width:85%; 
    height:660px; 
    background:green;
  `};
  ${({ theme }) => theme.tablet` 
    width:90%; 
    height:560px; 
    background:blue;
  `};
  ${({ theme }) => theme.mobile` 
    width:95%; 
    height:460px; 
    background:purple;
  `}; */
`
