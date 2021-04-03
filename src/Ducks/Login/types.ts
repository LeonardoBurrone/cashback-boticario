export enum LoginActionTypes {
  LOGIN = 'LOGIN'
}

export type LoginStackParamList = {
  dashboard: undefined;
};

export type LoginAction = {
  payload: {
    email: string;
    password: string;
  };
  type: typeof LoginActionTypes.LOGIN;
};
