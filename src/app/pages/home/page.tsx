'use client';
import Header from '@/app/components/Header';
import Loading from '@/app/components/Loading';
import Purchase from '@/app/components/Purchase';
import { readAcessory, readPurchase } from '@/app/services/api';
import { PurchaseResumeDate } from '@/app/utils/interfaces';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function HomePage() {
  const token = localStorage.getItem('token');
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [listPurchase, setListPurchase] = useState<PurchaseResumeDate[]>([]);
  useEffect(() => {
    setLoading(false);
    const resAccessory = readAcessory(token);
    const resPurchase = readPurchase(token);
    resAccessory.then((res) => {});
    resAccessory.catch(() => {});
    resPurchase.then((res) => {
      setListPurchase(res);
      setLoading(true);
    });
    resPurchase.catch(() => {
      setLoading(true);
    });
  }, [token]);
  if (!token) {
    return router.push('/pages/sign-in');
  }
  if (!loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header></Header>
      <Home>
        <div></div>
        <Purchase
          id={'ID'}
          requester={'Requester'}
          vendor={'Vendor'}
          status={'Status'}
          createdAt={'Created at'}
          updatedAt={'Updated at'}
        />
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
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
  color: #656565;
`;

const Home = styled.div`
  padding: 10px;
  main:nth-child(2) {
    font-size: 15px;
    background-color: #92969a;
    color: white;
    cursor: default;
  }
`;
