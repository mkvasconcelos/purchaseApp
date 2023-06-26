'use client';
import React, { useState } from 'react';
import Loading from '../../../components/Loading';
import { createUser } from '../../../services/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function SignupPage() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(true);
  if (token) {
    return router.push('/pages/home');
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(false);
    const body = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    try {
      await createUser(body);
      setLoading(true);
      Swal.fire({
        title: 'User created!',
        icon: 'success',
      });
      router.push('/pages/auth/sign-in');
    } catch (error) {
      Swal.fire({
        title: `${error}`,
        icon: 'error',
      });
    }
    setLoading(true);
  };
  if (!loading) {
    return <Loading />;
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <button type="submit" disabled={!loading}>
          Sign Up
        </button>
      </form>
      <div>
        <Link href="/pages/auth/sign-in">Already have an account? Sign in</Link>
      </div>
    </>
  );
}
