import axios from "axios";
import interceptors from "./interceptors";

const BASE_URL = "http://localhost:4000";
const API_BASE_URL = `${BASE_URL}/api`;

function api({ secured }) {
  const instance = axios.create({ baseURL: API_BASE_URL });

  if (secured) {
    instance.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");
  }

  instance.interceptors.response.use(
    interceptors.response.success,
    interceptors.response.error
  );

  return instance;
}

export default api;
