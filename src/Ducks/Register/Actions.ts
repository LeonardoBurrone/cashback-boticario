import { RegisterActionTypes, RegisterPurchaseAction } from './types';

export const registerPurchaseAction = (payload: {
  code: string;
  date: string;
  price: string;
}): RegisterPurchaseAction => ({
  payload,
  type: RegisterActionTypes.REGISTER_PURCHASE
});
