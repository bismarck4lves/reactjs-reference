export enum Steps {
  email = "email",
  codigo = "codigo",
  novaSenha = "novaSenha",
}

export interface RestoreFlowProps {
  onNext: () => any;
}

export interface RestoreFormProps {
  email: string;
  code: string[] ;
  new_password: string;
  confirm_new_password: string;
}

export interface RestoreFormCodeProps extends Omit<RestoreFormProps, 'code'> {
  code: string ;
}
