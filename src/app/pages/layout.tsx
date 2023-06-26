'use client';
import styled from 'styled-components';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import React, { useContext } from 'react';
import { NavContext } from '@/app/contexts/NavContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { navBar } = useContext(NavContext);
  const Home = styled.section`
    margin-top: 50px;
    margin-left: ${navBar ? '50px' : '0'};
  `;
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <Home>{children}</Home>
    </>
  );
}

export const Home = styled.div`
  padding: 10px;
  > div:first-child {
    font-size: 25px;
  }
  main:nth-child(2) {
    font-size: 15px;
    background-color: #92969a;
    color: white;
    cursor: default;
  }
  @media (max-width: 450px) {
    main:nth-child(2) {
      font-size: 12px;
    }
  }
`;
