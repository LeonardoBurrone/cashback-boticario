export enum LoginActionTypes {
  LOGIN = 'LOGIN'
}

export type LoginAction = {
  payload: {
    username: string;
    password: string;
  };
  type: typeof LoginActionTypes.LOGIN;
};
