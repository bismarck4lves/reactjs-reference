import api from "services/api";
import { crud } from "utils/http-utils";
import { TurnosProps } from "./types_d";

const service = crud(api, "escalas/turnos");

export default {
  list: (params?): Promise<TurnosProps[]> => {
    return service.list(params).then((res) => res.data);
  },
  update: (id, params) => {
    return service.update(id, params).then((res) => res.data);
  },
  retrive: (id): Promise<TurnosProps> => {
    return service.retrive(id).then((res) => res.data);
  },
  create: (params: TurnosProps) => {
    return service.create(params).then((res) => res.data);
  },
};
