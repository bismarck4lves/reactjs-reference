import api from "services/api";
import { crud } from "utils/http-utils";
import { EquipeProps } from "./types_d";

const service = crud(api, "escalas/equipes");

export default {
  list: (params?): Promise<EquipeProps[]> => {
    return service.list(params).then((res) => res.data);
  },
  update: (id, params) => {
    return service.update(id, params).then((res) => res.data);
  },
  retrive: (id): Promise<EquipeProps> => {
    return service.retrive(id).then((res) => res.data);
  },
  create: (params: EquipeProps) => {
    return service.create(params).then((res) => res.data);
  },
};
