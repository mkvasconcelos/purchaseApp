export interface PurchaseData {
  id: number;
  requesterId: number;
  type: string;
  delivery: string;
  description: string;
  totalContract: number;
  startContract: string;
  endContract: string;
  contract: string;
  vendorId: number;
  observation: string;
  status: string;
  listItems: ItemData[];
}

export interface PurchaseResumeDate {
  id: number | string;
  requester: string;
  vendor: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface ItemData {
  id: number;
  typeId: string;
  ccId: string;
  kcId: string;
  purchaseId: string;
  description: string;
  quantity: number;
  priceUnit: number;
}
