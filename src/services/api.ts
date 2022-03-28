import axios from "axios";
import { normalizeBaseUrl } from "utils/http-utils";

const api = axios.create({
  baseURL: 'https://your-project.com',
    timeout: 5000
});

// Api is a prefix becouse is a convention. Normilize to your project if necessary
api.interceptors.request.use(
    (config) => {
      config.url = normalizeBaseUrl(`/api/${config.url}`)
      return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);

export default api;
