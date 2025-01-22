import axios from "axios";

const API_URL = "https://servervox.onrender.com/api"; // URL del backend

export const sendContactData = async (data: { name: string; email: string; message: string }) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, data);
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw error;
  }
};
