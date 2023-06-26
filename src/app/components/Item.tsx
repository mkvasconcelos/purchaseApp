import React, { useState } from 'react';
import styled from 'styled-components';
import { ItemData } from '../utils/interfaces';

export default function Item(props: ItemData) {
  return (
    <ContainerItem>
      <div>{props.ccId}</div>
      <div>{props.kcId}</div>
      <div>{props.typeId}</div>
      <div>{props.quantity}</div>
      <div>{props.priceUnit}</div>
    </ContainerItem>
  );
}

const ContainerItem = styled.main`
  display: flex;
  align-items: center;
  height: 30px;
  top: 0;
  background-color: white;
  color: black;
  padding: 5px 10px 0 10px;
  border-radius: 10px;
  font-size: 10px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    font-size: 12px;
    height: 20px;
  }
`;
