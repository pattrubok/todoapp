import axios from "axios";

const protocol = "https://";

const serverAddress = "todoapp-strapi-demo.herokuapp.com/";

const api = {
  get: async (url) => {
    const { data } = await axios.get(`${protocol + serverAddress + url}`);
    return data;
  },
  delete: async (url) => {
    const { data } = await axios.delete(`${protocol + serverAddress + url}`);
    return data;
  },
  post: async (url, obj) => {
    const { data } = await axios.post(`${protocol + serverAddress + url}`, obj);
    return data;
  },
  put: async (url, obj) => {
    const { data } = await axios.put(`${protocol + serverAddress + url}`, obj);
    return data;
  },
  // TODO - если разворачитвать в страпи надо поменять patch на put
};

export { api };
