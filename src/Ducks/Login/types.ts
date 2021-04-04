export enum LoginActionTypes {
  AUTHENTICATE = 'AUTHENTICATE',
  AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
  AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export type LoginStackParamList = {
  dashboard: undefined;
  login: undefined;
};

export type AuthenticateAction = {
  type: typeof LoginActionTypes.AUTHENTICATE;
};

export type LoginAction = {
  payload: {
    email: string;
    password: string;
  };
  type: typeof LoginActionTypes.LOGIN;
};

export type LogoutAction = {
  type: typeof LoginActionTypes.LOGOUT;
};

export type RaceReturnType = [
  { type: LoginActionTypes.AUTHENTICATION_ERROR },
  { type: LoginActionTypes.AUTHENTICATION_SUCCESS }
];
