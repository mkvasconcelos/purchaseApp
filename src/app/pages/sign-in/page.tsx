'use client';
import React, { useState } from 'react';
import Loading from '../../components/Loading';
import { login } from '../../services/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header';
import styled from 'styled-components';

export default function SigninPage() {
  const token = localStorage.getItem('token');
  const router = useRouter();
  if (token) {
    return router.push('/pages/home');
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(false);
    const body = {
      email: email,
      password: password,
    };
    try {
      const response = await login(body);
      localStorage.setItem('token', response.token);
      setLoading(true);
      router.push('/pages/home');
    } catch (error: any) {
      if (error.response?.status === 401) {
        alert('E-mail or password invalid!');
      }
    }
    setLoading(true);
  };
  if (!loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Header />
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="email" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit" disabled={!loading}>
            Sign In
          </button>
        </form>
        <Link href="/pages/sign-up">First time? Create an account!</Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  margin-top: 50px;
  background-color: #151515;
  color: #ffff;
  /* font-family: 'Passion One', cursive; */
  /* @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  } */
`;

// const LogoContainer = styled.div`
//   display: flex;
//   flex-direction: column;

//   justify-content: center;
//   width: 450px;

//   margin-left: 10%;

//   @media (max-width: 900px) {
//     flex-direction: column;
//     align-items: center;
//     margin: 0;

//     height: 30%;
//     width: 100%;
//   }

//   > h1 {
//     font-size: 106px;
//     @media (max-width: 900px) {
//       font-size: 76px;
//     }
//   }
//   > p {
//     font-size: 43px;
//     font-weight: 700;
//     font-family: "Oswald", sans-serif;

//     @media (max-width: 900px) {
//       font-size: 23px;
//       width: 65%;

//       text-align: center;
//     }
//   }
// `;
// const LoginContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   width: 40%;

//   justify-content: center;
//   align-items: center;

//   @media (max-width: 900px) {
//     width: 100%;
//     height: 70%;

//     justify-content: flex-start;
//   }

//   > form {
//     display: flex;
//     flex-direction: column;
//     width: 80%;

//     @media (max-width: 900px) {
//       width: 90%;

//       margin-top: 30px;
//     }

//     > input {
//       width: 100%;
//       height: 65px;
//       margin-bottom: 15px;

//       font-family: "Oswald", sans-serif;
//       font-size: 27px;
//       font-weight: 700;
//       color: #9f9f9f;

//       padding: 0 15px;

//       border: none;
//       border-radius: 6px;

//       @media (max-width: 900px) {
//         height: 55px;
//         font-size: 22px;
//       }
//     }

//     > button {
//       font-family: "Oswald", sans-serif;
//       font-size: 27px;
//       font-weight: 700;
//       color: #ffff;

//       display: flex;
//       justify-content: center;
//       align-items: center;

//       width: 100%;
//       height: 65px;

//       border: none;
//       border-radius: 6px;

//       cursor: pointer;
//       background-color: #1877f2;

//       @media (max-width: 900px) {
//         height: 55px;
//         font-size: 22px;
//       }
//     }
//   }

//   > a {
//     font-family: "Lato", sans-serif;
//     font-size: 20px;
//     color: #ffff;
//     margin-top: 20px;
//     text-decoration: none;

//     border-bottom: 1px #ffff solid;
//   }
//   background-color: #333333;
// `;
