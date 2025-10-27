import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b337aecbd0b42a297e9525e7ed9845d",
  },
});

export default apiClient;
