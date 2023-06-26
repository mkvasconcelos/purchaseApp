'use client';
import Loading from '@/app/components/Loading';
import Purchase from '@/app/components/Purchase';
import { readPurchase } from '@/app/services/api';
import { PurchaseResumeDate } from '@/app/utils/interfaces';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Home } from '../layout';

export default function HomePage() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const name = typeof window !== 'undefined' ? localStorage.getItem('username') : null;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [listPurchase, setListPurchase] = useState<PurchaseResumeDate[]>([]);
  useEffect(() => {
    setLoading(false);
    const res = readPurchase(token);
    res.then((res) => {
      setListPurchase(res);
    });
    setLoading(true);
  }, [token]);
  if (!token) {
    return router.push('/pages/auth/sign-in');
  }
  if (!loading) {
    return <Loading />;
  }
  return (
    <>
      <Home>
        <div>Hi, {name}</div>
        {listPurchase.length !== 0 ? (
          <Purchase
            id={'ID'}
            requester={'Requester'}
            vendor={'Vendor'}
            status={'Status'}
            createdAt={'Created'}
            updatedAt={'Updated'}
          />
        ) : (
          <div>You do not have any open requests yet.</div>
        )}
        {listPurchase.length !== 0 &&
          listPurchase.map((p) => (
            <Purchase
              key={p.id}
              id={p.id}
              requester={p.requester}
              vendor={p.vendor}
              status={p.status}
              createdAt={p.createdAt}
              updatedAt={p.updatedAt}
            />
          ))}
      </Home>
    </>
  );
}
