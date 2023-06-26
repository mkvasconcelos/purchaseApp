import React from 'react';
import styled from 'styled-components';
import { ApprovalData } from '../utils/interfaces';
import { useRouter } from 'next/navigation';

export default function Approvals(props: ApprovalData) {
  const router = useRouter();
  return (
    <>
      <Container onClick={() => router.push(`/pages/purchase/${props.purchaseId}`)}>
        <div>{props.purchaseId}</div>
        <div>{props.vendor}</div>
        <div>{props.description}</div>
        <div>{props.totalContract !== 'Total' ? `R$ ${parseFloat(props.totalContract).toFixed(2)}` : 'Total'}</div>
        <div>{props.user}</div>
      </Container>
    </>
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
  padding: 0 10px 0 10px;
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
    width: 3%;
  }
  div:nth-child(2) {
    width: 25%;
  }
  div:nth-child(3) {
    width: 42%;
  }
  div:nth-child(4) {
    width: 10%;
  }
  div:nth-child(5) {
    width: 20%;
  }
  @media (max-width: 450px) {
    div:first-child {
      width: 5%;
    }
    div:nth-child(2) {
      width: 50%;
    }
    div:nth-child(3) {
      display: none;
    }
    div:nth-child(4) {
      width: 15%;
    }
    div:nth-child(n + 5) {
      width: 30%;
    }
  }
`;

const Button = styled.div``;
