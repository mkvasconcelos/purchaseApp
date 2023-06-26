'use client';

import styled from 'styled-components';
export default function PurchaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <section>{children}</section>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
  height: calc(100vh - 50px);
  background-color: #edf1f2;
  color: #656565;
  span {
    color: black;
  }
  section {
    padding: 10px;
  }
  main:nth-child(1) {
    font-size: 12px;
    background-color: #92969a;
    color: white;
    cursor: default;
  }
  div {
    margin-bottom: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      width: 100%;
      textarea {
        width: 99%;
        height: 80px;
        border-radius: 3px;
        color: black;
      }
    }
    section {
      width: 100%;
    }
    button {
      background-color: #162035ff;
      color: white;
      border: none;
      height: 40px;
      width: 150px;
      border-radius: 3px;
      font-size: 20px;
      cursor: pointer;
    }
  }
  @media (max-width: 450px) {
    form {
      div {
        display: flex;
        flex-direction: column;
      }
      button {
        height: 40px;
        width: 100%;
      }
    }
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  div:first-child {
    font-size: 15px;
    color: black;
  }
  button {
    border: none;
    font-size: 30px;
    cursor: pointer;
  }
`;
