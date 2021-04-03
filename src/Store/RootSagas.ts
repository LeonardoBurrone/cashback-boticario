import { all } from 'redux-saga/effects';

import { balanceSagas } from '../Ducks/Balance/Sagas';
import { dashboardSagas } from '../Ducks/Dashboard/Sagas';
import { loginSagas } from '../Ducks/Login/Sagas';
import { registerSagas } from '../Ducks/Register/Sagas';
import { signUpSagas } from '../Ducks/SignUp/Sagas';

export default function* rootSagas() {
  yield all([balanceSagas, dashboardSagas, loginSagas, registerSagas, signUpSagas]);
}
