import api from "services/api";

interface SingInProps {
  username: string;
  password: string;
}

interface SingInResponseProps {
  access: string;
  refresh: string;
}
export const postSingIn = (payload: SingInProps) =>
  api
    .post<SingInResponseProps>("authentication/singin/", payload)
    .then((res) => res.data);
