'use client';
import Loading from '@/app/components/Loading';
import { readApproval } from '@/app/services/api';
import { ApprovalData } from '@/app/utils/interfaces';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Home } from '../layout';
import Approvals from '@/app/components/Approval';

export default function Approval() {
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('username');
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [listApproval, setListApproval] = useState<ApprovalData[]>([]);
  useEffect(() => {
    setLoading(false);
    const res = readApproval(token);
    res.then((res) => {
      setListApproval(res);
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
        {listApproval.length !== 0 ? (
          <Approvals
            purchaseId={'ID'}
            vendor={'Vendor'}
            description={'Description'}
            totalContract={'Total'}
            user={'Requester'}
          />
        ) : (
          <div>You have no pending approvals.</div>
        )}
        {listApproval.length !== 0 &&
          listApproval.map((a) => (
            <Approvals
              key={a.purchaseId}
              purchaseId={a.purchaseId}
              vendor={a.vendor}
              description={a.description}
              totalContract={`${a.totalContract}`}
              user={a.user}
            />
          ))}
      </Home>
    </>
  );
}
