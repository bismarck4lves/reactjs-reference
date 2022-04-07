import axios from "axios";
import { definitions } from "utils/environment";
import { normalizeBaseUrl } from "utils/http-utils";

const api = axios.create({
  baseURL: definitions.api_url,
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
