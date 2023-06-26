import React from 'react';
import styled from 'styled-components';

export default function ItemCreate({ children }: { children: React.ReactNode }) {
  return <ContainerItemCreate>{children}</ContainerItemCreate>;
}

const ContainerItemCreate = styled.main`
  display: flex;
  align-items: center;
  height: 30px;
  top: 0;
  background-color: white;
  color: black;
  padding: 5px 10px 0 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  font-size: 10px;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 19%;
    height: 20px;
  }
  div:nth-child(6) {
    width: 5%;
    button {
      border: none;
      background-color: #162035ff;
      color: white;
      border-radius: 100%;
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }
  select,
  input {
    border: none;
    width: 90%;
    text-align: center;
    font-size: 12px;
  }
`;
