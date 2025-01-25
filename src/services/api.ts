import axios from "axios";

const API_URL = "https://servervox.onrender.com/api";

export const sendContactData = async (data: { name: string; email: string; message: string }) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, data);
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw error;
  }
};

export const getConfiguration = async (data: { language: string;}) => {
  try {
    const response = await axios.get(`${API_URL}/getConfiguration?language=${data.language}`);
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw error;
  }
};
