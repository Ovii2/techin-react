import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const getAllData = async () => {
  const resp = await axios.get(API_URL);
  return resp.data;
};

export const getOne = async (id) => {
  const resp = await axios.get(`${API_URL}/${id}`);
  return resp.data;
};

// http://localhost:3000/users?_page=1&_per_page=3
export const getAllDataPaginated = async (page, perPage) => {
  const resp = await axios.get(`${API_URL}?_page=${page}&_per_page=${perPage}`);
  return { data: resp.data };
};

//return { data: resp.data, total: resp.headers["x-total-count"] };
