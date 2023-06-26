import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Profile from './Profile';
import { NavContext } from '../contexts/NavContext';

export default function Header() {
  const router = useRouter();
  const [current, setCurrent] = useState(false);
  const token = localStorage.getItem('token');
  const { navBar, setNavBar } = useContext(NavContext);
  return (
    <Container>
      <div>
        {token && (
          <Icon
            onClick={() => {
              setNavBar(!navBar);
            }}
          >
            <AiOutlineMenu />
          </Icon>
        )}

        <Logo onClick={() => router.push('/pages/home')}>Purchase Platform</Logo>
      </div>
      {token && (
        <>
          <Buttons>
            <Icon>
              <BsFillPersonFill onClick={() => setCurrent(!current)} />
            </Icon>
            {current ? <Profile /> : ''}
          </Buttons>
        </>
      )}
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 50px;
  width: 100%;
  top: 0;
  background-color: #fc227a;
  color: white;
  font-size: 20px;
  padding: 0 15px 0 15px;
  div:first-child {
    display: flex;
    div:first-child {
      margin-right: 15px;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div`
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

const Buttons = styled.div`
  padding-right: 20px;
`;
