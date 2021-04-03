export enum RegisterActionTypes {
  REGISTER_PURCHASE = 'REGISTER_PURCHASE'
}

export type RegisterPurchaseAction = {
  payload: {
    code: string;
    date: string;
    price: string;
  };
  type: typeof RegisterActionTypes.REGISTER_PURCHASE;
};
