import api from "services/api";
import { TurnosProps } from "./types_d";

export const fetchTurnos = (search?: string) => {
  const params = search ? { search } : {};
  return api
    .get<TurnosProps[]>("escalas/turnos/", { params })
    .then((res) => res.data);
};

export const retriveTurnos = (id) =>
  api.get<TurnosProps>(`escalas/turnos/${id}/`).then((res) => res.data);

export const destryTurnos = (id: number) =>
  api.delete(`escalas/turnos/${id}/`).then((res) => res.data);

export const updateTurnos = (turno: TurnosProps) =>
  api.put(`escalas/turnos/${turno.id}/`, turno).then((res) => res.data);

export const createTurnos = (payload: TurnosProps) =>
  api.post(`escalas/turnos/`, payload).then((res) => res.data);
