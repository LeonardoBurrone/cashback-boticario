// TODO: testar actions
import { SignActionTypes, SignUpAction } from './types';

export const signUpAction = (payload: {
  document: string;
  email: string;
  name: string;
  password: string;
}): SignUpAction => ({
  payload,
  type: SignActionTypes.SIGN_UP
});
