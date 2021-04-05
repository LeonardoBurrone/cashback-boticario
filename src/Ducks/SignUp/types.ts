export enum SignActionTypes {
  SIGN_UP = 'SIGN_UP'
}

export type SignUpAction = {
  payload: {
    document: string;
    email: string;
    name: string;
    password: string;
  };
  type: typeof SignActionTypes.SIGN_UP;
};
