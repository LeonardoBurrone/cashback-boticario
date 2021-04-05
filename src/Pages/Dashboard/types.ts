import { Purchase } from '../../Ducks/Dashboard/types';

export type MockState = {
  balance: {
    balance: string;
    balanceError: boolean;
  };
  dashboard: {
    fetchPurchasesError: boolean;
    purchases: Purchase[];
  };
};
