import axios from "axios";
import { getOne } from "./get.js";
const API_URL = import.meta.env.VITE_API_URL;

export const deleteData = async (id) => {
  const { userEmail } = await getOne(id);
  const confirmed = window.confirm(`Are you really want to delete user ${userEmail}?`);
  if (!confirmed) return;

  const resp = await axios.delete(`${API_URL}/${id}`);
  return resp.data;
};
