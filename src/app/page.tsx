'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const token = localStorage.getItem('token');
  const router = useRouter();
  if (!token) {
    return router.push('/pages/auth/sign-in');
  } else {
    return router.push('/pages/home');
  }
}
