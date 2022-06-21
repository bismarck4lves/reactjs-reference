import api from "services/api";
import { EquipeProps } from "./types_d";

export const fetchEquipes = (search?: string) => {
  const params = search ? { search } : {};
  return api
    .get<EquipeProps[]>("escalas/equipes/", { params })
    .then((res) => res.data);
};

export const retriveEquipes = (id) =>
  api.get<EquipeProps>(`escalas/equipes/${id}/`).then((res) => res.data);

export const destryEquipes = (id: number) =>
  api.delete(`escalas/equipes/${id}/`).then((res) => res.data);

export const updateEquipes = (equipe: EquipeProps) =>
  api.put(`escalas/equipes/${equipe.id}/`, equipe).then((res) => res.data);

export const createEquipes = (payload: EquipeProps) =>
  api.post(`escalas/equipes/`, payload).then((res) => res.data);
