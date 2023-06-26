'use client';

import styled from 'styled-components';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  margin-top: 100px;
  * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 15px;
    background-color: white;
    text-decoration: none;
  }
  form {
    input {
      width: 250px;
      height: 40px;
      margin-bottom: 10px;
      padding-left: 10px;
      border-radius: 3px;
      border: 1px solid;
      ::placeholder {
        color: black;
      }
    }
    button {
      width: 100px;
      height: 40px;
      border-radius: 3px;
      background-color: #162035ff;
      border: none;
      color: white;
      margin-bottom: 20px;
      cursor: pointer;
    }
  }
  @media (max-width: 450px) {
    margin-top: 60px;
    width: 100vw;
    form {
      input {
        width: 95vw;
        height: 50px;
      }
      button {
        width: 95vw;
        height: 50px;
      }
    }
  }
`;
