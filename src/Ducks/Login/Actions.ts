// TODO: testar actions
import { AuthenticateAction, LoginAction, LoginActionTypes } from './types';

export const authenticateAction = (): AuthenticateAction => ({
  type: LoginActionTypes.AUTHENTICATE
});

export const loginAction = (payload: { email: string; password: string }): LoginAction => ({
  payload,
  type: LoginActionTypes.LOGIN
});
