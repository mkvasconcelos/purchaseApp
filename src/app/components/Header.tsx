import React, { useState } from 'react';
import styled from 'styled-components';
import { BiPurchaseTag } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Profile from './Profile';

export default function Header() {
  const router = useRouter();
  const [current, setCurrent] = useState(false);
  const token = localStorage.getItem('token');
  return (
    <Container>
      <Logo onClick={() => router.push('/pages/home')}>
        <Icon>
          <BiPurchaseTag />
        </Icon>
        Purchase Platform
      </Logo>
      {token ? (
        <>
          <Buttons>
            <Icon>
              <BsFillPersonFill onClick={() => setCurrent(!current)} />
            </Icon>
            {current ? <Profile /> : ''}
          </Buttons>
        </>
      ) : (
        ''
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
  font-size: 15px;
  padding: 0 10px 0 10px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div`
  font-size: 15px;
  color: white;
  cursor: pointer;
`;

const Buttons = styled.div``;
