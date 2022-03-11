import React from 'react'
import { Default, Mobile } from '../utils/media'
import Header from './Header';
import HeaderDesk from './HeaderDesk';

export default function Headers() {
  return (
    <>
      <Mobile>
        <Header/>
      </Mobile>
      <Default>
        <HeaderDesk/>
      </Default>
    </>
  )
};