export interface PurchaseData {
  id: number;
  requester: string;
  type: string;
  delivery: string;
  description: string;
  totalContract: number;
  startContract: string;
  endContract: string;
  vendor: string;
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

export interface ApprovalData {
  purchaseId: number | string;
  vendor: string;
  description: string;
  totalContract: string;
  user: string;
}

export interface ItemData {
  id: number;
  typeId: string;
  ccId: string;
  kcId: string;
  quantity: number | string;
  priceUnit: number | string;
}

export type ItemNew = Omit<ItemData, 'id' | 'quantity' | 'priceUnit'> & {
  quantity: number;
  priceUnit: number;
};

export type PurchaseNew = Omit<PurchaseData, 'id' | 'requester' | 'status' | 'totalContract' | 'listItems'> & {
  vendorId: number;
  listItems: ItemNew[];
};

export interface VendorData {
  id: number;
  name: string;
  fiscalTaxId: string;
}

export interface ApproverData {
  id: number;
  name: string;
  email: string;
}

export interface Account {
  code: string;
  name: string;
}
