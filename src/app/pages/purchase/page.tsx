'use client';
import ItemCreate from '@/app/components/ItemCreate';
import Loading from '@/app/components/Loading';
import { createPurchase, readAcessory } from '@/app/services/api';
import { Account, ApproverData, ItemNew, VendorData } from '@/app/utils/interfaces';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Purchase() {
  const token = localStorage.getItem('token');
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [vendor, setVendor] = useState<VendorData[]>([]);
  const [approver, setApprover] = useState<ApproverData[]>([]);
  const [costCenter, setCostCenter] = useState<Account[]>([]);
  const [keyCountry, setKeyCountry] = useState<Account[]>([]);
  const [typeItem, setTypeItem] = useState<Account[]>([]);
  const [itemList, setItemList] = useState<ItemNew[]>([]);
  const [body, setBody] = useState({
    type: '',
    delivery: '',
    description: '',
    startContract: '',
    endContract: '',
    vendorId: 0,
    observation: '',
    listItems: itemList,
    approverId: 0,
  });
  useEffect(() => {
    setLoading(false);
    const res = readAcessory(token);
    res.then((res) => {
      setType(res.options.type);
      setDelivery(res.options.delivery);
      setVendor(res.vendors);
      setApprover(res.users);
      setCostCenter(res.costCenters);
      setKeyCountry(res.keyCountries);
      setTypeItem(res.typeItems);
      setLoading(true);
    });
    res.catch(() => {
      setLoading(true);
    });
  }, [token]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number, key: string) => {
    setItemList((prevItemList) => {
      const updatedItemList = [...prevItemList];
      updatedItemList[index] = {
        ...updatedItemList[index],
        [key]: e.target.value,
      };
      return updatedItemList;
    });
  };
  const handleAddRow = () => {
    setItemList((prevItemList) => [
      ...prevItemList,
      {
        typeId: '',
        ccId: '',
        kcId: '',
        quantity: 0,
        priceUnit: 0,
      },
    ]);
  };
  const handleRemoveRow = (index: number) => {
    setItemList((prevItemList) => prevItemList.filter((_, itemIndex) => itemIndex !== index));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(false);
    const newItemList = [...itemList].map((item) => {
      return {
        ...item,
        priceUnit: item.priceUnit * 100,
        quantity: item.quantity * 1,
      };
    });
    const updatedBody = {
      ...body,
      listItems: newItemList,
    };
    try {
      await createPurchase(updatedBody, token);
      router.push('/pages/home');
    } catch (error: any) {}
    setLoading(true);
  };
  if (!token) {
    return router.push('/pages/auth/sign-in');
  }
  if (!loading) {
    return <Loading />;
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <span>
            <label>Description: </label>
          </span>
          <textarea
            placeholder=""
            value={body.description}
            onChange={(e) => setBody((prevBody) => ({ ...prevBody, description: e.target.value }))}
          ></textarea>
        </div>
        <div>
          <span>
            <label>Type: </label>
          </span>
          <select value={body.type} onChange={(e) => setBody((prevBody) => ({ ...prevBody, type: e.target.value }))}>
            <option value=""></option>
            {Object.keys(type).map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span>
            <label>Delivery: </label>
          </span>
          <select
            value={body.delivery}
            onChange={(e) => setBody((prevBody) => ({ ...prevBody, delivery: e.target.value }))}
          >
            <option value=""></option>
            {Object.keys(delivery).map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span>
            <label>Start Contract: </label>
          </span>
          <input
            type="date"
            placeholder=""
            value={body.startContract}
            onChange={(e) => setBody((prevBody) => ({ ...prevBody, startContract: e.target.value }))}
          ></input>
        </div>
        <div>
          <span>
            <label>End Contract: </label>
          </span>
          <input
            type="date"
            placeholder=""
            value={body.endContract}
            onChange={(e) => setBody((prevBody) => ({ ...prevBody, endContract: e.target.value }))}
          ></input>
        </div>
        <div>
          <span>
            <label>Vendor: </label>
          </span>
          <select
            value={body.vendorId}
            onChange={(e) => setBody((prevBody) => ({ ...prevBody, vendorId: parseInt(e.target.value) }))}
          >
            <option value=""></option>
            {vendor.map((i) => (
              <option key={i.id} value={i.id}>
                {i.name} - {i.fiscalTaxId}
              </option>
            ))}
          </select>
        </div>
        <section>
          <ItemCreate>
            <div>Cost Center</div>
            <div>Key Country</div>
            <div>Item</div>
            <div>Quantity</div>
            <div>Price Unit</div>
            <div>
              <button onClick={handleAddRow}>+</button>
            </div>
          </ItemCreate>
          {itemList.map((item, index) => (
            <ItemCreate>
              <div>
                <select value={item.ccId} onChange={(e) => handleChange(e, index, 'ccId')}>
                  <option value=""></option>
                  {costCenter.map((i) => (
                    <option key={i.code} value={i.code}>
                      {i.name} - {i.code}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select value={item.kcId} onChange={(e) => handleChange(e, index, 'kcId')}>
                  <option value=""></option>
                  {keyCountry.map((i) => (
                    <option key={i.code} value={i.code}>
                      {i.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select value={item.typeId} onChange={(e) => handleChange(e, index, 'typeId')}>
                  <option value=""></option>
                  {typeItem.map((i) => (
                    <option key={i.code} value={i.code}>
                      {i.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="number"
                  min={0}
                  value={item.quantity}
                  onChange={(e) => handleChange(e, index, 'quantity')}
                ></input>
              </div>
              <div>
                <input
                  type="number"
                  min={0}
                  step={0.01}
                  value={item.priceUnit}
                  onChange={(e) => handleChange(e, index, 'priceUnit')}
                ></input>
              </div>
              <div>
                <button onClick={() => handleRemoveRow(index)}>-</button>
              </div>
            </ItemCreate>
          ))}
        </section>
        <div>
          <span>
            <label>Observation: </label>
          </span>
          <textarea
            value={body.observation}
            onChange={(e) => setBody((prevBody) => ({ ...prevBody, observation: e.target.value }))}
          ></textarea>
        </div>
        <div>
          <span>
            <label>Approver: </label>
          </span>
          <select
            value={body.approverId}
            onChange={(e) => setBody((prevBody) => ({ ...prevBody, approverId: parseInt(e.target.value) }))}
          >
            <option value=""></option>
            {approver.map((i) => (
              <option key={i.id} value={i.id}>
                {i.email}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={!loading}>
          Send
        </button>
      </form>
    </>
  );
}
