import React, { useState } from 'react';
import styled from 'styled-components';
import { PurchaseResumeDate } from '../utils/interfaces';

export default function Purchase(props: PurchaseResumeDate) {
  return (
    <Container>
      <div>{props.id}</div>
      <div>{props.requester}</div>
      <div>{props.vendor}</div>
      <div>{props.status}</div>
      <div>{props.createdAt}</div>
      <div>{props.updatedAt}</div>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  top: 0;
  background-color: #f4f7fa;
  color: black;
  font-size: 15px;
  padding: 0 20px 0 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
  div {
    display: flex;
    justify-content: center;
  }
  div:first-child {
    width: 5%;
  }
  div:nth-child(2) {
    width: 25%;
  }
  div:nth-child(3) {
    width: 30%;
  }
  div:nth-child(4) {
    width: 10%;
  }
  div:nth-child(n + 5) {
    width: 15%;
  }
`;
