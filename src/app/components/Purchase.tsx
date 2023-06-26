import React, { useState } from 'react';
import styled from 'styled-components';
import { PurchaseResumeDate } from '../utils/interfaces';
import { useRouter } from 'next/navigation';

export default function NewPurchase(props: PurchaseResumeDate) {
  const router = useRouter();
  const isSmallScreen = window.innerWidth <= 450;
  return (
    <Container onClick={() => router.push(`/pages/purchase/${props.id}`)}>
      <div>{props.id}</div>
      <div>{props.requester}</div>
      <div>{props.vendor}</div>
      <div>{isSmallScreen && props.status !== 'Status' ? props.status.charAt(0) : props.status}</div>
      <div>{props.createdAt}</div>
      <div>{props.updatedAt}</div>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  align-items: center;
  height: 50px;
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
    text-align: center;
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
  @media (max-width: 450px) {
    div:first-child {
      width: 5%;
    }
    div:nth-child(2) {
      display: none;
    }
    div:nth-child(3) {
      width: 50%;
    }
    div:nth-child(4) {
      width: 10%;
    }
    div:nth-child(5) {
      display: none;
    }
    div:nth-child(6) {
      width: 35%;
    }
  }
`;
