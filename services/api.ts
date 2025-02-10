import axios from 'axios';

const API_URL = 'https://servervox.onrender.com/api';

const API = axios.create({
  baseURL: API_URL,
});

API.interceptors.request.use(
  (config) => {
    config.headers['x-access-token'] =
      'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.tyh-VfuzIxCyGYDlkBA7DfyjrqmSHu6pQ2hoZuFqUSLPNY2N0mpHb3nk5K17HWP_3cYHBw7AhHale5wky6-sVA';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const sendContactData = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await API.post(`/contact`, data);
    return response.data;
  } catch (error) {
    console.error('Error al enviar los datos:', error);
    throw error;
  }
};

export const getConfiguration = async (data: { language: string }) => {
  try {
    const response = await API.get(
      `/getConfiguration?language=${data.language}`
    );
    return response.data;
  } catch (error) {
    console.error('Error al enviar los datos:', error);
    throw error;
  }
};
