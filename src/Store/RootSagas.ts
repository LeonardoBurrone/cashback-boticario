import { all } from 'redux-saga/effects';

import { dashboardSagas } from '../Ducks/Dashboard/Sagas';
import { loginSagas } from '../Ducks/Login/Sagas';
import { signUpSagas } from '../Ducks/SignUp/Sagas';

export default function* rootSagas() {
  yield all([dashboardSagas, loginSagas, signUpSagas]);
}
