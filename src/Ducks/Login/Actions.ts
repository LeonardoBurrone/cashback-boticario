// TODO: testar actions
import { LoginAction, LoginActionTypes } from './types';

export const loginAction = (payload: { email: string; password: string }): LoginAction => ({
  payload,
  type: LoginActionTypes.LOGIN
});
