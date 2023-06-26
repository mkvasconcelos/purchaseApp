'use client';
import Item from '@/app/components/Item';
import Loading from '@/app/components/Loading';
import { readApprovalById, readPurchaseById, updateApproval } from '@/app/services/api';
import { PurchaseData } from '@/app/utils/interfaces';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { MdCheckCircle, MdCancel } from 'react-icons/md';
import { Button } from '../layout';
import styled from 'styled-components';

export default function Purchase() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [purchase, setPurchase] = useState<PurchaseData>();
  const [button, setButton] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const isSmallScreen = window.innerWidth <= 450;
  useEffect(() => {
    setLoading(false);
    const pathname = window.location.pathname;
    const id = pathname.split('/')[3];
    const response = readPurchaseById(token, id);
    response.then((res) => {
      setPurchase(res);
      setLoading(true);
      if (res.status !== 'Sent') {
        setDisabled(true);
      }
      const approval = readApprovalById(token, id);
      approval.then((res) => {
        setButton(res);
      });
      approval.catch((res) => {
        setButton(res);
      });
    });
    response.catch(() => {
      setLoading(true);
      return router.push('/pages/home');
    });
  }, [token, disabled, router]);
  const handleApproval = async (status: boolean) => {
    setLoading(false);
    const pathname = window.location.pathname;
    const id = pathname.split('/')[3];
    try {
      await updateApproval(token, id, status);
      setDisabled(true);
      setLoading(true);
    } catch (error: any) {
      setDisabled(true);
      setLoading(true);
    }
  };
  const ButtonApprove = styled.button`
    color: ${!disabled ? 'green' : 'gray'};
  `;
  const ButtonReject = styled.button`
    color: ${!disabled ? 'red' : 'gray'};
  `;
  if (!token) {
    return router.push('/pages/auth/sign-in');
  }
  if (!loading) {
    return <Loading />;
  }

  return (
    <>
      <>
        <div>
          <span>Request:</span> {purchase?.id}
        </div>
        <div>
          <span>Requester:</span> {purchase?.requester}
        </div>
        <div>
          <span>Status:</span> {purchase?.status}
        </div>
        <div>
          <span>Description:</span> {purchase?.description}
        </div>
        <div>
          <span>Type:</span> {purchase?.type}
        </div>
        <div>
          <span>Delivery:</span> {purchase?.delivery}
        </div>
        <section>
          <div>
            <Item
              id={0}
              ccId={isSmallScreen ? 'CC' : 'Cost Center'}
              kcId={isSmallScreen ? 'KC' : 'Key Country'}
              priceUnit={'Price Unit'}
              quantity={'Quantity'}
              typeId={'Item'}
            />
          </div>
          {purchase?.listItems.map((i) => (
            <Item
              key={i.id}
              id={i.id}
              ccId={i.ccId}
              kcId={i.kcId}
              priceUnit={`R$ ${i.priceUnit}`}
              quantity={i.quantity}
              typeId={i.typeId}
            />
          ))}
        </section>
        <div>
          <span>Total:</span> R$ {purchase?.totalContract}
        </div>
        <div>
          <span>Vendor:</span> {purchase?.vendor}
        </div>
        <div>
          <span>Start of the contract:</span> {purchase?.startContract}
        </div>
        <div>
          <span>End of the contract:</span> {purchase?.endContract}
        </div>
        <div>
          <span>Observation:</span> {purchase?.observation}
        </div>
        {button && (
          <Button>
            <div>Approved?</div>
            <ButtonApprove
              onClick={() => {
                handleApproval(true);
              }}
              disabled={disabled}
            >
              <MdCheckCircle></MdCheckCircle>
            </ButtonApprove>
            <ButtonReject
              onClick={() => {
                handleApproval(false);
              }}
              disabled={disabled}
            >
              <MdCancel></MdCancel>
            </ButtonReject>
          </Button>
        )}
      </>
    </>
  );
}
