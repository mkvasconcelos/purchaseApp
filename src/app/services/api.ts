import axios from 'axios';

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
  vendorId: number;
  observation: string;
  listItems: { typeId: string; ccId: string; kcId: string; quantity: number; priceUnit: number }[];
}

const API_URL = process.env.API_URL;

export const login = async (data: LoginData): Promise<{ token: string }> => {
  try {
    const response = await axios.post(`${API_URL}/auth/sign-in`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (data: CreateUserData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/sign-up`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPurchase = async (data: CreatePurchaseData, token: string | null) => {
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

export const readPurchaseById = async (token: string | null, id: string) => {
  try {
    const response = await axios.get(`${API_URL}/purchase/${id}`, {
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

export const readApproval = async (token: string | null) => {
  try {
    const response = await axios.get(`${API_URL}/approval`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to get the purchases');
  }
};

export const readApprovalById = async (token: string | null, id: string) => {
  console.log(token, id);
  try {
    await axios.get(`${API_URL}/approval/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return true;
  } catch {
    return false;
  }
};

export const updateApproval = async (token: string | null, id: string, status: boolean) => {
  const data = { status };
  try {
    const response = await axios.put(`${API_URL}/approval/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error in the approval');
  }
};

export const getNameUser = async (token: string | null) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.name;
  } catch (error) {
    throw new Error('Failed to get the username');
  }
};
