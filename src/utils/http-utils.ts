import { AxiosInstance } from "axios";

export const normalizeBaseUrl = (base_url: string) =>
  base_url[base_url.length - 1] === "/" ? base_url : `${base_url}/`;

export const crud = (service: AxiosInstance, url: string) => ({
  list: (params?) => service.get(`${url}/`, params),
  retrive: (id: number | string) => service.delete(`${url}/${id}/`),
  update: (id: number | string, params) => service.put(`${url}/${id}/`, params),
  create: (params) => service.post(`${url}/`, params),
});
