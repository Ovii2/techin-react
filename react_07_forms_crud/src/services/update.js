import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const updateData = async (id, data) => {
  const resp = await axios.patch(`${API_URL}/${id}`, data);
  return resp.data;
};
