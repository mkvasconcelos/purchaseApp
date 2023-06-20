import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { ImExit } from 'react-icons/im';

export default function Profile() {
  const router = useRouter();
  return (
    <Container>
      {/* <Top>Mateus Kavamoto Vasconcelos</Top> */}
      <Bottom
        onClick={() => {
          router.push('/pages/sign-in');
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
  /* margin: 10px 0 0 0; */
`;
