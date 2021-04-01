// TODO: testar actions
import { LoginAction, LoginActionTypes } from './types';

export const loginAction = (payload: { username: string; password: string }): LoginAction => ({
  payload,
  type: LoginActionTypes.LOGIN
});
