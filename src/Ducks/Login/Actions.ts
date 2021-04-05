import { AuthenticateAction, LoginAction, LoginActionTypes, LogoutAction } from './types';

export const authenticateAction = (): AuthenticateAction => ({
  type: LoginActionTypes.AUTHENTICATE
});

export const loginAction = (payload: { email: string; password: string }): LoginAction => ({
  payload,
  type: LoginActionTypes.LOGIN
});

export const logoutAction = (): LogoutAction => ({
  type: LoginActionTypes.LOGOUT
});
