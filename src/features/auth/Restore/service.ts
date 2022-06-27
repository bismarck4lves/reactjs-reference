import api from "services/api";
import { RestoreFormCodeProps, RestoreFormProps } from "./types_d";

export const restoreService = {
  sendCodeVerification({ email }: RestoreFormProps) {
    return api.post("authentication/restore/password/send_code/", { email });
  },
  validateCode({ email, code }: RestoreFormCodeProps) {
    return api.post("authentication/restore/password/validate_code/", {
      email,
      code
    });
  },
  newPassowd(form: RestoreFormCodeProps) {
    return api.post("authentication/restore/password/new_password/", form);
  },
};
