import React from 'react';
import styled from 'styled-components';
import { ImExit } from 'react-icons/im';

export default function Profile() {
  const name = localStorage.getItem('username');
  return (
    <Container>
      <Top>{name}</Top>
      <br></br>
      <Bottom
        onClick={() => {
          window.location.href = '/pages/auth/sign-in';
          localStorage.removeItem('token');
        }}
      >
        <Icon>
          <ImExit />
          Exit
        </Icon>
      </Bottom>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: fit-content;
  width: fit-content;
  top: 50px;
  right: 0px;
  padding: 10px;
  background-color: white;
  color: black;
  font-size: 15px;
  border-radius: 0 0 5px 5px;
  border: 1px solid gray;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Icon = styled.div`
  font-size: 15px;
  cursor: pointer;
`;

const Top = styled.div`
  display: flex;
`;

const Bottom = styled.div`
  display: flex;
`;
