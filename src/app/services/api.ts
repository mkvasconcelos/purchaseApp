import axios, { AxiosResponse } from 'axios';

interface LoginData {
  email: string;
  password: string;
}

interface CreateUserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface CreatePurchaseData {
  type: string;
  delivery: string;
  description: string;
  startContract: string;
  endContract: string;
  contract: string;
  vendorId: number;
  observation: string;
  status: string;
  listItems: { typeId: string; ccId: string; kcId: string; description: string; quantity: number; priceUnit: number }[];
}

const API_URL = 'http://127.0.0.1:4000';

export const login = async (data: LoginData): Promise<{ token: string }> => {
  try {
    const response = await axios.post(`${API_URL}/auth/sign-in`, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to login');
  }
};

export const createUser = async (data: CreateUserData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/sign-up`, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create a user');
  }
};

export const createPurchase = async (data: CreatePurchaseData, token: string) => {
  try {
    const response = await axios.post(`${API_URL}/purchase`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to create a purchase');
  }
};

export const readPurchase = async (token: string | null) => {
  try {
    const response = await axios.get(`${API_URL}/purchase`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to get the purchases');
  }
};

export const readAcessory = async (token: string | null) => {
  try {
    const response = await axios.get(`${API_URL}/accessory`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to get the accessories');
  }
};
